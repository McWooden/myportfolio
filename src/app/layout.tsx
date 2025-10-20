import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap', // Optional: Improves loading by swapping in fallback first
});

export const metadata: Metadata = {
  title: {
    default: 'Huddin | KardusDeveloper',
    template: '%s | Huddin',
  },
  description: 'My Personal Portfolio.',
  keywords: ['nextjs', 'app', 'example'],
  authors: [{ name: 'Sholahuddin Ahmad' }],
  creator: 'Sholahuddin Ahmad',
  publisher: 'KardusDeveloper',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Your App',
    description: 'A description of your app goes here.',
    url: 'https://yourdomain.com',
    siteName: 'Your App',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your App Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your App',
    description: 'A description of your app goes here.',
    images: ['https://yourdomain.com/twitter-image.jpg'],
    creator: '@yourtwitterhandle',
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
    yandex: 'your-yandex-verification-token',
    yahoo: 'your-yahoo-verification-token',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} antialiased flex flex-col`}>
        {children}
      </body>
    </html>
  );
}