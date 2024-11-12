import ProductCard from '@/components/product-card';
import { getSearchedProducts } from '@/lib/actions/actions';
import React from 'react';

export default async function SearchPage({ params }: { params: { query: string } }) {
   const searchProducts = await getSearchedProducts(params.query);

   const decodedQuery = decodeURIComponent(params.query);

   return (
      <div className='max-w-[90rem] w-full mx-auto px-10 py-5'>
         <p className='font-sedgwick-ave-display text-[3rem] text-white mb-10 text-center'>
            Search result for {decodedQuery}
         </p>
         {!searchProducts ||
            (searchProducts.length === 0 && (
               <p className='text-body-bold my-5'>No results found</p>
            ))}
         <div className=' flex flex-wrap justify-center gap-16'>
            {searchProducts?.map((product: any) => (
               <ProductCard key={product._id} product={product} />
            ))}
         </div>
      </div>
   );
}

export const dynamic = 'force-dynamic';
