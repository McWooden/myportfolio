import type { Metadata } from "next";
import { Montserrat, Poppins, Courgette } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
  display: 'swap', // Optional: Improves loading by swapping in fallback first
});

export const courgette = Courgette({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-courgette',
});

export const metadata: Metadata = {
  title: {
    default: 'Huddin | KardusDeveloper',
    template: '%s | Huddin | KardusDeveloper',
  },
  description: 'My Personal Portfolio.',
  keywords: ['nextjs', 'app', 'portfolio', 'programmer magelang', 'web developer magelang'],
  authors: [{ name: 'Sholahuddin Ahmad' }],
  creator: 'Sholahuddin Ahmad',
  publisher: 'KardusDeveloper',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kardusdeveloper.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Huddin | KardusDeveloper',
    description: "A journey of code, growth, and creativity. Follow Sholahuddin Ahmad — aka KardusDeveloper — as he crafts ideas into digital experiences. #vibeCodingAndNaturalLearning",
    url: 'https://kardusdeveloper.vercel.app',
    siteName: 'Your App',
    images: [
      {
        url: '/huddin.webp',
        width: 400,
        height: 400,
        alt: 'Your App Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huddin | KardusDeveloper',
    description: "A journey of code, growth, and creativity. Follow Sholahuddin Ahmad — aka KardusDeveloper — as he crafts ideas into digital experiences. #vibeCodingAndNaturalLearning",
    images: ['/twitter-image.jpg'],
    creator: '@halohuddin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-token',
    yahoo: 'your-yahoo-verification-token',
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable} ${courgette.variable} antialiased flex flex-col`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}