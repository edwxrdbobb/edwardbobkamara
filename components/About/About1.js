import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS } from "../../constants";
import Niche from '@/components/Niche/Niche'

const About1 = ({ clientHeight }) => {
  const quoteRef = useRef(null);
  const targetSection = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 1,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-3"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-3"), {
        opacity: 0.2,
        delay: 1.5,
      });

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
      onUpdate: (self) => {
        console.log("Start:", self.start, "End:", self.end);
      },
    });
  }, [quoteRef, targetSection]);

  return (
    <section className="w-full relative select-none" 
      id={MENULINKS[1].ref}
      ref={targetSection}
    >
      <div
        className={`${
          clientHeight > 850 ? "pt-28 pb-16 sm:pt-8 sm:pb-4" : "pt-80 pb-72 sm:pt-8 sm:pb-4"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[1.50rem] md:text-[1.70rem] lg:text-[2rem] text-center"
        >
          <span className="about-1 leading-tight">
          Hey there, I'm Edward Bob Kamara, a dedicated Software Engineering student with over 5 years of hands-on expertise in crafting immersive websites and mobile applications. Proficient in an array of technologies, I specialize in Javascript (React, React Native, Expo, Nextjs, Nodejs, Expressjs, Typescript, Threejs), PHP, Python, and adeptly manage databases like MySQL & MongoDB..{" "}
          </span>
          <span className="about-2 leading-tight">
          My journey in the tech realm expands beyond code. I bring a versatile background that includes Digital Art, Graphics Design, Video Editing, and Audio Engineering. However, my true passion lies in weaving code to create robust, user-centric solutions.{" "}
          </span>

          <span className="about-3 leading-tight">
          Currently pursuing a Software Engineering degree at Limkokwing University, I leverage my academic insights in tandem with real-world experience. As showcased in my personal projects like Beezee Makit, Osbook, and Bobble, I seamlessly blend technologies such as React, Nodejs, and MongoDB to deliver impactful solutions. {" "}
          </span>
        </h1>
      </div>

      <Niche />
    </section>
  );
};

export default About1;
