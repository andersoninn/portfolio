// import React from 'react';
// import Image from 'next/image';
// import { motion, useAnimation } from 'framer-motion';
// import { Texts } from '@/lib/Texts2';
// import Slider from './Slider';
// import { useInView } from 'react-intersection-observer';

// export default function About2() {
//   const texts = Texts.en.about;

//   // Configuração para animar o texto
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true });

//   React.useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   const text = texts.title;

//   // Variantes de animação para o texto
//   const variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.5,
//         ease: 'easeOut',
//       },
//     }),
//   };

//   return (
//     <>
//       <section className="bgAbout relative overflow-x-hidden">
//         <section className="cointainer m-auto w-[90%] min-h-[700px] flex justify-center items-center md:pt-56 md:pb-12">
//           {/* Texto animado */}
//           <motion.div
//             id="helloo"
//             ref={ref}
//             className="absolute top-20 text-7xl md:text-[200px] font-bold text-black flex"
//           >
//             {text.split('').map((letter, index) => (
//               <motion.span
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 animate={controls}
//                 variants={variants}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//           </motion.div>

//           <section className="flex flex-col justify-center items-center mt-4 md:mt-36 max-w-[900px]">
//             <div className="w-[300px] h-[300px] rounded-full mt-44 bg-gray-100 flex items-center justify-center md:mt-2">
//               <span>minha foto </span>
//             </div>
//             <p className="mt-12 lg:mt-24 text-gray-800 text-center text-lg md:text-xl">
//               {texts.decription}
//             </p>
//             <article className="w-full flex flex-col justify-end items-end mt-16 text-lg">
//               <motion.div
//                 initial={{ backgroundColor: '#2d3748' }}
//                 whileHover={{
//                   backgroundColor: ['#dfdf65', '#20575d'],
//                   transition: { duration: 0.5, ease: 'easeInOut' },
//                 }}
//                 animate={{
//                   backgroundColor: '#2d3748',
//                   transition: { duration: 0.5, ease: 'easeInOut' },
//                 }}
//                 className="bg-gray-800 absolute -left-0 -translate-x-1/2 w-32 h-32 md:w-44 md:h-44 rounded-full"
//               />

//               <span>
//                 <p className="text-gray-800 md:text-xl">{texts.span1}</p>
//                 <p className="text-gray-800 md:text-xl mb-12">{texts.span2}</p>
//               </span>
//             </article>
//           </section>
//         </section>
//       </section>
//     </>
//   );
// }
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { Texts } from '@/lib/Texts2';
import Slider from './Slider';
import { useInView } from 'react-intersection-observer';
import Helloo from './Helloo';

export default function About2() {
  const texts = Texts.en.about;

  return (
    <>
      <section className="bgAbout -mt-72 relative overflow-x-hidden">
        <section className="cointainer m-auto w-[90%] min-h-[700px] flex flex-col justify-center items-center md:pt-56 md:pb-12">
          <Helloo />
          <section className="flex -mt-24 flex-col justify-center items-center md:mt-36 max-w-[900px]">
            <div className="w-[250px] h-[250px] rounded-full mt-44 bg-gray-100 flex items-center justify-center md:mt-2">
              <span>minha foto </span>
            </div>
            <p className="mt-24 lg:mt-24 text-white text-center text-lg md:text-xl">
              {texts.decription}
            </p>
            <article className="w-full flex flex-col justify-end items-center my-20 text-lg text-white">
              <span>
                <p className="md:text-xl">{texts.span1}</p>
              </span>
            </article>
            <Slider />
          </section>
        </section>
      </section>
    </>
  );
}
