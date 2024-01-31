import React from 'react';

const PersonalProjects = ({ projects }) => {
  return (
    <div className="">
      <section id="features" className="relative block px-6 py-10 md:py-20 md:px-10">
      <h1 className="text-6xl sm:text-2xl mt-2 font-medium text-gradient w-fit seq">
            Personal Projects
          </h1>
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 shadow">
            
              <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              <p className="my-2 mb-0 font-normal leading-relaxed tracking-wide text-white">{project.desc}</p>

                <div className="my-2">
                    <ul className="flex flex-wrap ">
                    {project.techs.map((tech, techIndex) => (
                        <li key={techIndex} className="mr-4 text-purple-800 list-disc">{tech}</li>
                    ))}
                    </ul>
                </div>

                <div className="my-2">
                    <ul className="flex flex-wrap">
                        {project.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="flex flex-wrap">
                            {link.github && (
                            <a href={link.github} target="_blank" className="text-indigo-400 hover:text-white bg-white rounded-full p-1 mx-1">
                                <img src="./github.svg" style={{ width: 20, height: 20 }} alt="GitHub Link" />
                            </a>
                            )}
                            {link.live_links && (
                            <a href={link.live_links} target="_blank" className="text-indigo-400 hover:text-white bg-white rounded-full p-1 mx-1">
                                <img src="./link.svg" style={{ width: 20, height: 20 }} alt="Live Link" />
                            </a>
                            )}
                        </li>
                        ))}
                    </ul>
                </div>

            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default PersonalProjects;
