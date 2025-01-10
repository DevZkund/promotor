import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./index.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import TrustedCompanies from "./TrustedCompanies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LoadingBanner = () => {
  return (
    <div className=" w-full lg:h-96 py-16" style={styles.container}>
      <div className="flex items-center justify-center bg-black/60 h-full w-full">
        <div className="text-center">
          <h1 className="font-spectral font-extrabold  text-[7.1vw]">
            Your Brand’s Biggest
          </h1>
          <h1 className="font-spectral font-extrabold text-[7.1vw] text-yellow-400">
            Cheerleaders
          </h1>
        </div>
      </div>
    </div>
  );
};

export const cardsData = [
  {
    title: "Graphic Designing",
    description:
      "Graphic design is the art of composing visual elements — such as typography, images, colors, and shapes. Designing the layout of a magazine, creating a poster for a theatre performance, and designing packaging for a product are all examples of graphic design.",
    imageUrl: "./images/graphic.png",
    buttonLabel: "Explore",
    path: "/service?service=graphicDesigning",
  },
  {
    title: "Web Development",
    description:
      " Web Development refers to a term that includes all the processes involved in developing a web project or website.Web developers develop websites, specifically by creating the site's code, connecting it to a server and maintaining its accessibility to users.",
    imageUrl: "./images/web.png",
    buttonLabel: "Explore",
    path: "/service?service=webDevelopment",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with our cutting-edge Digital Marketing service. At Digital Marketing, we use performance marketing to leverage your brand across various platforms and channels to drive desired results.",
    imageUrl: "./images/digital.png",
    buttonLabel: "Explore",
    path: "/service?service=digitalMarketing",
  },
];

