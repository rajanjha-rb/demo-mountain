import Navbar from './Navbar'
import Hero from './Hero'
import Destinations from './Destinations'
import Packages from './Packages'
import About from './About'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

const MainPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />

      <Hero />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <Destinations />
        <Packages />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default MainPage

