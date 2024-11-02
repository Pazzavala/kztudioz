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
      <article className='group flex my-3 md:my-0 sm:h-[43rem] flex-col even:md:flex-row md:flex-row-reverse md:justify-between items-center md:items-start'>
         {/* Image */}
         <div className='flex flex-col mx-6 w-80 sm:group-even:mx-0 sm:group-odd:item-start sm:-mx-16 sm:w-1/2 h-96 sm:h-[40rem] flex-center sm:bg-none sm:border-none bg-gradient-to-br from-[#C6EFFF] to-[#D6D0FA] border border-black/5 rounded-xl transition'>
            <Link href={`/collections/${_id}`} className='w-[220px] md:w-full'>
               <Image
                  src={media[0]}
                  alt={title}
                  width={600}
                  height={600}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-contain flex justify-start rounded-xl drop-shadow-custom-lg p-4 sm:p-0 sm:group-odd:place-self-end'
               />
            </Link>
         </div>

         {/* Description of Collection */}
         <div className=' flex flex-col flex-center md:items-start md:h-[40rem] md:w-1/2 p-4'>
            <h3
               className={`text-nowrap font-sedgwick-ave-display font-bold text-2xl sm:text-4xl lg:text-5xl md:mb-4 text-gray-700`}
            >
               The {title}
            </h3>
            <p className={`text-gray-400 mb-3 md:mb-6`}>{formattedDate}</p>
            <p
               className={`hidden md:block md:text-lg lg:text-xl text-gray-600 md:mb-8`}
            >
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
