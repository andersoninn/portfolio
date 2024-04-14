'use client';
import Image from 'next/image';
import { PiChatsTeardropDuotone } from 'react-icons/pi';
import HomeLinkedin from '@/assets/image/home/homeLinkedin.svg';
import HomeGitHub from '@/assets/image/home/homeGithub.svg';
import HomeCurriculum from '@/assets/image/home/homeCurriculum.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="bg-gradient-radial from-[#765599] from-10% via-[#5F4876] via-20% to-[#42384B] to-70%">
        <section
          id="home"
          className="flex justify-center m-auto pt-52 pb-52 w-[85%] md:w-[90%] md:pt-28 lg:w-full 
          max-w-[1240px]"
        >
          <article className="font-extrabold text-white text-6xl md:text-8xl md:w-[70%] lg:text-[150px]">
            <p className="text-sm md:text-lg font-normal">
              Olá!
              <span className="px-1">&#128075;</span>
              Eu sou o Anderson
            </p>
            <div className="flex items-center gap-3 md:gap-6">
              <h1>REACT </h1>
              <a href="#">
                <Image
                  src={HomeLinkedin}
                  alt="icon linkedin"
                  className=" w-7 h-7 rounded-sm hover:-mt-4 md:w-11 md:h-11 lg:w-14 lg:h-14"
                />
              </a>
              <a href="#">
                <Image
                  src={HomeGitHub}
                  alt="icon github"
                  className="w-8 h-8 rounded-sm hover:-mt-4 md:w-12 md:h-12 lg:w-16 lg:h-16"
                />
              </a>
              <a href="#">
                <Image
                  src={HomeCurriculum}
                  alt="icon curriculum"
                  className="w-8 h-8 rounded-sm hover:-mt-4 md:w-12 md:h-12 lg:w-16 lg:h-16"
                />
              </a>
            </div>

            <h1 className="">DEVELOPER</h1>
            <div className="flex w-full justify-end text-sm font-normal ">
              <p className="w-[80%] mr-3 md:mr-12 md:text-lg md:max-w-[400px] md:text-end">
                Tenho 32 anos, sou desenvolvedor frontend com experiência como
                freelancer.
              </p>
            </div>
          </article>
        </section>
      </section>
      <section className="division1" />
    </>
  );
}

{
  /* <section
        id="home"
        className="flex justify-center m-auto pt-80 pb-14 w-full overflow-x-hidden max-w-[1024px]"
      >
        <article className="-mt-4 w-[90%] lg:w-full">
          <Image
            src={HomeEllipse}
            width={100}
            alt=""
            className="-left-20 top-24 absolute"
          />
          <section className="relative">
            {/* <h1 className="text-brand-blueTitle text-7xl max-[360px]:text-6xl font-bold flex flex-col text-wrap lg:mx-[2%]">
                     <article className="flex flex-col md:flex-row">
                        <span className="w-40 ">Hey,</span>
                        <span>I&apos;m</span>
                     </article>
                     <span className="text-brand-blue100" translate="no">
                        Front-End
                     </span>
                     <span translate="no">Developer </span>
                  </h1> 
            <h1
              className="text-brand-blueTitle text-7xl max-[360px]:text-6xl font-bold flex flex-col text-wrap lg:mx-[2%]"
              translate="no"
            >
              <article className="flex flex-col md:flex-row text-brand-blue100">
                <span className="pr-4"> Front</span>
                <span>End</span>
              </article>
              <span>Developer </span>
            </h1>
            <Image
              src={HomePicture}
              alt=""
              className="absolute w-80 -top-60 left-36 
                     md:2/4 md:-top-10 md:left-[60%]
                     lg:w-2/4 lg:lg:-top-64 lg:left-[50%]"
            />
          </section>
          <p className="pt-4 pl-2 md:text-medium text-lg lg:mx-[2%]">
            My name is&nbsp;
            <span className="text-brand-blueTitle hover:text font-bold md:text-medium text-lg">
              Anderson Carvalho.
            </span>
          </p>
          <p className="pl-2 md:text-medium text-lg md:w-3/5 lg:w-3/5 lg:mx-[2%] lg:pr-20">
            Former Special Infantry soldier shifting to programming in Portugal.
            Committed to growth, eager to contribute and enhance my skills with
            a new team.
          </p>
          <aside className="flex justify-around p-2 md:w-2/3">
            <button
              className="mt-6 text-white bg-brand-blue100 font-bold min-w-40 py-2 rounded-lg shadow
                  shadow-brand-blue100"
            >
              <a href="#resume">Hire Me!</a>
            </button>
            <button
              className="mt-6 text-brand-blue100 font-bold min-w-40 py-2 rounded-lg shadow
                   shadow-brand-blue100"
            >
              <a
                href="https://wa.me/351933864893"
                target="_blank"
                className="flex gap-1 justify-center items-center"
              >
                <PiChatsTeardropDuotone
                  width={10}
                  className="text-brand-blue100 "
                />
                Let&apos;s Chat
              </a>
            </button>
          </aside>
        </article>
      </section> */
}
