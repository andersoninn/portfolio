import { Texts } from "@/lib/Texts";
import Image from "next/image";

export default function SkillDiamond() {
    const texts = Texts.en.resume;
    return (
        <section className=" flex flex-col justify-center items-center relative">
            <Image
                src="/diamond.png"
                alt=""
                width={700}
                height={700}
                className="absolute inset-y-1/3 md:top-20"
            />
            <section className="flex flex-col justify-center items-center pb-24">
                <article className="flex flex-col items-center justify-center text-center w-[300px] mb-20">
                    <h2 className="font-semibold text-2xl">{texts.top.title}</h2>
                    <span className="space-y-2">
                        <h3 className="text-lg -mt-1">{texts.top.subtitle}</h3>
                        <p className="text-lg">{texts.top.description}</p>
                    </span>
                </article>


                <section className="flex w-full justify-center items-center">
                    <article className="w-1/2 flex flex-col items-center justify-start text-center pr-2 h-32 mr-6 md:mt-24">
                        <h2 className="font-semibold text-2xl">{texts.left.title}</h2>
                        <span className="space-y-2">
                            <h3 className="text-lg -mt-1">{texts.left.subtitle}</h3>
                            <p className="text-lg">{texts.left.description}</p>
                        </span>
                    </article>
                    <article className="w-1/2 flex flex-col items-center justify-start text-center pl-2 h-32 ml-6 md:mt-24">
                        <h2 className="font-semibold text-2xl">{texts.right.title}</h2>
                        <span className="space-y-2">
                            <h3 className="text-lg -mt-1">{texts.right.subtitle}</h3>
                            <p className="text-lg">{texts.right.description}</p>
                        </span>
                    </article>
                </section>
            </section>
        </section>
    )
}