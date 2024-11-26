'use client';
import 'animate.css';
import Image from 'next/image';
import { IoArrowDown } from "react-icons/io5";

import { Texts } from '@/lib/Texts';
import Link from 'next/link';
import NavbarUI from '../ui/NavbarUI';
import About2 from '../about/About2';
import IpnoneComponent from './IpnoneComponent';


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

            <Link href="#about2" className="animate__animated animate__slideOutDown animate__infinite absolute bottom-20 flex w-full justify-center z-50">
              <IoArrowDown className='text-white w-6 h-6' />
            </Link>
          </section>

          <IpnoneComponent />
        </section>

     
          
       
      </section>
    </>
  );
}
