import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Drap and Drop',
  description: 'A simple drag and drop example',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
