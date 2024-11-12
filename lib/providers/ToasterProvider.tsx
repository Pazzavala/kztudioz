import { Toaster } from 'react-hot-toast';

export default function ToasterProvider() {
   return (
      <div className='z-[9999]'>
         <Toaster />
      </div>
   );
}
