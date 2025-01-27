'use client';

import AboutSection from '@/components/sections/about-section/about-section';
import ContactSection from '@/components/sections/contact-section/contact-section';
import SkillsSection from '@/components/sections/skills-section/skills-section';
import WorksSection from '@/components/sections/works-section/works-section';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import HeroSection from '../components/sections/hero-section/hero-section';

export default function Home() {

  useScrollToTop();

  return (
    <main>
      <HeroSection />
      <section className='sections-wrapper'>
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <ContactSection />
      </section>
    </main>
  );
}
