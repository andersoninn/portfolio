import Image from 'next/image';

import InstGenesisCard from '@/assets/image/projects/carousel/instGenesisCard.svg';
import LegacyChurchCard from '@/assets/image/projects/carousel/legacyChurchCard.svg';
import GetAlongLCCard from '@/assets/image/projects/carousel/getAlongCard.svg';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';

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
                className={'dot' + (currentSlide === i ? ' active' : '')}
              ></button>
            )
          )}
        </div>
      )}
    </>
  );
}

// function Arrow(props: {
//    disabled: boolean;
//    left?: boolean;
//    onClick: (e: any) => void;
// }) {
//    const disabled = props.disabled ? ' arrow--disabled' : '';
//    return (
//       <svg
//          onClick={props.onClick}
//          className={`arrow ${
//             props.left ? 'arrow--left' : 'arrow--right'
//          } ${disabled}`}
//          xmlns="http://www.w3.org/2000/svg"
//          viewBox="0 0 24 24"
//       >
//          {props.left && (
//             <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//          )}
//          {!props.left && (
//             <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//          )}
//       </svg>
//    );
//    {
//       /* <div className="flex-1 h-48 flex gap-6 justify-center items-end rounded-lg group/card1 overflow-hidden relative hover:opacity-90">
//             <Image
//                src={CardImage}
//                alt=""
//                className="absolute group-hover/card1:blur-[2px]"
//             />
//             <section className="bg-gray-400/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 translate-y-12 group-hover/card1:translate-y-0 transition-transform duration-200 ease-in-out hover:bg-gray-300/50">
//                <FaRegEye className="text-gray-200 w-5 h-5" />
//             </section>
//             <section className="bg-gray-400/40 w-8 h-8 rounded-lg flex items-center justify-center mb-3 translate-y-12 group-hover/card1:translate-y-0 transition-transform duration-200 ease-in-out hover:bg-gray-300/50">
//                <IoCodeSlash className="text-gray-200 w-5 h-5" />
//             </section>
//          </div> */
//    }
// }
