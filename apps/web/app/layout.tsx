import type { Metadata } from 'next';
import { DM_Sans, EB_Garamond } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
});

export const metadata: Metadata = {
  title: 'Habit Tracker',
  description: 'Track your habits effectively',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${dmSans.variable} ${ebGaramond.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
