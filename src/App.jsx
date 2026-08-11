import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Clients from './components/Clients.jsx'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Clients />
        <Portfolio />
        <About />
        <Reviews />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
