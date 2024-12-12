import React, { useState, useMemo } from "react";
import "@/app/globals.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import TooltipUI from "../ui/TooltipUI";

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const skillsData = useMemo(() => [
        ["HTML", "CSS", "JAVASCRIPT", "REACTJS", "BOOTSTRAP", "TAILWIND", "TYPESCRIPT", "NEXTJS"],
        ["NODEJS", "MONGODB", "JAVA", "MYSQL", "SPRING", "HIBERNATE", "GIT"]
    ], []);

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
        <article>
            <div className="navigation-wrapper relative w-[90%] m-auto">
                <div ref={sliderRef} className="keen-slider">
                    {skillsData.map((skills, pageIndex) => (
                        <div
                            key={pageIndex}
                            className={`keen-slider__slide flex-col md:flex-row !min-w-full !max-w-full`}
                        >
                            <span className="flex justify-center items-center flex-wrap gap-1">
                                {skills.map((item, idx) => (
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
                <div className="dots">
                    {Object.keys(instanceRef.current.track.details.slides).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => instanceRef.current?.moveToIdx(i)}
                            className={`dot${currentSlide === i ? " active" : ""}`}
                        />
                    ))}
                </div>
            )}
        </article>
    );
}
