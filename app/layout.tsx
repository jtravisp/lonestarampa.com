import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Lone Star AMPA',
  description: '36th ID Band – AMPA resources for every instrument',

  /** ────────  FAVICONS & WEB MANIFEST  ──────── **/
  icons: {
    icon: [
      // Generic browser icons
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      // Android (optional but nice)
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    // iOS / iPadOS
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col items-center`}
        style={{
          background: '#f5f5f5 url("/paper.svg") top repeat',
          color: '#1f2937'
        }}
      >
        <Header />

        {/* CENTERED CONTENT */}
        <main className="mx-auto max-w-5xl px-8 py-10 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
