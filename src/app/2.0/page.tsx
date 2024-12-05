'use client';
import About2 from '@/components/about/About2';
import Footer from '@/components/footer/Footer';
import Home2 from '@/components/home/Home2';
import MouseDot from '@/components/MouseDot';
import Projects2 from '@/components/projects/Projects2';
import Resume2 from '@/components/resume/Resume2';

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
