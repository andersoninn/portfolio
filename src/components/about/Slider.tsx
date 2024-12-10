import React, { useState } from "react";
import "@/app/globals.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import TooltipUI from "../ui/TooltipUI";

export default function Slider() {
    const page = [1, 2];
    const data = ["HTML", "CSS", "JAVASCRIPT", "REACTJS", "BOOTSTRAP", "TAILWIND", "TYPESCRIPT", "NEXTJS"];
    const data2 = ["NODEJS", "MONGODB", "JAVA", "MYSQL", "SPRING", "HIBERNATE", "GIT"];
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
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
            <div className="navigation-wrapper relative w-[90%] m-auto">
                <div ref={sliderRef} className="keen-slider">
                    {page.map((_, i) => (
                        <div
                            key={i}
                            className={`keen-slider__slide number-slide${i} flex-col md:flex-row !min-w-full !max-w-full`}
                        >
                            <span className="flex justify-center items-center flex-wrap gap-1">
                                {(i === 0 ? data : data2).map((item, idx) => (
                                    <TooltipUI description={item} key={idx}>
                                        <Image
                                            src={`/skills/${item}.svg`}
                                            width={60}
                                            height={60}
                                            alt={item}
                                        />
                                    </TooltipUI>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {loaded && instanceRef.current && (
                <div className="dots ml-1">
                    {Object.keys(instanceRef.current.track.details.slides).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                instanceRef.current?.moveToIdx(i);
                            }}
                            className={"dot" + (currentSlide === i ? " active" : "")}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
