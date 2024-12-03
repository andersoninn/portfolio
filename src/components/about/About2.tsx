import Image from 'next/image';

import { Texts } from '@/lib/Texts';
import Slider from './Slider';

export default function About2() {
  const AboutTexts = Texts.about;
  return (
    <>
      <section className='bgAbout bg-center -mt-40 relative'>

        <section className='container m-auto w-[90%] min-h-[700px] flex justify-center items-center py-56'>
          <Image src="/aboutMacbooks.png" width={400} height={400} alt="" className='absolute -top-20  text-center' />

          {/* <section className='flex flex-col gap-6 items-center justify-center text-white'>
            <article className='w-60 h-60 rounded-full bg-white flex items-center justify-center text-black'>image</article>
            <article className='text-center w-[80%]'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <section className='flex font-bold'>
                <article>a</article>
                <article>b</article>
                <article>c</article>
              </section>
            </article>
          </section> */}

          <article className='absolute bottom-0'>
            <Slider />
          </article>

        </section>
      </section>
    </>
  );
}
