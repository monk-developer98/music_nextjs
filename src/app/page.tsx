// import Image from "next/image";

import FeaturedCorses from "@/components/FeaturedCorses";
import HeroSection from "@/components/HeroSection";
import TestimoniolCards from "@/components/TestimoniolCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCorses />
      <WhyChooseUs />
      <TestimoniolCards/>
      <UpComingWebinars />
    </main>
  );
}
