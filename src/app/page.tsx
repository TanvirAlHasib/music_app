// import Image from "next/image";

import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import MeetOurInstructor from "@/components/MeetOurInstructor";
import TestimonialSection from "@/components/TestimonialSection";
import Webminars from "@/components/Webminars";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero/>
      <FeaturedSection/>
      <WhyChoose/>
      <Webminars/>
      <TestimonialSection/>
      <MeetOurInstructor/>
      <Footer/>
    </main>
  );
}
