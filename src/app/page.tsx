import ClientTestimonials from "@/components/clientTestimonials";
import CallToAction from "../components/callToAction";
import FooterSection from "../components/footer";
import GetInTouchSection from "../components/getInTouch";
import HeroSection from "../components/hero";
import NavbarSection from "../components/navbar";
import PortfolioSection from "../components/portfolio";
import ProcessSection from "../components/process";
import ReviewsSection from "../components/reviews";
import ServicesSection from "../components/services";
import Strips from "../components/strips";
import TrustedBySection from "../components/trustedBy";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Strips />
      <TrustedBySection />
      <ProcessSection />
      <ServicesSection />
      <PortfolioSection />
      <ClientTestimonials />
      {/* <ReviewsSection /> */}
      <CallToAction />
      <GetInTouchSection />
    </div>
  );
}
