// import Image from "next/image";

import FeaturedCorses from "@/components/FeaturedCorses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
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
      <Instructors />
      <Footer />
    </main>
  );
}
