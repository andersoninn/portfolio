import Image from 'next/image';

import { Texts } from '@/lib/Texts';
import Slider from './Slider';

export default function About2() {
  const AboutTexts = Texts.about;
  return (
    <>
      <section className='bgAbout bg-center -mt-36 relative'>
        <section className='container m-auto w-[90%] min-h-[700px] h-screen flex justify-center items-center'>
          

            <article className='absolute bottom-0'>
              <Slider />
            </article>
       
        </section>
      </section>
    </>
  );
}
