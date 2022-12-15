import React, {useEffect, useState} from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  
  return (
    <nav className="py-3 mb-5 flex justify-between">
      <div className="text-4xl flex justify-center gap-2 text-gray-600">
        <a href="https://github.com/Aditya61101" target="_blank">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-kumar-337a08218/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>

        <a href="https://instagram.com/ad1tya_kr" target="_blank">
          <AiFillInstagram />
        </a>
      </div>
      <ul className="flex items-center">
        <li>
          <a href="">
            {" "}
            <BsFillMoonStarsFill className="text-2xl" />
          </a>
        </li>
        <li>
          <a
            className="bg-transparent text-black border border-teal-500 hover:bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-white transition-colors duration-500 ease-in-out px-4 py-2 rounded-md ml-8"
            href="https://drive.google.com/file/d/1Ah7USa_BAyDN1LTKqb5xS6RywgdkjHD1/view?usp=share_link"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
