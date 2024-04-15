'use client';
import Image from 'next/image';
import HomeLinkedin from '@/assets/image/home/homeLinkedin.svg';
import HomeGitHub from '@/assets/image/home/homeGithub.svg';
import HomeCurriculum from '@/assets/image/home/homeCurriculum.svg';

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
              <a
                href="https://www.linkedin.com/in/andersoninn/"
                target="_blank"
              >
                <Image
                  src={HomeLinkedin}
                  alt="icon linkedin"
                  className="cursor-pointer w-7 h-7 rounded-sm hover:-mt-4 md:w-11 md:h-11 lg:w-14 lg:h-14"
                />
              </a>
              <a href="https://github.com/andersoninn" target="_blank">
                <Image
                  src={HomeGitHub}
                  alt="icon github"
                  className=" cursor-pointerw-8 h-8 rounded-sm hover:-mt-4 md:w-12 md:h-12 lg:w-16 lg:h-16"
                />
              </a>
              <a
                href="https://imgb.ifunny.co/images/40011437ff899cc50315b88587abcb53ab727eddcce359da89757af65955af1c_1.jpg"
                target="_blank"
              >
                <Image
                  src={HomeCurriculum}
                  alt="icon curriculum"
                  className=" cursor-pointerw-8 h-8 rounded-sm hover:-mt-4 md:w-12 md:h-12 lg:w-16 lg:h-16"
                />
              </a>
            </div>

            <h1 className="">DEVELOPER</h1>
            <div className="flex w-full justify-end text-sm font-normal ">
              <p className="w-[80%] mr-5 text-end md:mr-12 md:text-lg md:max-w-[400px] lg:mr-12">
                Tenho 32 anos, sou desenvolvedor frontend atuando como
                freelancer.
              </p>
            </div>
          </article>
        </section>
      </section>
      <section className="divisionHome" />
    </>
  );
}
