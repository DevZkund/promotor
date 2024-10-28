import React from "react";

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
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
        Founder - Tushar Dhiman
      </h2>
      <div className="grid md:grid-cols-2 grid-col-1 justify-evenly items-center md:items-start my-12 mx-auto h-full w-11/12 lg:w-10/12 ">
        <div className="w-full h-full relative  overflow-hidden mb-8 md:mb-0">
          <img
            className="rounded-lg object-cover shadow-md shadow-white p-2 w-full h-auto"
            src="./images/founder.png"
            alt="Founder"
          />
          <div className="w-[100%] mx-auto text-justify absolute bottom-0 py-4 px-6 bg-black rounded-tl-3xl rounded-tr-3xl">
            <p>
              You'll often find me sipping on bottomless cups of coffee,
              brainstorming the next big campaign, and occasionally challenging
              the office plant to a game of chess (I usually lose). I believe
              that marketing isn't just about selling; it's about storytelling,
              and I'm here to craft captivating narratives that resonate with
              your audience. <br />
              "Why did the marketer bring a magnifying glass to the meeting? To
              find those tiny details that make a big difference!"
            </p>
            <div className="text-right">
              <h1 className="mt-3 me-2">- Tushar Dhiman </h1>
              <h1>
                <b>
                  ( Founder & <span className="text-amber-400">CEO</span> )
                </b>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center w-full md:w-auto">
          <div className="flex flex-col items-center justify-start pt-5 w-full lg:w-4/5 px-6">
            <div className="bg-[#FFBF00] py-5 px-3 rounded-xl text-center w-full lg:w-auto h-auto lg:h-64">
              <div className="flex flex-row justify-start items-center  py-4 px-4">
                <span className="text-[8vw]  md:text-6xl font-bold text-black font-nexa">
                  10
                </span>
                <span className="text-[3.8vw] md:text-2xl font-semibold text-black text-start ml-2 md:ml-4">
                  Years Of <br /> Experience
                </span>
                <img
                  className="md:mt-4 lg:mt-0 ml-auto w-8 h-8"
                  src="./images/arrow-down.svg"
                  alt="arrow down"
                />
              </div>
              <div className="text-sm lg:text-[13px] mt-4 px-4 text-left text-black">
                Here are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form. Here are
                many variations of passages of Lorem Ipsum available.
              </div>
            </div>
            <div className="mt-2 w-full text-center py-4 bg-[#D9D9D9] flex justify-center px-4">
              <p className="text-3xl lg:text-5xl text-left text-black ps-2 font-bold">
                96
              </p>
              <p className="text-sm lg:text-md text-left ml-4 text-black font-bold">
                Completed <br /> Projects
              </p>
              <img
                className="ml-auto w-8 h-8"
                src="./images/arrow-up.svg"
                alt="arrow up"
              />
            </div>
            <div className="mt-2 w-full text-center py-4 bg-[#D9D9D9] flex justify-center px-4">
              <p className="text-3xl lg:text-5xl text-left text-black ps-2 font-bold">
                11K
              </p>
              <p className="text-sm lg:text-md text-left ml-4 text-black font-bold">
                Happy <br /> Customers
              </p>
              <img
                className="ml-auto w-8 h-8"
                src="./images/arrow-up.svg"
                alt="arrow up"
              />
            </div>
            <div className="mt-2 w-full text-center py-4 bg-[#D9D9D9] flex justify-center px-4">
              <p className="text-3xl lg:text-5xl text-left text-black ps-2 font-bold">
                96
              </p>
              <p className="text-sm lg:text-md text-left ml-4 text-black font-bold">
                Total <br /> Achievements
              </p>
              <img
                className="ml-auto w-8 h-8"
                src="./images/arrow-up.svg"
                alt="arrow up"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// WhyDifferent Section
