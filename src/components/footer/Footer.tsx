import Image from "next/image";
import Link from "next/link";

import AboutPictureArm from '@/assets/image/about/aboutPictureArm.svg';
import AboutPictureSocial from '@/assets/image/about/aboutPictureSocial.svg';
import DownloadCV from '@/assets/image/about/downloadCV.svg';
import Linkedin from '@/contacts/linkedin.svg';
import Github from '@/assets/image/about/gitHub.svg';
import Gmail from '@/assets/image/about/gmail.svg';
import Instagran from '@/assets/image/about/instagran.svg';
import { Texts } from "@/lib/Texts2";


export default function Footer() {
    const texts = Texts.footer;
    return (
        <>
            <section className="w-full bg-[#222124]">

                <article className="py-16 container flex flex-col gap-8 m-auto w-[90%] text-white">
                    <article className="relative">
                        <h2>
                            <span className="text-3xl absolute -top-2 -left-3"> &ldquo;</span>
                            <span >
                                {texts.description}
                            </span>
                            <span className="text-3xl absolute">&rdquo;</span>
                        </h2>
                    </article>

                    <section>
                        <h2 className="font-bold text-2xl mb-4">Contacts</h2>
                        <aside className="w-full flex justify-around items-center m-auto">
                            {texts.contacts.map((e, i) => (
                                <>
                                    <Link key={i}
                                        className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                                        href={e.href}
                                        target="_blank"
                                    >
                                        <Image src={e.image} height={50} width={50} alt={e.alt} />
                                    </Link>
                                </>
                            ))}
                        </aside>
                    </section>

                </article>


            </section>
        </>
    );
}
