import useCart from '@/lib/hooks/useCart';
import Link from 'next/link';
import { Badge } from '@nextui-org/badge';
import { Button } from '@nextui-org/button';
import { IoCart } from 'react-icons/io5';

export default function CartButton() {
   const cart = useCart();

   return (
      <Link
         href={'/cart'}
         //
         className='fixed top-5 right-9 lg:static flex flex-center rounded-full lg:bg-gray-50/50 hover:bg-white/90 transition'
      >
         <Badge
            content={cart.cartItems.length}
            shape='circle'
            size='md'
            color='danger'
         >
            <Button radius='full' isIconOnly variant='light'>
               <IoCart size={24} className='text-gray-700' />
            </Button>
         </Badge>
      </Link>
   );
}
