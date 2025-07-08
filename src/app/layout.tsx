import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledComponentsRegistry from '@/lib/registry';
import { Providers } from './providers';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { Banner } from '@/components/Banner';
import GlobalStyle from '@/styles/GlobalStyles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Festava Live',
  description: 'A Next.js version of the Festava Live template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyle />
            <Header />
            <Navbar />
            <main>{children}</main>
            <Banner />
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
