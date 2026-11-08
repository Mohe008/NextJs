import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
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
      </main>
    </>
  );
}
