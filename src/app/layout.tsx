import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '@/components/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deployed Strategy Dashboard',
  description: 'Dashboard for viewing deployed strategies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="flex">
            <main className="flex-1 bg-gray-50 min-h-screen pt-[65px]">{children}</main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
