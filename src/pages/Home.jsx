import Hero from "../components/Hero";
import ImpactStats from "../components/ImpactStats";
import TrainingTracks from "../components/TrainingTracks";
import WhyChooseUs from "../components/WhyChooseUs";
import ImpactStories from "../components/ImpactStories";
import AgencyAffiliation from "../components/AgencyAffiliation";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <main className="">
      <Hero />
      <ImpactStats />
      <TrainingTracks />
      <WhyChooseUs />
      <ImpactStories />
      <AgencyAffiliation />
      <FAQ />
    </main>
  );
}
export default Home;
