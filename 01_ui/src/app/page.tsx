import CardHoverSection from "@/components/CardHoverSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstructorSection from "@/components/InstructorSection";
import MovingCardSection from "@/components/MovingCardSection";
import StickyScrollSection from "@/components/StickyScrollSection";

export default function Home() {
  return (
    <>
      <main className="in-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCourses />
        <StickyScrollSection />
        <MovingCardSection />
        <CardHoverSection />
        <InstructorSection />
        <Footer />
      </main>
    </>
  );
}
