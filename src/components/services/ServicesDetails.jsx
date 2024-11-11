import React from 'react'

function ServicesDetails() {
  return (
    <div>Hello services</div>
  )
}

export default ServicesDetails;


const ContactForm = () => {
  const contactInfoData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/018c645e23272f1da8da28cb2892b575fb9f4bb2f8109c91b90e8c73ef5b27bd?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928",
      title: "Chat to us",
      content: "Info@gilli.com"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e97f9ff1c42e37f92c0f0489f3a2d16ba59b6555d1a44641f2000c37a72bf79b?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928",
      title: "Visit our Office Branch",
      content: "800 Nicollet Mall, Minneapolis, MN 55402, United States"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9da9eb33d49de7dbb72d2c982e6e77f906caf79499d464107d8b1c0da7ca7b4a?placeholderIfAbsent=true&apiKey=0a4a5a77f3084b74ad367ef3cc9e3928",
      title: "Call Us",
      content: "+1 502-240-6226\n+1 612-659-2000"
    }
  ];

  return (
    <main className="flex flex-col items-start px-10 py-12 w-full bg-white rounded-md shadow-[0px_4px_24px_rgba(0,0,0,0.08)]">
      <h1 className="text-2xl font-bold leading-tight">
        Have any queries?
      </h1>
      <form>
        <ContactFormInput label="Full Name" />
        <ContactFormInput label="Email Id" type="email" />
        <ContactFormInput label="Message" isTextarea />
        <button type="submit" className="self-stretch px-16 pt-3.5 pb-7 mt-12 text-base font-semibold leading-loose bg-amber-400 rounded-[60px]">
          Send Queries
        </button>
      </form>
      <h2 className="mt-16 text-2xl font-bold leading-tight">
        Contact Our Office
      </h2>
      {contactInfoData.map((info, index) => (
        <ContactInfo key={index} {...info} />
      ))}
    </main>
  );
};

const ContactFormInput = ({ label, type = 'text', isTextarea = false }) => {
  const inputId = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full mt-10">
      <label htmlFor={inputId} className="text-base leading-loose">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={inputId}
          className="w-full mt-5 p-2 border-b border-zinc-300 resize-none"
          rows="3"
        />
      ) : (
        <input
          type={type}
          id={inputId}
          className="w-full mt-5 p-2 border-b border-zinc-300"
        />
      )}
    </div>
  );
};

const ContactInfo = ({ icon, title, content }) => {
    return (
      <div className="flex gap-7 mt-14">
        <img loading="lazy" src={icon} alt="" className="object-contain  shrink-0 my-auto w-[30px] aspect-square" />
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-3.5 text-base whitespace-pre-line">{content}</p>
        </div>
      </div>
    );
  };