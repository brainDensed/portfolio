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
  title: "Shivam - Elite Web3 Developer | Interactive Terminal Portfolio",
  description:
    "🚀 Revolutionary terminal-style portfolio by award-winning Web3 developer. Interactive command-line experience showcasing React, Next.js, and blockchain expertise. Hire top 1% developer talent.",
  keywords: [
    "Web3 Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Expert",
    "Blockchain Developer",
    "Solidity Developer",
    "Interactive Portfolio",
    "Terminal Portfolio",
    "Frontend Developer",
    "Smart Contracts",
    "Shivam",
    "Gamified Portfolio",
    "Cyberpunk Portfolio",
    "Matrix Portfolio",
    "Innovative Developer",
    "Top Developer",
    "Elite Developer",
    "Hackathon Winner",
    "Darbhanga Developer",
    "Bihar Developer",
    "India Developer",
    "Remote Developer",
    "Freelance Developer",
  ],
  openGraph: {
    title:
      "Shivam - Elite Web3 Developer | Revolutionary Terminal Portfolio",
    description:
      "🚀 Experience the future of developer portfolios! Interactive terminal interface with Matrix effects, 3D holographic cards, and gamified skill trees. Award-winning Web3 developer available for hire.",
    url: "https://shivamhere.fyi",
    siteName: "Shivam - Elite Developer Portfolio",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Shivam - Interactive Terminal Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🚀 Revolutionary Terminal Portfolio by Elite Web3 Developer",
    description:
      "Interactive command-line portfolio with Matrix effects & 3D animations. Award-winning developer showcasing cutting-edge skills. #Web3 #React #NextJS",
    images: ["/images/portfolio-preview.png"],
    creator: "@shivamnilay",
    site: "@shivamnilay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ❌ Remove manual <title> and <meta> tags — Next.js will handle them via metadata */}
      <head>
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
