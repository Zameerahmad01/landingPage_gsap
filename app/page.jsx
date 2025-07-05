import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails";
import About from "@/components/About";
import Art from "@/components/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);
const page = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
};

export default page;
