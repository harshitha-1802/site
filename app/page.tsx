import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import PartnersSection from '@/components/PartnersSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 