import React from "react";
import {  useLocation } from "react-router-dom";
import { servicePageData } from "./serviceDetailsData";

function ContactForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-semibold text-black mb-4">Have Any Queries?</h2>

      {/* Form Section */}
      <form className="text-black text-base">
        <input
          type="text"
          placeholder="Full name"
          className="mt-9 text-base text-black placeholder:text-black bg-transparent outline-none max-md:mt-10 max-md:max-w-full"
        />
        <div className="shrink-0 mt-2 h-px bg-gray-500 bg-opacity-50 max-md:max-w-full" />
        <input
          type="email"
          placeholder="Email"
          className="mt-9 text-base text-black placeholder:text-black bg-transparent outline-none max-md:mt-10 max-md:max-w-full"
        />
        <div className="shrink-0 mt-2 h-px bg-gray-500 bg-opacity-50 max-md:max-w-full" />
        <textarea
          placeholder="Message"
          className="mt-9 text-base text-black placeholder:text-black bg-transparent outline-none max-md:mt-10 max-md:max-w-full resize-none overflow-hidden"
          rows="1"
        ></textarea>

        <div className="shrink-0 mt-2 h-px bg-gray-500 bg-opacity-50 max-md:max-w-full" />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-semibold py-2 mt-8 rounded-full hover:bg-yellow-600 transition duration-200"
        >
          Send Queries
        </button>
      </form>

      {/* Contact Details Section */}
      <div className="mt-8 text-center text-black">
        <h3 className="text-lg font-semibold text-gray-800">Contact Our Office</h3>
        <div className="flex gap-5 justify-start mt-8 max-md:mt-10">
          <img
            loading="lazy"
            src="icons/click.png"
            className="shrink-0 self-start aspect-[0.6] w-[21px]"
            alt="Chat"
          />
          <div className="flex flex-col">
            <div className="text-lg font-bold">Chat to us</div>
            <div className="mt-2 text-sm">Info@gilli.com</div>
          </div>
        </div>
        <div className="flex gap-5 mt-10 text-xl font-bold max-md:mt-10">
          <img
            loading="lazy"
            src="icons/location.png"
            className="shrink-0 aspect-[0.61] w-[20px]"
            alt="Location"
          />
          <div className="flex-auto text-lg self-start">Visit our Office Branch</div>
        </div>
        <div className="mt-0 ml-9 text-sm leading-6 max-md:ml-2.5">
          800 Nicollet Mall, Minneapolis, MN 55402, United States
        </div>
        <div className="flex gap-5 justify-start mt-6 text-xl font-bold max-md:mt-10">
          <img
            loading="lazy"
            src="icons/call.png"
            className="shrink-0 w-6 aspect-square"
            alt="Call"
          />
          <div className="self-start text-lg">Call Us</div>
        </div>
        <div className="mt-2 text-base leading-6 max-md:ml-2.5">
          +1 502-240-6226
          <br />
          +1 612-659-2000
        </div>
      </div>
    </div>
  );
}

const VideoComponent = () => {
  return (
    <div className="mx-2">
      <video width="100%" autoPlay loop muted>
        <source src="/videos/serviceAds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const HeaderSD = () => {
  return (
    <div className="flex justify-center items-center px-16 py-8 mt-8 w-full font-bold text-white bg-stone-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col">
        <div className="text-6xl max-md:text-4xl">Services - Detail</div>
        <div className="self-center mt-6 text-base uppercase tracking-[3.2px]">
          Home / Services
        </div>
      </div>
    </div>
  );
};

const ImageGrid = ({ images }) => {
  return (
    <div className="flex justify-center gap-5 max-md:flex-col">
      {images.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-evenly items-center w-[212px] h-[196px] rounded-3xl bg-white max-md:w-full max-md:ml-0 transition-transform duration-300 hover:scale-105"
        >
          <img
            loading="lazy"
            src={item.src}
            alt={item.name}
            className="object-contain max-w-full rounded-2xl aspect-[1.08] w-[90px]"
          />
          <p  className="mt-2 text-black text-center text-lg">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

const GraphicDesignSection = ({
  title,
  subtitle,
  companyName,
  location,
  description,
  services,
  footer,
}) => {
  return (
    <div className="bg-black mt-8 text-white w-[80%]  mx-auto ">
      <h1 className="text-[50px] font-normal">
        <span className="text-white">{title.split(" ")[0]}</span>
        <span className="text-yellow-500"> {title.split(" ")[1]}</span>
      </h1>
      <p className="mt-8 text-balance text-gray-300">{subtitle}</p>
      <h2 className="mt-8 text-2xl font-semibold">
        {companyName} {location}
      </h2>
      <p className="mt-4 text-sm text-gray-100">{description}</p>
      <ul className="mt-4 space-y-2 list-none">
        {services.map((service, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">•</span>
            {service}
          </li>
        ))}
      </ul>
      <p style={{ whiteSpace: 'pre-line' }} className="mt-8 text-gray-300 text-justify">{footer}</p>
    </div>
  );
};

function ServicesDetails() {

  const location = useLocation(); 

  console.log("Location object: ", location);

  // Extract query parameters from the location object
  const queryParams = new URLSearchParams(location.search);
  const service = queryParams.get("service");  // Get the 'service' query parameter

  // Log the 'service' query parameter
  console.log("Service Query Parameter: ", service); 
  const serviceData = servicePageData[service];

  if (!serviceData) {
    return (
      <div className="text-center  text-red-500 h-[70vh]">
        <h1>404 - Service Not Found</h1>
      </div>
    );
  }

  const { imageGrid, graphicDesignSection } = serviceData;

  return (
    <main className="self-end my-14 w-full max-w-[1441px] max-md:mt-10 max-md:mr-2 max-md:max-w-full">
      <HeaderSD />
      <div className="flex mt-4 gap-5 max-md:flex-col">
        <article className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
          <VideoComponent />
          <GraphicDesignSection {...graphicDesignSection} />
          <div className="flex space-y-4 flex-col items-center mt-5 w-full max-md:mt-10 max-md:max-w-full">
            <ImageGrid images={imageGrid.slice(0, 4)} />
            <ImageGrid images={imageGrid.slice(4)} />
          </div>
        </article>
        <aside className="flex flex-col  w-[24%] max-md:ml-0 max-md:w-full">
          <ContactForm />
          <div className="flex shrink-0 self-center m-4 max-w-full rounded-md bg-stone-300 h-[350px] shadow-[0px_4px_24px_rgba(0,0,0,0.08)] w-[350px]" />
        </aside>
      </div>
    </main>
  );
}

export default ServicesDetails;
