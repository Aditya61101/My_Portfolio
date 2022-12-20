import React from "react";
import { Title } from "./Title";
import { AiFillMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:adityakumarsanni.2001@gmail.com?subject=${data.subject}&body=Hi My name is ${data.name}. ${data.message}`;
  };
  return (
    <div className="flex flex-col items-center pb-20">
      <Title title="Get In Touch!" />
      <div className="flex flex-col lg:flex-row md:text-left mt-5 items-center lg:space-x-10">
        <div className="space-y-5">
          <div className="flex flex-row items-center space-x-5">
            <AiFillMail className=" text-3xl lg:text-4xl md:text-4xl text-gray-700" />
            <a href="mailto:adityakumarsanni.2001@gmail.com"
              className="lg:text-xl md:text-xl text-base text-gray-500"
            >
              adityakumarsanni.2001@gmail.com
            </a>
          </div>
          <div className="flex flex-row items-center space-x-5">
            <FiMapPin className="text-3xl lg:text-4xl md:text-4xl text-gray-700" />
            <p className="lg:text-xl md:text-xl text-base text-gray-500 uppercase tracking-wider">
              Patna, Bihar - 801503
            </p>
          </div>
        </div>
        <form
          className="flex flex-col mt-5 space-y-2 w-[100%] lg:mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex lg:flex-row md:flex-row flex-col lg:space-x-2 md:space-x-2 space-y-2">
            <input
              className="contactIp"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="contactIp"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <input
            className="contactIp"
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            className="contactIp"
            rows={6}
            placeholder="Your Message"
            {...register("message")}
          />
          <button className="bg-transparent text-black border border-teal-500 hover:bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-white transition-colors duration-500 ease-in-out px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
