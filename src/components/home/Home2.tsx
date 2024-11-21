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
      <section className="bg-gradient-to-b from-[#0f9ffe] from-10% via-[#077AED] via-20% to-[#06283B] to-90% h-screen">
        <section
          id="home"
          className="max-w-[1240px] flex flex-col justify-center items-center  m-auto h-1/2"
        >

          <article className="pt-[30%] font-normal text-center text-white flex flex-col justify-center">
            <h1 className="text-4xl">Anderson Carvalho</h1>
            <div className="flex flex-col justify-center w-full font-light text-2xl">
              <p className="">
                Web and Software
              </p>
              <p>Developer</p>
            </div>
          </article>




          <article className="absolute bottom-4 flex w-full justify-center">

            <span className="animate__animated animate__slideOutDown animate__infinite">
              <IoArrowDown className='text-white w-6 h-6' />
            </span>
          </article>
        </section>



        <section className='bg-green-500 w-screen h-1\2'>
          <section className='absolute bottom-10 w-full flex flex-col justify-center'>
            <article className='relative w-full'>
              <div className='absolute top-24 w-full flex flex-col m-auto items-center justify-center text-white'>
                <h2 className='text-2xl font-light'>Turning ideais</h2>
                <p className='text-3xl font-normal'>into possibilities</p>
              </div>
            </article>
            <Image src="/Iphone15.png" alt='' width={400} height={400} />
          </section>
        </section>
        <article className='flex items-center'>

          <Image src="/homePolygons.png" alt='' width={700} height={700} className='absolute bottom-0' />
        </article>
      </section>
    </>
  );
}
