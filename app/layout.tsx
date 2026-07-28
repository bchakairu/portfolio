import type { Metadata } from 'next';
import { Unbounded, Manrope } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import ScrollProgress from '@/components/ScrollProgress';
import './globals.css';

const display = Unbounded({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '800'],
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Bill Chakairu',
  description:
    'Portfolio of Bill Chakairu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-ink font-body text-paper antialiased">
        <ScrollProgress />
        <Cursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
