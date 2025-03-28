import ProductCard from '@/components/product-card';
import { getCollectionDetails } from '@/lib/actions/actions';
import { ProductType } from '@/lib/types';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function CollectionDetails({
   params,
}: {
   params: { collectionId: string };
}) {
   const collectionDetails = await getCollectionDetails(params.collectionId);

   return (
      <div className='max-w-[110rem] w-full mx-auto px-10 py-5 lg:pt-0 lg:pb-10 z-10'>
         <div className='flex flex-col flex-center gap-8'>
            <p className='font-sedgwick-ave-display text-white text-center text-heading1-bold'>
               {collectionDetails.title}
            </p>
            <div className='p-4 bg-gray-50/20 text-gray-800 rounded-lg'>
               <p className='text-sm sm:text-lg text-center leading-relaxed'>
                  {collectionDetails.description}
               </p>
            </div>

            <div className='flex flex-wrap flex-center gap-16 mx-auto '>
               {collectionDetails.products.map((product: ProductType) => {
                  return <ProductCard key={product._id} product={product} />;
               })}
            </div>
         </div>
      </div>
   );
}
