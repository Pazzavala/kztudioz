import { format } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface collectionProps {
   _id: string;
   title: string;
   description: string;
   media: string[];
   createdAt: Date;
}

export default function Collection({
   _id,
   title,
   description,
   media,
   createdAt,
}: collectionProps) {
   const formattedDate = format(createdAt);

   return (
      <article className='w-full group flex my-3 lg:my-0 sm:h-[43rem] flex-col even:lg:flex-row lg:flex-row-reverse lg:justify-between items-center lg:items-start'>
         {/* Image */}
         <Link
            href={`/collections/${_id}`}
            className='w-full flex flex-center lg:block'
         >
            <Image
               src={media[0]}
               alt={title}
               width={600}
               height={600}
               className='object-contain flex flex-center rounded-xl drop-shadow-custom-lg p-4 sm:p-0 lg:group-odd:place-self-end'
            />
         </Link>

         {/* Description of Collection */}
         <div className=' flex flex-col flex-center lg:items-start lg:h-[40rem] lg:w-3/4 p-4'>
            <Link href={`/collections/${_id}`}>
               <h3
                  className={`text-nowrap font-sedgwick-ave-display font-bold text-2xl sm:text-4xl lg:text-5xl lg:mb-4 text-gray-700`}
               >
                  The {title}
               </h3>
            </Link>

            <p className={`text-gray-400 mb-3 lg:mb-6`}>{formattedDate}</p>
            <p className={`hidden lg:block lg:text-xl text-gray-600 md:mb-8`}>
               {description}
            </p>
            <Link
               href={`/collections/${_id}`}
               className={`flex flex-center w-28 p-2 rounded-full bg-blue-kz text-white font-medium hover:scale-110`}
            >
               Shop
            </Link>
         </div>
      </article>
   );
}
