import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Solis Engineering - Solar Energy Solutions',
  description: 'Leading the renewable energy revolution with innovative solar solutions and cutting-edge engineering expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white antialiased overflow-x-hidden`}>
        <div className="relative w-full overflow-x-hidden">
          <Navbar />
          <main className="relative w-full overflow-x-hidden pt-16 md:pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 