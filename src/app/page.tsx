import About from '@/components/About';
import Home from '@/components/Home';
import Projects from '@/components/Projects';

// Adjust in navbar -sticky
// Adjust in gradiente bg (Home to About/ About to Projects)

export default function Page() {
   return (
      <main className="flex flex-col gap-10">
         <Home />
         <About />
         <Projects/>
      </main>
   );
}
