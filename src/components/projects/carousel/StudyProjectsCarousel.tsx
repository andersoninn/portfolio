import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';

import { useProjects } from '@/store/useProjects';
import {
   ImageStudyProject,
   ImageStudyProjectProps,
} from '@/context/DataStudyProjects';

export default function StudyProjectsCarousel() {
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

   const { studyProjects, setActiveStudyProjects } = useProjects();

   useEffect(() => {
      setActiveStudyProjects(currentSlide);
   }, [currentSlide]);

   return (
      <>
         <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
               {studyProjects.map((e) => (
                  <div
                     className="keen-slider__slide number-slide1"
                     key={e.image}
                  >
                     {
                        ImageStudyProject[
                           e.image as keyof ImageStudyProjectProps
                        ]
                     }
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
