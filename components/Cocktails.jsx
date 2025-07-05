"use client";
import { cocktailLists, mockTailLists } from "@/constants";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Cocktails = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#cocktails",
          start: "top 50%",
          end: "bottom 50%",
        },
      })
      .from(".details", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.05,
      });
  });
  return (
    <section
      id="cocktails"
      className="w-full  min-h-dvh relative py-20 overflow-hidden"
    >
      <img
        src="/images/cocktail-left-leaf.png"
        alt="leaf"
        className="absolute left-0 bottom-0 md:top-auto md:w-40 w-1/3"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="leaf"
        className="absolute right-0 bottom-0 md:top-auto  md:w-48 w-1/3"
      />
      <div className="container mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20  2xl:px-0 px-5">
        <div className="space-y-8 w-full md:w-fit">
          <h2 className="text-xl font-medium">Most Popular Cocktails:</h2>
          <div className="space-y-4">
            {cocktailLists.map((item) => (
              <div
                key={item.name}
                className="details flex justify-between items-start"
              >
                <div className="md:me28">
                  <h3 className="font-modern-negra 2xl:text-3xl text-xl text-yellow">
                    {item.name}
                  </h3>
                  <p className="text-sm">
                    {item.country} | {item.detail}
                  </p>
                </div>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8 w-full md:w-fit pb-20 md:pb-0">
          <h2 className="text-xl font-medium">Most Loved Mocktails:</h2>
          <div className="space-y-4">
            {mockTailLists.map((item) => (
              <div
                key={item.name}
                className="details flex justify-between items-start"
              >
                <div className="md:me28">
                  <h3 className="font-modern-negra 2xl:text-3xl text-xl text-yellow">
                    {item.name}
                  </h3>
                  <p className="text-sm">
                    {item.country} | {item.detail}
                  </p>
                </div>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
