import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./index.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import TrustedCompanies from "./TrustedCompanies";

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
    path: "/service?service=graphicDesigning"
  },
  {
    title: "Web Development",
    description:
      " Web Development refers to a term that includes all the processes involved in developing a web project or website.Web developers develop websites, specifically by creating the site's code, connecting it to a server and maintaining its accessibility to users.",
    imageUrl: "./images/web.png",
    buttonLabel: "Explore",
    path: "/service?service=webDevelopment"
    
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with our cutting-edge Digital Marketing service. At Digital Marketing, we use performance marketing to leverage your brand across various platforms and channels to drive desired results.",
    imageUrl: "./images/digital.png",
    buttonLabel: "Explore",
    path: "/service?service=digitalMarketing"
  },
];


const DigitalMarketing = ({ cardsData }) => {
  const navigate = useNavigate();
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Current card index
  const [animationClass, setAnimationClass] = useState("opacity-0 translate-x-full"); // Initial animation class

  useEffect(() => {
    // Update the animation and card index every 4 seconds
    const interval = setInterval(() => {
      setAnimationClass("opacity-0 translate-x-full"); // Start slide-out animation
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
        setAnimationClass("opacity-0 -translate-x-full"); // Prepare for slide-in animation
        setTimeout(() => {
          setAnimationClass("opacity-100 translate-x-0"); // Slide-in animation
        }, 300); // Small delay for smooth transition
      }, 600); // Slide-out duration
    }, 4000); // Change card every 4 seconds

    // Clear the interval on unmount
    return () => clearInterval(interval);
  }, [cardsData]);

  // Get the current card
  const currentCard = cardsData[currentCardIndex];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 justify-evenly items-center gap-[2.33vw] p-[4.69vw] w-full border-b-[0.1px] border-b-white/5">
      {/* Animated Card Section */}
      <div className="w-full flex justify-center overflow-hidden">
        <div className="bg-white/5 w-10/12 h-auto md:w-80 p-[1.5vw] shadow-sm shadow-white grid justify-center items-center rounded-[2.8rem]">
          <div className=" w-[80%] h-[90%] m-auto lg:w-full lg:h-full rounded-xl ">
            <div
              className={` w-full h-full transition-all duration-500 ease-in-out ${animationClass}`}
            >
              <img
                className="w-full h-full object-cover rounded-xl"
                src={currentCard.imageUrl}
                alt={currentCard.title}
              />
            </div>
          </div>
          <h1 className="text-white lg:text-[1.87vw] md:text-2xl text-xl font-prociono mt-[0.8vw] text-center">
            {currentCard.title}
          </h1>
          <p className="font-prompt lg:text-sm md:text-sm text-[12px] text-justify p-3 pt-[0.8vw]">
            {currentCard.description}
          </p>
          <div className="flex justify-center items-center mt-[1.8vw]">
            <div className="flex justify-center items-center w-36 h-8 lg:w-[9vw] lg:h-[3.5vw] md:w-36 md:h-10 circular-color-box shadow-sm shadow-white/70 rounded-xl">
              <button onClick={() => handleNavigate(currentCard.path)} className="w-[96%] h-[94%] bg-black/90 rounded-lg text-center">
                {currentCard.buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Static Text Section */}
      <div className="text-center w-full gap-[3vw] py-[1.87vw] mt-8 md:mt-0">
        <h1 className="text-[8vw] font-prociono">Our</h1>
        <h1 className="text-[8vw] font-prociono">
          Serv<span className="text-yellow-400">ices</span>
        </h1>
        <button
          onClick={() => handleNavigate("/services")}
          className="border-white border-2 shadow-sm shadow-white bg-yellow-500 hover:bg-yellow-400 hover:scale-110 text-black lg:w-44 lg:h-16 w-28 h-12 my-4 lg:mt-24 rounded-lg font-bold md:text-sm text-sm lg:text-lg"
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
  const styles = {
    container: {
      backgroundImage: 'url("./images/card-bg.png")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      position: "relative",
      overflow: "hidden",
    },
  };
  // Card logic
  const [reviewCards, setReviewCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/reviewsModel.json");
        const data = await response.json();
        setReviewCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="my-8 py-16">
        <StackedText
          topText={"Customer Review"}
          bottomText={"Customer Review"}
        />
      </div>
      <div className="flex flex-wrap justify-evenly items-center">
        {reviewCards.map((review, index) => (
          <div className="w-auto p-2" key={index}>
            <div
              data-aos="flip-right"
              className="lg:max-w-80  lg:min-w-80 lg:min-h-72 lg:max-h-72 md:min-w-72 md:min-h-[17rem] md:max-w-72 md:max-h-[17rem] min-w-64  min-h-60 max-w-64 max-h-60 p-4"
              style={styles.container}
            >
              <div className="w-full flex justify-evenly items-center py-2">
                <div className="rounded-full lg:w-20 lg:h-20 md:h-16 md:w-16 h-16 w-16 overflow-hidden border object-center object-cover">
                  <img
                    className="w-full h-full"
                    src={review.image}
                    alt={review.name}
                  />
                </div>
                <div className="grid justify-center items-start m-2 ">
                  <h1 className="font-inter lg:text-xl">{review.name}</h1>
                  <div className="flex justify-start gap-1">
                    <img
                      className="w-3 h-3"
                      src="./images/Star.svg"
                      alt="star"
                    />
                    <img
                      className="w-3 h-3"
                      src="./images/Star.svg"
                      alt="star"
                    />
                    <img
                      className="w-3 h-3"
                      src="./images/Star.svg"
                      alt="star"
                    />
                    <img
                      className="w-3 h-3"
                      src="./images/Star.svg"
                      alt="star"
                    />
                    <img
                      className="w-3 h-3"
                      src="./images/Star.svg"
                      alt="star"
                    />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm lg:mt-10 mt-4 lg:px-4 md:px-3 font-inter lg:text-sm md:text-sm text-[0.7rem]">
                {review.description}
              </p>
            </div>
          </div>
        ))}
        
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
