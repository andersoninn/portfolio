import Mockup from '@/assets/image/projects/mockupLeft.svg';
import iconLink from '@/assets/image/projects/icon link.svg';

import Image from 'next/image';
import RealProjectsModal from './modals/RealProjectsModal';

import { Texts } from '@/lib/Texts';
import Link from 'next/link';

export default function Projects2() {

  return (
    <>
      <section className="relative overflow-hidden bg-gray-200">
        <section className='w-[90%] container m-auto flex items-center justify-center py-12' >

        PROJECTS
        </section>

        <section className="w-full h-16 absolute -top-8" id="projects" />
      </section>
    </>
  );
}
