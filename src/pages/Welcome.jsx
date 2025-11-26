import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Trainings from "../components/Trainings";

function Welcome() {
  return (
    <main className="">
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Trainings />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
export default Welcome;
