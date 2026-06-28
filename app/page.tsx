import HeroSection from '@/components/HeroSection';
import AboutStrip from '@/components/AboutStrip';
import OurStory from '@/components/OurStory';
import SignatureDishes from '@/components/SignatureDishes';
import DrinkHighlights from '@/components/DrinkHighlights';
import Gallery from '@/components/Gallery';
import TheGroundsBanner from '@/components/TheGroundsBanner';
import ReviewsSection from '@/components/ReviewsSection';
import ReservationBanner from '@/components/ReservationBanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutStrip />
      <OurStory />
      <SignatureDishes />
      <DrinkHighlights />
      <Gallery />
      <TheGroundsBanner />
      <ReviewsSection />
      <ReservationBanner />
    </>
  );
}
