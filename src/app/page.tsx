'use client';
import About from '@/components/about/About';
import Home from '@/components/home/Home';
import dynamic from 'next/dynamic';

export default function Page() {
  const Resume = dynamic(() => import('@/components/resume/Resume'));
  const Projects = dynamic(() => import('@/components/projects/Projects'));
  const Footer = dynamic(() => import('@/components/footer/Footer'));

  return (
    <>
      <section className="">
        <Home />
        <About />
        <Resume />
        <Projects />
        <Footer />
      </section>
    </>
  );
}
