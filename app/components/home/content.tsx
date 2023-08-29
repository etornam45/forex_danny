import InvestmentPlans from "./InvestmentPlan";
import AboutSection from "./about-section";
import Body from "./body";
import HeroSection from "./hero-section";
import Partners from "./partners";
import Resources from "./resources";
import YoutubeSection from "./youtube-section";

export default function Content() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Body />
      <InvestmentPlans />
      <YoutubeSection />
      <Resources />
      <Partners />
    </>
  );
}
