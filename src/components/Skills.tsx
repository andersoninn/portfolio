import Image from 'next/image';

export default function Skills() {
   return (
      <section
         className="bg-gradient-to-t from-gray-200 from-0% via-gray-200 via-90% to-gray-200 to-100% flex 
      m-auto relative"
      >
         <section className="w-[90%] m-auto pt-8 pb-10">
            <article className="pb-4">
               <h2 className="text-brand-blue100 font-bold">Resume</h2>
               <h1 className="text-brand-blueTitle text-4xl font-black">
                  Personal Information
               </h1>
            </article>
            {/* PERSONAL INFORMATION */}
            <section className="p-5 bg-gray-200 rounded-lg flex flex-col gap-3 shadow-md max-w-[450px]">
               <article>
                  <article className="flex items-center">
                     <p className="font-bold pr-2 text-brand-blueTitle">
                        Name:
                     </p>
                     <p>Anderson Innocencio Carvalho</p>
                  </article>
                  <article className="flex items-center">
                     <p className="font-bold pr-2 text-brand-blueTitle">
                        E-mail:
                     </p>
                     <p>andersoninnocencio17@gmail.com</p>
                  </article>
                  <article className="flex items-center">
                     <p className="font-bold pr-2 text-brand-blueTitle">
                        Phone:
                     </p>
                     <p>+351 933 864 893</p>
                  </article>
                  <article className="flex items-center">
                     <p className="font-bold pr-2 text-brand-blueTitle">
                        Languages:
                     </p>
                     <p>Portuguese, English</p>
                  </article>
                  <article className="items-start">
                     <p className="font-bold pr-2 text-brand-blueTitle ">
                        Education:
                     </p>
                     <article className="pb-2">
                        <li className="font-semibold">
                           Adolpho Bloch State Technical School
                        </li>
                        <span className="font-semibold">
                           (FEB 2009 - NOV 2011)
                        </span>
                        <p>Secondary school with technical development.</p>
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
                  </article>
               </article>
            </section>
            <section className="pt-6 flex flex-col gap-6">
               <article>
                  <h1 className="text-brand-blueTitle text-4xl font-black">
                     Hard Skills
                  </h1>
               </article>

               {/* HARD SKILL - DESIGN */}
               <section className="p-5 bg-gray-300 rounded-lg flex flex-col gap-3 shadow-md max-w-[450px]">
                  <article className="flex flex-col gap-4 items-center text-xl font-extrabold text-brand-blueTitle">
                     <h2>DESIGN</h2>

                     <h2>UX/UI DESIGN</h2>
                     <section className="flex justify-around w-full">
                        <article className="w-1/2  flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>Figma</p>
                        </article>

                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>Photophop</p>
                        </article>
                     </section>
                  </article>

                  {/* 
                       
                        
                     </section> */}
               </section>

               {/* HARD SKILL - FRONT-END */}
               <section className="p-5 bg-gray-300 rounded-lg flex flex-col gap-3 shadow-md max-w-[450px]">
                  <article className="flex flex-col gap-4 justify-center items-center text-xl font-extrabold text-brand-blueTitle">
                     <h2>FRONT-END</h2>
                     <section className="flex justify-between w-full ">
                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>HTML</p>
                        </article>
                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>JavaScript</p>
                        </article>
                     </section>

                     <section className="flex justify-between w-full ">
                        <article className="w-1/2  flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>CSS</p>
                        </article>
                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>ReactJS</p>
                        </article>
                     </section>

                     <section className="flex justify-between w-full ">
                        <article className="w-1/2  flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>Tailwind</p>
                        </article>
                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>NextJS</p>
                        </article>
                     </section>
                  </article>
               </section>

               {/* HARD SKILL - BACK-END */}
               <section className="p-5 bg-gray-300 rounded-lg flex flex-col gap-3 shadow-md max-w-[450px]">
                  <article className="flex flex-col gap-4 justify-center items-center text-xl font-extrabold text-brand-blueTitle">
                     
                     <h2>BACK-END & MOBILE</h2>
                     <section className="flex justify-center w-full ">
                        <article className="w-1/2 flex items-center">
                           <div className="min-w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>ReactNative</p>
                        </article>
                     </section>

                     <section className="flex justify-between w-full ">
                        <article className="w-1/2  flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>NodeJS</p>
                        </article>
                        <article className="w-1/2 flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>Express</p>
                        </article>
                     </section>

                     <section className="flex justify-center w-full ">
                        <article className="w-1/2  flex items-center">
                           <div className="w-14 h-14 rounded-lg bg-red-100 shadow mr-2"></div>
                           <p>MongoDB</p>
                        </article>
                     </section>
                  </article>
               </section>
            </section>
         </section>

         <section className="w-full h-16 absolute -top-8" id="about" />
      </section>
   );
}
