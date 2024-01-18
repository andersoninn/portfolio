import About from '@/components/About';
import Home from '@/components/Home';

// Adjust in navbar -sticky
// Adjust in About background

export default function Page() {
   return (
      <main className="flex flex-col gap-10">
         <Home />
         <About />
      </main>
   );
}
