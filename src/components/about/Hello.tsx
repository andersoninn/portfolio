import React from "react";
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Texts } from "@/lib/Texts";

export default function Hello() {
    const texts = Texts.en.about;

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "1000px 0px 0px 0px",
        threshold: 0.5,
    });

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
        <section
            ref={ref}
            className={`flex flex-col items-center relative max-h-[600px] `} // Oculta inicialmente
        >
            <Image
                src="/macbook.svg"
                alt="macbook"
                width={400}
                height={400}
                className="animate__animated animate__fadeInUp relative md:w-[600px] md:h-[600px]"
            />
            {inView && ( // Só renderiza a animação quando o componente estiver visível
                <motion.div
                    id="helloo"
                    className="absolute inset-0 flex items-center justify-center text-7xl md:text-9xl lg:text-[150px] font-bold text-white"
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
            )}
        </section>
    );
}
