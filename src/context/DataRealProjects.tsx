import Image from 'next/image';
import MyPortfolio from '@/assets/image/projects/realProjectsImage/myPortfolio.svg';
import GetAlongLCCard from '@/assets/image/projects/realProjectsImage/getAlongCard.svg';

import Html from '@/assets/image/resume/html5.svg';
import Css from '@/assets/image/resume/css3.svg';
import JavaScript from '@/assets/image/resume/javaScript.svg';
import ReactJS from '@/assets/image/resume/react.svg';
import Tailwind from '@/assets/image/resume/tailwind.svg';
import TypeScript from '@/assets/image/resume/typeScript.svg';
import NextJS from '@/assets/image/resume/nextJS.svg';

import { ReactNode } from 'react';

export interface ImageRealProjectProps {
   myPortfolio: ReactNode;
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
   typeScript: ReactNode;
}

export const ImageRealProject: ImageRealProjectProps = {
   myPortfolio: <Image src={MyPortfolio} height={231} alt="" />,
   church: <Image src={MyPortfolio} height={231} alt="" />,
   getAlong: <Image src={GetAlongLCCard} height={231} alt="" />,
};

export const TechnologiesLogo: TechnologiesLogoProps = {
   html5: <Image src={Html} width={30} alt="" />,
   css3: <Image src={Css} width={30} alt="" />,
   js: <Image src={JavaScript} width={30} alt="" />,
   reactJS: <Image src={ReactJS} width={30} alt="" />,
   nextJS: <Image src={NextJS} width={30} alt="" />,
   tailwind: <Image src={Tailwind} width={30} alt="" />,
   typeScript: <Image src={TypeScript} width={30} alt="" />,
};

export const DataRealProjects = [
   {
      id: 1,
      name: 'My Portfolio',
      description:
         '"My Portofolio" is a website designed to tell you a bit about my history, as well as showing some of my recent work, study projects, my personal details and contact information.',
      image: 'myPortfolio',
      designSistemLink:
         'https://www.figma.com/file/5FVydL9qhlTchu8SJzjBZn/Portfolio?type=design&node-id=561-3487&mode=design&t=WBg49PaqOWzqtHks-0',
      oficialWebsiteLink: 'https://portfolio-andersoninn.vercel.app/',
      codeLink: 'https://github.com/andersoninn/portfolio',
      codeType: 'Public',
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
            id: 'TypeScript',
            technologieName: 'TypeScript',
            tecnologieImage: 'typeScript',
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
      name: 'Get Along LC',
      description:
         'The "Get Along Language Course" is a language school focused on educational services for French government agencies. Seeking a strong digital presence, its current project includes a Landing Page with redirection to the government platform and a contact chatbot for new students, allowing for the acquisition of new students through various channels.',
      image: 'getAlong',
      designSistemLink:
         'https://www.figma.com/file/XeiCfpJ7bZBUcZ84XSClla/GetAlong-LC?type=design&node-id=417%3A3356&mode=design&t=mDrCNiIS5Xg2ezrh-1',
      oficialWebsiteLink: 'https://get-along-lc.vercel.app/',
      codeLink: '',
      codeType: 'Private',
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
            id: 'TypeScript',
            technologieName: 'TypeScript',
            tecnologieImage: 'typeScript',
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
      name: 'Legacy Church',
      description:
         'Description of Legacy Church Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
      image: 'church',
      designSistemLink:
         'https://www.figma.com/file/DuDGRM3FSn1w4y2ueVDV67/Legacy-Church?type=design&node-id=0-1&mode=design&t=sNwNyxG5S3Cy6zCD-0',
      oficialWebsiteLink:
         'https://www.google.com/search?sca_esv=85af15397c77c0f6&rlz=1C1RXQR_pt-PTPT1094PT1094&sxsrf=ACQVn0_kHO2SlyW1NtNXHNmwmduT3UOjQg:1709026977286&q=legacy+church&tbm=isch&source=lnms&sa=X&ved=2ahUKEwij15HPncuEAxURg_0HHRuYCt0Q0pQJegQIDBAB&cshid=1709027037905120&biw=1366&bih=679&dpr=1',
      codeLink: '',
      codeType: 'Public',
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
            id: 'TypeScript',
            technologieName: 'TypeScript',
            tecnologieImage: 'typeScript',
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
