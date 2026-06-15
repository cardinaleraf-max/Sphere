import Grain from '@/components/Grain'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import EventsSection from '@/components/EventsSection'
import Concierge from '@/components/Concierge'
import Team from '@/components/Team'
import News from '@/components/News'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Grain />
      <Navigation />
      <main>
        <Hero />
        <About />
        <EventsSection />
        <Concierge />
        <Team />
        <News />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <ScrollToTop />
    </>
  )
}
