import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';

import { useProjects } from '@/store/useProjects';
import {
   ImageRealProject,
   ImageRealProjectProps,
} from '@/context/DataRealProjects';

export default function RealProjectsCarousel() {
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

   const { realProjects, setActiveRealProjects } = useProjects();

   useEffect(() => {
      setActiveRealProjects(currentSlide);
   }, [currentSlide]);

   return (
      <>
         <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
               {realProjects.map((e) => (
                  <div
                     className="keen-slider__slide number-slide1"
                     key={e.image}
                  >
                     {ImageRealProject[e.image as keyof ImageRealProjectProps]}
                  </div>
               ))}
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
