import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Authentic from "./Authentic";
import DashboardSection from "./DashboardSection";
import FeatureSection from "./FeatureSection";
import SEOSection from "./SEOSection";
import FAQSection from "./FAQSection";
import PlatformSection from "./PlatformSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import PricingSection from "./PricingSection";
import FeedbackSection from "./FeedbackSection";
import FooterSection from "./FooterSection";
import FooterBottom from "./FooterBottom";
import FooterTNC from "./FooterTNC";

function App() {
  return (
    <div className="marketing-landing-scale">
      <Navbar />

      <div className="pt-[80px]">
        <div id="hero">
          <HeroSection />
        </div>

        <div id="authentic">
          <Authentic />
        </div>
        

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
        <FooterTNC />
      </div>
    </div>
  );
}

export default App;
