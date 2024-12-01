import Image from 'next/image';
import Link from 'next/link';

import AboutPictureArm from '@/assets/image/about/aboutPictureArm.svg';
import AboutPictureSocial from '@/assets/image/about/aboutPictureSocial.svg';
import DownloadCV from '@/assets/image/about/downloadCV.svg';
import Linkedin from '@/contacts/linkedin.svg';
import Github from '@/assets/image/about/gitHub.svg';
import Gmail from '@/assets/image/about/gmail.svg';
import Instagran from '@/assets/image/about/instagran.svg';
import { Texts } from '@/lib/Texts2';

export default function Footer() {
  const texts = Texts.footer;
  return (
    <>
      <section className="w-full bg-blue-500 flex flex-col justify-center items-center relative">
        <article className="absolute -top-[160px] w-[90%] bg-[#141c3a] h-80 rounded-2xl flex flex-col gap-4 items-center justify-center p-6  text-center text-white ">
          <h2 className="font-semibold text-2xl">Start a project</h2>
          <p>
            Interested in working together? We should queue up a time to chat.
            I’ll buy the coffee.
          </p>
          <button className="py-2 px-6 rounded-full border border-cyan-500 text-xl">
            Let's do this
          </button>
        </article>
        <section>
          <article className="mt-[130px] py-16 container flex flex-col gap-8 m-auto w-[80%] text-white text-center">
            <p>Logo</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun.
            </p>

            <aside className="w-full flex justify-center items-center gap-4 m-auto ">
              {texts.contacts.map((e, i) => (
                <>
                  <Link
                    key={i}
                    className="w-12 h-12 rounded-full border border-white flex justify-center items-center  hover:border-blue-500 hover:bg-white hover:text-blue-500 shadow-md cursor-pointer "
                    href={e.href}
                    target="_blank"
                  >
                    {e.alt.slice(0, 3)}
                    {/* <Image src={e.image} height={40} width={40} alt={e.alt} /> */}
                  </Link>
                  {/* <Link
                    key={i}
                    className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                    href={e.href}
                    target="_blank"
                  >
                    <Image src={e.image} height={40} width={40} alt={e.alt} />
                  </Link> */}
                </>
              ))}
            </aside>
            <span className="text-white">Handcrafted by me &copy;</span>
          </article>
        </section>
      </section>
    </>
  );
}
