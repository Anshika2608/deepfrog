import AboutUs from './sections/aboutUs';
import Hero from './sections/heroSection'
import Navbar from "./sections/navbar";
import Statistics from './sections/statistics';
import CoreValuesSection from "./sections/coreValues"
import Products from './sections/products';
import Expertise from './sections/expertise';
import CtaSection from './sections/cta';
import FooterSection from './sections/footer';
function App() {

  return (
    <>
    <Navbar/>
   <Hero/>
   <Statistics/>
   <AboutUs/>
   <CoreValuesSection/>
   <Products/>
   <Expertise/>
   <CtaSection/>
   <FooterSection/>
    </>
  )
}

export default App
