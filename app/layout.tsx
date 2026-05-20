import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Villa Capo Grillo Cottage | Casa vacanze a Vulcano',
  description: 'Villa panoramica a Vulcano, Isole Eolie, con terrazza, tre camere, Wi-Fi, aria condizionata e parcheggio privato.',
  openGraph: {
    title: 'Villa Capo Grillo Cottage',
    description: 'Una casa vacanze panoramica sull’isola di Vulcano, ideale per relax, mare e tramonti eoliani.',
    type: 'website',
    locale: 'it_IT'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
