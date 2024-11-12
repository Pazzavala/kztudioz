import Gallery from '@/components/gallery';
import ProductCard from '@/components/product-card';
import ProductInfo from '@/components/product-info';
import { getProductDetails, getRelatedProducts } from '@/lib/actions/actions';
import { ProductType } from '@/lib/types';

export const dynamic = 'force-dynamic';

const ProductDetails = async ({ params }: { params: { productId: string } }) => {
   const productDetails = await getProductDetails(params.productId);
   const relatedProducts = await getRelatedProducts(params.productId);

   return (
      <>
         <div className='max-w-[120rem] w-full mx-auto py-10 px-5 flex flex-col gap-10 2xl:gap-20 flex-center lg:items-start lg:flex-row'>
            <Gallery productMedia={productDetails.media} />
            <ProductInfo productInfo={productDetails} />
         </div>

         <div className='flex flex-col flex-center px-10 py-5 max-md:px-3'>
            <p className='text-[2rem] text-heading3-bold text-gray-800'>
               Related Products
            </p>
            <div className='flex flex-wrap flex-center gap-16 mx-auto mt-8'>
               {relatedProducts?.map((product: ProductType) => (
                  <ProductCard key={product._id} product={product} />
               ))}
            </div>
         </div>
      </>
   );
};

export default ProductDetails;
