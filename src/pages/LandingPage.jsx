import LandingNavbar from '../components/landing/LandingNavbar'
import HeroSection from '../components/landing/HeroSection'
import TrustBar from '../components/landing/TrustBar'
import ToolsSection from '../components/landing/ToolsSection'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import ExamSimulatorSection from '../components/landing/ExamSimulatorSection'
import ScenarioSection from '../components/landing/ScenarioSection'
import PricingSection from '../components/landing/PricingSection'
import RoadmapSection from '../components/landing/RoadmapSection'
import FinalCTASection from '../components/landing/FinalCTASection'
import LandingFooter from '../components/landing/LandingFooter'

export default function LandingPage() {
  return (
    <div className="tp-landing">
      <LandingNavbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ToolsSection />
        <HowItWorksSection />
        <ExamSimulatorSection />
        <ScenarioSection />
        <PricingSection />
        <RoadmapSection />
        <FinalCTASection />
      </main>
      <LandingFooter />
    </div>
  )
}
