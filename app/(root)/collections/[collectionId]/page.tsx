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
      <div className='max-w-7xl w-full mx-auto px-10 py-5 text-white z-10'>
         <div className='flex flex-col flex-center gap-8'>
            <p className='font-sedgwick-ave-display text-heading1-bold'>
               {collectionDetails.title}
            </p>
            <div className='p-4 bg-black/10'>
               <p className='text-body-medium text-center leading-relaxed'>
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
