import React from 'react';
import { NICHE } from "../../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Niche = () => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    {/* <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
    <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p> */}
    <div className="w-full">
        <div className="flex flex-col flex-wrap w-full mb-10 sm:flex-row">
        {NICHE.map((niche) => (
            <div className="w-full mb-10 sm:mb-6 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div className="relative h-full p-5 border-2 border-indigo-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-white">{niche.title}</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p className="mb-2 text-white">{niche.desc}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
       
    </div>
</div>

  );
}

export default Niche;
