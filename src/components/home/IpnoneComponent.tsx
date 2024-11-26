import Image from "next/image";
import Iphone from "@/assets/image/home/iPhone15.svg";

export default function IpnoneComponent() {
    return (
        <>
            <section className='w-full h-1/2 container m-auto animate__animated animate__fadeInUp'>
                <section className='mt-36 w-full flex flex-col justify-center items-center relative'>
                    <article className='w-full absolute '>
                        <article className='w-full flex flex-col m-auto items-center justify-center text-white'>
                            <h2 className='text-2xl font-light'>Turning ideais</h2>
                            <p className='text-3xl font-normal'>into possibilities</p>
                        </article>
                    </article>
                    <Image src={Iphone} alt='iphone' className='pt-4 ' width={300} height={300} />
                </section>
            </section>
        </>
    )
}

