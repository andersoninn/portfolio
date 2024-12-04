'use client';
import About2 from '@/components/about/About2';
import Footer from '@/components/footer/Footer';
import Home3 from '@/components/home/Home3';
import Projects2 from '@/components/projects/Projects2';
import Resume2 from '@/components/resume/Resume2';

export default function Page() {
  return (
    <>
      <section className="">
        <Home3 />
        <About2 />
        <Resume2 />
        <Projects2 />
        <Footer />
      </section>
    </>
  );
}
