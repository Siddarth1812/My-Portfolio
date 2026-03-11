import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { SectionIndicator } from '@/components/SectionIndicator';
import './globals.css';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm' });

export const metadata: Metadata = {
  title: 'Siddarth Usulkar | Biomedical Informatics & Data Science',
  description: 'Portfolio of Siddarth Usulkar - MS Biomedical Informatics, Clinical Research, Data Analytics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased relative font-sans">
        <AnimatedBackground />
        <div className="relative z-10">{children}</div>
        <SectionIndicator />
      </body>
    </html>
  );
}
