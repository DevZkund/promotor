import React from "react";

import emailjs from 'emailjs-com';
import { useState } from "react";
import TrustedCompanies from "../home/TrustedCompanies";

function Header() {
  return (
    <div className="flex justify-center items-center px-16 py-8 mt-9 w-full font-bold text-white bg-stone-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col">
        <div className="text-6xl max-md:text-4xl">About Us</div>
        <div className="self-center mt-6 text-base uppercase tracking-[3.2px]">
          Home / Aboutus
        </div>
      </div>
    </div>
  );
}

function FounderSection() {
  return (
    <section className="text-center py-16 text-white">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
        Founder - Tushar Dhiman
      </h2>
      <div className="grid md:grid-cols-2 grid-col-1 justify-evenly items-center md:items-start my-12 mx-auto h-full w-11/12 lg:w-10/12 ">
        <div className="w-full  h-full relative  overflow-hidden mb-8 md:mb-0">
          <img
            className="rounded-lg object-cover p-2 w-full h-auto"
            src="./images/founder.png"
            alt="Founder"
          />

        </div>
        <div className="flex-1  items-center text-justify justify-center px-8 pt-4 w-full md:w-auto">
          <p className="leading-relaxed text-sm lg:text-lg xl:text-xl ">
            You'll often find me sipping on bottomless cups of coffee,
            brainstorming the next big campaign, and occasionally challenging
            the office plant to a game of chess (I usually lose). I believe
            that marketing isn't just about selling; it's about storytelling,
            and I'm here to craft captivating narratives that resonate with
            your audience. <br /><br />
            "Why did the marketer bring a magnifying glass to the meeting? To
            find those tiny details that make a big difference!"
          </p>
          <br />
          <div className="text-center">
            <h1 className="mt-3 me-2">- Tushar Dhiman </h1>
            <h1>
              <b>
                ( Founder & <span className="text-amber-400">CEO</span> )
              </b>
            </h1>
          </div>

        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-evenly space-x-2  pt-5 w-full px-6  ">
        <div className="bg-[#FFBF00] my-2 py-5 px-3 rounded-xl text-center w-full lg:w-auto h-auto lg:h-64">
          <div className="flex flex-row justify-start items-center  py-4 px-4">
            <span className="text-[8vw]  md:text-6xl font-bold text-black font-nexa">
              10
            </span>
            <span className="text-[3.8vw] md:text-2xl font-semibold text-black text-start ml-2 md:ml-4">
              Years Of <br /> Experience
            </span>
            <img
              className="md:mt-4 lg:mt-0 ml-auto w-8 h-8"
              src="./images/arrow-down.svg"
              alt="arrow down"
            />
          </div>
          <div className="text-sm lg:text-[13px] mt-4 px-4 text-left text-black">
            Here are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form. Here are
            many variations of passages of Lorem Ipsum available.
          </div>
        </div>
        <div className="bg-[#FFBF00] my-2 py-5 px-3 rounded-xl text-center w-full lg:w-auto h-auto lg:h-64">
          <div className="flex flex-row justify-start items-center  py-4 px-4">
            <span className="text-[8vw]  md:text-6xl font-bold text-black font-nexa">
              96
            </span>
            <span className="text-[3.8vw] md:text-2xl font-semibold text-black text-start ml-2 md:ml-4">
              Completed <br /> Project
            </span>
            <img
              className="md:mt-4 lg:mt-0 ml-auto w-8 h-8"
              src="./images/arrow-down.svg"
              alt="arrow down"
            />
          </div>
          <div className="text-sm lg:text-[13px] mt-4 px-4 text-left text-black">
            Project completion marks the successful culmination of a planned set of activities and deliverables. It signifies that all objectives and milestones have been achieved within the defined scope, time, and budget.
          </div>
        </div>
        <div className="bg-[#FFBF00] my-2 py-5 px-3 rounded-xl text-center w-full lg:w-auto h-auto lg:h-64">
          <div className="flex flex-row justify-start items-center  py-4 px-4">
            <span className="text-[8vw]  md:text-6xl font-bold text-black font-nexa">
              11K
            </span>
            <span className="text-[3.8vw] md:text-2xl font-semibold text-black text-start ml-2 md:ml-4">
              Happy <br /> customers
            </span>
            <img
              className="md:mt-4 lg:mt-0 ml-auto w-8 h-8"
              src="./images/arrow-down.svg"
              alt="arrow down"
            />
          </div>
          <div className="text-sm lg:text-[13px] mt-4 px-4 text-left text-black">
            Project completion is the final phase of a project where all planned tasks, deliverables, and objectives are successfully achieved. It involves reviewing the work to ensure it meets the required standards.
          </div>
        </div>


      </div>
    </section>
  );
}
// WhyDifferent Section
function WhyDifferentSection() {
  return (
    <section className=" ">
      <div className="flex justify-center py-10 items-center mx-auto  bg-zinc-800 max-md:px-5">
        <div className="flex flex-col mt-16 w-full max-w-[1446px]  max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full ">
            <div className="flex justify-center  max-md:flex-col ">
              <div className="flex flex-col w-[35%] mr-0  max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-1  text-white max-md:mt-10 max-md:max-w-full">
                  <div className="text-sm uppercase font-bold tracking-[2.8px] max-md:max-w-full">
                    Why we are here
                  </div>
                  <div className="mt-6 text-4xl font-bold text-yellow-400 max-md:max-w-full max-md:text-4xl">
                    Why we are Different in <br />
                    <span className="text-yellow-400 underline">business</span>
                  </div>
                  <div className="mt-8 text-xl font-bold max-md:mt-7 max-md:max-w-full">
                    Trust, Diligence, Succeed!
                  </div>
                  <div className="mt-6 text-sm leading-6 max-md:mt-5 max-md:max-w-full">
                    here are many variations of passages of Lorem Ipsum
                    available, <br />
                    but the majority have suffered alteration in some form, by{" "}
                    <br />
                    injected humour, or randomised words which don't look even{" "}
                    <br />
                    slightly believable.{" "}
                  </div>
                  <div className="self-start px-5 py-2 mt-5 text-sm bg-black rounded-[90px] max-md:px-5 max-md:mt-10">
                    Know More
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full ">
                <div className="shrink-0 mx-auto max-w-full bg-stone-300 h-[22rem] w-[32rem] max-md:mt-10 rounded-2xl">
                  <img
                    src="./images/about-img-2.png"
                    alt="about-img-2"
                    className="h-[22rem] w-[32rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}








// BusinessTalk
function BusinessTalk() {
  return (
    <section className="flex justify-center items-center p-16 pb-20 text-black bg-neutral-100 max-md:px-5">
      <div className="flex gap-5 justify-between mt-20 w-full max-w-[1443px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <header className="flex flex-col font-bold max-md:max-w-full">
          <h2 className="text-sm uppercase tracking-[2.8px] max-md:max-w-full">
            Business Talk's
          </h2>
          <h1 className="mt-7 text-5xl max-md:max-w-full max-md:text-4xl">
            Let's get in touch, <br /> we reply your Queries.
          </h1>
        </header>
        <EmailForm />
      </div>
    </section>
  );
}
function EmailForm() {
  const [formData, setFormData] = useState({
    name: "Visitor",
    email: "",
    message: "Try to contact you!",
    
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      email: formData.email,
      name: "Visitor",
      message: "Try to contact you!",
      websiteDesign: false,
    uxDesign: false,
    userResearch: false,
    contentCreation: false,
    strategyConsulting: false,
    other: false,
    };

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        dataToSubmit,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        console.log("Form submitted successfully:", response);
        setFormData({ email: "" }); // Clear form data
        alert("Form submitted successfully!");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  w-full max-w-md space-y-7 items-center"
    >
      <div className="flex flex-col w-full">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Enter your Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-2 h-10 w-full px-3 bg-zinc-200 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Enter your Email"
          aria-describedby="emailHelp"
          required
        />
        
      </div>

      <button
        type="submit"
        className="flex justify-center items-center bg-yellow-400 hover:bg-yellow-500 text-white font-bold ms-3 py-2 px-6 rounded-full shadow-md transition-all duration-200"
      >
        SEND
      </button>
    </form>
  );
}


export default function About() {
  return (
    <div >
      <Header />
      <FounderSection />
      <WhyDifferentSection />
      <TrustedCompanies />
      <BusinessTalk />
    </div>
  );
}