const DigitalMarketing = ({ cardsData }) => {
  const navigate = useNavigate();
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Current card index
  const [fadeClass, setFadeClass] = useState("opacity-100"); // For fade-in effect

  // Update the current card index every 2 seconds with a fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("opacity-0"); // Fade out the current card

      setTimeout(() => {
        // Update the card index after the fade out transition
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
        setFadeClass("opacity-100"); // Fade in the new card
      }, 500); // Wait for the fade-out duration before changing the card
    }, 3000); // Change card every 2 seconds

    // Clear the interval on unmount
    return () => clearInterval(interval);
  }, [cardsData]);

  // Get the current card
  const currentCard = cardsData[currentCardIndex];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="md:flex justify-around">
      {/* Animated Card Section */}
      <div className="flex justify-center items-center">
        {/* Card with fade transition */}
        <div className="bg-white/5 text-white rounded-[2rem] my-4 sm:my-0 p-6 w-[250px] md:w-[300px] lg:w-[350px] shadow-lg transition-all duration-300 ease-in-out">
          {/* Image Section */}
          <div
            className={`w-full mx-auto md:h-36 lg:h-48 rounded-xl overflow-hidden ${fadeClass}`}
            style={{ transition: "all 0.3s ease-in-out" }}
          >
            <img
              src={currentCard.imageUrl}
              alt={currentCard.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <h1 className="text-base md:text-2xl font-serif font-bold text-center mt-6">
            {currentCard.title}
          </h1>
          <p className="text-[11px] sm:text-sm text-gray-300 text-justify mt-4 min-h-36 md:min-h-44">
            {currentCard.description}
          </p>

          {/* Button */}
          <div className="flex justify-center items-center mx-auto w-36 h-8 lg:w-[9vw] lg:h-[3.5vw] md:w-36 md:h-10 circular-color-box shadow-sm shadow-white/70 rounded-xl">
            <button
              onClick={() => handleNavigate(currentCard.path)}
              className="w-[98%] h-[96%] bg-black/90 rounded-lg text-center p-0 m-0"
            >
              {currentCard.buttonLabel}
            </button>
          </div>
        </div>
      </div>

      {/* Static Text Section */}
      <div className="text-center mt-16 md:my-auto">
        <h1 className="text-[8vw] font-prociono">Our</h1>
        <h1 className="text-[8vw] font-prociono">
          Serv<span className="text-yellow-400">ices</span>
        </h1>
        <button
          onClick={() => handleNavigate("/services")}
          className="border-2 border-white shadow-sm shadow-white bg-yellow-500 hover:bg-yellow-400 hover:scale-110 text-black lg:w-44 lg:h-16 w-28 h-12 my-4 rounded-lg font-bold text-sm lg:text-lg"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

const StackedText = ({ topText, bottomText }) => {
  return (
    <div className="flex flex-col items-center -space-y-10">
      <div className="text-center lg:text-8xl md:text-7xl text-5xl font-nexa font-bold text-yellow-600 opacity-10">
        {topText}
      </div>
      <div className="text-center  lg:text-7xl md:text-6xl text-4xl font-nexa font-bold">
        {bottomText}
      </div>
    </div>
  );
};
const ReviewsCard = () => {
  const reviewCards = [
    {
      id: 1,
      name: "Eagle-I-Advisor",
      role: "MD-Gurinder Singh",
      avatarInitial: "G",
      color: "#D72929",
      review:
        "Working with Tushar and his Promotr team was a game-changer for us. Their expertise in lead generation through Facebook ads helped us connect with more students interested in our IELTS courses. Additionally, their innovative approach to traditional marketing, including organizing student conferences across various colleges in Chandigarh, allowed us to engage directly with students and address their queries about studying abroad. Thanks to their efforts, we’ve seen a significant increase in student inquiries and enrollment. We highly recommend their services!",
    },
    {
      id: 2,
      name: "Navigator Overseas",
      role: "MD-Veena",
      avatarInitial: "V",
      color: "#407B20",
      review:
        "Working with Tushar and his Promtr team was a seamless and rewarding experience. They played a key role in driving lead generation for our services at Chitkara University and Panjab University. Their creative marketing techniques not only captured the attention of students but also helped us effectively engage with potential clients. Their innovative approach and dedication have been instrumental in boosting our presence and connecting with the right audience. Highly recommended for impactful and result-oriented marketing solutions!",
    },
    {
      id: 3,
      name: (
        <>
          Al Basir Group
          <br />
          of Industries
        </>
      ),
      role: "MD-Al Roof",
      avatarInitial: "M",
      color: "#C29100",
      review:
        "Tushar and his Promotr team delivered exceptional results for our business. Their performance marketing strategies helped us achieve a remarkable ROAS of 6X while promoting our shawls and clothing within India. Their deep understanding of the market and dedication to maximizing our returns were evident throughout the campaign. Thanks to their efforts, we saw a significant boost in sales and brand visibility. We highly recommend their services to anyone looking to scale their business effectively!",
    },
    {
      id: 4,
      name: "Coca Cola",
      role: (
        <>
          Channel Marketing
          <br />
          Head - Bikram Khanna
        </>
      ),
      avatarInitial: "B",
      color: "#D90A2C",
      review:
        "Collaborating with Tushar and his Promotr team was a fantastic experience. For the launch of our new product, Charged, they executed innovative brand awareness campaigns that truly resonated with our target audience. One of the standout initiatives was distributing 3,000 bottles at Panjab University during student activities, creating a buzz and driving engagement among students. Their creative approach and seamless execution made a significant impact, ensuring our product reached the right audience in a memorable way. We look forward to working with them again on future projects!",
    },
   
    {
      id: 5,
      name: "Eagle I Advisor",
      role: "Director: Simar Gill Mc Colough",
      avatarInitial: "S",
      color: "#D90A2C",
      review:
        "Tushar and his Promotr team did a phenomenal job in creating high-quality video content for Usana Health Sciences. From shooting engaging reels to capturing authentic client testimonials, their work truly brought our brand's story to life. Their professionalism and creative vision ensured every video aligned perfectly with our brand's image and values. The final products were exceptional and received great feedback from our audience. We highly recommend their services for anyone looking to elevate their marketing efforts with compelling visual content!",
    },
    {
      id: 6,
      name: "My Froyoland",
      role: "Owner: Rattanbir Singh",
      avatarInitial: "M",
      color: "#D90A2C",
      review:
        "Tushar and his Promotr team brought an incredible level of creativity and innovation to our brand. For our Chandigarh outlet, their unique marketing strategies significantly boosted brand awareness. A standout initiative was during the Bhangra Festival, where they designed Bollywood-inspired slogans like 'Dil wale Froyo le jaenge!' on our cups and strategically placed them throughout the event. This not only grabbed attention but also made our brand a memorable part of the festival. Their efforts helped us connect with a larger audience in a fun and impactful way. Highly recommended for anyone looking to elevate their brand presence!",
    },
    {
      id: 7,
      name: (<>
        Platinum Truck Body
        <br />
        and Repair
      </>),
      role: "Owner: Tejinder Babli",
      avatarInitial: "T",
      color: "#D90A2C",
      review:
        "Tushar and his Promotr team were instrumental in helping us establish a strong online presence. They designed a dynamic and user-friendly website for Platinum Truck Body and Repair, ensuring it showcased our services effectively. In addition, their expertise in SEO significantly improved our visibility, driving more traffic to our site and attracting new clients. Their professionalism, creativity, and dedication to delivering results were exceptional. We highly recommend their services for anyone looking to enhance their digital presence!",
    },
   
  ];

  const responsive = {
    superLarge: {
      // >= 1600px
      breakpoint: { min: 1600, max: 4000 },
      items: 5, // Show 5 items on extra large screens
    },
    large: {
      // >= 1200px and < 1600px
      breakpoint: { min: 1200, max: 1599 },
      items: 3, // Show 4 items on large screens
    },
    mediumLarge: {
      // >= 1024px and < 1200px
      breakpoint: { min: 1024, max: 1199 },
      items: 3, // Show 3 items on medium-large screens
    },
    medium: {
      // >= 768px and < 1024px
      breakpoint: { min: 768, max: 1023 },
      items: 2, // Show 2 items on medium screens
    },
    small: {
      // < 768px
      breakpoint: { min: 0, max: 767 },
      items: 1, // Show 1 item on small screens
    },
  };

  return (
    <>
      <div className="my-8 py-16">
        <StackedText
          topText={"Customer Review"}
          bottomText={"Customer Review"}
        />
      </div>
      <div className="w-[90%] mx-auto ">
        {" "}
        {/* Main wrapper for padding */}
        <Carousel
          responsive={responsive}
          infinite={true} // Infinite scroll
          arrows={true} // Show navigation arrows
          autoPlay={true} // Auto play on slide change
          autoPlaySpeed={3000} // Speed between automatic slide change (in ms)
          containerClass="carousel-container"
        >
          {/* Loop over the reviewCards array */}
          {reviewCards.map((review) => (
            <div className="w-full flex justify-center">
              <div
                className="w-[360px] h-[360px] overflow-hidden"
                key={review.id}
                style={{
                  backgroundImage: 'url("./images/Rectangle.png")',
                  backgroundSize: "100% 100%", // Stretch to fill the div without cropping
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center", // Center the image if it's smaller
                  // position: 'absolute', // Ensure it covers the entire space
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <div
                  data-aos="flip-right"
                  className="p-8 mt-1 overflow-hidden h-full w-full" // Ensure this div fills the parent
                >
                  <div className="flex items-center space-x-4">
                    {/* Avatar with dynamic background color */}
                    <div
                      className="flex items-center justify-center text-white rounded-full h-10 w-10 text-base font-bold"
                      style={{ backgroundColor: review.color }}
                    >
                      {review.avatarInitial}
                    </div>
                    <div>
                      <h2 className="text-base font-bold">{review.name}</h2>
                      <p className="text-xs text-gray-400">{review.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-xs text-gray-300 text-justify">
                    {review.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  return (
    <div id="home" className="bg-black/80 w-full ">
      <LoadingBanner />
      <DigitalMarketing cardsData={cardsData} />
      <div className="my-16 overflow-hidden ">
        <h1
          data-aos="fade-up"
          className="font-spectral font-extrabold lg:text-7xl md:text-5xl text-3xl text-center my-16"
        >
          Trusted By Fast Growing <br />
          <span className="text-yellow-400">Companies</span>
        </h1>
        <TrustedCompanies />
      </div>
      <ReviewsCard />
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: 'url("./images/bga.gif")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    position: "relative",
    overflow: "hidden",
  },
};
