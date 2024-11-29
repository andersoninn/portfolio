import Image from "next/image";
import Iphone from "@/assets/image/home/iPhone15.png";
import { Texts } from "@/lib/Texts2";
import { text } from "stream/consumers";
import Link from "next/link";
import { IoArrowDown } from "react-icons/io5";

export default function IpnoneComponent() {
    const texts = Texts.home;
    return (
        <>
            <section className='m-auto animate__animated animate__fadeInUp'>
                <section className='mt-11 w-full flex flex-col justify-center items-center relative'>
                    <article className='w-full absolute top-28 '>
                        <article className='w-full flex flex-col m-auto items-center justify-center text-white'>
                            <h2 className='text-2xl font-light'>{texts.calToAction}</h2>
                            <p className='text-3xl font-normal'>{texts.subtitleCalToAction}</p>
                        </article>
                    </article>

                    <Image src={Iphone} alt='iphone' className='pt-4' width={300} height={300} />
                    <Link href="#about2" className="animate__animated animate__slideOutDown animate__infinite absolute bottom-48 flex w-full justify-center z-50">
                        <IoArrowDown className='text-white w-6 h-6' />
                    </Link>
                </section>
            </section>
        </>
    )
}

