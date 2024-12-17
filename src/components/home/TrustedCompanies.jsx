const TrustedCompanies = () => {
  const images = [
    { src: "./images/charged.png", alt: "Charged" },
    { src: "./images/coke.png", alt: "Coke" },
    { src: "./images/albasir.png", alt: "Albasir" },
    { src: "./images/myfroyoland.png", alt: "myfroyoland" },
    { src: "./images/navigators.png", alt: "navigators" },
    { src: "./images/usana.png", alt: "usana" },
    { src: "./images/eagleAdvisor.avif", alt: "eagleAdvisor" },
    { src: "./images/platinu.png", alt: "platinu" },
  ];

  const repeatedImages = [...images, ...images, ...images, ...images, ...images];
  return (
    <div className="relative flex items-center bg-black py-4 my-1 overflow-hidden">
      <div className="flex animate-scroll logos">
        {repeatedImages.map((image, index) => (
          <div
            key={index}
            className="rounded-xl lg:w-80 lg:h-40 md:w-60 md:h-32 w-40 h-20 mx-2 bg-white flex-shrink-0"
          >
            <img
              className="w-full h-full object-contain"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default TrustedCompanies;