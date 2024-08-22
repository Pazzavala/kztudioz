import ProductCard from '@/components/ProductCard';
import { getCollectionDetails } from '@/lib/actions/actions';
import { ProductType } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

export default async function CollectionDetails({
   params,
}: {
   params: { collectionId: string };
}) {
   const collectionDetails = await getCollectionDetails(params.collectionId);

   console.log(collectionDetails);
   return (
      <div className='px-10 py-5 text-gray-700 flex flex-col items-center gap-8'>
         <Image
            src={collectionDetails.media[0]}
            width={1500}
            height={1000}
            alt={collectionDetails.title}
            className='w-full h-[400px] object-cover rounded-xl'
         />
         <p className='text-heading3-bold'>{collectionDetails.title}</p>
         <p className='text-body-medium text-center max-w-[900px]'>
            {collectionDetails.description}
         </p>
         <div className='flex flex-wrap gap-16 mx-auto '>
            {collectionDetails.products.map((product: ProductType) => (
               <ProductCard key={product._id} product={product} />
            ))}
         </div>
      </div>
   );
}

export const dynamic = 'force-dynamic';
