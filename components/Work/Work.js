/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef, React } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import { Fade } from "react-reveal";
import { Howl } from "howler";
import Button from "../Button/Button";
import styles from "./Work.module.scss";
import { MENULINKS, WORK } from "../../constants";

const Work = ({ clientWidth }) => {
  const [checked, setChecked] = useState(new Array(WORK.length).fill(false));
  const [isActive, setIsActive] = useState(false);
  const [gunStyle, setGunStyle] = useState({});
  const [mockupStyle, setMockupStyle] = useState({});
  const [macTopStyle, setMacTopStyle] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [reveal, setReveal] = useState(0);
  const targetSection = useRef(null);
  const inputRef = useRef(null);
  const macRef = useRef(null);
  const companyCard = useRef(null);
  const heightRef = useRef(null);
  const videoRef = useRef(null);

  const options = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.1,
    gyroscope: false,
  };

  const checkedSound = new Howl({
    src: ["/sounds/pop-down.mp3"],
    volume: 0.7,
  });

  const getHeight = (position) => heightRef.current + 53 * position;

  const handleChange = (position) => {
    const height = getHeight(position);

    setChecked(() =>
      checked.map((item, index) => {
        if (index === position) return true;
        else return item;
      })
    );

    setGunStyle({
      transform: "translateY(" + height + "px)",
      visibility: "visible",
    });
    setIsActive(true);

    setChecked(() =>
      checked.map((item, index) => {
        if (index === position) return false;
        else return item;
      })
    );

    setTimeout(() => {
      checkedSound.play();
      setMockupStyle({
        transform: "translate3d(0, 0, 0) rotateX(-90deg)",
        transition: "1s",
      });
      setMacTopStyle({
        transform: "translate3d(0, 0, 0) rotateX(-90deg)",
        transition: "1s",
      });
    }, 1500);

    setTimeout(() => {
      setIsActive(false);
      macRef.current.scrollIntoView({
        behavior: "smooth",
      });
      setGunStyle({
        transform: "translateY(500px)",
        visibility: "hidden",
      });
      setMockupStyle({
        transform: "translate3d(0, 0, 0) rotateX(0deg)",
        transition: "500ms",
      });
      setMacTopStyle({
        transform: "translate3d(0, 0, 0) rotateX(0deg)",
        transition: "500ms",
      });
      videoRef.current?.load();
    }, 3000);
  };

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".work-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection, isActive]);

  useEffect(() => {
    VanillaTilt.init(companyCard.current, options);
  }, [companyCard.current]);

  useEffect(() => {
    if (inputRef.current) {
      const handlePosition = () => {
        const { top } = inputRef.current.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;
        const clientTop = document.documentElement.clientTop;
        const output = Math.floor((top + scrollTop - clientTop) / 100) + 60;
        heightRef.current = output;
      };

      handlePosition();
      window.addEventListener("resize", handlePosition);
      window.addEventListener("scroll", handlePosition);
    }

    return () => {
      window.removeEventListener("resize", handlePosition);
      window.removeEventListener("scroll", handlePosition);
    };
  }, [inputRef.current]);

  return (
    <section
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-20"
      id={MENULINKS[4].ref}
      ref={targetSection}
    >
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">
              WORK
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              Experience
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
              A quick recap of where I&apos;ve worked.{" "}
            </h2>
          </div>
        </div>

        <div className="">
      <div className="mx-auto p-8">
        <div className="flow-root">
          <ul className="-mb-8">
            {WORK.map((work, index) => (
                   <li key={index}>
                   <div class="relative pb-8">
                     <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                     <div class="relative flex items-start space-x-3">
                       <div>
                         <div class="relative px-1">
                           <div class="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                             <svg class="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                               stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                             </svg>
                           </div>
                         </div>
                       </div>
                       <div class="min-w-0 flex-1 py-0">
                         <div class="text-md text-gray-500">
                           <div>
                             <a href="#" class="font-medium text-gray-900 mr-2">{work.company}</a>
         
                             <a href="#"
                               class="my-0.5 relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                            
                               <div class="ml-3.5 font-medium text-gray-900">{work.title}</div>
                             </a>
                           </div>
                           <span class="whitespace-nowrap text-sm text-indigi-800">{work.range}</span>
                         </div>
                         <div class="mt-2 text-gray-700">
                         <p>
                          {work.responsibilities.map((detail, detailIndex) => (
                            <span key={detailIndex}>
                              - {detail}
                              <br />
                            </span>
                          ))}
                        </p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </li>

              
            ))}
          </ul>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Work;
