import {
   TechnologiesLogo,
   TechnologiesLogoProps,
} from '@/context/DataStudyProjects';
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

export default function StudyProjectsModal() {
   const { isOpen, onOpen, onOpenChange } = useDisclosure();

   const { studyProjects, activeStudyProjects } = useProjects();

   return (
      <div className="flex flex-col gap-2">
         <Button
            onPress={onOpen}
            className="max-w-fit text-brand-blueTitle font-bold bg-brand-gray100"
            translate="no"
         >
            {studyProjects[activeStudyProjects].name}
         </Button>

         <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="bg-brand-gray100"
         >
            <ModalContent>
               {(onClose) => (
                  <>
                     <ModalHeader className="flex flex-col gap-1">
                        {studyProjects[activeStudyProjects].name}
                     </ModalHeader>
                     <ModalBody>
                        <h2 className="-mb-2">Description:</h2>
                        <p>{studyProjects[activeStudyProjects].description}</p>

                        <p className="flex gap-2 flex-wrap">
                           {studyProjects[
                              activeStudyProjects
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
                              studyProjects[activeStudyProjects]
                                 .designSistemLink
                           }
                           target="_blank"
                           className="hover:text-brand-blue200 hover:underline hover:underline-offset-4 w-1/2"
                        >
                           Design Sistem
                        </Link>
                        <Link
                           href={
                              studyProjects[activeStudyProjects]
                                 .oficialWebsiteLink
                           }
                           target="_blank"
                           className="hover:text-brand-blue200 hover:underline hover:underline-offset-4 w-1/2"
                        >
                           Oficial Website
                        </Link>
                        <Link
                           href={studyProjects[activeStudyProjects].codeLink}
                           target="_blank"
                           className="hover:text-brand-blue200 hover:underline hover:underline-offset-4 w-1/2"
                        >
                           Code - Public
                        </Link>
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
