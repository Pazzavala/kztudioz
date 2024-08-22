'use client';
import useCart from '@/lib/hooks/useCart';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi';
import { IoTrash } from 'react-icons/io5';

export default function Cart() {
   const user = useUser();
   const router = useRouter();

   const cart = useCart();
   const total = cart.cartItems.reduce(
      (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
      0
   );

   console.log(user);

   const totalRounded = parseFloat(total.toFixed(2));

   const customer = {
      clerkId: user?.user?.id,
      email: user?.user?.emailAddresses?.[0]?.emailAddress,
      name: user?.user?.fullName,
   };

   const handleCheckout = async () => {
      try {
         if (!user) router.push('/sign-in');
         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/checkout`, {
            method: 'POST',
            body: JSON.stringify({
               cartItems: cart.cartItems,
               customer,
            }),
         });
         const data = await res.json();
         window.location.href = data.url;
      } catch (error) {
         console.log('[checkout_POST]', error);
      }
   };

   return (
      <div className='flex w-full justify-center gap-10 py-16 px-10 max-lg:flex-col'>
         <div className='w-2/3 max-lg:w-full p-5 justify-center bg-white rounded-xl'>
            <p className='text-2xl font-bold'>Shopping Cart</p>
            <hr className='my-6' />
            {cart.cartItems.length === 0 ? (
               <p className='text-base font-bold'>No items in cart</p>
            ) : (
               <div>
                  {cart.cartItems.map((cartItem) => (
                     <div
                        key={cartItem.item._id}
                        className='w-full flex max-sm:flex-col max-sm:gap-5 hover:bg-gray-200 px-6 py-5 items-center justify-between'
                     >
                        <div className='flex items-center'>
                           <Image
                              src={cartItem.item.media[0]}
                              alt='product'
                              width={100}
                              height={100}
                              className='rounded-lg w-32 h-32 object-contain'
                           />
                           <div className='flex flex-col gap-3 ml-4'>
                              <p className='text-base font-bold'>
                                 {cartItem.item.title}
                              </p>
                              <p className='text-base font-medium'>
                                 $ {cartItem.item.price}
                              </p>
                           </div>
                        </div>
                        <div className='flex items-center gap-28'>
                           <div className='flex gap-4 items-center'>
                              <HiOutlineMinusCircle
                                 size={22}
                                 onClick={() =>
                                    cart.decreaseQuantity(cartItem.item._id)
                                 }
                                 className='hover:text-blue-500 cursor-pointer'
                              />
                              <p className='text-lg font-bold mx-6'>
                                 {cartItem.quantity}
                              </p>
                              <HiOutlinePlusCircle
                                 size={22}
                                 onClick={() =>
                                    cart.increaseQuantity(cartItem.item._id)
                                 }
                                 className='hover:text-blue-500 cursor-pointer'
                              />
                           </div>
                           <IoTrash
                              onClick={() => cart.removeItem(cartItem.item._id)}
                              className='hover:text-red-600 cursor-pointer'
                           />
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
         <div className='w-1/3 max-lg:w-full flex flex-col gap-8 bg-white rounded-lg px-4 py-5'>
            <p className='text-xl font-bold pb-4'>
               Summary <span>{cart.cartItems.length > 1 ? 'Items' : 'Item'}</span>
            </p>
            <div className='flex justify-between text-base font-semibold'>
               <span>Total Amount</span>
               <span>${totalRounded}</span>
            </div>
            <button
               onClick={handleCheckout}
               className='border rounded-lg text-base font-bold bg-white py-3 w-full hover:bg-black hover:text-white'
            >
               Proceed to Checkout
            </button>
         </div>
      </div>
   );
}
