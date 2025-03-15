import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import WorkExperiences from './components/WorkExperiences';
import Skills from './components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <FeaturedProjects />
        <WorkExperiences />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
