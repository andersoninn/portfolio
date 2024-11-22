import Mockup from '@/assets/image/projects/mockupLeft.svg';
import iconLink from '@/assets/image/projects/icon link.svg';

import Image from 'next/image';
import RealProjectsModal from './modals/RealProjectsModal';

import { Texts } from '@/lib/Texts';
import Link from 'next/link';

export default function Projects2() {
  const ProjectItens = Texts.projects;
  return (
    <>
      <section className="h-[840px] relative">

        <section className="w-[95%] absolute top-[30%] left-[50%] flex items-center justify-center m-auto">
          {/* full square */}
          <section className=' -translate-x-1/2 flex flex-col justify-center items-center'>
            <article className='flex flex-col items-center justify-center text-center w-[80%] -mb-4'>
              <h2 className='font-semibold text-2xl'>Web Developer</h2>
              <span className='space-y-2'>
                <h3 className='font-normal'>End-to-end web development</h3>
                <p>Development of projects in search of
                  validation of the user experience.</p>
              </span>
            </article>
            <article>
              <Image src="/diamond.png" alt='' width={600} height={600} className='' />
            </article>
            <section className='flex w-full -mt-[50%]'>
              <article className='w-1/2 flex flex-col items-center justify-center text-center pr-2'>
                <h2 className='font-semibold text-2xl'>UX/UI</h2>
                <span className='space-y-2'>
                  <h3 className='font-normal'>Software prototyping</h3>
                  <p>Development of projects in search of
                    validation of the user experience.</p>
                </span>
              </article>
              <article className='w-1/2 flex flex-col items-center justify-center text-center pl-2'>
                <h2 className='font-semibold text-2xl'>Designer</h2>
                <span className='space-y-2'>
                  <h3 className='font-normal'>Visual identity creation</h3>
                  <p>Development of visual identities that
                    reinforce the brand &apos;s
                    identity.</p>
                </span>
              </article>
            </section>

          </section>

        </section>


        {/*
        <section className="w-full">
          <section className="w-[85%] pt-36 md:pt-32 pb-10 flex flex-col m-auto max-w-[1240px]">
            <section className="flex flex-col md:flex-row flex-wrap">
              {ProjectItens.map((e, i) => (
                <article key={i} className="m-auto flex flex-col items-center text-center gap-2 pb-12 max-w-[500px]">
                    <Image src={e.image} alt="" width={600} />
                    <h1 className="text-xl font-semibold">{e.nameOfProject}</h1>
                    <h2 className=" text-lg">{e.descriptionOfProject}</h2>
                    <Link href={e.oficialWebsite} target="_blank" className="flex gap-4 m-auto">
                      <Image src={iconLink} alt="" width={15} />
                      <span className="text-blue-600">{e.callToAction}</span>
                    </Link>
                  </article>
              ))}
            </section>
          </section>
        </section>
                    */}

        <section className="w-full h-16 absolute -top-8" id="projects" />
      </section>
    </>
  );
}
