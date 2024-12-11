'use client';
import About from '@/components/about/About';
import Footer from '@/components/footer/Footer';
import Home from '@/components/home/Home';
import MouseDot from '@/components/MouseDot';
import Projects from '@/components/projects/Projects';
import Resume from '@/components/resume/Resume';

export default function Page() {
  return (
    <>
      <section className="">
        <MouseDot />
        <Home />
        <About />
        <Resume />
        <Projects />
        <Footer />
      </section>
    </>
  );
}
