import About from '@/components/about';
import Collections from '@/components/collections';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import { getCollectionDetails, getCollections } from '@/lib/actions/actions';

export default async function Home() {
   const collections = await getCollections();
   // const collectionDetails = await getCollectionDetails(collections[0]._id);

   return (
      <main className='flex flex-col items-center'>
         {/* collectionDetails={collectionDetails} */}
         <Hero collections={collections} />
         <Collections collections={collections} />
         <About />
         <Contact />
      </main>
   );
}

export const dynamic = 'force-dynamic';
