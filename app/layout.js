import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shivam - Portfolio",
  description: "Interactive portfolio built like a terminal and an IDE. Explore skills, projects, and real-time coding data.",
  openGraph: {
    title: "Shivam - Portfolio",
    description: "A developer portfolio styled like a terminal and an IDE with live data and goals.",
    url: "https://shivamhere.fyi",
    siteName: "Shivam Portfolio",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Shivam - Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam - Portfolio",
    description: "Interactive terminal-style developer portfolio.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shivam - Web3 Developer Portfolio</title>
        <meta name="description" content="Frontend + Web3 Specialist" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ overflowX: "hidden", minHeight: "100vh" }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
