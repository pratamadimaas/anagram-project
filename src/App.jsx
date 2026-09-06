import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import PhilosophyAndValues from './components/PhilosophyAndValues.jsx'
import ProductMatrix from './components/ProductMatrix.jsx'
import KeyAdvantages from './components/KeyAdvantages.jsx'
import TargetAudience from './components/TargetAudience.jsx'
import VisionBanner from './components/VisionBanner.jsx'
import CallToAction from './components/CallToAction.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophyAndValues />
        <ProductMatrix />
        <KeyAdvantages />
        <TargetAudience />
        <VisionBanner />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
