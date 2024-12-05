import React, { useState } from "react";
import Wo from "../assets/Wo.png";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-4 text-left hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium">{question}</span>
        <span
          className={`text-xl transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && <div className="pb-4 text-muted-foreground">{answer}</div>}
    </div>
  );
};

const Avatar = ({ src, alt }) => {
  <div>
    <img src={Wo} alt={alt} className="w-full h-full object-cover" />
  </div>;
};

export default function Faqs() {
  const fags = [
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you change your plan at any time through your account settings.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time, Your service will continue untill the end of your billing period.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add additional information such as your business details, PO numbers, or any other relavant information to your invoices.",
    },
    {
      question: "How does billing work?",
      answer:
        "We bill monthly or annually, depending on your chosen plan. Payment is processed automatically using your saved payment medthod.",
    },
    {
      question: "How do i change my account email?",
      answer:
        "You can update your email address in your account settings. a verification email will be sent to confirm the change.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <div className="inline-block border border-gray-400 rounded-lg px-4 py-2">
          <h1 className="text-2xl font-semibold">FAQS</h1>
          <p className="text-sm text-red-500">Everything You Need To Know</p>
        </div>
      </div>

      <div className="mb-12">
        {fags.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="bg-[#1a2744] text-white rounded-lg p-8 text-center">
        <div>
          <Avatar alt="Team member 1" />
          <Avatar alt="Team member 2" />
          <Avatar alt="Team member 2" />
        </div>
        <h2 className="text-lg font-semibold mb-2">Still have question?</h2>
        <p className="text-gray-300 mb-4">
          Can't find the answer you're looking for? Please chat our friendly
          team.
        </p>
        <button className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-4 py-2 rounded transition-colors duration-200">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
