import Footer from "@/components/root/Footer";
import Subscribe from "@/components/root/Subscribe";
import AboutSection from "@/components/root/home/AboutSection";
import BuyingSteps from "@/components/root/home/BuyingSteps";
import CategoryCarousel from "@/components/root/home/CategoryCarousel";
import Hero from "@/components/root/home/Hero";
import MakeMoney from "@/components/root/home/MakeMoney";
import Testimonials from "@/components/root/home/Testimonials";


const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home () {
  
  return (
    <>
      <Hero/>
      <CategoryCarousel/>
      <AboutSection/>
      <BuyingSteps/>
      <MakeMoney/>
      <Testimonials slides={SLIDES}/>      
    </>
  );
}
