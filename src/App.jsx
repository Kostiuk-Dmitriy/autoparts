import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import CatalogGrid from './components/CatalogGrid'
import HowItWorks from './components/HowItWorks'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <CatalogGrid />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
      {/* Mobile floating call button */}
      <a
        href="tel:+380631234567"
        className="fixed bottom-6 right-6 z-50 md:hidden bg-primary text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Зателефонувати"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
        </svg>
      </a>
    </div>
  )
}
