import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'Drag and Drop',
  description: 'A simple drag and drop example',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={plusJakartaSans.variable}>
      <body className='h-screen flex flex-col overflow-hidden'>
        <Header />
        {children}
      </body>
    </html>
  );
}
