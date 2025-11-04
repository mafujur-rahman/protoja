"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      title: "What UI/UX services does Protoja offer?",
      desc: "Find answers to common questions about Protoja's features, functionality, and how it can elevate your experience.Find answers to common questions about Protoja's features, functionality, and how it can elevate your experience.",
    },
    {
      id: 2,
      title: "What UI/UX services does Protoja offer?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    {
      id: 3,
      title: "What UI/UX services does Protoja offer?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    {
      id: 4,
      title: "What UI/UX services does Protoja offer?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    {
      id: 5,
      title: "What UI/UX services does Protoja offer?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    {
      id: 6,
      title: "What UI/UX services does Protoja offer?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    {
      id: 7,
      title: "What UI/UX services does Protoja offer?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    {
      id: 8,
      title: "What UI/UX services does Protoja offer?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
  ];

  const [expanded, setExpanded] = useState(0);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="bg-[url('/faq.svg')] mt-8 bg-cover bg-no-repeat bg-current px-4 py-28" >
      <div className="max-w-[1440px] mx-auto p-6 md:p-12 bg-white rounded-xl border border-gray-100 md:flex">
        <div className="md:w-1/5">
          <p className="text-[#333] text-sm font-medium uppercase mb-2">FAQ</p>
        </div>
        <div className="md:w-4/5">
          <div className="mb-12">
            <h2 className="text-[#111] md:text-5xl font-bold leading-tight mb-6">
              Curious About UI/UX
              <br />
              Design? We've Got You
              <br />
              Covered
            </h2>
            <p className="text-[#555] text-lg max-w-[800px]">
              Find answers to common questions about Protoja's features,
              functionality, and how it can elevate your experience.
            </p>
          </div>

          <div className="border-t border-gray-200">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="border-b border-gray-200">
                <div
                  className="flex justify-between items-center py-6 cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-[#111] text-xl font-medium">
                    {faq.title}
                  </h3>
                  <button
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0"
                    aria-expanded={expanded === index}
                    aria-controls={`faq-content-${faq.id}`}
                  >
                    {expanded === index ? (
                      <ChevronUp className="w-5 h-5 text-[#111]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#111]" />
                    )}
                  </button>
                </div>

                <div
                  id={`faq-content-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    expanded === index
                      ? "max-h-[500px] opacity-100 pb-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#555] text-lg leading-relaxed pr-12">
                    {faq.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
