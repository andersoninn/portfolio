import { useProjects } from '@/store/useProjects';
import { LinkIcon, ModalBody, ModalHeader } from '@nextui-org/react';
import Link from 'next/link';

export default function GetAlongLC() {
   const { realProjects } = useProjects();

   return (
      <>
         {/* {realProjects.map((e) => {
            <ModalHeader className="flex flex-col gap-1 text-center">
               {realProjects[0].name}
            </ModalHeader>;
         })}

         <ModalBody>
            <h2>
               Description of <span translate="no">{realProjects[0].name}</span>
            </h2>
            <p>{realProjects[0].description}</p>

            <Link
               href={realProjects[0].designSistemLink}
               target="_blank"
               className="hover:text-brand-blue200 hover:underline hover:underline-offset-4 w-1/2"
            >
               Design Sistem
            </Link>
            <Link
               href={realProjects[0].websiteLink}
               target="_blank"
               className="hover:text-brand-blue200 hover:underline hover:underline-offset-4 w-1/2"
            >
               Oficial Website
            </Link>
            <Link
               href={realProjects[0].codeLink}
               target="_blank"
               className="hover:text-brand-danger hover:underline hover:underline-offset-4 w-1/2"
            >
               Code - Private
            </Link>
         </ModalBody> */}
      </>
   );
}
