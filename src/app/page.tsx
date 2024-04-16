'use client';
import About from '@/components/about/About';
import Home from '@/components/home/Home';
import Projects from '@/components/projects/Projects';

import Resume from '@/components/resume/Resume';

export default function Page() {
  return (
    <>
      <Home />
      <Projects />
      <About />
    </>
  );
}
