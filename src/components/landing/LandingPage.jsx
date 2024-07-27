import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./index.css";
import "aos/dist/aos.css";
import ReviewsCard from "./ReviewsCard";
import StackedText from "./StackedText";
import Footer from "./Footer";

function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

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

  // 
  return (
    <div id="home" className="bg-black/80 w-full ">
      <div className=" w-full h-96" style={styles.container}>
        <div className="flex items-center justify-center bg-black/90 h-full w-full">
          <div className="text-center">
            <h1 className="font-spectral font-extrabold text-8xl">
              Your Brand’s Biggest
            </h1>
            <h1 className="font-spectral font-extrabold text-8xl text-yellow-400">
              Cheerleaders
            </h1>
          </div>
        </div>
      </div>
      <div className="flex grid-cols-2 justify-evenly items-center gap-8  px-16 py-16">
        <div className="w-1/2  ps-16">
          <div className="bg-white/5 overflow-hidden w-80 p-8 shadow-sm shadow-white  grid justify-center items-center rounded-[2.8rem] col-span-1">
            <div className="w-full h-full rounded-xl  overflow-hidden">
              <img
                className="w-full h-full"
                src="./images/MARKETING-MAIN.jfif"
                alt="MARKETING-MAIN"
              />
            </div>
            <h1 className="text-white text-3xl font-prociono mt-2 text-center">
              Digital Marketing
            </h1>
            <p className="font-prompt text-sm text-left pt-2">
              Boost your online presence with our cutting-edge Digital Marketing
              service. At Digital Marketing, we use performance marketing to
              leverage your brand across various platforms and channels to drive
              desired results. 
            </p>
            <div className="flex justify-center  items-center mt-4">
              <div className="flex justify-center  items-center w-32 h-12 circular-color-box shadow-sm shadow-white/70 rounded-xl">
                <div className=" w-[96%] h-[94%] bg-black/90 rounded-lg">
                  <button className=" w-[96%] h-[94%] rounded-lg">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center  w-1/2 gap-10 py-8">
          <h1 className="text-9xl font-prociono">Our</h1>
          <h1 className="text-9xl font-prociono">
            Serv<span className="text-yellow-400">ices</span>
          </h1>
          <button className="border-white border-2 shadow-sm shadow-white bg-yellow-500 text-black w-36 h-12 mt-24 rounded-lg font-prociono font-bold">
            Explore More
          </button>
        </div>
      </div>
      <div className="my-4">
        <h1
          data-aos="fade-up"
          className="font-spectral font-extrabold text-6xl text-center my-16"
        >
          Trusted By Fast Growing Companies
        </h1>
        <div className="flex justify-evenly items-center px-16 py-4">
          <div
            data-aos="fade-left"
            className="overflow-hidden rounded-xl border w-80 h-40"
          >
            <img
              className="object-cover"
              src="./images/charged.png"
              alt="Albasir"
            />
          </div>
          <div
            data-aos="fade-down"
            className="overflow-hidden rounded-xl border w-80 h-40"
          >
            <img
              className="object-cover"
              src="./images/charged.png"
              alt="Albasir"
            />
          </div>
          <div
            data-aos="fade-right"
            className="overflow-hidden rounded-xl border w-80 h-40"
          >
            <img
              className="object-cover"
              src="./images/charged.png"
              alt="Albasir"
            />
          </div>
        </div>
      </div>
      {/* Add review section */}
      <div className="my-8 py-16">
        <StackedText topText={"Customer Review"} bottomText={"Customer Review"}/>
      </div>
      <div  className="inline-grid grid-cols-3  gap-4 px-4">
      {reviewCards.map((review, index) => (
        <ReviewsCard
          key={index}
          name={review.name}
          image={review.image}
          description={review.description}
        />
      ))}
      
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;

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
