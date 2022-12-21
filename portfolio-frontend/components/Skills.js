import React from "react";
import Skill from "./Skill";
import { Title } from "./Title";

const skills = [
  {
    img: "/Skills/clogo.png",
    percent: "100%",
  },
  {
    img: "/Skills/cpplogo.png",
    percent: "100%",
  },
  {
    img: "/Skills/jslogo.png",
    percent: "100%",
  },
  {
    img: "/Skills/python.png",
    percent: "100%",
  },
  {
    img: "/Skills/htmllogo.png",
    percent: "100%",
  },
  {
    img: "/Skills/csslogo.png",
    percent: "100%",
  },
  {
    img: "/Skills/btstrap.png",
    percent: "100%",
  },
  {
    img: "/Skills/tailwind.png",
    percent: "100%",
  },
  {
    img: "/Skills/ejs.png",
    percent: "100%",
  },
  {
    img: "/Skills/reactjslogo.png",
    percent: "100%",
  },
  {
    img: "/Skills/reactnative.png",
    percent: "100%",
  },
  {
    img: "/Skills/next-js.svg",
    percent: "100%",
  },
  {
    img: "/Skills/nodejs.png",
    percent: "100%",
  },
  {
    img: "/Skills/expressjs.png",
    percent: "100%",
  },
  {
    img: "/Skills/django.png",
    percent: "100%",
  },
  {
    img: "/Skills/firebase.png",
    percent: "100%",
  },
  {
    img: "/Skills/mongodb.png",
    percent: "100%",
  },
  {
    img: "/Skills/mysql.png",
    percent: "100%",
  },
  {
    img: "/Skills/gitbash.png",
    percent: "100%",
  },
  {
    img: "/Skills/vscode.png",
    percent: "100%",
  },
];
export const Skills = () => {
  return (
    <div className="flex flex-col items-center">
      <Title title="My Skills!"/>
      <h3 className="text-xs uppercase tracking-[3px] md:text-sm mt-5 text-gray-600">
        Hover over a skill for current proficiency
      </h3>
      <div className="mt-5 grid grid-cols-4 lg:grid-cols-6 gap-5 md:gap-y-0">
        {skills.map((item) => {
          return <Skill img={item.img} percent={item.percent} />;
        })}
      </div>
    </div>
  );
};
