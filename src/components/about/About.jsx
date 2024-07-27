import React from "react";

function Header() {
  return (
    <div className="bg-white/10 text-white text-center py-2">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-[12px] mt-1">HOME / ABOUT US</p>
    </div>
  );
}

function FounderSection() {
  return (
    <section className="text-center py-16 text-white">
    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">Founder - Tushar Dhiman</h2>
    <div className="grid md:grid-cols-2 grid-col-1 justify-evenly items-center md:items-start my-12 mx-auto h-full w-11/12 lg:w-10/12">
      <div className="w-full h-full  overflow-hidden mb-8 md:mb-0">
        <img
          className="rounded-lg object-cover shadow-md shadow-white p-2 w-full h-auto"
          src="./images/founder.png"
          alt="Founder"
        />
      </div>
      <div className="flex-1 flex items-center justify-center w-full md:w-auto">
        <div className="flex flex-col items-center justify-start pt-5 w-full lg:w-4/5 px-6">
          <div className="bg-[#FFBF00] py-5 px-3 rounded-xl text-center w-full lg:w-auto h-auto lg:h-64">
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
              Here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form. Here are many
              variations of passages of Lorem Ipsum available.
            </div>
          </div>
          <div className="mt-2 w-full text-center py-4 bg-[#D9D9D9] flex justify-center px-4">
            <p className="text-3xl lg:text-5xl text-left text-black ps-2 font-bold">96</p>
            <p className="text-sm lg:text-md text-left ml-4 text-black font-bold">
              Completed <br /> Projects
            </p>
            <img className="ml-auto w-8 h-8" src="./images/arrow-up.svg" alt="arrow up" />
          </div>
          <div className="mt-2 w-full text-center py-4 bg-[#D9D9D9] flex justify-center px-4">
            <p className="text-3xl lg:text-5xl text-left text-black ps-2 font-bold">11K</p>
            <p className="text-sm lg:text-md text-left ml-4 text-black font-bold">
              Happy <br /> Customers
            </p>
            <img className="ml-auto w-8 h-8" src="./images/arrow-up.svg" alt="arrow up" />
          </div>
          <div className="mt-2 w-full text-center py-4 bg-[#D9D9D9] flex justify-center px-4">
            <p className="text-3xl lg:text-5xl text-left text-black ps-2 font-bold">96</p>
            <p className="text-sm lg:text-md text-left ml-4 text-black font-bold">
              Total <br /> Achievements
            </p>
            <img className="ml-auto w-8 h-8" src="./images/arrow-up.svg" alt="arrow up" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  );
}

function WhyDifferentSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-yellow-500">
          Why We Are Different In Business
        </h2>
        <p className="text-lg">Trust, Diligence, Succeed!</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-xl">
          <p className="text-gray-700 text-lg">
            There Are Many Versions Of Passages Of Lorem Ipsum Available, But
            The Majority Have Suffered Alteration In Some Form.
          </p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded">
            Know More
          </button>
        </div>
        <div className="ml-8">
          <img
            className="h-48 w-48 rounded-full object-cover"
            src="./images/business.jpg"
            alt="Business"
          />
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-gray-500">Trust, Diligence, & Succeed</p>
        <div className="flex justify-center mt-4">
          <div className="bg-yellow-500 h-2 w-2 rounded-full"></div>
          <div className="bg-gray-300 h-2 w-2 rounded-full mx-4"></div>
          <div className="bg-gray-300 h-2 w-2 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Client Says</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-yellow-500 p-8 rounded">
          <p className="text-lg">
            Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text.
          </p>
          <p className="text-sm mt-4">- Sureender Shinga, CEO</p>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Partners</h2>
      </div>
      <div className="flex justify-center space-x-4">
        <img src="./images/amazon.png" alt="Amazon" />
        <img src="./images/ebay.png" alt="eBay" />
        <img src="./images/walmart.png" alt="Walmart" />
        <img src="./images/flipkart.png" alt="Flipkart" />
        <img src="./images/aliexpress.png" alt="AliExpress" />
        <img src="./images/target.png" alt="Target" />
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Design Experts</h2>
      </div>
      <div className="flex justify-center space-x-8">
        <div className="text-center">
          <div className="h-48 w-48 bg-gray-300 rounded-full"></div>
          <p className="mt-4">Karnia Kafia - Developer</p>
        </div>
        <div className="text-center">
          <div className="h-48 w-48 bg-gray-300 rounded-full"></div>
          <p className="mt-4">Dr Henry William - CEO</p>
        </div>
        <div className="text-center">
          <div className="h-48 w-48 bg-gray-300 rounded-full"></div>
          <p className="mt-4">Vennila Turka - Trainer</p>
        </div>
        <div className="text-center">
          <div className="h-48 w-48 bg-gray-300 rounded-full"></div>
          <p className="mt-4">Dr John Hussain - Designer</p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold">
        Let's Get In Touch, We Reply Your Queries.
      </h2>
      <div className="mt-8">
        <input
          className="px-4 py-2 border rounded"
          type="email"
          placeholder="Enter Your Email"
        />
        <button className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded">
          SEND
        </button>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div>
      <Header />
      <FounderSection />
      {/* <WhyDifferentSection />
      <TestimonialsSection />
      <PartnersSection />
      <TeamSection />
      <ContactSection />       */}
    </div>
  );
}
