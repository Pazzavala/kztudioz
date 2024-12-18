'use client';
import { ProductType, UserType } from '@/lib/types';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoHeart } from 'react-icons/io5';

interface HeartFavoriteProps {
   size?: number;
   product: ProductType;
   baseColor: string;
   updateSignedInUser?: (updatedUser: UserType) => void;
}
export default function HeartFavorite({
   size,
   product,
   baseColor,
   updateSignedInUser,
}: // size,
HeartFavoriteProps) {
   const router = useRouter();
   const { user } = useUser();

   const [loading, setLoading] = useState(false);
   const [isLiked, setIsLiked] = useState(false);

   const getUser = async () => {
      try {
         setLoading(true);
         const res = await fetch('/api/users');
         const data = await res.json();
         setIsLiked(data.wishlist.includes(product._id));
         setLoading(false);
      } catch (err) {
         console.log('[users_GET]', err);
      }
   };

   useEffect(() => {
      if (user) {
         getUser();
      }
   }, [user]);

   const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      try {
         if (!user) {
            router.push('/sign-in');
            return;
         } else {
            const res = await fetch('/api/users/wishlist', {
               method: 'POST',
               body: JSON.stringify({ productId: product._id }),
            });
            const updatedUser = await res.json();
            setIsLiked(updatedUser.wishlist.includes(product._id));
            updateSignedInUser && updateSignedInUser(updatedUser);
         }
      } catch (err) {
         console.log('[wishlist_POST]', err);
      }
   };

   return (
      <button onClick={handleLike}>
         <IoHeart size={size} fill={`${isLiked ? 'red' : baseColor}`} />
      </button>
   );
}
