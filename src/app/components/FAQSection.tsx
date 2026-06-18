import { useState } from "react";
import svgPaths from "../../imports/Frame261/svg-nx79ueqlp7";

interface FAQItemProps {
  question: string;
  answer: string | string[];
  isOpen: boolean;
  onClick: () => void;
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="h-[16px] w-[14px] shrink-0">
      <svg
        className="block size-full transition-transform duration-300"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 14 16"
        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <g>
          <path
            d={isOpen ? svgPaths.p1ece1f80 : svgPaths.p66b7700}
            fill={isOpen ? "var(--fill-0, #A21B95)" : "var(--fill-0, #9CA3AF)"}
          />
        </g>
      </svg>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div
      className="backdrop-blur-[5px] rounded-[16px] w-full transition-all duration-300 relative"
      style={{
        backgroundImage: isOpen
          ? "linear-gradient(134.694deg, rgba(40, 40, 50, 0.8) 0%, rgba(30, 30, 40, 0.8) 100%)"
          : "linear-gradient(134.351deg, rgba(30, 30, 40, 0.6) 0%, rgba(20, 20, 30, 0.6) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-solid inset-0 pointer-events-none rounded-[16px]"
        style={{
          borderColor: isOpen
            ? "rgba(162,27,149,0.4)"
            : "rgba(255,255,255,0.1)",
          boxShadow: isOpen
            ? "0px 4px 20px 0px rgba(162,27,149,0.2)"
            : "none",
        }}
      />
      <div className="relative overflow-hidden rounded-[16px] p-px">
        {/* Question Header */}
        <button
          onClick={onClick}
          className="w-full text-left p-[20px] sm:p-[24px] flex items-center justify-between gap-[16px] cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            backgroundImage: isOpen
              ? "linear-gradient(135deg, rgba(60, 60, 70, 0.6) 0%, rgba(40, 40, 50, 0.6) 100%)"
              : "linear-gradient(135deg, rgba(50, 50, 60, 0.4) 0%, rgba(30, 30, 40, 0.4) 100%)",
          }}
        >
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[28px] flex-1 pr-[8px]">
            {question}
          </h3>
          <div
            className="flex items-center justify-center rounded-[9999px] size-[32px] shrink-0"
            style={{
              backgroundColor: isOpen
                ? "rgba(162,27,149,0.2)"
                : "rgba(55,65,81,0.2)",
            }}
          >
            <ChevronIcon isOpen={isOpen} />
          </div>
        </button>

        {/* Answer Content */}
        <div
          className="transition-all duration-300 ease-in-out overflow-hidden"
          style={{
            maxHeight: isOpen ? "600px" : "0px",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="px-[20px] sm:px-[24px] pt-[20px] sm:pt-[24px] pb-[20px] sm:pb-[24px] flex flex-col gap-[12px]">
            {(Array.isArray(answer) ? answer : [answer]).map((para, i) => (
              <p key={i} className="font-['Inter:Regular',sans-serif] font-normal text-[#9ca3af] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] md:leading-[26px]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you work with all types of businesses?",
      answer: "We primarily work with service businesses, agencies, and companies where partnerships can drive meaningful revenue. However, we do accept clients from other niches if there is a mutual fit on a case by case basis.",
    },
    {
      question: "Can we start with Acquire and later switch to Activate?",
      answer: [
        "Yes. You can start with Acquire and move to Activate once you've built a partner pipeline.",
        "In many cases, there may be a short overlap period — as new partners come in, some level of activation is needed while acquisition is still ongoing. We guide you through this transition to ensure momentum is maintained without disrupting your pipeline.",
      ],
    },
    {
      question: "Can we switch between Core and Done For You?",
      answer: [
        "Core is the foundation of most engagements, as it ensures the right strategy and systems are in place. You can add or remove the Done For You execution layer anytime based on your needs.",
        "Done For You pricing is offered as part of the bundled model with Core. If you're looking for execution-only support, that is scoped separately based on requirements.",
      ],
    },
    {
      question: "How do we get started?",
      answer: "Book a strategy call. We assess mutual fit, define priorities, and align on the best plan based on availability.",
    },
    {
      question: "How long does it take to set up a partner program?",
      answer: "It depends on your business, goals, and existing setup. Most programs take a few weeks to structure and begin execution.",
    },
    {
      question: "When can we expect results?",
      answer: "Partnerships are a compounding growth channel. We don't guarantee sales, but we build the right systems, cadence, and structure to generate consistent opportunities. Results vary based on effort, market, and execution.",
    },
    {
      question: "How long should we test this before evaluating success?",
      answer: "Typically, 3–6 months is recommended to properly test and validate partnerships as a growth channel.",
    },
    {
      question: "Can you just set things up and train our team?",
      answer: "Yes. Many clients start with the Manage plan along with the Done For You upgrade for 1–3 months to build and run the system, then scale down or transition once their team is fully trained.",
    },
    {
      question: "What's the difference between Core and Done For You?",
      answer: [
        "Core includes strategy, playbooks, weekly advising, and ongoing oversight so your team can execute effectively.",
        "Done For You includes full execution, management, and implementation by our team.",
      ],
    },
    {
      question: "Can you act as a fractional Head of Partnerships?",
      answer: "Yes. Many clients work with us in a fractional capacity where we help lead and guide their partnership strategy, systems, and execution. You can choose the level of involvement through our plans or opt for a more tailored engagement.",
    },
    {
      question: "Can we fully outsource our partnerships to you?",
      answer: "Yes. Our Done For You and Manage plans are designed for companies that want us to handle their partner program end-to-end — from acquisition to activation and ongoing management. For more complex needs, we also offer custom engagements.",
    },
    {
      question: "Is there a long-term contract?",
      answer: "No. Engagements are flexible with no long-term lock-ins. You can cancel your subscription anytime.",
    },
    {
      question: "Can we start small before choosing a monthly plan?",
      answer: "Yes. Advisory Hours are designed for companies that want to test the fit, get expert guidance, or clarify what kind of partnership support they need before committing to a monthly plan.",
    },
    {
      question: "What can Advisory Hours be used for?",
      answer: "They can be used for strategy reviews, partner list feedback, outreach script review, activation planning, workflow cleanup, tool guidance, and light implementation support. Larger execution, outreach, activation, and program management work is handled through monthly plans.",
    },
  ];

  return (
    <div className="bg-[#05060a] w-full py-[60px] sm:py-[80px] md:py-[96px]">
      <div className="max-w-[976px] mx-auto px-[16px] sm:px-[24px] md:px-[32px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[32px] sm:mb-[40px] md:mb-[48px]">
          {/* Badge */}
          <div className="bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] rounded-[9999px] px-[12px] py-[6px] flex items-center gap-[8px] mb-[20px] sm:mb-[24px]">
            <div className="bg-[#6366f1] rounded-[9999px] size-[8px]" />
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#818cf8] text-[12px] leading-[16px] tracking-[-0.5px] whitespace-nowrap">
              Partner Program Support
            </p>
          </div>

          {/* Title */}
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[#e4e4e4] text-[32px] sm:text-[44px] md:text-[60px] leading-[38px] sm:leading-[48px] md:leading-[60px] tracking-[-0.7px] mb-[12px] sm:mb-[16px] md:mb-[20px]">
            Frequently Asked Questions
          </h2>

          {/* Subtitle */}
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#9ca3af] text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] tracking-[-0.5px] max-w-[280px] sm:max-w-[500px] md:max-w-[672px]">
            Everything you need to know about our partner programs,
            integrations, and revenue sharing.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
