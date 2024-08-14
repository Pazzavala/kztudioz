import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kztudioz - Store Auth',
    description: 'Next.js 14 Kztudioz Store',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={inter.className}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
