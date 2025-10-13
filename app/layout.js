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
  keywords: [
    "Web3 Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Blockchain",
    "Solidity",
    "Portfolio",
    "Frontend",
    "Smart Contracts",
    "Terminal Portfolio",
    "Shivam Nilay",
    "Gamified Portfolio",
    "Award Winning Developer"
  ],
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
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="preconnect" href="https://api.coingecko.com" />
        <link rel="preconnect" href="https://ipapi.co" />
        <link rel="preconnect" href="https://wttr.in" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://api.coingecko.com" />
        <link rel="dns-prefetch" href="https://ipapi.co" />
        <link rel="dns-prefetch" href="https://wttr.in" />
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
