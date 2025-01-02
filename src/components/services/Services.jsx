import React from "react";
import emailjs from 'emailjs-com';
import { useState } from "react";
import { services } from "./servicesData";
import { Link } from "react-router-dom";
import { ArrowUpRight } from 'lucide-react'

function StrategicSolutions() {
  return (
    <section className="flex overflow-hidden flex-col items-center  pt-8 pb-12 bg-black max-md:px-5">
      <div className="flex justify-center items-center  py-8 mt-1.5 w-full font-bold text-white bg-stone-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-6xl max-md:text-4xl">Our Services</div>
          <div className="self-center mt-6 text-base uppercase tracking-[3.2px]">
            Home / Our Services
          </div>
        </div>
      </div>
      <h2 className="self-center text-sm font-bold text-white py-4 uppercase tracking-[2.8px]">
        WHAT WE DO
      </h2>
      <h1 className="self-center mt-3 text-5xl font-bold text-center text-white max-md:max-w-full max-md:text-3xl">
        strategic digital solutions to <br />
        <span className="text-yellow-600 underline">businesses</span> and
        organizations.
      </h1>
      <div className="mt-20 px-8 max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-md:flex-col">
          {services.map((service) => (
            <ServiceColumn key={service.id} {...service} />
          ))}
        </div>
      </div>

    </section>
  );
}
function ServiceColumn({ id, title, description, imageSrc, link }) {
  return (
    <div id={id} className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
      <Link to={`${link}?service=${id}`}>
        <div
          className={`flex flex-col items-center px-7 pt-1 pb-14 w-full text-black bg-gray-200 hover:bg-amber-500 rounded-xl max-md:px-5 max-md:mt-10`}
        >
          {imageSrc && (
            <img
              loading="lazy"
              src={imageSrc}
              alt="services"
              className="object-contain max-w-full aspect-square w-[134px] m-1"
            />
          )}
          <h3 className={`text-base sm:text-xl lg:text-2xl font-bold`}>{title}</h3>
          <p className={`self-stretch mt-3 text-[11px] sm:text-[14px] text-center`}>
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}



function Optimization() {
  const services = [
    {
      number: "01",
      title: "STRATEGY",
      description: "Long-Term Plans And Actions Designed To Achieve"
    },
    {
      number: "02",
      title: "DESIGN",
      description: "Innovative Techniques To Visually Communicate"
    },
    {
      number: "03",
      title: "DEVELOPMENT",
      description: "Guidance Of Project Initiation, Planning, Execution"
    },
    {
      number: "04",
      title: "OPTIMIZATION",
      description: "More Effective, Efficient, Or Functional As Possible"
    }
  ]

  return (
    <section className="bg-zinc-900 w-full px-6 py-16 md:px-12 lg:px-20">
      <div className=" mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-zinc-200 text-sm tracking-wider mb-4">OUR BEST SERVICES</h2>
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Digital Solutions To{" "}
                <span className="text-amber-500">Website</span>
                <br />
                Optimization
              </h1>
            </div>

            <div className="relative">
              <img
                src="./images/skyrocket.png"
                alt="Marketing Strategy Rocket"
                className="w-[350px] sm:w-[500px] h-[360px] sm:h-[500px] mx-auto "
              />
              {/* <button className="bg-amber-500 text-black font-medium px-6 py-2 rounded-full mt-6 hover:bg-amber-400 transition-colors">
                View More
              </button> */}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 lg:pt-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-t border-zinc-800 pt-6 flex items-start justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-zinc-600 text-lg">{service.number}</span>
                    <h3 className="text-white text-2xl font-semibold tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 max-w-sm">
                    {service.description}
                  </p>
                </div>
                <div className="hidden group-hover:flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700">
                  <ArrowUpRight className="w-5 h-5 text-zinc-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


function OurMilstone() {
  return (
    <div className="flex overflow-hidden  flex-col justify-center items-center px-20 py-36 bg-black max-md:px-5 max-md:py-24">
      <div className="flex flex-col items-center w-full max-w-[1440px] max-md:max-w-full">
        <div className="text-sm font-bold text-yellow-600 uppercase tracking-[2.8px]">
          OUR Milstone
        </div>
        <div className="mt-4 md:text-4xl text-center text-white md:leading-[50px] max-md:max-w-full">
          “ Business strategy refers to the set of decisions and actions that a{" "}
          <br />
          company formulates to achieve its long-term goals and objectives. It{" "}
          <br />
          involves analyzing the company's internal strengths and weaknesses,{" "}
          <br />
          understanding the external market conditions ”{" "}
        </div>
        <div className="flex shrink-0 mt-16 max-w-full  h-0.5 bg-stone-300 w-full max-md:mt-10" />
        <div className=" text-center  mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5   max-md:flex-col">
            <div className="flex flex-col   w-[25%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center font-bold text-amber-400 max-md:mt-10">
                <img
                  alt="temp"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/69a550d9772070289308622ebace724b9fffca43feee31c99dd8505ff5cfd557?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                  className="object-contain aspect-[0.93] w-[93px]"
                />
                <div className="mt-10 text-5xl max-md:text-4xl">196k</div>
                <div className="self-stretch mt-5 text-3xl">
                  Business Growth
                </div>
              </div>
            </div>
            <div className="flex flex-col   w-auto max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center font-bold text-yellow-600 max-md:mt-10">
                <img
                  alt="temp"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/538610b406a25e66ec4d70898fbe52102ae787390c1229be2c7748aa18c67319?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                  className="object-contain max-w-full aspect-[1.02] w-[104px]"
                />
                <div className="mt-9 text-5xl max-md:text-4xl">16k</div>
                <div className=" mt-5 text-3xl">Strategies planed</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center font-bold text-amber-400 max-md:mt-10">
                <div className="flex flex-col ml-6 max-w-full text-5xl whitespace-nowrap w-[118px] max-md:ml-2.5 max-md:text-4xl">
                  <img
                    alt="temp"
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad613910b3bd38c5d8ab2d05a0cb18d94dd7aa846a32131f3a232c844e0e43?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                    className="object-contain w-full aspect-[1.15]"
                  />
                  <div className="mt-10 max-md:text-4xl">346k</div>
                </div>
                <div className="mt-5 text-3xl">Projects Released</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center font-bold text-amber-400 max-md:mt-10">
                <img
                  alt="temp"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/58b5a0a975f0955083804348d2909e0382a1fe87d533f15049f6351c2fbb608a?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                  className="object-contain aspect-[0.88] w-[88px]"
                />
                <div className="mt-10 text-5xl max-md:text-4xl">146k</div>
                <div className="self-stretch mt-5 text-3xl">
                  Satisfied Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetInTouch() {
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
        alert("Submitted successfully!");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };


  return (
    <div className="flex flex-col text-sm text-white">
      <div className="flex flex-col justify-center items-center px-20 py-36 w-full bg-stone-400 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 w-full max-w-[624px] max-md:mb-2.5">
          <div className="self-center font-bold uppercase tracking-[2.8px] text-center">
            GET IN TOUCH
          </div>
          <div className="mt-3 text-5xl font-bold text-center max-md:text-4xl">
            Ready to Work With Us ?
          </div>
          <div className="mt-3.5 text-base leading-8 text-center max-md:max-w-full">
            Here are many variations of passages of Lorem Ipsum available,{" "}
            <br />
            but the majority have suffered alteration in some form.
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}>
            <div className="flex items-center gap-6 mt-20 max-md:mt-10">
              <div className="flex flex-col w-full max-w-[380px]">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="text-base text-white placeholder:text-white bg-transparent outline-none p-3 max-md:w-full"
                  placeholder="Your Email ID"
                />
                <div className="mt-3.5 h-px bg-zinc-300" />
              </div>
              <button type="submit" className="flex justify-center items-center  font-bold whitespace-nowrap bg-yellow-600 rounded-full sm:h-[88px] sm:w-[88px] h-[64px] w-[64px] max-md:px-5">
                SEND
              </button>
            </div></form>
        </div>
      </div>
    </div>
  );
}

function OurInstagram() {
  return (
    <div className="flex flex-col rounded-none">
      <div className="flex flex-col items-center px-4 pt-24 pb-7 w-full bg-yellow-600 max-md:max-w-full">
        <div className="text-sm font-bold text-white uppercase tracking-[2.8px]">
          Our INSTAGRAM
        </div>
        <div className="mt-3 ml-16 text-5xl text-white max-md:max-w-full max-md:text-4xl">
          Follow # Promotr
        </div>
        <div className="flex flex-wrap justify-center gap-3.5 self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          {/* First Div */}
          <div className="flex shrink-0 aspect-square bg-stone-300 h-[198px] rounded-[30px] w-[200px] overflow-hidden hover:scale-110">
            <img
              alt="image1"
              loading="lazy"
              src=" ./images/contact1.png"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Second Div */}
          <div className="flex shrink-0 aspect-square bg-stone-300 h-[198px] rounded-[30px] w-[200px] overflow-hidden hover:scale-110">
            <img
              alt="image2"
              loading="lazy"
              src=" ./images/contact2.png"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Third Div */}
          <div className="flex shrink-0 aspect-square bg-stone-300 h-[198px] rounded-[30px] w-[200px] overflow-hidden hover:scale-110">
            <img
              alt="image3"
              loading="lazy"
              src=" ./images/contact3.png"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Fourth Div with Overlay */}
          <div className="flex flex-col justify-center items-center px-16 aspect-square bg-stone-300 rounded-[30px] max-md:px-5 max-md:py-24 relative overflow-hidden hover:scale-110">
            <img
              alt="image4"
              loading="lazy"
              src="./images/contact6.png"
              className="object-cover w-full h-full absolute top-0 left-0"
            />
            <a
              href="https://www.instagram.com/promotrworld/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="logo"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7755031af78101a31b0783ec9a1b863ef3d00bfa4d74d5c0ae071bcb84e8195a?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                className="relative z-10 object-contain aspect-square w-[50px]"
              />
            </a>

          </div>

          {/* Fifth Div */}
          <div className="flex shrink-0 aspect-square bg-stone-300 h-[198px] rounded-[30px] w-[200px] overflow-hidden hover:scale-110">
            <img
              alt="image5"
              loading="lazy"
              src=" ./images/contact5.png"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Sixth Div */}
          <div className="flex shrink-0 aspect-square bg-stone-300 h-[198px] rounded-[30px] w-[200px] overflow-hidden hover:scale-110">
            <img
              alt="image6"
              loading="lazy"
              src=" ./images/contact4.jpg"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

function Services() {
  return (
    <>
      <StrategicSolutions />
      <Optimization />
      <OurMilstone />
      <GetInTouch />
      <OurInstagram />
    </>
  );
}

export default Services;
