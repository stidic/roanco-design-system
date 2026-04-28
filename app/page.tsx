import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Stats />
      <About />
      <Contact />
    </main>
  );
}
