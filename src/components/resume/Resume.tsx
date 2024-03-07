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

export default function Resume() {
   return (
      <section
         className="bg-gradient-to-t from-gray-200 from-0% via-gray-200 via-90% to-gray-200 to-100% flex 
      m-auto relative overflow-hidden pb-10"
      >
         <section className="w-[90%] pt-8 pb-10  m-auto items-center md:items-start max-w-[1024px]">
            <article className="pb-4">
               <h2 className="text-brand-blue100 font-bold">Resume</h2>
               <h1 className="text-brand-blueTitle text-4xl font-black">
                  Personal Information
               </h1>
            </article>
            {/* PERSONAL INFORMATION */}
            <section className="flex m-auto justify-center items-center">
               <section className="p-5 bg-[#e0e1e4] rounded-lg flex flex-col gap-3 shadow-md ">
                  <article>
                     <section className="flex flex-col md:flex-row md:gap-20">
                        <article className="flex items-center">
                           <p className="font-bold pr-2 text-brand-blueTitle">
                              Name:
                           </p>
                           <p translate="no">Anderson Innocencio Carvalho</p>
                        </article>

                        <article className="flex items-center">
                           <p className="font-bold pr-2 text-brand-blueTitle">
                              Languages:
                           </p>
                           <p>Portuguese, English</p>
                        </article>
                     </section>
                     <section className="flex flex-col md:flex-row md:gap-12">
                        <article className="flex items-center">
                           <p
                              className="font-bold pr-2 text-brand-blueTitle"
                              translate="no"
                           >
                              Email:
                           </p>
                           <p>andersoninnocencio17@gmail.com</p>
                        </article>
                        <article className="flex items-center">
                           <p className="font-bold pr-2 text-brand-blueTitle">
                              Phone:
                           </p>
                           <p>+351 933 864 893</p>
                        </article>
                     </section>

                     <article className="items-start">
                        <p className="font-bold pr-2 text-brand-blueTitle ">
                           Education:
                        </p>
                        <section className="flex flex-col md:flex-row md:gap-6">
                           <article className="pb-2">
                              <li className="font-semibold ">
                                 Adolpho Bloch State Technical School
                              </li>
                              <span className="font-semibold">
                                 (FEB 2009 - NOV 2011)
                              </span>
                              <p>
                                 Secondary school with technical development.
                              </p>
                           </article>
                           <article>
                              <li className="font-semibold">
                                 Progression Technical School
                              </li>
                              <span className="font-semibold">
                                 (JAN 2015 - NOV 2015)
                              </span>
                              <p>Assembly and maintenance of computers.</p>
                           </article>
                        </section>
                     </article>
                  </article>
               </section>
            </section>

            {/* SKILL - TITLE */}
            <section className="pt-6 flex flex-col gap-6">
               <article>
                  <h1 className="text-brand-blueTitle text-4xl font-black relative">
                     Skills
                  </h1>
               </article>

               {/* SKILL - DESIGN */}
               <section className="flex m-auto relative" translate="no">
                  <section className="p-5 bg-[#e0e1e4] rounded-lg flex flex-col justify-center items-center gap-3 shadow-md z-10 md:w-[450px] w-[320px]">
                     <article className="flex flex-col gap-4 items-center text-lg font-extrabold text-brand-blueTitle w-full realtive">
                        <h2 translate="no">DESIGN</h2>

                        <h2>UX/UI DESIGN</h2>
                        <section className="flex justify-around w-full">
                           <article className="flex items-center">
                              <div className="w-10 rounded-lg bg-[#333333] shadow mr-2 flex items-center justify-center">
                                 <Image src={Figma} width={56} alt="" />
                              </div>
                              <p>Figma</p>
                           </article>

                           <article className=" flex items-center pl-4">
                              <div className="w-10 rounded-lg bg-[#011D36] shadow mr-2 flex items-center overflow-hidden">
                                 <Image src={Photoshop} width={56} alt="" />
                              </div>
                              <p>Photoshop</p>
                           </article>
                        </section>
                     </article>
                  </section>
                  <span className="absolute md:w-full -top-[25%] -right-[20%] md:left-0 md:flex md:justify-center">
                     <Image src={EllipseRight} width={100} alt="" />
                  </span>
               </section>

               <span className="relative flex items-center justify-center">
                  <Image
                     src={EllipseCenter}
                     width={200}
                     alt=""
                     className="absolute"
                  />
               </span>

               <section className="flex flex-col gap-6 md:flex-row m-auto relative">
                  <section
                     className="p-5 bg-[#e0e1e4] rounded-lg flex flex-col gap-3 shadow-md max-w-[450px] z-10 md:w-[300px] w-[320px]"
                     translate="no"
                  >
                     <article className="flex flex-col gap-4 justify-center items-center text-lg font-extrabold text-brand-blueTitle">
                        {/* SKILL - FRONT-END */}
                        <h2>FRONT-END</h2>
                        <section className="flex justify-between w-full ">
                           <article className="w-1/2 flex items-center">
                              <div className="w-10 rounded-lg mr-2">
                                 <Image
                                    src={Html}
                                    width={56}
                                    alt=""
                                    className="drop-shadow-lg min-w-10"
                                 />
                              </div>
                              <p>HTML</p>
                           </article>
                           <article className="w-1/2 flex items-center">
                              <div className="w-10 rounded-lg mr-2">
                                 <Image
                                    src={ReactJS}
                                    width={56}
                                    alt=""
                                    className="drop-shadow-lg min-w-10"
                                 />
                              </div>
                              <p>ReactJS</p>
                           </article>
                        </section>

                        <section className="flex justify-between w-full ">
                           <article className="w-1/2 flex items-center">
                              <div className="w-10 rounded-lg mr-2">
                                 <Image
                                    src={Css}
                                    width={56}
                                    alt=""
                                    className="drop-shadow-lg min-w-10"
                                 />
                              </div>
                              <p>CSS</p>
                           </article>
                           <article className="w-1/2 flex items-center">
                              <div className="w-10 rounded-lg mr-2">
                                 <Image
                                    src={Tailwind}
                                    width={56}
                                    alt=""
                                    className="drop-shadow-lg min-w-10"
                                 />
                              </div>
                              <p>Tailwind</p>
                           </article>
                        </section>

                        <section className="flex justify-between w-full ">
                           <article className="w-1/2 flex items-center">
                              <div className="w-10 rounded-lg mr-2">
                                 <Image
                                    src={JavaScript}
                                    width={56}
                                    alt=""
                                    className="drop-shadow-lg min-w-10"
                                 />
                              </div>
                              <p className="flex flex-col">
                                 <span> Java</span>
                                 <span className="-mt-2">Script</span>
                              </p>
                           </article>
                           <article className="w-1/2 flex items-center">
                              <div className="w-10 rounded-lg mr-2">
                                 <Image
                                    src={NextJS}
                                    width={56}
                                    alt=""
                                    className="drop-shadow-lg min-w-10"
                                 />
                              </div>
                              <p>NextJS</p>
                           </article>
                        </section>
                     </article>
                     <section className="flex justify-center w-full text-lg font-extrabold text-brand-blueTitle">
                        <article className="w-1/2 flex items-center">
                           <div className="w-10 rounded-lg mr-2">
                              <Image
                                 src={TypeScript}
                                 width={56}
                                 alt=""
                                 className="drop-shadow-lg min-w-10"
                              />
                           </div>
                           <p>TypeScript</p>
                        </article>
                     </section>
                  </section>
                  <section>
                     <span>
                        <Image
                           src={EllipseLeft}
                           width={100}
                           alt=""
                           className="absolute -left-[18%] -mt-4 md:-bottom-[15%] md:-left-[9%]"
                        />
                     </span>
                     <span>
                        <Image
                           src={EllipseRight}
                           width={100}
                           alt=""
                           className="absolute -right-[18%] -bottom-[7%] md:-bottom-[15%] md:-right-[9%]"
                        />
                     </span>
                  </section>
                  {/* SKILL - BACK-END */}
                  <section
                     className="p-5 bg-[#e0e1e4] rounded-lg flex flex-col gap-3 shadow-md max-w-[450px] z-10 md:w-[300px] w-[320px] text-lg font-extrabold text-brand-blueTitle"
                     translate="no"
                  >
                     <article className="flex flex-col gap-4 justify-center items-center">
                        <h2>BACK-END & MOBILE</h2>
                        <p className="-mt-4" translate="yes">
                           learning...
                        </p>
                        <section className="flex justify-center w-full ">
                           <article className="flex items-center">
                              <div className="w-10 rounded-lg mr-2">
                                 <Image
                                    src={ReactNative}
                                    width={56}
                                    alt=""
                                    className="drop-shadow-lg min-w-10"
                                 />
                              </div>
                              <p>ReactNative</p>
                           </article>
                        </section>

                        <section className="flex justify-between w-full ">
                           <article className="flex items-center">
                              <div className="w-10 rounded-lg mr-2">
                                 <Image
                                    src={JsNode}
                                    width={56}
                                    alt=""
                                    className="drop-shadow-lg min-w-10"
                                 />
                              </div>
                              <p>NodeJS</p>
                           </article>
                           <article className="flex items-center">
                              <div className="w-10 rounded-lg mr-2">
                                 <Image
                                    src={Express}
                                    width={56}
                                    alt=""
                                    className="drop-shadow-lg min-w-10"
                                 />
                              </div>
                              <p>Express</p>
                           </article>
                        </section>

                        <section className="flex justify-center w-full ">
                           <article className="flex items-center">
                              <div className="w-10 rounded-lg mr-2">
                                 <Image
                                    src={MongoDB}
                                    width={56}
                                    alt=""
                                    className="drop-shadow-lg min-w-10"
                                 />
                              </div>
                              <p>MongoDB</p>
                           </article>
                        </section>
                     </article>
                  </section>
               </section>
            </section>
         </section>

         <section className="w-full h-4 absolute -top-8" id="resume" />
      </section>
   );
}
