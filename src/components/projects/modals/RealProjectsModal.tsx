import { TechnologiesLogo } from '@/context/Projects';
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

export default function App() {
   const { isOpen, onOpen, onOpenChange } = useDisclosure();

   const { realProjects, active } = useProjects();

   return (
      <div className="flex flex-col gap-2">
         <Button
            onPress={onOpen}
            className="max-w-fit text-brand-blueTitle font-bold bg-none"
         >
            {realProjects[active].name}
         </Button>

         <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
               {(onClose) => (
                  <>
                     <ModalHeader className="flex flex-col gap-1">
                        {realProjects[active].name}
                     </ModalHeader>
                     <ModalBody>
                        <h2>Description of {realProjects[active].name}.</h2>
                        <p>{realProjects[active].description}</p>

                        <p className="flex gap-2">
                           {realProjects[active].technologiesUsed.map((e) => (
                              <span key={e.id} className=" bg-red-300">
                                 {/* {TechnologiesLogo} */}
                              </span>
                           ))}
                        </p>

                        <Link
                           href={realProjects[active].designSistemLink}
                           target="_blank"
                           className="hover:text-brand-blue200 hover:underline hover:underline-offset-4 w-1/2"
                        >
                           Design Sistem
                        </Link>
                        <Link
                           href={realProjects[active].oficialWebsiteLink}
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
