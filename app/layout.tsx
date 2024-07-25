import type { Metadata } from 'next';
import { Knewave, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import ActiveSectionContextProvider from '@/context/active-section-context';

const knewave = Knewave({ weight: '400', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "Karla's | Kztudioz Webpage",
    description:
        'Karla is a custom sticker maker who has diffrent sticker collections.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} relative text-gray-950 pt-28`}>
                <Background />
                <ActiveSectionContextProvider>
                    <Header />
                    {children}
                    <Footer />
                </ActiveSectionContextProvider>
            </body>
        </html>
    );
}
