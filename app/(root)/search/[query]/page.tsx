import ProductCard from '@/components/product-card';
import { getSearchedProducts } from '@/lib/actions/actions';
import React from 'react';

export default async function SearchPage({ params }: { params: { query: string } }) {
   const searchProducts = await getSearchedProducts(params.query);

   const decodedQuery = decodeURIComponent(params.query);

   return (
      <div className='px-10 py-5'>
         <p className='text-heading3-bold my-10'>Search result for {decodedQuery}</p>
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
