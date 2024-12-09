import React from "react";
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Texts } from "@/lib/Texts2";


export default function Helloo() {
    const texts = Texts.en.about;

    // Configuração para animar o texto
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const text = texts.title;

    // Variantes de animação para o texto
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
        <>
            <section className="flex flex-col items-center relative">

                <Image
                    src="/macbook.png "
                    alt="macbook"
                    width={400}
                    height={400}
                    className="top-0 animate__animated animate__fadeInUp relative"
                />
                <motion.div
                    id="helloo"
                    ref={ref}
                    className="absolute bottom-0 text-7xl md:text-[200px] font-bold text-white flex"
                >
                    {text.split('').map((letter, index) => (
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
        </>
    )
}