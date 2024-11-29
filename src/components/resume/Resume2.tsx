import Image from 'next/image';
import Figma from '@/assets/image/resume/figma.svg';
import Photoshop from '@/assets/image/resume/photoshop.svg';
import Html from '@/assets/image/resume/html5.svg';
import Css from '@/assets/image/resume/css3.svg';
import JavaScript from '@/assets/image/resume/javaScript.svg';
import ReactJS from '@/assets/image/resume/react.svg';
import Tailwind from '@/assets/image/resume/tailwind.svg';
import TypeScript from '@/assets/image/resume/typeScript.svg';
import NextJS from '@/assets/image/resume/nextJS.svg';
import ReactNative from '@/assets/image/resume/reactNative.svg';
import JsNode from '@/assets/image/resume/nodeJS.svg';
import Express from '@/assets/image/resume/express.svg';
import MongoDB from '@/assets/image/resume/mogoDB.svg';

import EllipseRight from '@/assets/image/resume/ellipses/ellipseRight.svg';
import EllipseLeft from '@/assets/image/resume/ellipses/ellipseLeft.svg';
import EllipseCenter from '@/assets/image/resume/ellipses/ellipseCenter.svg';
import Slider from '../about/Slider';
import { Texts } from '@/lib/Texts2';

export default function Resume2() {
   const texts = Texts.resume;
   return (
      <>
         <section className="h-[700px] m-auto flex flex-col items-center relative container overflow-hidden">
            <section className="w-[95%] absolute top-[25%] left-[50%] flex items-center justify-center m-auto">
               {/* full square */}
               <section className=' -translate-x-1/2 flex flex-col justify-center items-center'>
                  <article className='flex flex-col items-center justify-center text-center w-[80%] -mb-4'>
                     <h2 className='font-semibold text-2xl'>{texts.top.title}</h2>
                     <span className='space-y-2'>
                        <h3 className='font-normal'>{texts.top.subtitle}</h3>
                        <p>{texts.top.description}</p>
                     </span>
                  </article>
                  <article>
                     <Image src="/diamond.png" alt='' width={600} height={600} className='' />
                  </article>
                  <section className='flex w-full -mt-[50%]'>
                     <article className='w-1/2 flex flex-col items-center justify-center text-center pr-2'>
                        <h2 className='font-semibold text-2xl'>{texts.left.title}</h2>
                        <span className='space-y-2'>
                           <h3 className='font-normal'>{texts.left.subtitle}</h3>
                           <p>{texts.left.description}</p>
                        </span>
                     </article>
                     <article className='w-1/2 flex flex-col items-center justify-center text-center pl-2'>
                        <h2 className='font-semibold text-2xl'>{texts.right.title}</h2>
                        <span className='space-y-2'>
                           <h3 className='font-normal'>{texts.right.subtitle}</h3>
                           <p>{texts.right.description}</p>
                        </span>
                     </article>
                  </section>

               </section>

            </section>

            <section className="w-full h-16 absolute -top-8" id="projects" />
         </section>

      </>
   );
}
