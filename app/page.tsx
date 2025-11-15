import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Services from '@/components/services'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
