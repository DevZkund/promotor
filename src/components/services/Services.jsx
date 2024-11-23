import React from "react";
import { services } from "./servicesData";
import { Link } from "react-router-dom";

function StrategicSolutions() {
  return (
    <section className="flex overflow-hidden flex-col items-center  pt-8 pb-12 bg-black max-md:px-5">
      <div className="flex justify-center items-center  py-8 mt-1.5 w-full font-bold text-white bg-stone-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-6xl max-md:text-4xl">Our Services</div>
          <div className="self-center mt-6 text-base uppercase tracking-[3.2px]">
            Home / Our Services
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-14 max-w-full w-[1276px]">
        <h2 className="self-center text-sm font-bold text-white py-4 uppercase tracking-[2.8px]">
          WHAT WE DO
        </h2>
        <h1 className="self-center mt-3 text-5xl font-bold text-center text-white max-md:max-w-full max-md:text-3xl">
          strategic digital solutions to <br />
          <span className="text-yellow-600 underline">businesses</span> and
          organizations.
        </h1>
        <div className="mt-20 px-8 max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-md:flex-col">
            {services.map((service) => (
              <ServiceColumn key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function ServiceColumn({ id, title, description, imageSrc, link }) {
  return (
    <div id={id} className="flex flex-col  w-[100%] max-md:ml-0 max-md:w-full">
      <Link to={`${link}?service=${id}`}>
        <div
          onClick={() => {}}
          className={`flex flex-col items-center px-7 pt-1 pb-14 w-full text-black bg-gray-200 hover:bg-amber-500 rounded-xl max-md:px-5 max-md:mt-10`}
        >
          {imageSrc && (
            <img
              loading="lazy"
              src={imageSrc}
              alt="services"
              className="object-contain max-w-full aspect-square w-[134px] m-1"
            />
          )}
          <h3 className={`text-2xl font-bold`}>{title}</h3>
          <p className={`self-stretch mt-3 text-[15px] text-center`}>
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}

function Optimization() {
  return (
    <div className="flex flex-col rounded-none  w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center px-16 py-20 w-full bg-zinc-800 max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1524px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow font-bold text-white max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col ml-14 max-w-full w-[645px]">
                  <div className="self-start text-sm uppercase tracking-[2.8px]">
                    Our Best Services
                  </div>
                  <div className="mt-7 text-4xl max-md:max-w-full max-md:text-4xl">
                    digital solutions to{" "}
                    <span className="text-yellow-600 underline">Website</span>{" "}
                    <br />
                    Optimization
                  </div>
                </div>
                <img
                  alt="temp"
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0dab45217e4cef8a899087c5826e90cd0523d2e5b307818b27152adc4fc9a2ce?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dab45217e4cef8a899087c5826e90cd0523d2e5b307818b27152adc4fc9a2ce?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dab45217e4cef8a899087c5826e90cd0523d2e5b307818b27152adc4fc9a2ce?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dab45217e4cef8a899087c5826e90cd0523d2e5b307818b27152adc4fc9a2ce?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dab45217e4cef8a899087c5826e90cd0523d2e5b307818b27152adc4fc9a2ce?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dab45217e4cef8a899087c5826e90cd0523d2e5b307818b27152adc4fc9a2ce?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dab45217e4cef8a899087c5826e90cd0523d2e5b307818b27152adc4fc9a2ce?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dab45217e4cef8a899087c5826e90cd0523d2e5b307818b27152adc4fc9a2ce?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                  className="object-contain mt-11 w-full aspect-[1.02] rounded-[114px] max-md:mt-10 max-md:max-w-full"
                />
                {/* <div className="self-center px-16 py-4 mt-6 max-w-full text-sm bg-yellow-600 rounded-[90px] w-[210px] max-md:px-5">
                  View More
                </div> */}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-end self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-end max-w-full text-5xl font-bold text-neutral-600 w-[472px] max-md:text-4xl">
                  <img
                    alt="temp"
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/391a3baae2cacfa6dff87210439cad48ac816b25ffdef3aae702f52375cd8688?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                    className="object-contain max-w-full aspect-square w-[118px]"
                  />
                  <div className="flex shrink-0 self-stretch mt-16 w-full h-px bg-white bg-opacity-60 max-md:mt-10 max-md:mr-2.5" />

                  <div className="hover:text-white text-right">
                    <div className="mt-12 uppercase hover:text-white max-md:mt-10 max-md:mr-2.5 max-md:text-4xl">
                      Strategy
                    </div>
                    <div className="text-base hover:text-white leading-8 max-md:mr-2.5">
                      long-term plans and actions designed to achieve{" "}
                    </div>
                  </div>
                  <div className="flex shrink-0 self-stretch mt-12 w-full h-px bg-white bg-opacity-60 max-md:mt-10 max-md:mr-2.5" />

                  <div className="hover:text-white text-right">
                    <div className="mt-12 uppercase max-md:mt-10 max-md:mr-2.5 hover:text-white max-md:text-4xl">
                      Design
                    </div>
                    <div className="text-base leading-8 max-md:mr-2.5 hover:text-white">
                      innovative techniques to visually communicate{" "}
                    </div>
                  </div>
                  <div className="flex shrink-0 self-stretch mt-12 text-white  w-full h-px bg-white bg-opacity-60 max-md:mt-10 max-md:mr-2.5" />
                  <div className="hover:text-white text-right">
                    <div className="mt-12 uppercase  max-md:mt-10 max-md:mr-2.5 max-md:text-4xl">
                      Development
                    </div>
                    <div className="text-base leading-8 max-md:mr-2.5">
                      Guidance of Project Initiation, planning, execution{" "}
                    </div>
                  </div>
                  <div className="flex shrink-0 self-stretch mt-12 text-white  w-full h-px bg-white bg-opacity-60 max-md:mt-10 max-md:mr-2.5" />
                  <div className="hover:text-white text-right">
                    <div className="mt-12 uppercase  max-md:mt-10 max-md:mr-2.5 max-md:text-4xl">
                      Optimization
                    </div>
                    <div className="text-base leading-8 max-md:mr-2.5">
                      More effective, efficient, or functional as possible{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurMilstone() {
  return (
    <div className="flex overflow-hidden  flex-col justify-center items-center px-20 py-36 bg-black max-md:px-5 max-md:py-24">
      <div className="flex flex-col items-center w-full max-w-[1440px] max-md:max-w-full">
        <div className="text-sm font-bold text-yellow-600 uppercase tracking-[2.8px]">
          OUR Milstone
        </div>
        <div className="mt-4 text-4xl text-center text-white leading-[50px] max-md:max-w-full">
          “ Business strategy refers to the set of decisions and actions that a{" "}
          <br />
          company formulates to achieve its long-term goals and objectives. It{" "}
          <br />
          involves analyzing the company's internal strengths and weaknesses,{" "}
          <br />
          understanding the external market conditions ”{" "}
        </div>
        <div className="flex shrink-0 mt-16 max-w-full  h-0.5 bg-stone-300 w-full max-md:mt-10" />
        <div className=" text-center  mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5   max-md:flex-col">
            <div className="flex flex-col   w-[25%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center font-bold text-amber-400 max-md:mt-10">
                <img
                  alt="temp"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/69a550d9772070289308622ebace724b9fffca43feee31c99dd8505ff5cfd557?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                  className="object-contain aspect-[0.93] w-[93px]"
                />
                <div className="mt-10 text-5xl max-md:text-4xl">196k</div>
                <div className="self-stretch mt-5 text-3xl">
                  Business Growth
                </div>
              </div>
            </div>
            <div className="flex flex-col   w-auto max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center font-bold text-yellow-600 max-md:mt-10">
                <img
                  alt="temp"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/538610b406a25e66ec4d70898fbe52102ae787390c1229be2c7748aa18c67319?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                  className="object-contain max-w-full aspect-[1.02] w-[104px]"
                />
                <div className="mt-9 text-5xl max-md:text-4xl">16k</div>
                <div className=" mt-5 text-3xl">Strategies planed</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center font-bold text-amber-400 max-md:mt-10">
                <div className="flex flex-col ml-6 max-w-full text-5xl whitespace-nowrap w-[118px] max-md:ml-2.5 max-md:text-4xl">
                  <img
                    alt="temp"
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad613910b3bd38c5d8ab2d05a0cb18d94dd7aa846a32131f3a232c844e0e43?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                    className="object-contain w-full aspect-[1.15]"
                  />
                  <div className="mt-10 max-md:text-4xl">346k</div>
                </div>
                <div className="mt-5 text-3xl">Projects Released</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center font-bold text-amber-400 max-md:mt-10">
                <img
                  alt="temp"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/58b5a0a975f0955083804348d2909e0382a1fe87d533f15049f6351c2fbb608a?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
                  className="object-contain aspect-[0.88] w-[88px]"
                />
                <div className="mt-10 text-5xl max-md:text-4xl">146k</div>
                <div className="self-stretch mt-5 text-3xl">
                  Satisfied Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetInTouch() {
  return (
    <div className="flex flex-col text-sm text-white">
      <div className="flex flex-col justify-center items-center px-20 py-36 w-full bg-stone-400 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 ml-8 max-w-full w-[624px] max-md:mb-2.5">
          <div className="self-center font-bold uppercase tracking-[2.8px]">
            GET IN TOUCH
          </div>
          <div className="self-start mt-3 text-5xl font-bold text-center max-md:max-w-full max-md:text-4xl">
            Ready to Work With Us ?
          </div>
          <div className="self-start mt-3.5 ml-12 text-base leading-8 text-center max-md:max-w-full">
            here are many variations of passages of Lorem Ipsum available,{" "}
            <br />
            but the majority have suffered alteration in some form
          </div>
          <div className="flex flex-wrap gap-0.5 mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
              <input
                className="mt-9 text-base text-white placeholder:text-white bg-transparent outline-none max-md:mt-10 max-md:max-w-full"
                placeholder="Your Email ID"
              />

              <div className="flex shrink-0 mt-3.5 h-px bg-zinc-300 max-md:max-w-full" />
            </div>
            <div className="flex justify-center items-center  font-bold whitespace-nowrap bg-yellow-600 rounded-full h-[88px] w-[88px] max-md:px-5">
              SEND
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurInstagram() {
  return (
    <div className="flex flex-col rounded-none">
      <div className="flex flex-col items-center px-4 pt-24 pb-7 w-full bg-yellow-600 max-md:max-w-full">
        <div className="text-sm font-bold text-white uppercase tracking-[2.8px]">
          Our INSTAGRAM
        </div>
        <div className="mt-3 ml-16 text-5xl text-white max-md:max-w-full max-md:text-4xl">
          Follow # Promotr
        </div>
        <div className="flex flex-wrap justify-center gap-3.5 self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex shrink-0 aspect-square bg-stone-300 h-[198px] rounded-[30px] w-[200px]" />
          <div className="flex shrink-0 aspect-square bg-stone-300 h-[198px] rounded-[30px] w-[200px]" />
          <div className="flex shrink-0 aspect-square bg-stone-300 h-[198px] rounded-[30px] w-[200px]" />
          <div className="flex flex-col justify-center items-center px-16 aspect-square bg-stone-300 rounded-[30px] max-md:px-5 max-md:py-24">
            <img
              alt="temp"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7755031af78101a31b0783ec9a1b863ef3d00bfa4d74d5c0ae071bcb84e8195a?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928"
              className="object-contain aspect-square w-[50px]"
            />
          </div>
          <div className="flex shrink-0 aspect-square bg-stone-300 h-[198px] rounded-[30px] w-[200px]" />
          <div className="flex shrink-0 aspect-square bg-stone-300 h-[198px] rounded-[30px] w-[200px]" />
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <>
      <StrategicSolutions />
      <Optimization />
      <OurMilstone />
      <GetInTouch />
      <OurInstagram />
    </>
  );
}

export default Services;
