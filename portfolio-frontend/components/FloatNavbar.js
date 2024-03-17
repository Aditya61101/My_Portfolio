import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { MdSchool, MdWork } from "react-icons/md";
import { BiBookReader } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";

const BottomNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bottom-nav">
      <Link
        href="#about"
        className={activeNav === "#about" ? "active float-links" : "float-links"}
        onClick={() => {
          setActiveNav("#about");
          scrollToTop();
        }}
      >
        <AiOutlineUser />
      </Link>
      <Link
        href="#education"
        className={
          activeNav === "#education" ? "active float-links" : "float-links"
        }
        onClick={() => {
          setActiveNav("#education");
          scrollToTop();
        }}
      >
        <MdSchool />
      </Link>
      <Link
        href="#skills"
        className={
          activeNav === "#skills" ? "active float-links" : "float-links"
        }
        onClick={() => {
          setActiveNav("#skills");
          scrollToTop();
        }}
      >
        <BiBookReader />
      </Link>
      <Link
        href="#experience"
        className={
          activeNav === "#experience" ? "active float-links" : "float-links"
        }
        onClick={() => {
          setActiveNav("#experience");
          scrollToTop();
        }}
      >
        <MdWork />
      </Link>
      <Link
        href="#projects"
        className={
          activeNav === "#projects" ? "active float-links" : "float-links"
        }
        onClick={() => {
          setActiveNav("#projects");
          scrollToTop();
        }}
      >
        <FaFolderOpen />
      </Link>
      <Link
        href="#contact"
        className={
          activeNav === "#contact" ? "active float-links" : "float-links"
        }
        onClick={() => {
          setActiveNav("#contact");
          scrollToTop();
        }}
      >
        <AiOutlineMessage />
      </Link>
    </nav>
  );
};

export default BottomNavbar;
