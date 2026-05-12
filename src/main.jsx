import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import LogoSlider from "./LogoSlider.jsx";
import DashboardSection from "./DashboardSection.jsx";
import FeatureSection from "./FeatureSection.jsx";
import SEOSection from "./SEOSection.jsx";
import PlatformSection from "./PlatformSection.jsx";
import PricingSection from "./PricingSection.jsx";
import FAQSection from "./FAQSection.jsx";
import FeedbackSection from "./FeedbackSection.jsx";
import DownloadSection from "./DownloadSection.jsx";
import FooterSection from "./FooterSection.jsx";
import WhyChooseUsSection from './WhyChooseUsSection.jsx';
import FooterBottom from './FooterBottom.jsx';






createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar />
    <HeroSection />
    <LogoSlider />
    <DashboardSection />
    <FeatureSection />
    <SEOSection />
    <PlatformSection />
    <WhyChooseUsSection />
    <PricingSection />
    <FAQSection />
    <FeedbackSection />
    {/* <DownloadSection /> */}
    <FooterSection />
    <FooterBottom />


    
  </StrictMode>,
)
