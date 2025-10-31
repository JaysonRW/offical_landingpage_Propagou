
import CtaSection from '@/components/landing/CtaSection';
import Faq from '@/components/landing/Faq';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Pricing from '@/components/landing/Pricing';
import ProjectGallery from '@/components/landing/ProjectGallery';
import Services from '@/components/landing/Services';
import SocialProof from '@/components/landing/SocialProof';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <ProjectGallery />
        <Services />
        <Pricing />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
