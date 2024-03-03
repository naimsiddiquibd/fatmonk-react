import React, { useState } from 'react';
import { HiOutlineChevronDown } from "react-icons/hi";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
        {
          question: "What services does Fatmonk Studio offer?",
          answer:
            "Fatmonk Studio specializes in cutting-edge technology, avant-garde software development, visionary design, and unrivaled event management excellence.",
        },
        {
            question: "How can I contact Fatmonk Studio for inquiries?",
            answer:
              "You can reach out to us through our website's contact form or directly via email at <b>hello@fatmonk.studio</b>",
          },
          {
            question: "Does Fatmonk Studio work with clients globally?",
            answer:
              "Yes, we proudly serve clients worldwide. Regardless of your location, we're committed to delivering top-notch services and support.",
          },
          {
            question: "Can Fatmonk Studio handle projects of all sizes?",
            answer:
              "Absolutely! Whether you're a small startup or a large corporation, we tailor our solutions to meet your specific needs and scale.",
          },
          {
            question: "What sets Fatmonk Studio apart from other studios?",
            answer:
              "Our commitment to innovation, attention to detail, and dedication to client success distinguish us. We go above and beyond to exceed expectations.",
          },
          {
            question: "Does Fatmonk Studio provide ongoing support after project completion?",
            answer:
              "Yes, we offer comprehensive support to ensure your continued satisfaction. Our team is always available to address any questions or concerns you may have.",
          },
          {
            question: "How does Fatmonk Studio ensure the security of client data?",
            answer:
              "Security is our top priority. We employ industry-leading measures to safeguard your data and maintain confidentiality throughout our partnership.",
          },
      ];
      const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
      };
    
    return (
        <div className='bg-[#FFEDF3] px-5 lg:px-0 lg:py-16 py-6'>
            <h1 className='text-center font-poppins text-[30px] md:text-[60px] font-bold my-6 md:my-12 text-[#BD7C92]'>FAQs</h1>
            <div className="space-y-4 lg:w-[1180px] lg:mx-auto">
      {faqs.map((faq, index) => (
        <div
          className="bg-monkwhite rounded-lg text-monkblack text-leftt font-poppins "
          key={index}
        >
          <button
            className="flex items-center justify-between w-full p-4 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            
            <span className="font-medium text-left text-[14px] md:text-[16px] lg:text-[18px]  flex items-center">
            <img src="/circle.png" className='w-5 mr-4' alt="" />
                {faq.question}</span>
            <HiOutlineChevronDown
              className={`transition-transform duration-300 w-32 text-[#BD7C91] ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2">
              <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            </div>
          )}
        </div>
      ))}
    </div>
        </div>
    );
};

export default FAQ;