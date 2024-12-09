import React, { useState } from "react"
import '@/app/globals.css';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image";
import TooltipUI from "../ui/TooltipUI";

export default function Slider() {
    const page = [1, 2];
    const data = ["HTML", "CSS", "JAVASCRIPT", "REACTJS", "BOOTSTRAP", "TAILWIND", "TYPESCRIPT", "NEXTJS", "NODEJS", "MONGODB"]
    // const data = ["HTML", "CSS", "JAVASCRIPT", "REACTJS", "TAILWIND", "TYPESCRIPT","NEXTJS", "NODEJS", "MONGODB"]
    const data2 = ["JAVA", "MYSQL", "SPRING", "HIBERNATE", "GIT"]
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <div className="navigation-wrapper relative w-[90%] m-auto">
                <div ref={sliderRef} className="keen-slider">
                    {page.map((e, i) =>
                        <div key={i} className={`keen-slider__slide number-slide${i}  flex-col md:flex-row !min-w-full !max-w-full`}>

                            <span className="flex justify-center items-center flex-wrap">
                                {data.map((e) =>
                                    <TooltipUI description={e}>
                                        <Image key={i} src={`/skills/${e}.svg`} width={60} height={60} alt={e} />
                                    </TooltipUI>


                                )}
                            </span>

                            {/* <span className="flex">
                                {data.map((e) => <Image key={i} src={`/skills/${e}.svg`} width={60} height={60} alt={e} />
                                )}
                            </span> */}
                        </div>
                    )}
                </div>
            </div>

            {loaded && instanceRef.current && (
                <div className="dots ml-1">
                    {Object.keys(instanceRef.current.track.details.slides).map(
                        (_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(i)
                                }}
                                className={"dot" + (currentSlide === i ? " active" : "")}
                            />
                        )
                    )}
                </div>
            )}

        </>
    )
}
