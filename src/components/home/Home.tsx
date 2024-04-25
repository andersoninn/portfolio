'use client';
import Image from 'next/image';
import HomeLinkedin from '@/assets/image/home/homeLinkedin.svg';
import HomeGitHub from '@/assets/image/home/homeGithub.svg';
import HomeCurriculum from '@/assets/image/home/homeCurriculum.svg';

import { Texts } from '@/lib/Texts';
import Link from 'next/link';

export default function Home() {
  const HomeTextes = Texts.home;
  return (
    <>
      <section className="bg-gradient-radial from-[#765599] from-10% via-[#5F4876] via-20% to-[#42384B] to-70%">
        <section
          id="home"
          className="flex justify-center m-auto pt-52 pb-52 w-[85%] md:w-[90%] md:pt-28 lg:w-full 
          max-w-[1240px]"
        >
          <article className="font-extrabold text-white text-6xl md:text-8xl md:w-[70%] lg:text-[150px]">
            <p className="text-medium md:text-lg font-normal">
              {HomeTextes.fistP}
              <span className="px-1">&#128075;</span>
              {HomeTextes.spanP}
            </p>
            <div className="flex items-center gap-3 md:gap-6">
              <h1>{HomeTextes.fistPartH1} </h1>
              <Link
                href="https://www.linkedin.com/in/andersoninn/"
                target="_blank"
              >
                <Image
                  src={HomeLinkedin}
                  alt="icon linkedin"
                  className="cursor-pointer w-7 h-7 rounded-sm hover:-mt-4 md:w-11 md:h-11 lg:w-14 lg:h-14"
                />
              </Link>
              <Link href="https://github.com/andersoninn" target="_blank">
                <Image
                  src={HomeGitHub}
                  alt="icon github"
                  className=" cursor-pointer w-8 h-8 rounded-sm hover:-mt-4 md:w-12 md:h-12 lg:w-16 lg:h-16"
                />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1SDZAkerO1x3os8qLwhNwPwVSK7NkO7b9/view"
                target="_blank"
              >
                <Image
                  src={HomeCurriculum}
                  alt="icon curriculum"
                  className=" cursor-pointer w-8 h-8 rounded-sm hover:-mt-4 md:w-12 md:h-12 lg:w-16 lg:h-16"
                />
              </Link>
            </div>

            <h1 className="">{HomeTextes.secondPartH1}</h1>
            <div className="flex w-full justify-end text-medium font-normal ">
              <p className="w-[80%] mr-5 text-end md:mr-12 md:text-lg md:max-w-[400px] lg:mr-12">
                {HomeTextes.description}
              </p>
            </div>
          </article>
        </section>
      </section>
      <section className="divisionHome" />
    </>
  );
}
