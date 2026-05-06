import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import LogoSlider from "./LogoSlider.jsx";
import DashboardSection from "./DashboardSection.jsx";
import FeatureSection from "./FeatureSection.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar />
    <HeroSection />
    <LogoSlider />
    <DashboardSection />
    <FeatureSection />

  </StrictMode>,
)
