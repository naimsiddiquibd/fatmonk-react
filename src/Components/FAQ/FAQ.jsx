import React, { useState } from 'react';
import { HiOutlineChevronDown } from "react-icons/hi";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
        {
          question: "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your ?",
          answer:
            "Visit the Payouts page of your account to select your preferred payout method and request a payment. You need to accumulate the minimum amount, specified on the Payments page, to be able to request your Cash Back payment. You will receive your payment via check, Direct Deposit to U.S. Bank Account, PayPal, Zelle, Venmo or <strong>eGift Card</strong>.",
        },
        {
            question: "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your ?",
            answer:
              "Visit the Payouts page of your account to select your preferred payout method and request a payment. You need to accumulate the minimum amount, specified on the Payments page, to be able to request your Cash Back payment. You will receive your payment via check, Direct Deposit to U.S. Bank Account, PayPal, Zelle, Venmo or <strong>eGift Card</strong>.",
          },
          {
            question: "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your ?",
            answer:
              "Visit the Payouts page of your account to select your preferred payout method and request a payment. You need to accumulate the minimum amount, specified on the Payments page, to be able to request your Cash Back payment. You will receive your payment via check, Direct Deposit to U.S. Bank Account, PayPal, Zelle, Venmo or <strong>eGift Card</strong>.",
          },
          {
            question: "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your ?",
            answer:
              "Visit the Payouts page of your account to select your preferred payout method and request a payment. You need to accumulate the minimum amount, specified on the Payments page, to be able to request your Cash Back payment. You will receive your payment via check, Direct Deposit to U.S. Bank Account, PayPal, Zelle, Venmo or <strong>eGift Card</strong>.",
          },
          {
            question: "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your ?",
            answer:
              "Visit the Payouts page of your account to select your preferred payout method and request a payment. You need to accumulate the minimum amount, specified on the Payments page, to be able to request your Cash Back payment. You will receive your payment via check, Direct Deposit to U.S. Bank Account, PayPal, Zelle, Venmo or <strong>eGift Card</strong>.",
          },
          {
            question: "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your ?",
            answer:
              "Visit the Payouts page of your account to select your preferred payout method and request a payment. You need to accumulate the minimum amount, specified on the Payments page, to be able to request your Cash Back payment. You will receive your payment via check, Direct Deposit to U.S. Bank Account, PayPal, Zelle, Venmo or <strong>eGift Card</strong>.",
          },
          {
            question: "The Art of Visual Branding: How to Leverage Brand Elements to Establish Your ?",
            answer:
              "Visit the Payouts page of your account to select your preferred payout method and request a payment. You need to accumulate the minimum amount, specified on the Payments page, to be able to request your Cash Back payment. You will receive your payment via check, Direct Deposit to U.S. Bank Account, PayPal, Zelle, Venmo or <strong>eGift Card</strong>.",
          },
      ];
      const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
      };
    
    return (
        <div className='bg-[#FFEDF3] p-4 md:px-20 xl:px-40 md:py-16'>
            <h1 className='text-center font-poppins text-[30px] md:text-[60px] font-bold my-6 md:my-12 text-[#BD7C92]'>FAQs</h1>
            <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          className="bg-monkwhite rounded-lg text-monkblack text-left font-poppins md:mx-20"
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