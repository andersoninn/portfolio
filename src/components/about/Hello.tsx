import React from "react";
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Texts } from "@/lib/Texts2";


export default function Hello() {
    const texts = Texts.en.about;

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const text = texts.title;

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: 'easeOut',
            },
        }),
    };
    return (
        <section className="flex flex-col items-center relative max-h-[600px] md:-translate-y-1/2 lg:-translate-y-1/3">
            <Image
                src="/macbook.svg"
                alt="macbook"
                width={400}
                height={400}
                className="top-0 animate__animated animate__fadeInUp relative md:w-[1200px] md:h-[1200px]"
            />
            <motion.div
                id="helloo"
                ref={ref}
                className="absolute bottom-0 md:inset-y-1/2 flex items-center justify-center text-7xl md:text-9xl lg:text-[200px] font-bold text-white"
            >
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
}