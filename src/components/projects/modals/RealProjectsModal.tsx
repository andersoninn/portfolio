import {
   TechnologiesLogo,
   TechnologiesLogoProps,
} from '@/context/DataRealProjects';
import { useProjects } from '@/store/useProjects';
import {
   Modal,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Button,
   useDisclosure,
} from '@nextui-org/react';
import Link from 'next/link';

export default function RealProjectsModal() {
   const { isOpen, onOpen, onOpenChange } = useDisclosure();

   const { realProjects, activeRealProjects } = useProjects();

   return (
      <div className="flex flex-col gap-2">
         <Button
            onPress={onOpen}
            className="max-w-fit text-brand-blueTitle font-bold bg-brand-gray100"
         >
            {realProjects[activeRealProjects].name}
         </Button>

         <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="bg-brand-gray200"
         >
            <ModalContent>
               {(onClose) => (
                  <>
                     <ModalHeader className="flex flex-col gap-1">
                        {realProjects[activeRealProjects].name}
                     </ModalHeader>
                     <ModalBody>
                        <h2>
                           Description of{' '}
                           {realProjects[activeRealProjects].name}.
                        </h2>
                        <p>{realProjects[activeRealProjects].description}</p>

                        <p className="flex gap-2 flex-wrap">
                           {realProjects[
                              activeRealProjects
                           ].technologiesUsed.map((e) => (
                              <span key={e.id} className="">
                                 {
                                    TechnologiesLogo[
                                       e.tecnologieImage as keyof TechnologiesLogoProps
                                    ]
                                 }
                              </span>
                           ))}
                        </p>

                        <Link
                           href={
                              realProjects[activeRealProjects].designSistemLink
                           }
                           target="_blank"
                           className="hover:text-brand-blue200 hover:underline hover:underline-offset-4 w-1/2"
                        >
                           Design Sistem
                        </Link>
                        <Link
                           href={
                              realProjects[activeRealProjects]
                                 .oficialWebsiteLink
                           }
                           target="_blank"
                           className="hover:text-brand-blue200 hover:underline hover:underline-offset-4 w-1/2"
                        >
                           Oficial Website
                        </Link>
                        <p className="hover:text-brand-danger hover:underline hover:underline-offset-4 w-1/2 select-none">
                           Code - Private
                        </p>
                     </ModalBody>
                     <ModalFooter>
                        <Button
                           color="danger"
                           variant="light"
                           onPress={onClose}
                        >
                           Close
                        </Button>
                     </ModalFooter>
                  </>
               )}
            </ModalContent>
         </Modal>
      </div>
   );
}
