import Image from 'next/image';

import InstGenesisCard from '@/assets/image/projects/carousel/instGenesisCard.svg';
import LegacyChurchCard from '@/assets/image/projects/carousel/legacyChurchCard.svg';
import GetAlongLCCard from '@/assets/image/projects/carousel/getAlongCard.svg';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import { useProjects } from '@/store/useProjects';

export default function Carousel() {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [loaded, setLoaded] = useState(false);
   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      slides: {
         perView: 1,
      },
      initial: 0,

      slideChanged(slider) {
         setCurrentSlide(slider.track.details.rel);
      },
      created() {
         setLoaded(true);
      },
   });

   const { realProjects } = useProjects();

   useEffect(() => {
      console.log(realProjects)
   }, [realProjects]);

   return (
      <>
         <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
               <div className="keen-slider__slide number-slide1">
                  <Image src={InstGenesisCard} width={330} alt="" />
               </div>
               <div className="keen-slider__slide number-slide2">
                  <Image src={LegacyChurchCard} width={330} alt="" />
               </div>
               <div className="keen-slider__slide number-slide3">
                  <Image src={GetAlongLCCard} width={330} alt="" />
               </div>
            </div>
         </div>
         {loaded && instanceRef.current && (
            <div className="dots">
               {Object.keys(instanceRef.current.track.details.slides).map(
                  (idx, i) => (
                     <button
                        key={idx}
                        onClick={() => {
                           instanceRef.current?.moveToIdx(i);
                        }}
                        className={
                           'dot' + (currentSlide === i ? ' active' : '')
                        }
                     ></button>
                  )
               )}
            </div>
         )}
      </>
   );
}
