import Gallery from '@/components/Gallery';
import ProductInfo from '@/components/ProductInfo';
import { getProductDetails } from '@/lib/actions/actions';

export default async function ProductDetails({
   params,
}: {
   params: { productId: string };
}) {
   const productDetails = await getProductDetails(params.productId);

   return (
      <div className='flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center'>
         <Gallery productMedia={productDetails.media} />
         <ProductInfo productInfo={productDetails} />
      </div>
   );
}

export const dynamic = 'force-dynamic';

// import { useEffect, useState } from 'react';
// import { getProductDetails } from '@/lib/actions/actions';

// export default function ProductDetails({
//    params,
// }: {
//    params: { productId: string };
// }) {
//    const [productDetails, setProductDetails] = useState<any>(null);
//    const [loading, setLoading] = useState(true);

//    useEffect(() => {
//       const fetchProductDetails = async () => {
//          try {
//             const product = await getProductDetails(params.productId);
//             setProductDetails(product);
//             setLoading(false);
//          } catch (error) {
//             console.error('Error fetching product details:', error);
//             setLoading(false);
//          }
//       };

//       fetchProductDetails();
//    }, [params.productId]);

//    if (loading) {
//       return <div>Loading...</div>;
//    }

//    if (!productDetails) {
//       return <div>No product found.</div>;
//    }

//    return (
//       <div>
//          <h1>{productDetails.title}</h1>
//          <p>{productDetails.description}</p>
//          {/* Render other product details */}
//       </div>
//    );
// }

// export const dynamic = 'force-dynamic';
