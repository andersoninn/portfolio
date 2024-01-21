import Image from 'next/image';
import { PiChatsTeardropDuotone } from 'react-icons/pi';
import HomePicture from '@/assets/image/home/homePicture.svg';

// Adjust in navbar -sticky
// Adjust in gradiente bg (Home to About/ About to Projects)

export default function Page() {
  return (
    <section className="container m-auto pt-20 max-w-[1180px] px-24">
      <section className="container m-auto flex ">
        <article className="w-1/2">
          <h1 className="text-brand-blueTitle text-8xl font-bold">
            Hey, I&apos;m a
            <span className="text-brand-blue100 block">Front-End</span>
            <span className="block">Developer</span>
          </h1>
          <p className="pt-4 pl-2">
            My name is{' '}
            <span className="text-brand-blueTitle hover:text font-bold">
              {' '}
              Anderson Carvalho.
            </span>
          </p>
          <p className="pl-2">
            Former Special Infantry soldier shifting to programming in Portugal.
            Committed to growth, eager to contribute and enhance my skills with
            a new team.
          </p>
          <aside className="flex gap-9 p-2">
            <button
              className="mt-6 text-white font-bold bg-brand-blue100 w-36 py-2 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-white hover:bg-brand-blue200"
            >
              Hire Me!
            </button>
            <button
              className="mt-6 text-brand-blue100 font-bold bg-white w-36 py-2 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-sky-400 flex gap-1 justify-center items-center"
            >
              <PiChatsTeardropDuotone
                width={10}
                className="text-brand-blue100 "
              />
              Let&apos;s Chat
            </button>
          </aside>
        </article>
        <article className="flex-1 relative">
          <Image src={HomePicture} fill sizes="width:100%" alt="" />
        </article>
      </section>
    </section>
  );
}
