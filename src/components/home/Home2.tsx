'use client';
import 'animate.css';
import Image from 'next/image';
import { IoArrowDown } from "react-icons/io5";

import { Texts } from '@/lib/Texts';
import Link from 'next/link';
import NavbarUI from '../ui/NavbarUI';

export default function Home2() {
  const HomeTextes = Texts.home;
  return (
    <>
      <NavbarUI />
      <section className="bg-gradient-to-b from-[#0f9ffe] from-30% via-[#077AED] via-45% to-[#06283B] h-[680px] to-95% relative">
        <section className='bgHome'>

          <section className='w-full h-1/2 container m-auto'>
            <article className="pt-24 font-normal text-center text-white flex flex-col justify-center">
              <h1 className="text-4xl">Anderson Carvalho</h1>
              <div className="flex flex-col justify-center w-full font-light text-2xl">
                <p className="">
                  Web and Software
                </p>
                <p>Developer</p>
              </div>
            </article>

            <article className="absolute bottom-10 flex w-full justify-center">
              <span className="animate__animated animate__slideOutDown animate__infinite">
                <IoArrowDown className='text-white w-6 h-6' />
              </span>
            </article>
          </section>

          <section className='w-full h-1/2 container m-auto'>
              <section className='mt-36 w-full flex flex-col justify-center items-center relative'>
                <article className='w-full absolute '>
                  <article className='w-full flex flex-col m-auto items-center justify-center text-white'>
                    <h2 className='text-2xl font-light'>Turning ideais</h2>
                    <p className='text-3xl font-normal'>into possibilities</p>
                  </article>
                </article>
                <Image src="/Iphone15.png" alt='iphone' className='pt-4' width={300} height={300} />
              </section>
            </section>
        </section>
        
          <article className='flex items-center justify-center container'>
            <Image src="/homePolygons.png" alt='' width={700} height={700} className='absolute bottom-10' />
          </article>
      </section>
    </>
  );
}
