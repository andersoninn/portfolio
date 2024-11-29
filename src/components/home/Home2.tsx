'use client';
import 'animate.css';
import { Texts } from '@/lib/Texts2';
import NavbarUI from '../ui/NavbarUI';
import IpnoneComponent from './IpnoneComponent';
import Link from 'next/link';
import { IoArrowDown } from 'react-icons/io5';
import Image from 'next/image';

import Iphone from "@/assets/image/home/iPhone15.svg";


export default function Home2() {
  const texts = Texts.home;
  return (
    <>
      <NavbarUI />
      <section className="bg-gradient-to-b from-[#0f9ffe] from-30% via-[#077AED] via-45% to-[#06283B] md:min-h-screen to-95% relative -mt-12">
        <section className='bgHome min-h-screen flex justify-center'>
          <article className='container m-auto absolute -bottom-24'>
            <IpnoneComponent />
          </article>

        <section className='w-full h-1/2 container m-auto absolute top-2 md:top-12'>
          <article className="pt-56 font-normal text-center text-white flex flex-col justify-center">
            <h1 className="text-4xl">{texts.name}</h1>
            <div className="flex flex-col justify-center w-full font-light text-2xl">
              <p className="px-12 text-wrap">
                {texts.subtitle}
              </p>
            </div>
          </article>
        </section>
        </section>
        {/*<Image src="/homePolygons.svg" alt='' width={700} height={700} className='-mt-12' />*/}
      </section>
    </>
  );
}
