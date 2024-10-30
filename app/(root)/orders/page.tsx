import { getOrders } from '@/lib/actions/actions';
import { OrderItemType, OrderType } from '@/lib/types';

import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';

const Orders = async () => {
   const { userId } = auth();
   const orders = await getOrders(userId as string);
   console.log(orders[0].products);

   return (
      <div className='max-w-[90rem] w-full mx-auto p-3 mt-20 min-h-160 md:min-h-176'>
         <div className='bg-white p-5 pt-2 rounded-xl'>
            <p className='text-heading3-bold my-10 text-center'>Your Orders</p>
            {!orders ||
               (orders.length === 0 && (
                  <p className='text-body-bold my-5'>You have no orders yet.</p>
               ))}

            <div className='flex flex-col gap-10'>
               {orders?.map((order: OrderType) => (
                  <div
                     key={order._id}
                     className='flex flex-col gap-8 p-4 hover:bg-grey-1'
                  >
                     <div className='flex justify-between max-md:flex-col max-md:gap-3'>
                        <p className='text-base-bold'>Order ID: {order._id}</p>
                        <p className='text-base-bold'>
                           Total Amount: ${order.totalAmount}
                        </p>
                     </div>

                     <div className='flex flex-col gap-5'>
                        {order.products?.map((orderItem: OrderItemType) => (
                           <div key={orderItem._id} className='flex gap-4'>
                              <Image
                                 src={orderItem.product?.media?.[0] || ''}
                                 alt={orderItem.product?.title || 'Product image'}
                                 width={100}
                                 height={100}
                                 className='w-52 h-64 object-cover rounded-lg'
                              />
                              <div className='flex flex-col gap-3'>
                                 <p className='text-small-medium'>
                                    Title:{' '}
                                    <span className='text-small-bold'>
                                       {orderItem.product.title}
                                    </span>
                                 </p>
                                 <p className='text-small-medium'>
                                    Unit price:{' '}
                                    <span className='text-small-bold'>
                                       {orderItem.product.price}
                                    </span>
                                 </p>
                                 <p className='text-small-medium'>
                                    Quantity:{' '}
                                    <span className='text-small-bold'>
                                       {orderItem.quantity}
                                    </span>
                                 </p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Orders;

export const dynamic = 'force-dynamic';
