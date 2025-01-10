import * as React from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';

// Main component
export default function Contacts() {
  return (
    <div className="flex flex-col pt-8 bg-black">
      {/* Header and Content */}
      <div className="flex justify-center items-center px-16 py-8 mt-1.5 w-full font-bold text-white bg-stone-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-6xl max-md:text-4xl">Contact Us</div>
          <div className="self-center mt-6 text-base uppercase tracking-[3.2px]">
            Home / Contact US
          </div>
        </div>
      </div>

      {/* Main contact area */}
      <div className="self-center mt-36 px-2 md:px-8 lg:px-12 xl:px-24 w-full max-w-[1441px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <ContactDetails />
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <MediaDisplay />

    </div>
  );
}

// Contact Details Component
const ContactDetails = () => (
  <div className="flex flex-col grow items-start px- mt-1.5 text-white max-md:mt-10 max-md:max-w-full">
    <div className="self-stretch text-sm font-bold text-white uppercase tracking-[2.8px] max-md:max-w-full">
      Contact our agency
    </div>
    <div className="self-stretch mt-5 text-4xl font-bold text-white max-md:max-w-full max-md:text-4xl">
      Our <span className="text-yellow-400">Branch</span> Office -{" "}
    </div>
    <div className="self-stretch mt-6 text-sm leading-6 max-md:mt-10 max-md:max-w-full">
      Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
    </div>
    <ContactInfo />
  </div>
);

// Contact Info Section (Email, Phone, Office Address)
const ContactInfo = () => (
  <>
    <div className="flex gap-5 justify-between mt-8 max-md:mt-10">
      <img
        loading="lazy"
        src="icons/clickWhite.png"
        className="shrink-0 self-start aspect-square   w-6  h-8"
        alt="email icon"
      />
      <div className="flex flex-col">
        <div className="text-lg font-bold">Chat to us</div>
        <div className="mt-2 text-sm">promotrworld01@gmail.com</div>
      </div>
    </div>
    <div className="flex gap-5 mt-10 text-xl font-bold max-md:mt-10">
      <img
        loading="lazy"
        src="icons/callWhite.png"
        className="shrink-0 aspect-square w-6  h-8"
        alt="location icon"
      />
      <div className="flex-auto text-lg self-start">
        Visit our Office Branch
      </div>
    </div>
    <div className="mt-0 ml-9 text-sm leading-6 max-md:ml-2.5">
      Head quaters- 7/5 Scanlon DR Epping Melbourne
    </div>
    <div className="flex gap-5 justify-between mt-6 text-xl font-bold max-md:mt-10">
      <img
        loading="lazy"
        src="icons/locationWhite.png"
        className="shrink-0 w-6 h-8 aspect-square"
        alt="phone icon"
      />
      <div className="self-start text-lg">Call Us</div>
    </div>
    <div className="mt-2 ml-9 text-base leading-6 max-md:ml-2.5">
      +91 6283910290
      <br />
      +61- 416927444
    </div>
    <div className="shrink-0 self-stretch mt-8 bg-stone-300 h-[260px] max-md:mt-10 max-md:max-w-full">
      <img
        src="images/contact6.png"
        alt="Placeholder 2"
        className="w-full h-full object-cover"
      />

    </div>
  </>
);

// Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    DigitalMarketing: false,
    GraphicDesigning: false,
    WebDevelopment: false,
    TraditionalMarketing: false,
    PoliticalManagement: false,
    EventsAndSponsorships: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const dataToSubmit = {
      name: formData.name,
      email: formData.email,
      about: formData.about || "No information provided",
      DigitalMarketing: formData.DigitalMarketing ? "Yes" : "No",
      GraphicDesigning: formData.GraphicDesigning ? "Yes" : "No",
      WebDevelopment: formData.WebDevelopment ? "Yes" : "No",
      TraditionalMarketing: formData.TraditionalMarketing ? "Yes" : "No",
      PoliticalManagement: formData.PoliticalManagement ? "Yes" : "No",
      EventsAndSponsorships: formData.EventsAndSponsorships ? "Yes" : "No",
    };
  
    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        dataToSubmit,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
  
      if (response.status === 200) {
        // Success Alert
        alert("Submitted successfully!");
  
        // Reset form data
        setFormData({
          name: "",
          email: "",
          message: "",
          DigitalMarketing: false,
          GraphicDesigning: false,
          WebDevelopment: false,
          TraditionalMarketing: false,
          PoliticalManagement: false,
          EventsAndSponsorships: false,
        });
      } else {
        // Error Alert
        alert("Error submitting form. Please try again later.");
        console.error("Error submitting form", response);
      }
    } catch (error) {
      // Error Alert
      alert("An error occurred while submitting the form. Please try again.");
      console.error("Error submitting form", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-black">
      <div className="flex flex-col grow md:px-6 lg:px-16 py-14 w-full rounded-md bg-[#FFBF00C2] bg-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-2xl md:text-3xl font-bold md:leading-10 leading-6 text-black max-md:max-w-full">
          Got Ideas? We’ve Got the Skills
          <br />
          Let’s work together.
        </div>
        <div className="mt-8 text-base text-black max-md:max-w-full">
          Tell us More about Yourself!
        </div>

        {/* Form Inputs */}
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          className="mt-4 px-4 py-3 border-b text-black bg-transparent border-black placeholder:text-black"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="mt-4 px-4 text-black py-3 border-b bg-transparent border-black placeholder:text-black"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="about"
          placeholder="About Your Project"
          className="mt-4 px-4 py-1 text-black border-b bg-transparent border-black placeholder:text-black"
          value={formData.about}
          onChange={handleChange}
        />

        {/* Checkboxes */}

        <div className="text-lg md:text-xl mt-3 font-[500] md:leading-10 leading-6 text-black max-md:max-w-full">
          How can we Help?
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <CheckboxInput
              name="DigitalMarketing"
              label="Digital Marketing"
              checked={formData.DigitalMarketing}
              onChange={handleChange}
            />
          </div>
          <div>
            <CheckboxInput
              name="GraphicDesigning"
              label="Graphic Designing"
              checked={formData.GraphicDesigning}
              onChange={handleChange}
            />
          </div>
          <div>
            <CheckboxInput
              name="WebDevelopment"
              label="Web Development"
              checked={formData.WebDevelopment}
              onChange={handleChange}
            />
          </div>
          <div>
            <CheckboxInput
              name="TraditionalMarketing"
              label="Traditional Marketing"
              checked={formData.TraditionalMarketing}
              onChange={handleChange}
            />
          </div>
          <div>
            <CheckboxInput
              name="PoliticalManagement"
              label="Political Management"
              checked={formData.PoliticalManagement}
              onChange={handleChange}
            />
          </div>
          <div>
            <CheckboxInput
              name="EventsAndSponsorships"
              label="Events And Sponsorships"
              checked={formData.EventsAndSponsorships}
              onChange={handleChange}
            />
          </div>

        </div>


        <button
          type="submit"
          className="self-center mt-10 text-lg w-full px-10 py-1 bg-black text-white rounded-full border-2 border-black hover:bg-yellow-400 hover:text-black"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

// Reusable Checkbox Input Component
const CheckboxInput = ({ name, label, checked, onChange }) => (
  <div className="flex items-center mt-4">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="w-6 h-6 md:w-4 md:h-4 lg:w-6 lg:h-6 border border-black bg-transparent appearance-none  checked:border-black relative"
    />
    <label htmlFor={name} className="ml-3 text-base md:text-sm lg:text-base text-black">
      {label}
    </label>
    <style jsx>{`
      input[type="checkbox"]:checked::before {
        content: "";
        position: absolute;
        top: 28%;
        left: 70%;
        width: 20px;
        height: 10px;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    `}</style>
  </div>
);



// Media Display Component
const MediaDisplay = () => (

  <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-10 pl-5 pr-5 mt-36 w-full bg-stone-300 max-md:pl-5 max-md:mt-10">
    <div className="bg-white h-[481px] w-full max-h-[60vh] sm:h-[300px]">
      <video
        src="videos/contact-V.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        ref={(video) => {
          if (video) {
            video.playbackRate = 0.5; // Set playback speed to 50% (slow)
          }
        }}
      />
    </div>
    <div className="bg-white h-[481px] w-full max-h-[60vh] sm:h-[300px]">
      <img
        src="images/contact2.jfif"
        alt="Placeholder 2"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="bg-white h-[481px] w-full max-h-[60vh] sm:h-[300px]">
      <img
        src="images/contact3.png"
        alt="Placeholder 3"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="bg-white h-[481px] w-full max-h-[60vh] sm:h-[300px]">
      <img
        src="images/contact4.jpg"
        alt="Placeholder 4"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);
