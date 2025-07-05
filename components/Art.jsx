"use client";
import { featureLists, goodLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CheckCircle2 } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const start = isMobile ? "top 20%" : "top top";

    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskedTimeline.to(".will-fade", {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    });
    maskedTimeline.to(".masked-img", {
      scale: 1.3,
      maskPosition: "center",
      maskSize: "400%",
      duration: 1,
      ease: "power1.inOut",
    });
    maskedTimeline.to("#masked-content", {
      opacity: 1,
      ease: "power1.inOut",
    });
  });
  return (
    <section
      id="art"
      className="flex items-center justify-center flex-col min-h-dvh p-5 mt-20 relative radial-gradient"
    >
      <div className="container mx-auto">
        <h2 className="will-fade relative md:text-[20vw] text-8xl text-nowrap leading-none font-modern-negra text-center text-[#505050] mb-8">
          The Art
        </h2>

        <div className="flex md:flex-row flex-col justify-between md:mb-16 md:mt-0 mt-40 gap-10">
          <div className="space-y4 will-fade">
            {goodLists.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 size={20} fill="white" className="text-black" />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>

          <div className="md:w-[60vw] w-full h-[50vh] md:h-[70vh] rounded-4xl overflow-hidden absolute top-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="masked-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain size-full"
            />
          </div>

          <div className="space-y4 will-fade">
            {featureLists.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 size={20} fill="white" className="text-black" />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="masked-container">
          <h2 className=" will-fade text-4xl md:text-5xl font-modern-negra text-center mb-10 text-white mt-32">
            Sip into Something Special
          </h2>
          <div
            id="masked-content"
            className="opacity-0 md:px-0 px-5 space-y-3 absolute md:bottom-3 bottom-52 left-1/2 -translate-x-1/2"
          >
            <h3 className="md:text-3xl text-2xl text-center font-serif md:w-full w-80 text-white">
              Made with Craft, Poured with Passion
            </h3>
            <p className="text-lg text-center">
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Art;
