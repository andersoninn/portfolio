import Image from 'next/image';
import { Texts } from '@/lib/Texts2';

export default function Resume2() {
  const texts = Texts.resume;
  return (
    <>
      <section className=" container -mb-32 h-[600px] m-auto flex max-w-[95%] flex-col items-center relative overflow-hidden">
        <section className="w-[95%] absolute top-[25%] left-[50%] flex items-center justify-center m-auto">
          {/* full square */}
          <section className=" -translate-x-1/2 flex flex-col justify-center items-center">
            <article className="flex flex-col items-center justify-center text-center w-[80%] -mb-2">
              <h2 className="font-semibold text-2xl">{texts.top.title}</h2>
              <span className="space-y-2">
                <h3 className="font-normal">{texts.top.subtitle}</h3>
                <p>{texts.top.description}</p>
              </span>
            </article>
            <article>
              <Image
                src="/diamond.png"
                alt=""
                width={600}
                height={600}
                className=""
              />
            </article>
            <section className="flex w-full -mt-[54%]">
              <article className="w-1/2 flex flex-col items-center justify-start text-center pr-2">
                <h2 className="font-semibold text-2xl">{texts.left.title}</h2>
                <span className="space-y-2">
                  <h3 className="font-normal">{texts.left.subtitle}</h3>
                  <p>{texts.left.description}</p>
                </span>
              </article>
              <article className="w-1/2 flex flex-col items-center justify-center text-center pl-2">
                <h2 className="font-semibold text-2xl">{texts.right.title}</h2>
                <span className="space-y-2">
                  <h3 className="font-normal">{texts.right.subtitle}</h3>
                  <p>{texts.right.description}</p>
                </span>
              </article>
            </section>
          </section>
        </section>

        <section className="w-full h-16 absolute -top-8" id="projects" />
      </section>
    </>
  );
}