function WhyDifferentSection() {
  return (
    <section className=" ">
      <div className="flex justify-center py-10 items-center mx-auto  bg-zinc-800 max-md:px-5">
        <div className="flex flex-col mt-16 w-full max-w-[1446px]  max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full ">
            <div className="flex justify-center  max-md:flex-col ">
              <div className="flex flex-col w-[35%] mr-0  max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-1  text-white max-md:mt-10 max-md:max-w-full">
                  <div className="text-sm uppercase font-bold tracking-[2.8px] max-md:max-w-full">
                    Why we are here
                  </div>
                  <div className="mt-6 text-4xl font-bold text-yellow-400 max-md:max-w-full max-md:text-4xl">
                    Why we are Different in <br />
                    <span className="text-yellow-400 underline">business</span>
                  </div>
                  <div className="mt-8 text-xl font-bold max-md:mt-7 max-md:max-w-full">
                    Trust, Diligence, Succeed!
                  </div>
                  <div className="mt-6 text-sm leading-6 max-md:mt-5 max-md:max-w-full">
                    here are many variations of passages of Lorem Ipsum
                    available, <br />
                    but the majority have suffered alteration in some form, by{" "}
                    <br />
                    injected humour, or randomised words which don't look even{" "}
                    <br />
                    slightly believable.{" "}
                  </div>
                  <div className="self-start px-5 py-2 mt-5 text-sm bg-black rounded-[90px] max-md:px-5 max-md:mt-10">
                    Know More
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full ">
                <div className="shrink-0 mx-auto max-w-full bg-stone-300 h-[22rem] w-[32rem] max-md:mt-10 rounded-2xl">
                  <img
                    src="./images/about-img-2.png"
                    alt="about-img-2"
                    className="h-[22rem] w-[32rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function ClientTestimonial() {
  return (
    <section className="flex flex-col items-center pt-10 bg-neutral-100">
      <h2 className="my-8 text-5xl font-bold text-black max-md:mt-10 max-md:text-4xl">
        Client Say's
      </h2>
      <div className="z-10 px-10  mt-6 max-w-full bg-yellow-400 shadow-sm w-[1024px] h-72 max-md:px-5">
        <TestimonialContent />
      </div>
      <BrandLogos />
    </section>
  );
}

function TestimonialContent() {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[30%]  max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-0 font-bold text-black  max-md:mt-0">
          <div className="flex justify-end items-start h-48  -mt-20 bg-stone-300 ">
            <img className="-mr-6 mt-4 w-12  " src="./images/“.svg" alt="" />
          </div>
          <h3 className="mt-9 text-3xl max-md:mt-10">Sureender Shinga</h3>
          <p className="mt-4 text-base">Chief Executive Officer</p>
          <div className="mt-4 text-lg max-md:mt-10">
            01 ------ <span className="font-bold text-black">05</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col justify-between py-12  items-start grow my-auto max-md:mt-10 max-md:max-w-full">
          <p className="text-[12px]  leading-2 text-black max-md:max-w-full">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical <br />
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden- <br />
            Sydney College in Virginia, looked up one of the more obscure Latin
            words, consectetur, <br />
            from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature,{" "}
          </p>
          <div className="flex gap-5 justify-between  w-[94px] max-md:mt-10">
            <img
              loading="lazy"
              src="./images/prev.svg"
              alt="prev"
              className="shrink-0 w-3.5 aspect-[0.48]"
            />
            <img
              loading="lazy"
              src="./images/next.svg"
              alt="next"
              className="shrink-0 w-3.5 aspect-[0.48]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandLogos() {
  const logos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f71398e7cb94c9cbe6d33fd80336e442b5a04f1b7385bcacbed1dc6493890b6?apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928",
      width: "129px",
      aspect: "3.33",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fd28789d97941384ed4482d712e0014f1f9c7682f9799b723a1e152909c4861?apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928",
      width: "109px",
      aspect: "2.38",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a10c4aec10544f7cada19190cf8d222375772000f60a7a25ca82a04c50e38f5e?apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928",
      width: "167px",
      aspect: "4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8de47d835c4cecc10a120c42868b6af1a0700d382816c1b708d88ba877569971?apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928",
      width: "142px",
      aspect: "3.57",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7dd19f0d44f3cdb1ffb3ba28516cde5ce89dd959760c1ec230e40cde31a63a56?apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928",
      width: "174px",
      aspect: "4.17",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b139dee2e3827a9056c8cc90a7d49c68f289811929920620c0e6363dbe216e02?apiKey=0a4a5a77f3084b74ad367ef3cc9e3928&&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928",
      width: "112px",
      aspect: "4.76",
    },
  ];
  return (
    <section className="flex flex-col self-stretch  pr-1.5 pb-px w-full bg-white max-md:max-w-full overflow-hidden">
      <div className="shrink-0 h-px bg-stone-300 max-md:mt-10 max-md:max-w-full" />
      <div className="flex gap-5 justify-between items-center self-center px-5 w-full max-w-[1760px] max-md:flex-wrap max-md:max-w-full">
        {logos.map((logo, index) => (
          <React.Fragment key={index}>
            <img
              loading="lazy"
              src={logo.src}
              alt="logos"
              className={`shrink-0 self-stretch my-auto max-w-full aspect-[${logo.aspect}] w-[${logo.width}]`}
            />
            {index < logos.length - 1 && (
              <div className="shrink-0 self-stretch w-px h-48 bg-stone-300" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

// Partnars Section
function PartnersSection() {
  return (
    <div className="flex flex-col items-center p-20 bg-zinc-800 max-md:px-5">
      <div className="flex gap-5 justify-between mt-12 w-full font-bold text-white max-w-[1456px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-end mt-7 max-md:max-w-full">
          <div className="text-sm uppercase tracking-[2.8px] max-md:max-w-full">
            OUR TEAM MEMBERS
          </div>
          <div className="mt-7 text-5xl max-md:max-w-full max-md:text-4xl">
            Our Design{" "}
            <span className="text-yellow-400 underline">Experts</span>
          </div>
        </div>
        <img
          loading="lazy"
          src="./images/arrow-circle-up.svg"
          className="shrink-0 max-w-full aspect-square w-[118px]"
          alt="arrow-circle-up"
        />
      </div>
      <div className="mt-20 w-full max-w-[1720px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[52%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="shrink-0 mx-auto max-w-full bg-stone-300 h-[400px] w-[388px] max-md:mt-10" />
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex  justify-center items-center px-8 py-16 w-full text-base bg-stone-300  h-[400px] text-zinc-50 max-md:px-5 max-md:mt-10">
                      <div className="py-4  mt-80 bg-black rounded-[40px] max-md:px-5 max-md:mt-10">
                        <span className="font-bold underline ms-3">Fb</span>
                        <span className="font-bold me-3"> - Be - Tw- In</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between self-center mt-12 max-w-full text-white w-[603px] max-md:flex-wrap max-md:mt-10">
                <div className="flex flex-col ms-2">
                  <div className="text-2xl font-bold">Karnia Kafia</div>
                  <div className="self-center mt-6 text-base">Development</div>
                </div>
                <div className="flex flex-col me-8">
                  <div className="text-2xl font-bold">Dr Henry William</div>
                  <div className="self-center mt-5 text-base">CEO</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center text-white max-md:mt-10">
              <div className="shrink-0 self-stretch bg-stone-600 h-[400px]" />
              <div className="mt-11 text-2xl font-bold max-md:mt-10">
                Vennila Turka
              </div>
              <div className="mt-6 text-base">Traniner</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center text-white max-md:mt-10">
              <div className="shrink-0 self-stretch bg-stone-300 h-[400px]" />
              <div className="mt-11 text-2xl font-bold max-md:mt-10">
                Dr John Hussain
              </div>
              <div className="mt-6 text-base">Designer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// BusinessTalk
function BusinessTalk() {
  return (
    <section className="flex justify-center items-center p-16 pb-20 text-black bg-neutral-100 max-md:px-5">
      <div className="flex gap-5 justify-between mt-20 w-full max-w-[1443px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <header className="flex flex-col font-bold max-md:max-w-full">
          <h2 className="text-sm uppercase tracking-[2.8px] max-md:max-w-full">
            Business Talk's
          </h2>
          <h1 className="mt-7 text-5xl max-md:max-w-full max-md:text-4xl">
            Let's get in touch, <br /> we reply your Queries.
          </h1>
        </header>
        <EmailForm />
        <SendButton />
      </div>
    </section>
  );
}
function EmailForm() {
  return (
    <form className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
      <label htmlFor="emailInput" className="self-start ml-4 max-md:ml-2.5">
        Enter your Email
      </label>
      <input
        type="email"
        id="emailInput"
        className="shrink-0 mt-2 h-10 bg-zinc-200 rounded-lg max-md:max-w-full"
        aria-label="Enter your Email"
      />
    </form>
  );
}
function SendButton() {
  return (
    <button className="flex justify-center items-center border gap-0.5 m-auto text-sm max-md:flex-wrap rounded-full bg-yellow-400  h-[88px] w-[88px] ">
      <span className="font-bold whitespace-nowrap">SEND</span>
    </button>
  );
}

export default function About() {
  return (
    <div>
      <Header />
      <FounderSection />
      <WhyDifferentSection />
      <ClientTestimonial />
      <PartnersSection />
      <BusinessTalk />
    </div>
  );
}
