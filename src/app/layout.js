import { Provider } from '@/components/ui/provider';
import { Contact, Footer } from '@/layouts';
import { getMetadata } from '@/utils/meta-data';
import { Inter } from 'next/font/google';
import './globals.css';

const fontFamily = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata = getMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={fontFamily.className}>
        <Provider>
          {children}
          <Footer />
          <Contact />
        </Provider>
      </body>
    </html>
  );
}
