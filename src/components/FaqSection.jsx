// components/FaqSection.jsx
import React, { useState } from "react";

const faqs = [
  {
    question: "What is FIRKO?",
    answer:
      "FIRKO is a modern classified platform like OLX, allowing users to buy, sell, hire, or offer services with a superior user experience.",
  },
  {
    question: "How do I post an ad?",
    answer:
      "Simply take a picture, upload it via the app, fill in the details, and post your ad instantly.",
  },
  {
    question: "Is FIRKO free to use?",
    answer:
      "Yes, FIRKO is completely free for users to post ads or browse listings.",
  },
  {
    question: "Can I contact buyers or sellers directly?",
    answer:
      "Absolutely! You can chat directly within the FIRKO app to negotiate and finalize deals.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-24 px-6 sm:px-12 lg:px-24 xl:px-32 shadow-inner shadow-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#092C4C] mb-16">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left text-lg sm:text-xl font-semibold text-[#092C4C] focus:outline-none"
              >
                {faq.question}
                <span className="text-3xl text-[#3C71F0] font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-8 transition-all duration-300 text-left text-base text-gray-600 overflow-hidden ${
                  openIndex === index ? "max-h-60 py-4" : "max-h-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
