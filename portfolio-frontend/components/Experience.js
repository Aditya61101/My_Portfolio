import React from "react";
import { Title } from "./Title";
import Image from "next/image";

const experience = [
  {
    type: "Internship",
    name: "Regalo",
    logo: "/Experience/regalo.png",
    details: {
      work: "Working as a Frontend developer to create a web/mobile app. The app is a new age digital asset gifting platform. Digital assets include Stocks, Crypto Coins and baskets, Digital gold, NFTs, etc. Got Exposure to Typescript, AsyncStorage and React native complex navigation methods.",
      time: "Oct 2022 - Present",
      LangFramework:
        "Javascript, Typescript, React Native, Node.js, Express.js, MongoDB.",
    },
  },
  {
    type: "Internship",
    name: "DEEPGAZE Technology Pvt. Ltd.",
    logo: "/Experience/Company.png",
    details: {
      work: "Worked as a Frontend Developer to built a web/mobile app. The app is used to 'Automate Work Updation' from construction sites. Got exposure to React native and its core features like Stylesheet, Activity Indicator, ScrollView, SafeAreaView, Pressable, Touchable Opacity etc.",
      time: "Mar 2022 - Apr 2022",
      LangFramework:
        "Javascript, React Native, React.js, Node.js, Express.js, MongoDB.",
    },
  },
  {
    type: "POR",
    name: "NJACK IIT Patna",
    logo: "/Experience/njack.jpg",
    details: {
      work: "Coordinator of Development and Open Source Department. Being a Coordinator along with Coding Club IITG, organized a month long coding event known as CODEPEAK. Built the CODEPEAK website along with other team members. Now mentoring the ongoing changes on the website.",
      time: "Oct 2021 - Present",
      LangFramework:
        "All Development and Open Source related Languages, Framework and Tools!",
    },
  },
];
export const Experience = () => {
  return (
    <div className="flex flex-col items-center">
      <Title title="Experience!" />
      <div className="flex flex-col lg:flex-row lg:gap-6">
        {experience.map((item) => {
          return (
            <div className="relative shadow-2xl lg:p-8 md:p-8 p-7 pb-12 rounded-xl my-10 flex flex-col items-center w-80 lg:w-96 md:w-96 hover:scale-105 ease-in duration-500">
              <h1 className=" text-base lg:text-xl md:text-xl font-medium">
                {item.type}
              </h1>
              <div className="relative rounded-full mt-5 mb-5 w-40 h-40 mx-auto object-fill overflow-hidden bg-">
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
              <ul className="list-disc my-5">
                <li className="text-sm md:text-base lg:text-base text-gray-600">
                  {" "}
                  {item.details.work}
                </li>
                <li className="text-sm md:text-base lg:text-base text-gray-600">
                  <span className=" font-medium">Duration: </span>
                  {item.details.time}
                </li>
                <li className="text-sm md:text-base lg:text-base text-gray-600">
                  <span className=" font-medium">
                    Languages/Framework Used:{" "}
                  </span>{" "}
                  {item.details.LangFramework}
                </li>
              </ul>
              {/* <div className="group transition duration-300 ease-in-out absolute bottom-5 text-gray-700">
                <a href={item.link} target="_blank" className=" font-medium">
                  Learn More
                </a>
                <span className=" mt-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
