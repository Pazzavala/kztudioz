import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Inter, Montserrat, Itim } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const itim = Itim({ weight: '400', subsets: ['latin'] });

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
            <body
                className={`${montserrat.className} relative text-gray-950 pt-28`}
            >
                <Background />
                <ActiveSectionContextProvider>
                    <Header />
                    {children}
                    <Footer />
                    <Toaster position='top-right' />
                </ActiveSectionContextProvider>
            </body>
        </html>
    );
}
