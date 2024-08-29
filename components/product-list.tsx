import { getProducts } from '@/lib/actions/actions';
import { ProductType } from '@/lib/types';
import React from 'react';
import ProductCard from './product-card';

export default async function ProductList() {
   const products = await getProducts();
   return (
      <section className='w-full flex justify-center'>
         <div className='max-w-7xl w-full flex flex-col items-center gap-10 py-8'>
            <h2 className='text-lg font-bold'>Products</h2>
            {!products || products.length === 0 ? (
               <p className='text-base font-bold'>No Products Found</p>
            ) : (
               <div className='flex flex-wrap justify-center gap-16'>
                  {products.map((product: ProductType) => (
                     <ProductCard key={product._id} product={product} />
                  ))}
               </div>
            )}
         </div>
      </section>
   );
}
