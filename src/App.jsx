import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Research from './components/Research'
import CareerVision from './components/CareerVision'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Expertise />
        <Skills />
        <Experience />
        <Research />
        <CareerVision />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
