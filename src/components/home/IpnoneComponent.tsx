import Image from "next/image";
import Iphone from "@/assets/image/home/iPhone15.svg";
import { Texts } from "@/lib/Texts2";
import { text } from "stream/consumers";

export default function IpnoneComponent() {
    const texts = Texts.home;
    return (
        <>
            <section className='w-full h-1/2 container m-auto animate__animated animate__fadeInUp'>
                <section className='mt-11 w-full flex flex-col justify-center items-center relative'>
                    <article className='w-full absolute '>
                        <article className='w-full flex flex-col m-auto items-center justify-center text-white'>
                            <h2 className='text-2xl font-light'>{texts.calToAction}</h2>
                            <p className='text-3xl font-normal'>{texts.subtitleCalToAction}</p>
                        </article>
                    </article>
                    <Image src={Iphone} alt='iphone' className='pt-4 ' width={300} height={300} />


                </section>
            </section>
        </>
    )
}

