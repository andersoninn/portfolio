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
          <p className="ml-36 pt-4 pl-2 text-xl">
            My name is{' '}
            <strong className="text-brand-blueTitle hover:text">
              {' '}
              Anderson Carvalho.
            </strong>
          </p>
          <p className="ml-36 pl-2 text-xl w-5/12">
            Former Special Infantry soldier shifting to programming in Portugal.
            Committed to growth, eager to contribute and enhance my skills with
            a new team.
          </p>
          <div className="ml-36 flex gap-9 p-2">
            <button
              className="mt-6 text-white font-bold bg-brand-blue100 w-36 py-2 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-white hover:bg-brand-blue200"
            >
              Here Me!
            </button>
            <button
              className="mt-6 text-brand-blue100 font-bold bg-white w-36 py-2 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-sky-400 flex gap-1 justify-center items-center"
            >
              <PiChatsTeardropDuotone
                width={10}
                className="text-brand-blue100 "
              />
              Let's Chat
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
