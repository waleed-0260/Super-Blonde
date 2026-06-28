import type { Metadata } from 'next';
import { Fraunces, Jost, Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import { Toaster } from '@/components/ui/sonner';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz'],
});

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Super Blonde — Chic, Contemporary All-Day Dining',
  description:
    'Chic, contemporary all-day dining at The Grounds of Serai, KLGCC Mall Level 4. Golf course views, finest ingredients, exceptional brunch.',
  openGraph: {
    title: 'Super Blonde by Serai Group',
    description: 'Chic, Contemporary. All-Day. KLGCC Mall, Level 4, Bukit Kiara KL.',
    siteName: 'Super Blonde',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jost.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-chalk text-graphite">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartSidebar />
          <Toaster
            position="bottom-left"
            toastOptions={{
              style: {
                background: '#1C1C1A',
                color: '#FAFAF7',
                border: '1px solid #E5E0D5',
                fontFamily: 'var(--font-jost)',
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
