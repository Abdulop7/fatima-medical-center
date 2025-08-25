import AboutHospital from "./components/AboutHospital";
import Hero from "./components/hero";
import Services from "./components/services";
import DoctorsHighlight from "./components/specialistHighlight";
import Testimonials from "./components/testimonials";


export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <Services />
      <AboutHospital />
      <DoctorsHighlight />
      <Testimonials />
    </div>
  );
}
