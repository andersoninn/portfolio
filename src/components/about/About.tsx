import Image from 'next/image';

import AboutPictureArm from '@/assets/image/about/aboutPictureArm.svg';
import AboutPictureSocial from '@/assets/image/about/aboutPictureSocial.svg';
import Elipses from '@/assets/image/about/aboutElipses.svg';
import DownloadCV from '@/assets/image/contacts/downloadCV.svg';
import Linkedin from '@/assets/image/contacts/linkedin.svg';
import Github from '@/assets/image/contacts/gitHub.svg';
import Gmail from '@/assets/image/contacts/gmail.svg';
import Instagran from '@/assets/image/contacts/instagran.svg';

import PolygonLeft from '@/assets/image/about/aboutPolygons.svg';
import PolygonRight from '@/assets/image/about/aboutPolygons.svg';

export default function About() {
  return (
    <>
      <section className="m-auto relative ">
        <section className="w-[90%] m-auto pt-8 pb-10 max-w-[1024px]">
          <section className="">
            <article className="m-auto mt-3 flex flex-col md:flex-row-reverse w-[85%] ">
              <Image
                src={AboutPictureArm}
                width={450}
                alt=""
                className="m-auto md:w-64 md:ml-5 shadowImage"
              />
              <div className="pt-8">
                <h1 className="text-brand-blueTitle text-2xl font-black text-center md:text-left">
                  <span>&ldquo;Discipline love and courage&nbsp;</span>
                  are the motors of success&rdquo;
                </h1>
                <p className=" text-center text-lg md:text-left lg:mr-[2%]">
                  As a former military professional, I excelled as the Secretary
                  to the Director of Aircraft, securing the second position in
                  my class. I made significant contributions in the Special
                  Infantry Battalion of Galeão, leading critical peacekeeping
                  missions and implementing operational regulations that
                  continue to endure. Opting for a move to Portugal in pursuit
                  of a life away from violence marked a significant turning
                  point. Currently, I am dedicatedly studying programming to
                  ensure a successful career transition, showcasing my
                  commitment to promising challenges and continuous growth.
                </p>
              </div>
            </article>
            {/* About me - Social */}
            <article className="m-auto mt-3 flex flex-col md:flex-row w-[85%]">
              <Image
                src={AboutPictureSocial}
                width={450}
                alt=""
                className="m-auto md:w-64 md:mr-8 shadowImage flex-1"
              />

              <div className="pt-8">
                <h1 className="text-brand-blueTitle text-2xl font-black text-center md:text-left">
                  <span>&ldquo;Discipline love and courage&nbsp;</span>
                  are the motors of success&rdquo;
                </h1>
                <p className=" text-center text-lg md:text-left lg:mr-[2%]">
                  As a former military professional, I excelled as the Secretary
                  to the Director of Aircraft, securing the second position in
                  my class. I made significant contributions in the Special
                  Infantry Battalion of Galeão, leading critical peacekeeping
                  missions and implementing operational regulations that
                  continue to endure. Opting for a move to Portugal in pursuit
                  of a life away from violence marked a significant turning
                  point. Currently, I am dedicatedly studying programming to
                  ensure a successful career transition, showcasing my
                  commitment to promising challenges and continuous growth.
                </p>
              </div>
            </article>

            {/* </section>
          <aside className="flex justify-around items-center mt-6 m-auto md:mt-10">
            <a
              className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30"
              href="https://www.linkedin.com/in/andersoninn/"
              target="_blank"
            >
              <Image src={Linkedin} width={40} alt="" />
            </a>
            <a
              className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30"
              href="https://github.com/andersoninn"
              target="_blank"
            >
              <Image src={Github} width={40} alt="" />
            </a>
            <a
              className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30"
              href="https://imgb.ifunny.co/images/40011437ff899cc50315b88587abcb53ab727eddcce359da89757af65955af1c_1.jpg"
              target="_blank"
            >
              <Image src={DownloadCV} width={40} alt="" />
            </a>
            <a
              className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30"
              href="https://mailto:andersoninnocencio17@gmail.com/"
              target="_blank"
            >
              <Image src={Gmail} width={40} alt="" />
            </a>
            <a
              className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30"
              href="https://www.instagram.com/anderson.inn/"
              target="blank"
            >
              <Image src={Instagran} width={40} alt="" />
            </a>
          </aside>
          <article className="flex justify-between items-center pt-14">
            <Image
              src={PolygonLeft}
              width={70}
              alt=""
              className="absolute bottom-10 left-0"
            />
            <Image
              src={PolygonRight}
              width={70}
              alt=""
              className="absolute bottom-10 right-0"
            />
  </article>*/}
          </section>

          <section className="w-full h-16 absolute -top-8" id="about" />
        </section>
      </section>
    </>
  );
}
