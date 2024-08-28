import About from '@/components/about';
import Collections from '@/components/collections';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import { getCollections } from '@/lib/actions/actions';

export default async function Home() {
   const collections = await getCollections();

   return (
      <main className='flex flex-col items-center'>
         <Hero collections={collections} />
         <Collections collections={collections} />
         <About />
         <Contact />
      </main>
   );
}

export const dynamic = 'force-dynamic';
