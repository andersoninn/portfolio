import Link from 'next/link';
import { TfiLinkedin } from "react-icons/tfi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiSolidDownload } from "react-icons/bi";

import { Texts } from '@/lib/Texts2';

export default function Footer() {
  const texts = Texts.footer;
  return (
    <>
      <section className="w-full bg-gradient-to-b from-cyan-500 to-blue-500 flex flex-col justify-center items-center relative">
        <article className="absolute -top-[160px] w-[90%] bg-[#141c3a] h-80 rounded-2xl flex flex-col gap-4 items-center justify-center p-6  text-center text-white ">
          <h2 className="font-semibold text-2xl">Start a project</h2>
          <p>
            Interested in working together? We should queue up a time to chat.
            I&#8216; ll buy the coffee.
          </p>
          <button className="py-2 px-6 rounded-full border border-cyan-500 text-xl">
            Let&#8216; s do this
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
                    {e.alt === 'linkedin' && <TfiLinkedin className='w-5 h-5' />}
                    {e.alt === 'github' && <BiLogoGithub className='w-6 h-6' />}
                    {e.alt === 'curriculum' && <BiSolidDownload className='w-6 h-6' />}
                    {e.alt === 'gmail' && <BiLogoGmail className='w-5 h-5' />}
                    {e.alt === 'whatsapp' && <BiLogoWhatsapp className='w-6 h-6' />}

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
