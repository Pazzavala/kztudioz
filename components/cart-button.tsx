import useCart from '@/lib/hooks/useCart';
import Link from 'next/link';
import { Badge } from '@nextui-org/badge';
import { Button } from '@nextui-org/button';
import { IoCart } from 'react-icons/io5';

export default function CartButton() {
   const cart = useCart();

   return (
      // <Link
      //    href={'/cart'}
      //    className='fixed top-5 right-24 lg:static flex flex-center h-9 p-2.5 rounded-full lg:bg-white lg:dark:bg-opacity-10 lg:border border-opacity-40 lg:backdrop-blur-md text-[#5278C] hover:text-white transition'
      // >
      <Badge
         content={cart.cartItems.length}
         shape='circle'
         color='danger'
         className='flex'
      >
         <Button
            radius='full'
            isIconOnly
            aria-label='more than 99 notifications'
            variant='light'
         >
            <IoCart size={20} className='text-lg' />
            <p className='hidden xl:block text-base font-semibold'>Cart</p>
         </Button>
      </Badge>
      // </Link>
   );
}
