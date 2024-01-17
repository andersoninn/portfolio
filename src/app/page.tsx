export default function Home() {
   return (
      <main className="mt-2 bg-[url('../assets/image/bgHome.svg')] bg-left-top bg-cover w-full h-[886px]">
         <div className="container m-auto">
            <div className="px-36 ">
               <h1 className="text-brand-blueTitle pt-20 text-8xl font-bold">
                  Hey, I'm a<p className="text-brand-blue100">Front-End</p>
                  <p>Developer</p>
               </h1>
               <p className="w-72">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, sint quibusdam odit, ut incidunt debitis laborum sapiente beatae labore hic temporibus accusantium veritatis quae eligendi facere! Fugiat fuga totam odio?</p>
               <div className="flex gap-4">
                  <button>Here</button>
                  <button>Let' Chat</button>
               </div>
            </div>
         </div>
      </main>
   );
}
