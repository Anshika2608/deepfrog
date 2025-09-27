import AboutUs from './sections/aboutUsSection';
import Hero from './sections/heroSection'
import Navbar from "./sections/navbar";
import Statistics from './sections/statisticsSection';
import CoreValuesSection from "./sections/coreValuesSection"
import Products from './sections/productsSection';
import Expertise from './sections/expertiseSection';
import CtaSection from './sections/ctaSection';
import FooterSection from './sections/footerSection';
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <AboutUs />
      <CoreValuesSection />
      <Products />
      <Expertise />
      <CtaSection />
      <FooterSection />
    </>
  )
}

export default App
