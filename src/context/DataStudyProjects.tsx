import Image from 'next/image';
import InstGenesisCard from '@/assets/image/projects/carousel/instGenesisCard.svg';
import LegacyChurchCard from '@/assets/image/projects/carousel/legacyChurchCard.svg';
import GetAlongLCCard from '@/assets/image/projects/carousel/getAlongCard.svg';

import Html from '@/assets/image/resume/html5.svg';
import Css from '@/assets/image/resume/css3.svg';
import JavaScript from '@/assets/image/resume/javaScript.svg';
import ReactJS from '@/assets/image/resume/react.svg';
import Tailwind from '@/assets/image/resume/tailwind.svg';
import NextJS from '@/assets/image/resume/nextJS.svg';

import { ReactNode } from 'react';

export interface ImageProjectProps {
   genesis: ReactNode;
   church: ReactNode;
   getAlong: ReactNode;
}

export interface TechnologiesLogoProps {
   html5: ReactNode;
   css3: ReactNode;
   js: ReactNode;
   reactJS: ReactNode;
   nextJS: ReactNode;
   tailwind: ReactNode;
}

export const ImageProject: ImageProjectProps = {
   genesis: <Image src={InstGenesisCard} width={330} alt="" />,
   church: <Image src={LegacyChurchCard} width={330} alt="" />,
   getAlong: <Image src={GetAlongLCCard} width={330} alt="" />,
};

export const TechnologiesLogo: TechnologiesLogoProps = {
   html5: <Image src={Html} width={30} alt="" />,
   css3: <Image src={Css} width={30} alt="" />,
   js: <Image src={JavaScript} width={30} alt="" />,
   reactJS: <Image src={ReactJS} width={30} alt="" />,
   nextJS: <Image src={NextJS} width={30} alt="" />,
   tailwind: <Image src={Tailwind} width={30} alt="" />,
};

export const Projects = [
   {
      id: 1,
      name: 'Get Along Language Course',
      description:
         'Description of Get Along Language Course Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
      image: 'getAlong',
      designSistemLink:
         'https://www.figma.com/file/XeiCfpJ7bZBUcZ84XSClla/GetAlong-LC?type=design&node-id=0-1&mode=design&t=fWtZe5R1DoxOODXd-0',
      oficialWebsiteLink: 'https://portfolio-andersoninn.vercel.app/#about',
      codeLink: '',
      technologiesUsed: [
         {
            id: 'HTML5',
            technologieName: 'HTML',
            tecnologieImage: 'html5',
         },
         {
            id: 'CSS3',
            technologieName: 'CSS3',
            tecnologieImage: 'css3',
         },
         {
            id: 'JS',
            technologieName: 'Java Script',
            tecnologieImage: 'js',
         },
         {
            id: 'ReactJS',
            technologieName: 'React JS',
            tecnologieImage: 'reactJS',
         },

         {
            id: 'NextJS',
            technologieName: 'NextJS',
            tecnologieImage: 'nextJS',
         },
         {
            id: 'Tailwind',
            technologieName: 'Tailwind',
            tecnologieImage: 'tailwind',
         },
      ],
   },
   {
      id: 2,
      name: 'Legacy Church',
      description:
         'Description of Legacy Church Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
      image: 'church',
      designSistemLink:
         'https://www.figma.com/file/DuDGRM3FSn1w4y2ueVDV67/Legacy-Church?type=design&node-id=0-1&mode=design&t=sNwNyxG5S3Cy6zCD-0',
      oficialWebsiteLink:
         'https://www.google.com/search?sca_esv=85af15397c77c0f6&rlz=1C1RXQR_pt-PTPT1094PT1094&sxsrf=ACQVn0_kHO2SlyW1NtNXHNmwmduT3UOjQg:1709026977286&q=legacy+church&tbm=isch&source=lnms&sa=X&ved=2ahUKEwij15HPncuEAxURg_0HHRuYCt0Q0pQJegQIDBAB&cshid=1709027037905120&biw=1366&bih=679&dpr=1',
      codeLink: '',
      technologiesUsed: [
         {
            id: 'HTML5',
            technologieName: 'HTML',
            tecnologieImage: 'html5',
         },
         {
            id: 'CSS3',
            technologieName: 'CSS3',
            tecnologieImage: 'css3',
         },
         {
            id: 'JS',
            technologieName: 'Java Script',
            tecnologieImage: 'js',
         },
         {
            id: 'ReactJS',
            technologieName: 'React JS',
            tecnologieImage: 'reactJS',
         },

         {
            id: 'NextJS',
            technologieName: 'NextJS',
            tecnologieImage: 'nextJS',
         },
         {
            id: 'Tailwind',
            technologieName: 'Tailwind',
            tecnologieImage: 'tailwind',
         },
      ],
   },
   {
      id: 3,
      name: 'Inst. Genesis',
      description:
         'Description of Inst. Genesis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
      image: 'genesis',
      designSistemLink:
         'https://www.figma.com/file/DuDGRM3FSn1w4y2ueVDV67/Legacy-Church?type=design&node-id=0-1&mode=design&t=sNwNyxG5S3Cy6zCD-0',
      oficialWebsiteLink:
         'https://www.google.com/search?sca_esv=85af15397c77c0f6&rlz=1C1RXQR_pt-PTPT1094PT1094&sxsrf=ACQVn0_kHO2SlyW1NtNXHNmwmduT3UOjQg:1709026977286&q=legacy+church&tbm=isch&source=lnms&sa=X&ved=2ahUKEwij15HPncuEAxURg_0HHRuYCt0Q0pQJegQIDBAB&cshid=1709027037905120&biw=1366&bih=679&dpr=1',
      codeLink: '',
      technologiesUsed: [
         {
            id: 'HTML5',
            technologieName: 'HTML',
            tecnologieImage: 'html5',
         },
         {
            id: 'CSS3',
            technologieName: 'CSS3',
            tecnologieImage: 'css3',
         },
         {
            id: 'JS',
            technologieName: 'Java Script',
            tecnologieImage: 'js',
         },
         {
            id: 'ReactJS',
            technologieName: 'React JS',
            tecnologieImage: 'reactJS',
         },

         {
            id: 'NextJS',
            technologieName: 'NextJS',
            tecnologieImage: 'nextJS',
         },
         {
            id: 'Tailwind',
            technologieName: 'Tailwind',
            tecnologieImage: 'tailwind',
         },
      ],
   },
];
