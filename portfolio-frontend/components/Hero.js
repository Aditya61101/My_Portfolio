import React from "react";
import Image from "next/image";
import me from "../public/dev-ed-wave.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text, helper] = useTypewriter({
    words: [
      "Electrical and Electronics Engineer!",
      "Web Developer!",
      "App Developer!",
      "Competitive Programmer!",
      "Open-Source Contributor!",
    ],
    delaySpeed: 2000,
    loop: true,
  });
  return (
    <div>
      <div className="text-center">
        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 mx-auto overflow-hidden object-fill">
          <Image src={me} layout="fill" objectFit="cover" />
        </div>
        <h2 className="lg:text-5xl text-4xl py-2 bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 font-medium text-transparent">
          Aditya Kumar
        </h2>
        <h3 className="lg:text-2xl text-xl py-3 text-gray-700">
          I am {text} <Cursor cursorColor="cyan" />
        </h3>
      </div>
    </div>
  );
};

export default Hero;
