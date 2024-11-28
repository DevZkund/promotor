import * as React from "react";
import { useState } from "react";

export default function Contacts() {
  return (
    <div className="flex flex-col pt-8 bg-black">
      <div className="flex justify-center items-center px-16 py-8 mt-1.5 w-full font-bold text-white bg-stone-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-6xl max-md:text-4xl">Contact Us</div>
          <div className="self-center mt-6 text-base uppercase tracking-[3.2px]">
            Home / Contact US
          </div>
        </div>
      </div>
      <div className="self-center mt-36 px-2 md:px-24 w-full max-w-[1441px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-5 mt-1.5 text-white max-md:mt-10 max-md:max-w-full">
              <div className="self-stretch text-sm font-bold text-white uppercase tracking-[2.8px] max-md:max-w-full">
                Contact our agency
              </div>
              <div className="self-stretch mt-5 text-4xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                our <span className="text-yellow-400">Branch</span> office -{" "}
              </div>
              <div className="self-stretch mt-6 text-sm leading-6 max-md:mt-10 max-md:max-w-full">
                here are many variations of passages of Lorem Ipsum available,{" "}
                <br />
                but the majority have suffered alteration in some form,{" "}
              </div>
              <div className="flex gap-5 justify-between mt-8 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/abd4d96b5758f643617697a2efc7857d33c6b1f8e864048dfb3f92c2a49184b1?apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                  className="shrink-0 self-start aspect-[0.45] w-[21px]"
                  alt="abc"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Chat to us</div>
                  <div className="mt-2 text-sm">Info@gilli.com</div>
                </div>
              </div>
              <div className="flex gap-5 mt-10 text-xl font-bold max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fecaf2f9dc0202c6642cda095087e97722250af32690aaab4898d73abf477dc?apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                  className="shrink-0 aspect-[0.61] w-[20px]"
                  alt="abc"
                />
                <div className="flex-auto text-lg self-start">
                  Visit our Office Branch
                </div>
              </div>
              <div className="mt-0 ml-9 text-sm leading-6 max-md:ml-2.5">
                800 Nicollet Mall, Minneapolis, MN 55402, <br />
                United States
              </div>
              <div className="flex gap-5 justify-between mt-6 text-xl font-bold max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/58808968ce035f710f9e4437d39925603a625e74792589cac0292f63370b7fc3?apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                  className="shrink-0 w-6 aspect-square"
                  alt="abc"
                />
                <div className="self-start text-lg">Call Us</div>
              </div>
              <div className="mt-2 ml-9 text-base leading-6 max-md:ml-2.5">
                +1 502-240-6226
                <br />
                +1 612-659-2000
              </div>
              <div className="shrink-0 self-stretch mt-14 bg-stone-300 h-[260px] max-md:mt-10 max-md:max-w-full" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <Contact />
          </div>
        </div>
      </div>

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
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    websiteDesign: true,
    uxDesign: false,
    userResearch: false,
    contentCreation: false,
    strategyConsulting: false,
    other: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleCheckbox = (field) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data for submission (add any necessary formatting)
    const dataToSubmit = {
      ...formData,
      services: {
        websiteDesign: formData.design,
        uxDesign: formData.ux,
        userResearch: formData.research,
        contentCreation: formData.content,
        strategyConsulting: formData.strategy,
        other: formData.other,
      },
    };
    console.log("Form Data:", dataToSubmit);

    try {
      const response = await fetch("https://your-backend-url.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSubmit),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("Form submitted successfully", result);
        // Optionally reset form
        setFormData({
          name: "",
          email: "",
          about: "",
          websiteDesign: true,
          uxDesign: false,
          userResearch: false,
          contentCreation: false,
          strategyConsulting: false,
          other: false,
        });
      } else {
        console.error("Error submitting form", result);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-black">
      <div className="flex flex-col grow md:px-6 lg:px-16 py-14 w-full rounded-md bg-yellow-400 bg-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-2xl md:text-3xl font-bold md:leading-10 leading-6 text-black max-md:max-w-full">
          Got Ideas? We’ve Got the Skills
          <br />
          Let’s work together.
        </div>
        <div className="mt-8 text-base text-black max-md:max-w-full">
          Tell us More about Yourself!
        </div>

        {/* Name Input */}
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-9 text-base text-black placeholder:text-black bg-transparent outline-none max-md:mt-10 max-md:max-w-full"
          placeholder="Your Full Name"
        />
        <div className="shrink-0 mt-4 h-px bg-black bg-opacity-50 max-md:max-w-full" />

        {/* Email Input */}
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-9 text-base text-black placeholder:text-black bg-transparent outline-none max-md:mt-10 max-md:max-w-full"
          placeholder="Your Email ID"
        />
        <div className="shrink-0 mt-4 h-px bg-black bg-opacity-50 max-md:max-w-full" />

        {/* About Input */}
        <input
          name="about"
          value={formData.about}
          onChange={handleChange}
          className="mt-9 text-base text-black placeholder:text-black bg-transparent outline-none max-md:mt-10 max-md:max-w-full"
          placeholder="Tell Us About You"
        />
        <div className="shrink-0 mt-4 h-px bg-black bg-opacity-50 max-md:max-w-full" />

        <div className="mt-11 text-xl font-bold text-black max-md:mt-10 max-md:max-w-full">
          How can we Help?
        </div>

        {/* Checkbox Design Component */}
        <CheckboxDesign
          checkedState={formData}
          toggleCheckbox={toggleCheckbox}
        />

        <button
          type="submit"
          className="lg:px-16 text-center py-5 mt-14 text-base text-white bg-black rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          Let's Get Started
        </button>
      </div>
    </form>
  );
}

// CheckboxDesign Component
function CheckboxDesign({ checkedState, toggleCheckbox }) {
  return (
    <div className="mt-9 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-4 max-md:mt-10">
            <div className="flex flex-col items-center">
              <img
                onClick={() => toggleCheckbox("design")}
                src={
                  checkedState.design
                    ? "./images/checked.svg"
                    : "./images/unChecked.svg"
                }
                className="aspect-[1.15] w-[23px] cursor-pointer"
                alt="Website Design Checkbox"
              />
              {/* Other checkbox items */}
              <img
                onClick={() => toggleCheckbox("ux")}
                src={
                  checkedState.ux
                    ? "./images/checked.svg"
                    : "./images/unChecked.svg"
                }
                className="mt-8 aspect-[1.15] w-[23px] cursor-pointer"
                alt="UX Design Checkbox"
              />
              <img
                onClick={() => toggleCheckbox("research")}
                src={
                  checkedState.research
                    ? "./images/checked.svg"
                    : "./images/unChecked.svg"
                }
                className="mt-7 aspect-[1.15] w-[23px] cursor-pointer"
                alt="User Research Checkbox"
              />
            </div>
            {/* Labels */}
            <div className="my-auto text-base leading-6 text-black">
              Website Design
              <br />
              <br />
              UX Design
              <br />
              <br />
              User Research
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 max-md:mt-10">
            <div className="flex flex-col items-center">
              <img
                onClick={() => toggleCheckbox("content")}
                src={
                  checkedState.content
                    ? "./images/checked.svg"
                    : "./images/unChecked.svg"
                }
                className="w-5 aspect-square cursor-pointer"
                alt="Content Creation Checkbox"
              />
              <img
                onClick={() => toggleCheckbox("strategy")}
                src={
                  checkedState.strategy
                    ? "./images/checked.svg"
                    : "./images/unChecked.svg"
                }
                className="mt-8 w-5 aspect-square cursor-pointer"
                alt="Strategy & Consulting Checkbox"
              />
              <img
                onClick={() => toggleCheckbox("other")}
                src={
                  checkedState.other
                    ? "./images/checked.svg"
                    : "./images/unChecked.svg"
                }
                className="mt-7 w-5 aspect-square cursor-pointer"
                alt="Other Checkbox"
              />
            </div>
            <div className="my-auto text-base leading-6 text-black">
              Content Creation
              <br />
              <br />
              Strategy & Consulting
              <br />
              <br />
              Other
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
