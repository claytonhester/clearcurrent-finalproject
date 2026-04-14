import Hero from '../components/sections/Hero'
import LogoWall from '../components/sections/LogoWall'
import HowItWorks from '../components/sections/HowItWorks'
import ProductSuite from '../components/sections/ProductSuite'
import SocialProof from '../components/sections/SocialProof'
import CaseStudiesPreview from '../components/sections/CaseStudiesPreview'
import PressSection from '../components/sections/PressSection'
import CtaBanner from '../components/sections/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoWall />
      <HowItWorks />
      <ProductSuite />
      <SocialProof />
      <CaseStudiesPreview />
      <PressSection />
      <CtaBanner />
    </>
  )
}
