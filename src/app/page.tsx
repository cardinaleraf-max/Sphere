import Grain from '@/components/Grain'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
// import Services from '@/components/Services'        // nascosta — riattivare se serve
import TailoredEvents from '@/components/TailoredEvents'
import Concierge from '@/components/Concierge'
// import PRMarketing from '@/components/PRMarketing'  // nascosta — riattivare se serve
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Grain />
      <Navigation />
      <main>
        <Hero />
        <About />
        {/* <Services /> */}
        <TailoredEvents />
        <Concierge />
        {/* <PRMarketing /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
