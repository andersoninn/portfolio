import Image from 'next/image';

import { Texts } from '@/lib/Texts';
import Slider from './Slider';

export default function About2() {
  const AboutTexts = Texts.about;
  return (
    <>
      <section className="relative bg-[#222124]" id='about2'>
        <section className=" m-auto pb-10 max-w-[1240px] h-[800px] flex flex-col justify-center items-center">
          <article className='bg-[#222124] h-24 w-screen absolute -top-[69px]' />
          <Image src="/homePolygons.svg" alt='' width={700} height={700} className='absolute -top-[139px]' />

          <Image src="/aboutMacbooks.png" alt='' width={700} height={700} className='absolute -top-[190px]' />

          <h2 className='text-white'>ABOUT</h2>
          <article className='absolute bottom-0 bg-white'>

            <Image src="/polygonFromBack.png" alt='' width={700} height={700} />
          </article>
          <article className='absolute bottom-0'>
            <Slider />
          </article>
        </section>
      </section>
    </>
  );
}
