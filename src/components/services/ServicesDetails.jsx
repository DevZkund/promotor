import React from 'react'


const VideoComponent = () => {
  return (
    <div className='mx-2'>
      <video   width="100%" autoPlay loop muted>
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
          Home / Careers
          </div>
        </div>
      </div>
  );
};
const imageGridData = [
  { src: '/images/brandStationery.png', name: 'Brand Stationary' },
  { src: '/images/brandStationery.png', name: 'Icon 2' },
  { src: '/images/brandStationery.png', name: 'Icon 3' },
  { src: '/images/brandStationery.png', name: 'Icon 4' },
  { src: '/images/brandStationery.png', name: 'Icon 5' },
  { src: '/images/brandStationery.png', name: 'Icon 6' },
  { src: '/images/brandStationery.png', name: 'Icon 7' },
  { src: '/images/brandStationery.png', name: 'Icon 8' }
];
const ImageGrid = ({ images }) => {
  return (
    <div className="flex justify-center  gap-5 max-md:flex-col ">
      {images.map((item, index) => (
        <div key={index} className="flex flex-col justify-evenly items-center w-[212px] h-[196px] rounded-3xl bg-white max-md:w-full max-md:ml-0 transition-transform duration-300 hover:scale-105">
          {/* Image with hover effect */}
          <img
            loading="lazy"
            src={item.src}
            alt={item.name}
            className="object-contain max-w-full rounded-2xl aspect-[1.08] w-[90px]  "
          />
          {/* Name below the image */}
          <p className="mt-2 text-black  text-lg">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

const GraphicDesignSection = ({
  title = "Graphic Designing",
  subtitle = "Graphic Designing Service Is Tailored To Meet Your Needs. We Offer Creative Solutions To Help You Stand Out From The Crowd, In A Way That Resonates With Your Audience. Our Designers Are Always Thinking Outside The Box.",
  companyName = "Promotr",
  location = "The Best Graphic Designers In Chandigarh",
  description = "We Help Businesses Of All Sizes Reach Their Target Audience Through Effective Graphic Design Services. Our Team Of Experienced And Certified Graphic Designers Can Help You With A Wide Range Of Services, Including:",
  services = [
    "Logo Design",
    "Branding",
    "Website Design",
    "Social Media Graphics",
    "Print Advertising",
    "Packaging Design",
    "And More!"
  ],
  footer = "We Are Committed To Providing Our Clients With The Highest Quality Graphic Design Services And Support. We Will Work With You To Develop A Custom Graphic Design Strategy That Is Tailored To Your Specific Needs And Goals. Contact Us Today To Learn More About Our Services And How We Can Help You Grow Your Business."
}) => {
  return (
    <div className="bg-black mt-8 text-white w-[85%] mx-auto">
      {/* Title */}
      <h1 className="text-[50px] font-normal">
        <span className="text-white">{title.split(' ')[0]}</span> 
        <span className="text-yellow-500"> {title.split(' ')[1]}</span>
      </h1>
      
      {/* Subtitle */}
      <p className="mt-8 text-balance text-gray-300">{subtitle}</p>
      
      {/* Company and Location Heading */}
      <h2 className="mt-8 text-2xl font-semibold">
        {companyName}: {location}
      </h2>
      
      {/* Description */}
      <p className="mt-4 text-sm text-gray-100">{description}</p>
      
      {/* Services List */}
      <ul className="mt-4 space-y-2 list-none">
        {services.map((service, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">•</span>
            {service}
          </li>
        ))}
      </ul>
      
      {/* Footer */}
      <p className="mt-8 text-gray-300">{footer}</p>
    </div>
  );
};


function ServicesDetails() {

  return (
    
     <main className="self-end my-14 w-full max-w-[1441px] max-md:mt-10 max-md:mr-2 max-md:max-w-full">
      <HeaderSD/>
     <div className="flex mt-4 gap-5 max-md:flex-col">
       <article className="flex flex-col w-[74%]  max-md:ml-0 max-md:w-full">
      <VideoComponent/>
      <GraphicDesignSection/>
         <div className="flex flex-col items-center mt-5 w-full max-md:mt-10 max-md:max-w-full">
           
           <div className="ml-11 mt-8 max-w-full  max-md:mt-10">
             <ImageGrid images={imageGridData.slice(0, 4)} />
           </div>
           <div className="mt-6 ml-12 max-w-full w-[1064px] max-md:mt-10">
             <ImageGrid images={imageGridData.slice(4)} />
           </div>
         </div>
       </article>
       <aside className="flex flex-col border  w-[24%] max-md:ml-0 max-md:w-full">
         <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
           <img
             loading="lazy"
             src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63c678d99a596583ebaa4ec29547818145813c63459d8c2bdace51639b68b86?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
             alt="pic"
             className="object-contain w-full aspect-[0.51] max-md:max-w-full"
           />
           <div className="flex shrink-0 self-center m-4 max-w-full rounded-md bg-stone-300 h-[350px] shadow-[0px_4px_24px_rgba(0,0,0,0.08)] w-[350px]" />
         </div>
       </aside>
       
     </div>
   </main>
  )
}

export default ServicesDetails;


