'use client';
import dynamic from 'next/dynamic';


export default function Page() {
  const Home = dynamic(() => import('@/components/home/Home'));
  const About = dynamic(() => import('@/components/about/About'));
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
