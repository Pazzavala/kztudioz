import ProductCard from '@/components/ProductCard';
import { getCollectionDetails, getProductDetails } from '@/lib/actions/actions';
import { ProductType } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function CollectionDetails({
   params,
}: {
   params: { collectionId: string };
}) {
   const collectionDetails = await getCollectionDetails(params.collectionId);

   return (
      <div className='max-w-7xl w-full mx-auto px-10 py-5 text-gray-700 dark:text-white'>
         <div className='flex flex-col flex-center gap-8'>
            {' '}
            <Image
               src={collectionDetails.media[0]}
               width={1500}
               height={1000}
               alt={collectionDetails.title}
               className='w-full h-[400px] object-cover rounded-xl'
            />
            <p className='text-heading3-bold'>{collectionDetails.title}</p>
            <p className='text-body-medium text-center leading-relaxed'>
               {collectionDetails.description}
            </p>
            <div className='flex flex-wrap flex-center gap-16 mx-auto '>
               {collectionDetails.products.map((product: ProductType) => {
                  return <ProductCard key={product._id} product={product} />;
               })}
            </div>
         </div>
      </div>
   );
}
