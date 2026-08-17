import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
// import LogoSlider from "./LogoSlider";
import DashboardSection from "./DashboardSection";
import FeatureSection from "./FeatureSection";
import SEOSection from "./SEOSection";
import FAQSection from "./FAQSection";
import PlatformSection from "./PlatformSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import PricingSection from "./PricingSection";
import FeedbackSection from "./FeedbackSection";
import DownloadSection from "./DownloadSection";
import FooterSection from "./FooterSection";
import FooterBottom from "./FooterBottom";
import FooterTNC from "./FooterTNC";
// import ScoreBoard from "./ScoreBoard";  








function App() {
  return (
    <div className="marketing-landing-scale">
  <Navbar />

  <div className="pt-[80px]">
    <div id="hero">
      <HeroSection />
    </div>

    {/* <div id="logos">
      <LogoSlider />
    </div> */}

    <div id="dashboard">
      <DashboardSection />
    </div>

    <div id="features">
      <FeatureSection />
    </div>

    <div id="seo">
      <SEOSection />
    </div>

    <div id="platform">
      <PlatformSection />
    </div>

    <div id="why-choose-us">
      <WhyChooseUsSection />
    </div>

    <div id="pricing">
      <PricingSection />
    </div>

    <div id="faq">
      <FAQSection />
    </div>

    <div id="testimonials">
      <FeedbackSection />
    </div>

    <FooterSection />
    <FooterBottom />
    {/* <ScoreBoard /> */}
    <FooterTNC />
  </div>

</div>
  );
}

export default App;