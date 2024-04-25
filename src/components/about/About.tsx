import Image from 'next/image';

import Balance from 'react-wrap-balancer';

import AboutPictureArm from '@/assets/image/about/aboutPictureArm.svg';
import AboutPictureSocial from '@/assets/image/about/aboutPictureSocial.svg';
import DownloadCV from '@/assets/image/about/downloadCV.svg';
import Linkedin from '@/assets/image/about/linkedin.svg';
import Github from '@/assets/image/about/gitHub.svg';
import Gmail from '@/assets/image/about/gmail.svg';
import Instagran from '@/assets/image/about/instagran.svg';

import { Texts } from '@/lib/Texts';

export default function About() {
  const AboutTexts = Texts.about;
  return (
    <>
      <section className="divisionAbout" />
      <section className="relative">
        <section className=" m-auto pt-8 pb-10 max-w-[1240px]">
          <section className="w-[90%] m-auto md:w-full">
            <div className=" m-auto md:w-[85%]">
              <h1 className="text-brand-blueTitle text-2xl font-black text-center md:text-left md:text-3xl lg:text-4xl">
                &ldquo;{AboutTexts.titleH1} &rdquo;
                <span className="!text-base md:!text-lg lg:!text-xl block md:inline lg:block lg:pt-2">
                  &nbsp;{AboutTexts.titleSpan}
                </span>
              </h1>
            </div>
            <article className="m-auto mt-3 pt-8 flex flex-col-reverse items-start gap-5 w-[85%] md:flex-row md:gap-10 md:pt-0">
              <div className=" ">
                <Balance>
                  <p className="pt-4 text-center text-lg md:text-left lg:mr-[2%]">
                    {AboutTexts.decriptionFistPart}
                  </p>
                </Balance>
              </div>
              <Image
                src={AboutPictureArm}
                width={450}
                alt=""
                className="m-auto md:w-80 shadowImage float-right"
              />
            </article>
            {/* About me - Social */}
            <article className="m-auto mt-3 pt-8 flex flex-col items-start gap-5 w-[85%] md:flex-row md:gap-10 md:pt-0 ">
              <Image
                src={AboutPictureSocial}
                width={450}
                alt=""
                className="m-auto md:w-80 shadowImage"
              />

              <div className="pt-8">
                <Balance>
                  <p className=" text-center text-lg md:text-left lg:mr-[2%]">
                    {AboutTexts.decriptionSecondPart}
                  </p>
                </Balance>
                <aside className="flex justify-around items-center mt-6 m-auto ">
                  <a
                    className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                    href="https://www.linkedin.com/in/andersoninn/"
                    target="_blank"
                  >
                    <Image src={Linkedin} width={40} alt="" />
                  </a>
                  <a
                    className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                    href="https://github.com/andersoninn"
                    target="_blank"
                  >
                    <Image src={Github} width={40} alt="" />
                  </a>
                  <a
                    className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                    href="https://imgb.ifunny.co/images/40011437ff899cc50315b88587abcb53ab727eddcce359da89757af65955af1c_1.jpg"
                    target="_blank"
                  >
                    <Image src={DownloadCV} width={32} alt="" />
                  </a>
                  <a
                    className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                    href="https://mailto:andersoninnocencio17@gmail.com/"
                    target="_blank"
                  >
                    <Image src={Gmail} width={40} alt="" />
                  </a>
                  <a
                    className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                    href="https://www.instagram.com/anderson.inn/"
                    target="blank"
                  >
                    <Image src={Instagran} width={40} alt="" />
                  </a>
                </aside>
              </div>
            </article>
          </section>

          <section className="w-full h-16 absolute -top-8" id="about" />
        </section>
        <section className="divisionFooter" />
      </section>
    </>
  );
}
