import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from '@/components/header/Header';
import './globals.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Anderson Carvalho',
  description: 'Personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
