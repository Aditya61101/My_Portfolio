import React from "react";
import Image from "next/image";
import about from "../public/AboutMe.png";
import { Title } from "./Title";

export const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="shadow-2xl p-5 rounded-2xl flex flex-col items-center hover:scale-105 ease-in duration-500 mt-28">
        <Title title="About Me!" about={true} />
        <div className="flex lg:flex-row items-center flex-col">
          <Image
            src={about}
            className="h-32 w-32 my-4 lg:my-0 lg:h-60 lg:w-60 hover:animate-bounce"
          />
          <div>
            <p className="text-md py-2 leading-8 text-gray-600">
              The name is Aditya. I am an undergraduate student at{" "}
              <span className=" text-teal-500 hover:bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-white transition-colors duration-700 ease-out">
                <a href="https://www.iitp.ac.in/" target="_blank">
                  {" "}
                  Indian Institute Of Technology(IIT), Patna.
                </a>
              </span>{" "}
              I am currently in my Senior Year (4th Year), pursuing Btech. in{" "}
              <span className=" text-teal-500">
                Electrical and Electronics Engineering
              </span>
              . I am a quick learner, an adaptable and a hard-working person.
            </p>

            <p className="text-md py-2 leading-8 text-gray-600">
              I majorly do web and app development. I am currently one of the
              coordinator of{" "}
              <span className=" text-teal-500 hover:bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-white transition-colors duration-700 ease-out">
                <a href="https://njack.iitp.ac.in/" target="_blank">
                  {" "}
                  Not Just Another Coding Klub (NJACK)
                </a>
              </span>{" "}
              DEV and Open-Source department.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
