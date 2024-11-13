import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import { Inter, Montserrat, Itim } from 'next/font/google';
import Providers from '../providers';

const montserrat = Montserrat({ subsets: ['latin'] });
// const inter = Inter({ subsets: ['latin'] });
// const itim = Itim({ weight: '400', subsets: ['latin'] });

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
         <head>
            <script src='http://localhost:8097' />
         </head>
         <body className={`${montserrat.className} relative text-gray-950`}>
            <Providers>
               {/* <Background /> */}
               <div className='flex flex-col min-h-screen'>
                  <Header />
                  <div className='flex-grow relative z-10'>{children}</div>
                  <Footer />
               </div>
            </Providers>
         </body>
      </html>
   );
}
