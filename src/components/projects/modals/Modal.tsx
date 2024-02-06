import React from 'react';
import {
   Modal,
   ModalContent,
   ModalFooter,
   Button,
   useDisclosure,
} from '@nextui-org/react';

import GenesisModal from './projectModals/GenesisModal';
import LegacyChurch from './projectModals/LegacyChruch';
import GetAlongLC from './projectModals/GetAlongLC';

import Image from 'next/image';
import CardImage from '@/assets/image/projects/iamageCard.svg';

export default function ProjectModal({ project }: { project: string }) {
   const { isOpen, onOpen, onOpenChange } = useDisclosure();

   return (
      <div className="flex flex-col gap-2">
         <Button onPress={onOpen} className="h-full w-full">
            <Image src={CardImage} width={330} alt="" />
         </Button>

         <Modal
            isOpen={isOpen}
            placement={'center'}
            onOpenChange={onOpenChange}
         >
            <ModalContent className="bg-zinc-800 text-brand-gray100">
               {(onClose) => (
                  <>
                     {project === 'genesis' && <GenesisModal />}
                     {project === 'legacyChurch' && <LegacyChurch />}
                     {project === 'getAlongLC' && <GetAlongLC />}
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
