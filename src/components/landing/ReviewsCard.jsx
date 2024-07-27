// src/components/ReviewsCard.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ReviewsCard({ name, image, description }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  return (
    <div data-aos="flip-right" className="w-[27rem] h-[24rem] p-16" style={styles.container}>
      
      <div className="w-full flex items-center py-2">
        <div className="rounded-full w-20 h-20 overflow-hidden border object-center object-cover">
          <img className="w-full h-full" src={image} alt={name} />
        </div>
        <div className="grid justify-center items-start m-2 ps-6">
          <h1 className="font-inter text-2xl">{name}</h1>
          <div className="flex justify-start gap-1">
            <img className="w-4 h-4" src="./images/Star.svg" alt="star" />
            <img className="w-4 h-4" src="./images/Star.svg" alt="star" />
            <img className="w-4 h-4" src="./images/Star.svg" alt="star" />
            <img className="w-4 h-4" src="./images/Star.svg" alt="star" />
            <img className="w-4 h-4" src="./images/Star.svg" alt="star" />
          </div>
        </div>
      </div>
      <p className="text-center mt-6 font-inter text-md">{description}</p>
    </div>
  );
}

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

export default ReviewsCard;
