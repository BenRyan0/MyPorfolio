import { EXPERIENCES } from "@/constants";
import React from "react";

const Experience = () => {
  return (
    <div className=" relative border-b border-slate-800 pb-20 pt-10 flex justify-center items-center flex-wrap">
      <h2 className="font-bold text-slate-200 text-3xl text-center">
        Experience
      </h2>
      <div className="text-slate-300 container mx-auto lg:px-20 flex justify-center flex-col items-center gap-3 mt-10">
        {EXPERIENCES.map((exp, index) => {
          return (
            <div className="lg:w-5/6 flex flex-col lg:flex-row lg:justify-between " key={index}>
              <div className="">
                <h2 className="font-bold">{exp.year}</h2>
              </div>
              <div className="lg:w-7/12 ">
                <h2 className="font-bold">
                  {exp.role} - <span>{exp.company}</span>
                </h2>
                <p className="pt-2 text-sm">{exp.description}</p>
                <div className="flex gap-3 mt-5">
            
                  {exp.technologies.map((tech, i) => {
                    return (
                      <h2 key={i} className="font-bold text-sm text-purple-600">
                        {tech}
                      </h2>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
