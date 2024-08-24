import { SignUp } from '@clerk/nextjs';

export default function Page() {
   return (
      <div className='h-screen flex flex-center'>
         <SignUp />
      </div>
   );
}
