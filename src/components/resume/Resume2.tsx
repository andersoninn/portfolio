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

export default function Resume2() {
   return (
      <>
         <section className="h-[840px] m-auto flex flex-col items-center relative container overflow-hidden">
            <section className="w-[95%] absolute top-[30%] left-[50%] flex items-center justify-center m-auto">
               {/* full square */}
               <section className=' -translate-x-1/2 flex flex-col justify-center items-center'>
                  <article className='flex flex-col items-center justify-center text-center w-[80%] -mb-4'>
                     <h2 className='font-semibold text-2xl'>Web Developer</h2>
                     <span className='space-y-2'>
                        <h3 className='font-normal'>End-to-end web development</h3>
                        <p>Development of projects in search of
                           validation of the user experience.</p>
                     </span>
                  </article>
                  <article>
                     <Image src="/diamond.png" alt='' width={600} height={600} className='' />
                  </article>
                  <section className='flex w-full -mt-[50%]'>
                     <article className='w-1/2 flex flex-col items-center justify-center text-center pr-2'>
                        <h2 className='font-semibold text-2xl'>UX/UI</h2>
                        <span className='space-y-2'>
                           <h3 className='font-normal'>Software prototyping</h3>
                           <p>Development of projects in search of
                              validation of the user experience.</p>
                        </span>
                     </article>
                     <article className='w-1/2 flex flex-col items-center justify-center text-center pl-2'>
                        <h2 className='font-semibold text-2xl'>Designer</h2>
                        <span className='space-y-2'>
                           <h3 className='font-normal'>Visual identity creation</h3>
                           <p>Development of visual identities that
                              reinforce the brand &apos;s
                              identity.</p>
                        </span>
                     </article>
                  </section>

               </section>

            </section>


            {/*
        <section className="w-full">
          <section className="w-[85%] pt-36 md:pt-32 pb-10 flex flex-col m-auto max-w-[1240px]">
            <section className="flex flex-col md:flex-row flex-wrap">
              {ProjectItens.map((e, i) => (
                <article key={i} className="m-auto flex flex-col items-center text-center gap-2 pb-12 max-w-[500px]">
                    <Image src={e.image} alt="" width={600} />
                    <h1 className="text-xl font-semibold">{e.nameOfProject}</h1>
                    <h2 className=" text-lg">{e.descriptionOfProject}</h2>
                    <Link href={e.oficialWebsite} target="_blank" className="flex gap-4 m-auto">
                      <Image src={iconLink} alt="" width={15} />
                      <span className="text-blue-600">{e.callToAction}</span>
                    </Link>
                  </article>
              ))}
            </section>
          </section>
        </section>
                    */}

            <section className="w-full h-16 absolute -top-8" id="projects" />
         </section>

      </>
   );
}
