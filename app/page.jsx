import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);
const page = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default page;
