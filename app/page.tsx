import Hero from './components/hero';
import FeaturedProjects from './components/featured-projects';
import WorkExperiences from './components/work-experiences';
import Skills from './components/skills';
import Footer from '@/components/footer';

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
