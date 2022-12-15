import Image from "next/image";
import React from "react";
import { Title } from "./Title";

const educationArray = [
  {
    type: "College",
    name: "Indian Institute Of Technology, Patna",
    logo: "/iitp.png",
    details: {
      time: "2020-Present",
      field: "Btech. Electrical and Electronics Engineering",
      credits: "CPI: 8.43 (4th Semester)",
    },
    link: "https://www.iitp.ac.in/",
  },
  {
    type: "Intermediate",
    name: "B.D.Public School, Patna",
    logo: "/bdps.jpg",
    details: {
      time: "2017-2019",
      field: "12th Central Board Of Secondary Education",
      credits: "Percentage: 96.4% (School Topper)",
    },
    link: "http://www.bdpublicschool.com/",
  },
  {
    type: "Matriculation",
    name: "B.D.Public School, Patna",
    logo: "/bdps.jpg",
    details: {
      time: "2007-2016",
      field: "10th Central Board Of Secondary Education",
      credits: "CGPA: 10 CGPA",
    },
    link: "http://www.bdpublicschool.com/",
  },
];
export const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <Title title="Alma Mater" />
      <div className="flex flex-col lg:flex-row lg:gap-6">
        {educationArray.map((item) => {
          return (
            <div className="relative shadow-2xl p-8 pb-12 rounded-xl my-10 flex flex-col items-center w-96 hover:scale-105 ease-in duration-500">
              <h1 className="text-xl font-medium">{item.type}</h1>
              <div className="relative rounded-full mt-5 mb-5 w-40 h-40 mx-auto object-fill overflow-hidden">
                <Image
                  className="hover:scale-110 ease-in duration-500"
                  src={item.logo}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h1 className=" text-xl font-bold ">{item.name}</h1>
              <ul className="list-disc my-5">
                <li className="text-gray-600">Duration: {item.details.time}</li>
                <li className="text-gray-600">{item.details.field}</li>
                <li className="text-gray-600">{item.details.credits}</li>
              </ul>
              <div className="group transition duration-300 ease-in-out absolute bottom-5 text-gray-700">
                <a href={item.link} target="_blank" className=" font-medium">
                  Learn More
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
