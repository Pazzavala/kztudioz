import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import ActiveSectionContextProvider from '@/context/active-section-context';
import {
    Inter,
    Montserrat,
    Calistoga,
    Permanent_Marker,
    Luckiest_Guy,
    Itim,
    Molle,
    Sedgwick_Ave_Display,
    Signika,
    Ceviche_One,
} from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const itim = Itim({ weight: '400', subsets: ['latin'] });
const calistoga = Calistoga({ weight: '400', subsets: ['latin'] });
const permanent_Marker = Permanent_Marker({
    weight: '400',
    subsets: ['latin'],
});
const luckiest_Guy = Luckiest_Guy({ weight: '400', subsets: ['latin'] });
const molle = Molle({ weight: '400', subsets: ['latin'] });
const signika = Signika({ weight: '400', subsets: ['latin'] });
const ceviche = Ceviche_One({ weight: '400', subsets: ['latin'] });
const sedgwick_Ave_Display = Sedgwick_Ave_Display({
    weight: '400',
    subsets: ['latin'],
});

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
                className={`${sedgwick_Ave_Display.className} relative text-gray-950 pt-28`}
            >
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
