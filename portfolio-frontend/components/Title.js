import React from "react";

export const Title = (props) => {
  return (
    <div className={`group transition duration-300 ease-in-out ${!props.about?"mt-20":""} `}>
      <h2 className=" text-4xl md:text-5xl pb-2 bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 font-medium text-transparent uppercase tracking-[5px] ">
        {props.title}
      </h2>
      <span className=" mt-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
    </div>
  );
};
