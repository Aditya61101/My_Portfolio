import React from "react";
import { Title } from "./Title";
import Image from "next/image";

const projects = [
  {
    type: "Internship Work",
    name: "Regalo",
    logo: "/Experience/regalo.png",
    details: "The app is a new age digital asset gifting platform. Digital assets include Stocks, Crypto Coins and baskets, Digital gold, NFTs, etc.  The app uses React Native as its Frontend framework and uses Typescript as its language. The app fetches api made in Node.js and Express.js. During the making of the app, I got exposure to Typescript, AsyncStorage and React native complex navigation methods.",
    githubRepo: "https://github.com/regaloclub/regalo",
    link: "https://drive.google.com/file/d/1j3JXjvlclKPiQXjMghT7MZIXYyaNAw_E/view?usp=share_link",
  },
  {
    type: "Personal Project",
    name: "Group Study App",
    logo: "/Projects/grpStudy.jpg",
    details:
      "This a web app where students can come and either join a current group study session or can create their own study session. This web app is a MERN stack app. I used useContext for fetching apis and managing states. It has sorting functionality as well through which student can sort the ongoing or upcoming sessions based on date or time. The APIs are created in Node.js/Express.js and uses MongoDB as the DBMS. JWT is used for authentication. I got exposure to creating APIs and using MongoDB atlas.",
    githubRepo: "https://github.com/Aditya61101/Group_Study_Frontend",
    link: "https://groupstudyapp.netlify.app/",
  },
  {
    type: "NJACK IIT Patna",
    name: "CODEPEAK",
    logo: "/Projects/codepeak.png",
    details:
      "CODEPEAK is an open source development program organised by IIT Patna and IIT Guwahati. This dynamic website uses JavaScript as its language and React.js as the Javascript framework. I made Project and Register page of the website. Being the coordinator of the club, I mentored the changes on the website as well. During the making of the website, I got exposure to fundamentals of React.js like props, state, useEffect etc.",
    githubRepo: "https://github.com/IITP-X-IITG/WoC-frontend",
    link: "https://codepeak.tech/",
  },
  
];
export const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-14 ">
      <Title title="Projects" />
      <h3 className="mt-3 text-xs uppercase tracking-[3px] md:text-sm text-gray-600">
        This section contains some of my the things I've worked on before. Many
        more such projects can be found at{" "}
        <div className="group transition duration-300 ease-in-out inline">
          <a
            href="https://github.com/Aditya61101"
            target="_blank"
            className=" font-medium"
          >
            Github.
          </a>
          <span className=" mt-2 hidden lg:block md:block max-w-0 group-hover:max-w-[70px] transition-all duration-500 h-0.5 bg-sky-600"></span>
        </div>
      </h3>
      <div className="flex flex-col lg:flex-row lg:gap-6">
        {projects.map((item) => {
          return (
            <div className="relative shadow-2xl lg:p-8 md:p-8 p-7 pb-16 md:pb-20 lg:pb-20 rounded-xl my-10 flex flex-col w-80 lg:w-96 md:w-96 hover:scale-105 ease-in duration-500">
              <h1 className=" text-base lg:text-xl md:text-xl text-center font-medium">
                {item.type}
              </h1>
              <div className="relative rounded-full mt-5 mb-5 w-40 h-40 lg:w-44 lg:h-44 mx-auto object-fill overflow-hidden">
                <Image
                  className="hover:scale-110 ease-in duration-500"
                  src={item.logo}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h1 className="text-base lg:text-xl md:text-xl font-bold">
                {item.name}
              </h1>
              <p className=" mt-3 text-sm md:text-base lg:text-base text-gray-600">
                {item.details}
              </p>
              <div className="absolute bottom-4 left-8 group transition duration-300 ease-in-out text-gray-700">
                <a
                  href={item.githubRepo}
                  target="_blank"
                  className="font-medium text-sm md:text-base lg:text-base"
                >
                  Github Repo
                </a>
                <span className=" mt-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </div>
              <div className="absolute bottom-4 right-8 group transition duration-300 ease-in-out text-gray-700">
                <a
                  href={item.link}
                  target="_blank"
                  className=" font-medium text-sm md:text-base lg:text-base"
                >
                  Website/App Link
                </a>
                <span className=" mt-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
