'use client';
import About2 from '@/components/about/About';
import Footer from '@/components/footer/Footer';
import Home2 from '@/components/home/Home';
import MouseDot from '@/components/MouseDot';
import Projects2 from '@/components/projects/Projects';
import Resume2 from '@/components/resume/Resume';

export default function Page() {
  return (
    <>
      <section className="">
        <MouseDot />
        <Home2 />
        <About2 />
        <Resume2 />
        <Projects2 />
        <Footer />
      </section>
    </>
  );
}
