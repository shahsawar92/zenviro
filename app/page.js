import Image from "next/image";
import Navbar from "./_components/common/navbar";
import HeroComponent from "./_components/common/hero";
import WhoWeAreSection from "./_components/common/who-we-are";
import ServicesGrid from "./_components/common/services";
import ContactCard from "./_components/common/contact-us";
import Footer from "./_components/common/footer";
import RotatingCards from "./_components/common/our-approch";
import TestimonialSlider from "./_components/common/testamonial";
import WorkSection from "./_components/common/our-work";
import { LogoSlider } from "./_components/common/brands-slider";
import SpacerWidget from "./_components/ui/Spacer";

export default function Home() {
  return (
    <div id="main-page-container" className="w-dvw h-dvh overflow-x-hidden">
      <h1>
        <Navbar />
        <SpacerWidget height="h-10" backgroundColor="bg-black" />
        <HeroComponent />
        <SpacerWidget height="h-10" backgroundColor="bg-black" />

        <WhoWeAreSection />
        <SpacerWidget height="h-10" backgroundColor="bg-black" />

        <ServicesGrid />
        <SpacerWidget height="h-10" backgroundColor="bg-black" />

        <RotatingCards />
        <SpacerWidget height="h-10" backgroundColor="bg-black" />

        <WorkSection />
        <SpacerWidget height="h-10" backgroundColor="bg-black" />

        <LogoSlider />
        <SpacerWidget height="h-10" backgroundColor="bg-black" />

        <TestimonialSlider />
        <SpacerWidget height="h-10" backgroundColor="bg-black" />

        <ContactCard />
        <SpacerWidget height="h-10" backgroundColor="bg-black" />

        <Footer />
      </h1>
    </div>
  );
}

