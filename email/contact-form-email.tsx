import React from 'react';
import {
   Html,
   Head,
   Heading,
   Hr,
   Body,
   Container,
   Preview,
   Section,
   Text,
   Tailwind,
} from '@react-email/components';

type ContactFormEmailProps = {
   message: string;
   senderEmail: string;
};

export default function ContactFormEmail({
   message,
   senderEmail,
}: ContactFormEmailProps) {
   return (
      <Html>
         <Head />
         <Preview>New message from your kztudioz site</Preview>
         <Tailwind>
            <Body className='bg-gray-100'>
               <Container>
                  <Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
                     <Heading className='leading-tight'>
                        Kztudioz recievded the following message from contact form
                     </Heading>
                     <Text>{message}</Text>
                     <Hr />
                     <Text>The sender's email is: {senderEmail}</Text>
                  </Section>
               </Container>
            </Body>
         </Tailwind>
      </Html>
   );
}
