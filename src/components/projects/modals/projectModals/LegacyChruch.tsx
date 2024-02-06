import { ModalBody, ModalHeader } from '@nextui-org/react';
import Link from 'next/link';

export default function LegacyChurch() {
   return (
      <>
         <ModalHeader className="flex flex-col gap-1 text-center">
            Legacy Church
         </ModalHeader>
         <ModalBody>
            <h2>Desription of Legacy Church.</h2>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
               pulvinar risus non risus hendrerit venenatis. Pellentesque sit
               amet hendrerit risus, sed porttitor quam.
            </p>

            <Link
               href="https://nextui.org/docs/components/modal"
               target="_blank"
               className="hover:text-brand-blue200 hover:underline hover:underline-offset-4 w-1/2"
            >
               Design Sistem
            </Link>
            <Link
               href="https://tailwindcss.com/docs/text-underline-offset"
               target="_blank"
               className="hover:text-brand-blue200 hover:underline hover:underline-offset-4 w-1/2"
            >
               Oficial Website
            </Link>
            <p className="hover:text-brand-danger hover:underline hover:underline-offset-4 w-1/2">
               Code - Private
            </p>
         </ModalBody>
      </>
   );
}
