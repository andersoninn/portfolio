import Image from 'next/image';

import { Texts } from '@/lib/Texts';
import Slider from './Slider';

export default function About2() {
  const AboutTexts = Texts.about;
  return (
    <>
      <section className='bgAbout min-w-screen max-h-56 -mt-[162px]'>
        <section className="pt-32" id='about2'>
          {/* <section className=" m-auto bg-[#222124] max-w-[1240px] h-[800px] flex flex-col justify-center items-center">
            <article className='h-24 w-screen absolute ' />
            {/*<Image src="/homePolygons.svg" alt='' width={700} height={700} className='absolute -top-[139px]' />*/}

          {/* <Image src="/aboutMacbooks.png" alt='' width={700} height={700} className='' /> */}

          {/* <h2 className='text-white'>ABOUT</h2> */}
          {/* <article className='absolute bottom-0 bg-white'>

            <Image src="/polygonFromBack.png" alt='' width={700} height={700} />
          </article> */}
          {/* <article className='absolute bottom-0'>
            <Slider />
          </article>
          </section> */}
        </section>
      </section>

    </>
  );
}
