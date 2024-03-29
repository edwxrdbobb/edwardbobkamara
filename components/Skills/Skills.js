/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Image from "next/image";
import { MENULINKS, SKILLS } from "../../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Skills = () => {
  const targetSection = useRef(null);
 
  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "150px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection]);

  return (
    <section
      className="w-full relative select-none mt-44"
      id={MENULINKS[2].ref}
      ref={targetSection}
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="./right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
              I like to take responsibility to craft aesthetic user experience
              using modern frontend architecture.{" "}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              LANGUAGES AND TOOLS
            </h3>
            <div className="relative mx-auto max-w-7xl grid grid-cols-3 gap-2 pt-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 transform-gpu seq">
                    {SKILLS.languagesAndTools.map((skill) => (
                        <div key={skill.name} className="p-2 text-center shadow" >
                           <div className="button-text mx-auto flex h-14 w-14 items-center justify-center rounded-md border bg-white">
                                  <Image
                                    key={skill.name}
                                    src={`./skills/${skill.url}`}
                                    alt={skill.name}
                                    width={50}
                                    height={50}
                                    />
                          </div>
                          <br />
                          <p style={{marginTop: 1}}>{skill.name}</p>
                        </div>



                      ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="relative mx-auto max-w-7xl grid grid-cols-3 gap-2 pt-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 transform-gpu seq">
                    {SKILLS.librariesAndFrameworks.map((skill) => (
                        <div key={skill.name} className="p-2 text-center shadow" >
                           <div className="button-text mx-auto flex h-14 w-14 items-center justify-center rounded-md border bg-white">
                                  <Image
                                    key={skill.name}
                                    src={`./skills/${skill.url}`}
                                    alt={skill.name}
                                    width={50}
                                    height={50}
                                    />
                          </div>
                          <br />
                          <p style={{marginTop: 1}}>{skill.name}</p>
                        </div>



                      ))}
            </div>

          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
                DATABASES
              </h3>
              <div className="relative mx-auto max-w-7xl grid grid-cols-3 gap-2 pt-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 transform-gpu seq">
                    {SKILLS.databases.map((skill) => (
                        <div key={skill.name} className="p-2 text-center shadow" >
                           <div className="button-text mx-auto flex h-14 w-14 items-center justify-center rounded-md border bg-white">
                                  <Image
                                    key={skill.name}
                                    src={`./skills/${skill.url}`}
                                    alt={skill.name}
                                    width={50}
                                    height={50}
                                    />
                          </div>
                          <br />
                          <p style={{marginTop: 1}}>{skill.name}</p>
                        </div>



                      ))}
            </div>
            </div>
            <div>
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
                Other
              </h3>
              <div className="relative mx-auto max-w-7xl grid grid-cols-3 gap-2 pt-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 transform-gpu seq">
                    {SKILLS.other.map((skill) => (
                        <div key={skill.name} className="p-2 text-center shadow" >
                           <div className="button-text mx-auto flex h-14 w-14 items-center justify-center rounded-md border bg-white">
                                  <Image
                                    key={skill.name}
                                    src={`./skills/${skill.url}`}
                                    alt={skill.name}
                                    width={50}
                                    height={50}
                                    />
                          </div>
                          <br />
                          <p style={{marginTop: 1}}>{skill.name}</p>
                        </div>



                      ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
