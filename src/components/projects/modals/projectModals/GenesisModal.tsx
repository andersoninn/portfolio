import { ModalBody, ModalHeader } from '@nextui-org/react';
import Link from 'next/link';

// ADJUST WEBSITE LINKS

export default function GenesisModal() {
   return (
      <>
         <ModalHeader className="flex flex-col gap-1 text-center">
            Genesis Teaching Institute
         </ModalHeader>
         <ModalBody>
            <h2>Description of Genesis Teaching Institute </h2>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
               pulvinar risus non risus hendrerit venenatis. Pellentesque sit
               amet hendrerit risus, sed porttitor quam.
            </p>

            <Link
               href="https://www.figma.com/file/mfwvrjKTGQR2WPGWBuSuWi/Instituto-Genesis?type=design&node-id=0%3A1&mode=design&t=z6RyiJQwy60YeVJk-1"
               target="_blank"
               className="hover:text-brand-blue200 hover:underline hover:underline-offset-4 w-1/2"
            >
               Design Sistem
            </Link>
            <Link
               href="https://portfolio-andersoninn.vercel.app/"
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
