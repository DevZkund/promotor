import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./index.css";
import "aos/dist/aos.css";

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
const DigitalMarketing = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 justify-evenly items-center gap-[2.33vw] p-[4.69vw] w-full border-b-[0.1px] border-b-white/5">
      <div className="w-full flex justify-center  overflow-hidden">
        <div className="bg-white/5  w-10/12 h-auto md:w-80 p-[2.33vw] shadow-sm shadow-white grid justify-center items-center rounded-[2.8rem]">
          <div className="w-[80%] h-[90%] m-auto lg:w-full lg:h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full"
              src="./images/MARKETING-MAIN.jfif"
              alt="MARKETING-MAIN"
            />
          </div>
          <h1 className="text-white lg:text-[1.87vw] md:text-2xl text-xl font-prociono mt-[0.8vw] text-center">
            Digital Marketing
          </h1>
          <p className="font-prompt lg:text-sm md:text-sm text-[12px] text-justify p-3 pt-[0.8vw]">
            Boost your online presence with our cutting-edge Digital Marketing
            service. At Digital Marketing, we use performance marketing to
            leverage your brand across various platforms and channels to drive
            desired results.
          </p>
          <div className="flex justify-center items-center mt-[1.8vw]">
            <div className="flex justify-center items-center w-36 h-8 lg:w-[9vw] lg:h-[3.5vw] md:w-36 md:h-10 circular-color-box shadow-sm shadow-white/70 rounded-xl">
              <button className="w-[96%] h-[94%] bg-black/90 rounded-lg text-center">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center  w-full  gap-[3vw] py-[1.87vw] mt-8 md:mt-0">
        <h1 className="text-[8vw] font-prociono">Our</h1>
        <h1 className="text-[8vw] font-prociono">
          Serv<span className="text-yellow-400">ices</span>
        </h1>
        <button className="border-white border-2 shadow-sm shadow-white bg-yellow-500 text-black lg:w-44 lg:h-16 w-28 h-12 my-4 lg:mt-24 rounded-lg font-bold md:text-sm text-sm lg:text-lg">
          Explore More
        </button>
      </div>
    </div>
  );
};
const TrustedCompanies = () => {
  const images = [
    { src: "./images/charged.png", alt: "Albasir", animation: "fade-left" },
    { src: "./images/charged.png", alt: "Albasir", animation: "fade-down" },
    { src: "./images/charged.png", alt: "Albasir", animation: "fade-right" },
    { src: "./images/charged.png", alt: "Albasir", animation: "fade-right" },
  ];
  return (
    <div className="my-4 space-x-2 ">
      <h1
        data-aos="fade-up"
        className="font-spectral font-extrabold lg:text-7xl md:text-5xl text-3xl text-center my-16 "
      >
        Trusted By Fast Growing{" "} <br />
        <span className="text-yellow-400">Companies</span>{" "}
      </h1>
      <div className="flex flex-wrap justify-evenly items-center  ">
        {images.map((image, index) => (
          <div
            key={index}
            data-aos={image.animation}
            className="overflow-hidden rounded-xl border lg:w-80 lg:h-40 md:w-60 md:h-32 w-32 h-16 my-4"
          >
            <img className="object-cover" src={image.src} alt={image.alt} />
          </div>
        ))}
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
      <DigitalMarketing />
      <TrustedCompanies />
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
