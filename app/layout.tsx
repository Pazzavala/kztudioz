import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
            <body className={`${inter.className} relative`}>{children}</body>
        </html>
    );
}
