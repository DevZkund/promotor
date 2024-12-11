const TrustedCompanies = () => {
  const images = [
    { src: "./images/charged.png", alt: "Charged" },
    { src: "./images/coke.png", alt: "Coke" },
    { src: "./images/albasir.png", alt: "Albasir" },
    { src: "./images/myfroyoland.png", alt: "myfroyoland" },
    { src: "./images/navigators.png", alt: "Charged" },
    { src: "./images/usana.png", alt: "Coke" },
    { src: "./images/eagleAdvisor.avif", alt: "Coke" },
  ];

  const repeatedImages = [...images, ...images, ...images, ...images, ...images];
  return (
    <div className="relative flex items-center bg-white py-4 my-1">
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