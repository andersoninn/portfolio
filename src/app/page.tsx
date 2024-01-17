import Image from 'next/image';
import { PiChatsTeardropDuotone } from 'react-icons/pi';
import homePicture from '../assets/image/homePicture.svg';

export default function Home() {
  return (
    //
    <main className="pt-10 bg-[url('../assets/image/bgHome3.svg')] bg-left-top bg-no-repeat h-screen">
      <div className="flex ">
        <div className="bg-[url('../assets/image/frame44.svg')] bg-contain bg-top bg-no-repeat mx-32">
          <h1 className="ml-36 text-brand-blueTitle text-8xl font-bold ">
            Hey, I'm a<p className="text-brand-blue100">Front-End</p>
            <p>Developer</p>
          </h1>
          <p className="ml-36 pt-4 p-2 text-xl w-5/12">
            Former Special Infantry soldier shifting to programming in Portugal.
            Committed to growth, eager to contribute to dynamic teams.
          </p>
          <div className="ml-36 flex gap-9 p-2">
            <button
              className="mt-6 text-white font-bold bg-brand-blue100 py-2 px-11 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-white hover:bg-brand-blue200"
            >
              Here Me!
            </button>
            <button
              className="mt-6 text-brand-blue100 font-bold bg-white py-2 px-4 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-brand-blue100 flex gap-1 items-center"
            >
              <PiChatsTeardropDuotone
                width={10}
                className="text-brand-blue100 hover:text-brand-blue200"
              />
              Let's Chat
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
