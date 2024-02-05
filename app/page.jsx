import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Featured from "@/components/Featured";
import Recommendation from "@/components/Recommendation";
import Find from "@/components/Find";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
      <main className = 'max-w-[1440px] mx-auto bg-white overflow-hidden'>
          <Header/>
          <Hero/>
          <Featured/>
          <About/>
          <Recommendation/>
          <Find/>
          <Testimonial/>
          <Footer/>
      </main>
  );
}