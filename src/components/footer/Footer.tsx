import Image from "next/image";
import Link from "next/link";

import AboutPictureArm from '@/assets/image/about/aboutPictureArm.svg';
import AboutPictureSocial from '@/assets/image/about/aboutPictureSocial.svg';
import DownloadCV from '@/assets/image/about/downloadCV.svg';
import Linkedin from '@/contacts/linkedin.svg';
import Github from '@/assets/image/about/gitHub.svg';
import Gmail from '@/assets/image/about/gmail.svg';
import Instagran from '@/assets/image/about/instagran.svg';


export default function Footer() {

    return (
        <>
            <section className="w-full bg-[#222124]">

                <article className="py-16 container flex flex-col gap-8 m-auto w-[90%] text-white">
                    <article className="relative">
                        <h2>
                            <span className="text-3xl absolute -top-2 -left-3"> &ldquo;</span>
                            <span >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitati on ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </span>
                            <span className="text-3xl absolute">&rdquo;</span>
                        </h2>
                    </article>


                    <section>
                        <h2 className="font-bold text-2xl mb-4">Contacts</h2>
                        <aside className="w-full flex justify-around items-center m-auto">
                            <Link
                                className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                                href="https://www.linkedin.com/in/andersoninn/"
                                target="_blank"
                            >
                                <Image src="/contacts/linkedin.png" height={50} width={50} alt="" />
                            </Link>
                            <Link
                                className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                                href="https://github.com/andersoninn"
                                target="_blank"
                            >
                                <Image src="/contacts/github.png" height={50} width={50} alt="" />
                            </Link>
                            <Link
                                className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                                href="https://drive.google.com/file/d/1wttA0BPcDON1vijG78N9UZqr2EDuZKxu/view?usp=sharing"
                                target="_blank"
                            >
                                <Image src="/contacts/cv.png" height={50} width={50} alt="" />
                            </Link>
                            <Link
                                className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                                href="https://mailto:andersoninnocencio17@gmail.com/"
                                target="_blank"
                            >
                                <Image src="/contacts/gmail.png" height={50} width={50} alt="" />
                            </Link>
                            <Link
                                className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                                href="https://wa.me/351933864893"
                                target="blank"
                            >
                                <Image src="/contacts/whatsapp.png" height={50} width={50} alt="" />
                            </Link>
                        </aside>
                    </section>

                </article>


            </section>
        </>
    );
}
