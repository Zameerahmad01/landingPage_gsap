"use client";
import { featureLists } from "@/constants";
import { CheckCircle, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const aboutTitleSplit = new SplitText(".about-title", {
      type: "words",
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
          end: "bottom 50%",
        },
      })
      .from(aboutTitleSplit.words, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });
  return (
    <section
      id="about"
      className="w-full min-h-screen relative py-20 overflow-hidden"
    >
      <div className="container mx-auto space-y-20">
        {/* content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          {/* left side */}
          <div className="flex flex-col gap-4 max-w-[550px]">
            <div className="bg-white px-4 py-2 text-sm w-fit text-black rounded-full">
              Best Cocktails
            </div>
            <p className="font-modern-negra text-6xl about-title">
              Where every detail matters—from muddle to garnish
            </p>
          </div>

          {/* right side */}
          <div className="max-w-[500px] flex flex-col gap-8">
            <p className="text-lg text-start">
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.{" "}
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <Star size={20} className="" fill="white" />
                  <Star size={20} className="" fill="white" />
                  <Star size={20} className="" fill="white" />
                  <Star size={20} className="" fill="white" />
                  <Star size={20} className="" fill="white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-bold">4.5/5</p>
                  <p className="text-sm font-medium">
                    More than +12000 customers
                  </p>
                </div>
              </div>

              <div className="h-full w-[1px] bg-[#313131]"></div>

              <div className="flex items-center">
                <div className="flex items-center px-6 py-4 bg-gradient-to-b from-[#313131] to-[#0F0F0F] relative rounded-full overflow-hidden">
                  <div className="noisy"></div>
                  <div className="flex items-center justify-center z-10">
                    <div className="bg-[#F4CAB2] rounded-full overflow-hidden ">
                      <Image
                        src="/images/avatar1.png"
                        alt=""
                        width={44}
                        height={44}
                      />
                    </div>
                    <div className="bg-[#C5F7DC] rounded-full overflow-hidden -ml-2">
                      <Image
                        src="/images/avatar2.png"
                        alt=""
                        width={44}
                        height={44}
                      />
                    </div>
                    <div className="bg-[#FFFFFF] rounded-full overflow-hidden -ml-2 ">
                      <Image
                        src="/images/avatar3.jpg"
                        alt=""
                        width={44}
                        height={44}
                      />
                    </div>
                    <div className="bg-[#B2B6F4] rounded-full overflow-hidden h-[44px] w-[44px] flex items-center justify-center -ml-2">
                      <p className="text-sm text-black">+12k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* grid */}
        <div className="space-y-5">
          <div className="top-grid grid grid-cols-1 md:grid-cols-4 gap-5 px-5">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="noisy"></div>
              <Image
                src="/images/abt1.png"
                alt="about image"
                width={300}
                height={250}
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="px-4 py-6 relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#313131] to-[#0F0F0F]">
              <div className="noisy"></div>
              <div className="flex flex-col gap-4 z-10">
                <div className="flex items-center justify-center pb-2  border-b-2 border-[#313131]">
                  <h3 className="font-modern-negra text-4xl">
                    Crafted to Impress
                  </h3>
                </div>
                <div className="flex flex-col items-start">
                  {featureLists.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2
                        size={20}
                        fill="white"
                        className="text-black"
                      />
                      <p className="text-lg ">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden md:col-span-2">
              <div className="noisy"></div>

              <Image
                src="/images/abt2.png"
                alt=""
                width={500}
                height={250}
                className="w-full h-[250px] object-cover"
              />
            </div>
          </div>
          <div className="bottom-grid grid grid-cols-1 md:grid-cols-5 gap-5 px-5">
            <div className="relative rounded-3xl overflow-hidden md:col-span-3">
              <div className="noisy"></div>
              <Image
                src="/images/abt3.png"
                alt="about image"
                width={780}
                height={250}
                className="w-full h-[250px] object-cover"
              />
            </div>

            <div className="relative rounded-3xl overflow-hidden md:col-span-2">
              <div className="noisy"></div>

              <Image
                src="/images/abt5.png"
                alt=""
                width={500}
                height={250}
                className="w-full h-[250px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
