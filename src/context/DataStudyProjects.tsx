import Image from 'next/image';
import ToDoList from '@/assets/image/projects/studyProjectsImage/toDoList.svg';
import CoffeeDelivery from '@/assets/image/projects/studyProjectsImage/coffeeDelivery.svg';
import GitHubBlog from '@/assets/image/projects/studyProjectsImage/gitHubBlog.svg';

import Html from '@/assets/image/resume/html5.svg';
import Css from '@/assets/image/resume/css3.svg';
import JavaScript from '@/assets/image/resume/javaScript.svg';
import ReactJS from '@/assets/image/resume/react.svg';
import Tailwind from '@/assets/image/resume/tailwind.svg';
import TypeScript from '@/assets/image/resume/typeScript.svg';
import NextJS from '@/assets/image/resume/nextJS.svg';

import { ReactNode } from 'react';

export interface ImageStudyProjectProps {
  toDoList: ReactNode;
  coffeeDelivery: ReactNode;
  gitHubBlog: ReactNode;
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

export const ImageStudyProject: ImageStudyProjectProps = {
  toDoList: <Image src={ToDoList} height={231} alt="" />,
  coffeeDelivery: <Image src={CoffeeDelivery} height={231} alt="" />,
  gitHubBlog: <Image src={GitHubBlog} height={231} alt="" />,
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

export const DataStudyProjects = [
  {
    id: 1,
    name: 'To Do List',
    description:
      'Final challenge of module 01 of the React course at Rocktseat, where we were asked to make a Task List, based on a layout and a pre-defined briefing established.',
    image: 'toDoList',
    designSistemLink:
      'https://www.figma.com/file/lXQubaJEmKMkJk4DOFvw1S/ToDo-List-%E2%80%A2-Desafio-React-(Copy)?type=design&node-id=56-96&mode=design&t=PCvIHmUkdyfgupIK-0',
    oficialWebsiteLink:
      'https://rocketseat-challenge-01-to-do-react.vercel.app/',
    codeLink:
      'https://github.com/andersoninn/Rocketseat_Challenge_01_Task_List_React',
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
        id: 'ReactJS',
        technologieName: 'React JS',
        tecnologieImage: 'reactJS',
      },
    ],
  },
  {
    id: 2,
    name: 'Coffee Delivery',
    description:
      "Final challenge of module 02 of Rocktseat's React course, where we were asked to make a coffee-by-delivery platform, using React + Type Script, based on a layout and a pre-defined briefing established.",
    image: 'coffeeDelivery',
    designSistemLink:
      'https://www.figma.com/file/XPjHwZ8k5Ye59Tjw8vyAyC/Coffee-Delivery-%E2%80%A2-Desafio-React-(Copy)?type=design&node-id=2-12&mode=design&t=yWsTmONhI6ou8sH0-0',
    oficialWebsiteLink:
      'https://rocketseat-challenge-02-coffee-delivery-react-ts.vercel.app/',
    codeLink:
      'https://github.com/andersoninn/Rocketseat_Challenge_02_Coffee_Delivery_React_TS',
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
    ],
  },
  {
    id: 3,
    name: 'GitHub Blog',
    description:
      "Final challenge of module 03 of Rocktseat's React course, where we were asked to make a Blog platform, consuming the GitHub API and using React + Type Script + NextJS, based on a layout and a pre-defined briefing established.",
    image: 'gitHubBlog',
    designSistemLink:
      'https://www.figma.com/file/hv0oEN0fGYb8g3np4PMlCZ/GitHub-Blog-(Community)?type=design&node-id=0-1&mode=design&t=a3oA6PXCfFoBGkIW-0',
    oficialWebsiteLink:
      'https://rocketseat-challenge-03-github-blog-nextjs.vercel.app/',
    codeLink:
      'https://github.com/andersoninn/Rocketseat_Challenge_02_Coffee_Delivery_React_TS_Vite',
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
