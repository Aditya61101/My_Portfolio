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
          <>
            <p className="text-md py-2 leading-8 text-gray-600">
              I'm Aditya Kumar, currently a senior pursuing my B.Tech in the
              Electrical and Electronics department at{" "}
              <span className=" text-teal-500 hover:bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-white transition-colors duration-700 ease-out">
                <a href="https://www.iitp.ac.in/" target="_blank">
                  {" "}
                  Indian Institute Of Technology (IIT), Patna.
                </a>
              </span>{" "}
              As a software developer intern at Regalo, I crafted a trip
              itinerary web app over a three-month period, demonstrating my
              proficiency in turning ideas into functional applications. I was
              the coordinator of{" "}
              <span className=" text-teal-500 hover:bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-white transition-colors duration-700 ease-out">
                <a href="https://njack.iitp.ac.in/" target="_blank">
                  {" "}
                  Not Just Another Coding Klub (NJACK)
                </a>
              </span>{" "}
              DEV and Open-Source department. In this role, I organized
              hackathons and knowledge-sharing sessions, fostering a
              collaborative environment for tech enthusiasts. Regarding my
              achievements, I secured a bronze medal at Inter IIT tech meet held
              in February'23 for a high prep statement name "Grow Simplee".
              Beyond academics and coding, I find joy in sports like Cricket,
              Kabbadi, and occasionally football. Music is a significant part of
              my life, and I not only enjoy listening but sometimes play the
              guitar. Looking ahead, my goal is to dive deeper into software
              development, as Software development skills are versatile and can
              be applied in various industries.
              {/* <span className=" text-teal-500 hover:bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-white transition-colors duration-700 ease-out">
                <a href="https://www.iitp.ac.in/" target="_blank">
                  {" "}
                  Indian Institute Of Technology (IIT), Patna.
                </a>
              </span>{" "}
              I am currently in my Senior Year (4th Year), pursuing Btech. in{" "}
              <span className=" text-teal-500">
                Electrical and Electronics Engineering
              </span>
              . I am a quick learner, an adaptable and a hard-working person. */}
            </p>
          </>
        </div>
      </div>
    </div>
  );
};
