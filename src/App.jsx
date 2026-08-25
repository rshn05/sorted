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
import GetStarted from "./getStarted";

import FooterSection from "./FooterSection";
import FooterBottom from "./FooterBottom";
import FooterTNC from "./FooterTNC";

import ContactUsSection from "./ContactUsSection";

import { Routes, Route } from "react-router-dom";


function LandingPage() {
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

                <div id="get-started">
                    <GetStarted />
                </div>

                {/* Contact Us removed from landing page */}

                <FooterSection />
                <FooterBottom />
                <FooterTNC />

            </div>
        </div>
    );
}


function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <ContactUsSection />
        </div>
    );
}


function App() {
    return (
        <Routes>

            <Route
                path="/"
                element={<LandingPage />}
            />

            <Route
                path="/contact-us"
                element={<ContactPage />}
            />

        </Routes>
    );
}


export default App;