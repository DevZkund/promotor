import React from 'react';



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
      <h2 className="text-3xl font-bold">Founder - Tushar Dhiman</h2>
      <div className="flex justify-center items-center mt-8">
        <img className="rounded-lg object-cover p-16 w-1/2" src="./images/founder.png" alt="Founder" />
        <div className="ml-8">
          <div className="bg-yellow-500 p-4 rounded">
            <h3 className="text-2xl font-bold">10 Years Of Experience</h3>
            <p className="text-sm mt-2">
              There Are Many Versions Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-xl font-bold">96</p>
            <p className="text-sm">Completed Projects</p>
          </div>
          <div className="mt-4">
            <p className="text-xl font-bold">11K</p>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div className="mt-4">
            <p className="text-xl font-bold">11K</p>
            <p className="text-sm">Total Achievements</p>
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
        <h2 className="text-3xl font-bold text-yellow-500">Why We Are Different In Business</h2>
        <p className="text-lg">Trust, Diligence, Succeed!</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-xl">
          <p className="text-gray-700 text-lg">
            There Are Many Versions Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form.
          </p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded">Know More</button>
        </div>
        <div className="ml-8">
          <img className="h-48 w-48 rounded-full object-cover" src="./images/business.jpg" alt="Business" />
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
          <p className="text-lg">Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text.</p>
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
      <h2 className="text-3xl font-bold">Let's Get In Touch, We Reply Your Queries.</h2>
      <div className="mt-8">
        <input className="px-4 py-2 border rounded" type="email" placeholder="Enter Your Email" />
        <button className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded">SEND</button>
      </div>
    </section>
  );
}


export default function About() {
  return (
    <div>
      <Header />
      <FounderSection />
      <WhyDifferentSection />
      <TestimonialsSection />
      <PartnersSection />
      <TeamSection />
      <ContactSection />      
    </div>
  );
}
