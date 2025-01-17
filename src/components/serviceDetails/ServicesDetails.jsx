import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { servicePageData } from "./serviceDetailsData";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      name: formData.name,
      email: formData.email,
      message: formData.message,      
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
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-lg md:text-xl font-semibold text-black mb-4">Have Any Queries?</h2>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="text-black text-base">
        <input
          type="text"
          id="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full mt-4 text-sm md:text-base text-black placeholder:text-black bg-transparent border-b border-gray-400 outline-none"
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full mt-4 text-sm md:text-base text-black placeholder:text-black bg-transparent border-b border-gray-400 outline-none"
        />
        <textarea
          id="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          required
          className="w-full mt-4 text-sm md:text-base text-black placeholder:text-black bg-transparent border-b border-gray-400 outline-none resize-none"
          rows="3"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-sm md:text-base text-white font-semibold py-2 mt-8 rounded-full hover:bg-yellow-600 transition duration-200"
        >
          Send Queries
        </button>
      </form>

      {/* Contact Details Section */}
      <div className="mt-8 text-black">
        <h3 className="text-sm md:text-lg font-semibold text-gray-800">Contact Our Office</h3>
        <div className="flex gap-4 items-start mt-6">
          <img src="icons/click.png" alt="Chat" className="w-6 h-6" />
          <div>
            <div className="text-sm md:text-lg font-bold">Chat to us</div>
            <div className="text-xs lg:text-sm md:-ps-4 lg:p-0">promotrworld01@gmail.com</div>
          </div>
        </div>
        <div className="flex gap-4 items-start mt-6">
          <img src="icons/location.png" alt="Location" className="w-6 h-6" />
          <div>
            <div className="text-sm md:text-lg font-bold">Visit our Office Branch</div>
            <div className="text-xs md:text-sm">Headquarters: 7/5 Scanlon DR, Epping, Melbourne</div>
          </div>
        </div>
        <div className="flex gap-4 items-start mt-6">
          <img src="icons/callBlack.png" alt="Call" className="w-6 h-6" />
          <div>
            <div className="text-sm md:text-lg font-bold">Call Us</div>
            <div className="text-xs md:text-sm">
              +91 6283910290 <br /> +61- 416927444
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



const VideoComponent = ({ path }) => (
  <div className="w-full">
    <video className="w-full" autoPlay loop muted>
      <source src={path} type="video/mp4" />
    </video>
  </div>
);

const HeaderSD = () => (
  <div className="flex justify-center items-center px-6 py-8 bg-stone-800 text-white">
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">Services - Detail</h1>
      <p className="mt-4 text-xs md:text-sm lg:text-base uppercase tracking-wide">Home / Services</p>
    </div>
  </div>
);

const ImageGrid = ({ images }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/contact");

  return (
    <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1">
      {images.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          onClick={handleNavigate}
        >
          <img src={item.src} alt={item.name} className="w-16 md:w-24 h-12 md:h-24 object-contain" />
          <p className="mt-4 text-xs md:text-sm lg:text-base text-black text-center">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

const ImageSlider = () => {
  const images = [
    "images/contact1.png",
    "images/contact2.png",
    "images/contact3.png",
    "images/contact4.jpg",
    "images/contact5.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt="Slider"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const GraphicDesignSection = ({ title, subtitle, companyName, location, description, services, footer }) => (
  <div className="p-6 bg-black text-white rounded-lg">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
      {title.split(" ")[0]} <span className="text-yellow-500">{title.split(" ")[1]}</span>
    </h1>
    <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-300">{subtitle}</p>
    <h2 className="mt-6 text-sm md:text-lg lg:text-xl font-semibold">{companyName} {location}</h2>
    <p className="mt-4 text-xs md:text-sm lg:text-base text-gray-400">{description}</p>
    <ul className="mt-4 space-y-2">
      {services.map((service, index) => (
        <li key={index} className="flex items-start text-xs md:text-sm lg:text-base">
          <span className="mr-2">•</span>
          {service}
        </li>
      ))}
    </ul>
    <p className="mt-6 text-xs md:text-sm lg:text-base text-gray-300">{footer}</p>
  </div>
);

function ServicesDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const service = queryParams.get("service");
  const serviceData = servicePageData[service];

  if (!serviceData) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        <h1>404 - Service Not Found</h1>
      </div>
    );
  }

  const { imageGrid, graphicDesignSection, video } = serviceData;

  return (
    <div>
      <HeaderSD/>
    <main className="flex flex-col md:flex-row gap-8 px-4 py-8 w-full overflow-hidden">
      <article className="flex-1 md:w-[70%] lg:w-3/4">
        <VideoComponent path={video.path} />
        <GraphicDesignSection {...graphicDesignSection} />
        <ImageGrid images={imageGrid} />
      </article>
      <aside className="flex-shrink-0 md:w-[35%] lg:w-1/4">
        <ContactForm />
        <div className="mt-6">
          <ImageSlider />
        </div>
      </aside>
    </main></div>
  );
}

export default ServicesDetails;
