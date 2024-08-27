export const getCollections = async () => {
   const collections = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADMIN_URL}/api/collections`,
      {
         cache: 'no-store',
         //  cache: 'force-cache'
         // next: { revalidate: 30 },
      }
   );
   return await collections.json();
};

export const getCollectionDetails = async (collectionId: string) => {
   const collection = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADMIN_URL}/api/collections/${collectionId}`,
      {
         cache: 'no-store',
         //  cache: 'force-cache'
         // next: { revalidate: 30 },
      }
   );
   return await collection.json();
};

export const getProducts = async () => {
   const products = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADMIN_URL}/api/products`,
      {
         cache: 'no-store',
         //  cache: 'force-cache'
         // next: { revalidate: 30 },
      }
   );
   return await products.json();
};

export const getProductDetails = async (productId: string) => {
   const product = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADMIN_URL}/api/products/${productId}`,
      {
         cache: 'no-store',
         //  cache: 'force-cache'
         // next: { revalidate: 30 },
      }
   );
   return await product.json();
};

export const getSearchedProducts = async (query: string) => {
   const searchedProducts = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADMIN_URL}/api/search/${query}`,
      {
         cache: 'no-store',
         //  cache: 'force-cache'
         // next: { revalidate: 30 },
      }
   );

   return await searchedProducts.json();
};

export const getOrders = async (customerId: string) => {
   const orders = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADMIN_URL}/api/orders/customers/${customerId}`,
      {
         cache: 'no-store',
         //  cache: 'force-cache'
         // next: { revalidate: 30 },
      }
   );
   return await orders.json();
};

export const getRelatedProducts = async (productId: string) => {
   const relatedProducts = await fetch(
      `${process.env.NEXT_PUBLIC_API_ADMIN_URL}/api/products/${productId}/related`,
      {
         cache: 'no-store',
         //  cache: 'force-cache'
         // next: { revalidate: 500 },
      }
   );
   return await relatedProducts.json();
};
