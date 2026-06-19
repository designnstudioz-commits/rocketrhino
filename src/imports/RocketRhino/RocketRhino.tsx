import svgPaths from "./svg-irr7vdxwg9";
import imgChatGptImageApr302026111718Pm1 from "./14ce2ba6b9999e2c9a6e2f047e87cb467de62727.png";
import imgImage18 from "./8bb2bcea7a33c788e6711f838d811b022e8431c9.png";
import imgChatGptImageApr302026114327Pm1 from "./e88503ab3a3bca72b684c4ba0a6166087c6ec93c.png";
import imgChatGptImageApr242026033027Pm1 from "./08171ee5af9542130fd51ffd065386661a35166b.png";
import imgNewHeroImage from "../ChatGPT_Image_May_13__2026__05_19_53_PM.png";
import logoSvg from "../logo.svg";
import rrLogo from "../RR-Logo.png";
import RocketRhinoForm from "./RocketRhinoForm";
import Component2ndSection from "../2ndSection/2ndSection";
import StrategicPartnerChannels from "../../app/components/StrategicPartnerChannels";
import HighTrustIndustries from "../../app/components/HighTrustIndustries";
import FAQSection from "../../app/components/FAQSection";
import AboutBilal from "../../app/components/AboutBilal";
import Testimonials from "../../app/components/Testimonials";
import ToolsSection from "../../app/components/ToolsSection";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function Container() {
  return (
    <div
      className="absolute bg-[rgba(34,211,238,0.07)] blur-[180px] left-[calc(75%+61.44px)] rounded-[22369600px] size-[600px] top-[-20.61px]"
      data-name="Container"
    />
  );
}

function Container1() {
  return (
    <div
      className="bg-[#755cea] blur-[180px] h-[679.55px] relative rounded-[22369600px] w-[139.043px]"
      data-name="Container"
    />
  );
}

function Container2() {
  return (
    <div
      className="bg-[#18dafb] blur-[106.35px] h-[193px] relative rounded-[22369600px] w-[773px]"
      data-name="Container"
    />
  );
}

function Container3() {
  return (
    <div
      className="bg-[#5342e0] blur-[180px] h-[619.653px] relative rounded-[22369600px] w-[220.956px]"
      data-name="Container"
    />
  );
}

function Group3() {
  return (
    <div className="absolute contents h-[906.879px] left-[-378.56px] top-[-321px] w-[917.458px]">
      <div
        className="absolute flex h-[547.826px] items-center justify-center left-[-210.21px] top-[-70.59px] w-[606.432px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[49.4deg]">
          <Container1 />
        </div>
      </div>
      <div
        onClick={() => {
          const el = document.getElementById("contact-form-section");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="content-stretch flex flex-col isolate items-center px-[20.867px] py-[12.172px] relative rounded-[8693.576px] shrink-0 w-[224.317px] z-[3] cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#f3f4f6] mt-[6px]"
      >
        <div aria-hidden className="absolute border-[#e5e7eb] border-[1.739px] border-solid inset-0 pointer-events-none rounded-[8693.576px]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.867px] not-italic relative shrink-0 text-[#111827] text-[13.911px] text-center tracking-[-0.4347px] w-full z-[1]">Start Test Drive</p>
      </div>
      <div
        className="absolute flex h-[353.841px] items-center justify-center left-[-273.96px] top-[-245.78px] w-[796.391px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[12.35deg]">
          <Container2 />
        </div>
      </div>
      <div
        className="absolute flex h-[602.436px] items-center justify-center left-[-303.47px] top-[-247.04px] w-[585.849px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[43.31deg]">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById(
      "how-it-works-section",
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById("pricing-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex font-['Montserrat:Medium',sans-serif] gap-[47px] items-center leading-[0] not-italic text-[16px] text-center text-[#050047] whitespace-nowrap">
      <div
        onClick={scrollToHowItWorks}
        className="flex flex-col justify-center relative shrink-0 cursor-pointer transition-all duration-200 hover:text-[#bf00ff]"
      >
        <p className="leading-[normal]">How It Works</p>
      </div>
      <div
        onClick={scrollToPricing}
        className="flex flex-col justify-center relative shrink-0 cursor-pointer transition-all duration-200 hover:text-[#bf00ff]"
      >
        <p className="leading-[normal]">Pricing</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[32.66px] w-auto" data-name="Group">
      <img src={logoSvg} alt="Logo" className="h-full w-auto" />
    </div>
  );
}

function Layer() {
  return (
    <div
      className="cursor-pointer relative"
      data-name="Layer_1"
    >
      <img
        src={rrLogo}
        alt="RocketRhino Logo"
        className="h-[24px] md:h-[32.66px] w-auto"
      />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[98px]"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11.186px] text-white w-full">
        <p className="leading-[17.4px]">Free Strategy Call</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div
      className="h-[17px] relative shrink-0 w-[15px]"
      data-name="SVG"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 17"
      >
        <g id="SVG">
          <path
            d={svgPaths.p19235868}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="col-1 content-stretch flex gap-[9px] items-center justify-center ml-[30px] mt-[14px] relative rounded-[62.143px] row-1"
      data-name="Container"
    >
      <Container5 />
      <Svg />
    </div>
  );
}

function Group2() {
  const scrollToContactForm = () => {
    const element = document.getElementById(
      "contact-form-section",
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={scrollToContactForm}
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 cursor-pointer transition-all duration-300 hover:scale-110 hover:brightness-110 active:scale-95"
    >
      <div className="col-1 h-[45.986px] ml-0 mt-0 pointer-events-none relative rounded-[62.143px] row-1 w-[174px]">
        <div
          aria-hidden="true"
          className="absolute bg-[#2239bf] inset-0 rounded-[62.143px] transition-all duration-300 group-hover:bg-[#2e4fd4]"
        />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-11.186px_-1.243px_16.344px_0px_rgba(134,134,134,0.25)]" />
        <div
          aria-hidden="true"
          className="absolute border-[#191e3c] border-[0.621px] border-solid inset-0 rounded-[62.143px] shadow-[0px_4.35px_14.479px_0px_rgba(34,57,191,0.44),0px_2.486px_13.299px_0px_rgba(15,19,46,0.77)] transition-all duration-300 hover:shadow-[0px_6px_20px_0px_rgba(34,57,191,0.6),0px_4px_18px_0px_rgba(15,19,46,0.9)]"
        />
      </div>
      <Container4 />
    </div>
  );
}

function Frame222() {
  return (
    <div className="flex items-center justify-center rounded-[57.171px] scale-75 md:scale-100">
      <Group2 />
    </div>
  );
}

function Icon() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="Icon"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p9b81900}
            fill="var(--fill-0, white)"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="Icon"
    >
      <div className="absolute inset-[-62.5%_-62.5%_-58.63%_-62.51%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 54.0018 53.0721"
        >
          <g
            filter="url(#filter0_f_1_296)"
            id="Icon"
            opacity="0.6"
          >
            <path
              d={svgPaths.p19452100}
              fill="var(--fill-0, white)"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="56"
              id="filter0_f_1_296"
              width="56"
              x="-0.9982"
              y="-1.00011"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_296"
                stdDeviation="8"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="col-1 ml-0 mt-0 relative row-1 size-[24px]"
      data-name="Container"
    >
      <Icon />
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="Icon"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p9b81900}
            fill="var(--fill-0, white)"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="Icon"
    >
      <div className="absolute inset-[-62.5%_-62.5%_-58.63%_-62.51%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 54.0018 53.0721"
        >
          <g
            filter="url(#filter0_f_1_296)"
            id="Icon"
            opacity="0.6"
          >
            <path
              d={svgPaths.p19452100}
              fill="var(--fill-0, white)"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="56"
              id="filter0_f_1_296"
              width="56"
              x="-0.9982"
              y="-1.00011"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_296"
                stdDeviation="8"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="col-1 ml-[32px] mt-0 relative row-1 size-[24px]"
      data-name="Container"
    >
      <Icon2 />
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="Icon"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p9b81900}
            fill="var(--fill-0, white)"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="Icon"
    >
      <div className="absolute inset-[-62.5%_-62.5%_-58.63%_-62.51%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 54.0018 53.0721"
        >
          <g
            filter="url(#filter0_f_1_296)"
            id="Icon"
            opacity="0.6"
          >
            <path
              d={svgPaths.p19452100}
              fill="var(--fill-0, white)"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="56"
              id="filter0_f_1_296"
              width="56"
              x="-0.9982"
              y="-1.00011"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_296"
                stdDeviation="8"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="col-1 ml-[64px] mt-0 relative row-1 size-[24px]"
      data-name="Container"
    >
      <Icon4 />
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="Icon"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p9b81900}
            fill="var(--fill-0, white)"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="Icon"
    >
      <div className="absolute inset-[-62.5%_-62.5%_-58.63%_-62.51%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 54.0018 53.0721"
        >
          <g
            filter="url(#filter0_f_1_296)"
            id="Icon"
            opacity="0.6"
          >
            <path
              d={svgPaths.p19452100}
              fill="var(--fill-0, white)"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="56"
              id="filter0_f_1_296"
              width="56"
              x="-0.9982"
              y="-1.00011"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_296"
                stdDeviation="8"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="col-1 ml-[96px] mt-0 relative row-1 size-[24px]"
      data-name="Container"
    >
      <Icon6 />
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="Icon"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p9b81900}
            fill="var(--fill-0, white)"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="Icon"
    >
      <div className="absolute inset-[-62.5%_-62.5%_-58.63%_-62.51%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 54.0018 53.0721"
        >
          <g
            filter="url(#filter0_f_1_296)"
            id="Icon"
            opacity="0.6"
          >
            <path
              d={svgPaths.p19452100}
              fill="var(--fill-0, white)"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="56"
              id="filter0_f_1_296"
              width="56"
              x="-0.9982"
              y="-1.00011"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_296"
                stdDeviation="8"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="col-1 ml-[128px] mt-0 relative row-1 size-[24px]"
      data-name="Container"
    >
      <Icon8 />
      <Icon9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[28px] place-items-start relative row-1">
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['Montserrat:Regular',sans-serif] justify-center ml-0 mt-0 not-italic relative row-1 text-[#d1d5db] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">
          Consistently Rated 5-Stars
        </p>
      </div>
      <Group10 />
    </div>
  );
}

function Frame224() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Montserrat:Black',sans-serif] justify-center relative shrink-0 text-[#bf00ff] text-[36px] md:text-[68px] text-center tracking-[-2px] w-full">
        <p className="leading-[normal] text-left pl-0 ml-0">2X Your Revenue</p>
      </div>
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center relative shrink-0 text-[#eae4e4] text-[28px] md:text-[50px] w-full">
        <p className="leading-[32px] md:leading-[48px]">
          With Strategic Partner Programs
        </p>
      </div>
    </div>
  );
}

function Frame225() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start not-italic relative shrink-0 text-[#d1d5db] text-[16px] md:text-[20px] w-full md:w-[579px]">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">
          Built for high-ticket service businesses with $1K+
          offers
        </p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center relative shrink-0 w-full">
        <p className="font-['Montserrat:Light',sans-serif]">
          <span className="leading-[normal] text-[#bf00ff]">
            RocketRhino™
          </span>
          <span className="leading-[normal]">{` designs, launches, recruits, and activates strategic partners that drive consistent referral revenue.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame226() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Group14 />
      <Frame224 />
      <Frame225 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[155.86px]">
        <p className="leading-[28px] whitespace-nowrap">
          Free Strategy Call
        </p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div
      className="h-[16px] relative shrink-0 w-[14px]"
      data-name="SVG"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 16"
      >
        <g id="SVG">
          <path
            d={svgPaths.p5fb8390}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0"
      data-name="Margin"
    >
      <Svg1 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="col-1 content-stretch flex items-center ml-[49px] mt-[23px] relative rounded-[100px] row-1"
      data-name="Container"
    >
      <Container12 />
      <Margin />
    </div>
  );
}

function Group4() {
  const scrollToContactForm = () => {
    const element = document.getElementById(
      "contact-form-section",
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={scrollToContactForm}
      className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 cursor-pointer transition-all duration-300 hover:scale-110 hover:brightness-110 active:scale-95 scale-90 md:scale-100"
    >
      <div className="col-1 h-[74px] ml-0 mt-0 pointer-events-none relative rounded-[100px] row-1 w-[280px]">
        <div
          aria-hidden="true"
          className="absolute bg-[#2239bf] inset-0 rounded-[100px] transition-all duration-300 group-hover:bg-[#2e4fd4]"
        />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-18px_-2px_26.3px_0px_rgba(134,134,134,0.25)]" />
        <div
          aria-hidden="true"
          className="absolute border border-[#191e3c] border-solid inset-0 rounded-[100px] shadow-[0px_7px_23.3px_0px_rgba(34,57,191,0.44),0px_4px_21.4px_0px_rgba(15,19,46,0.77)] transition-all duration-300 hover:shadow-[0px_10px_30px_0px_rgba(34,57,191,0.6),0px_6px_25px_0px_rgba(15,19,46,0.9)]"
        />
      </div>
      <Container11 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 group">
      <Group4 />
    </div>
  );
}

function Frame227() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-full">
      <Frame226 />
      <Group1 />
    </div>
  );
}

function Frame228() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame227 />
      <div className="flex flex-col font-['Montserrat:Italic',sans-serif] italic justify-center relative shrink-0 text-[#d8d8d8] text-[14px] w-full">
        <p className="leading-[normal]">
          4 spots left before our waitlist opens
        </p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Group 150">
          <circle
            cx="10"
            cy="10"
            fill="var(--fill-0, #5D2BAC)"
            id="Ellipse 17"
            r="10"
          />
          <path
            d={svgPaths.pabea6f0}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['Montserrat:Medium_Italic',sans-serif] italic justify-center ml-[28.44px] mt-0 relative row-1 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">{`$3M+  in Partner-Driven Revenue`}</p>
      </div>
      <Group5 />
    </div>
  );
}

function Group11() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Group 150">
          <circle
            cx="10"
            cy="10"
            fill="var(--fill-0, #5D2BAC)"
            id="Ellipse 17"
            r="10"
          />
          <path
            d={svgPaths.pabea6f0}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group11 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group9 />
      <div className="col-1 flex flex-col font-['Montserrat:Medium_Italic',sans-serif] italic justify-center ml-[28.44px] mt-0 relative row-1 text-[14px] md:text-[16px] text-white">
        <p className="leading-[normal]">
          100+ Strategic Partnerships Built
        </p>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Group 150">
          <circle
            cx="10"
            cy="10"
            fill="var(--fill-0, #5D2BAC)"
            id="Ellipse 17"
            r="10"
          />
          <path
            d={svgPaths.pabea6f0}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group15 />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group13 />
      <div className="col-1 flex flex-col font-['Montserrat:Medium_Italic',sans-serif] italic justify-center ml-[28.44px] mt-0 relative row-1 text-[14px] md:text-[16px] text-white">
        <p className="leading-[normal]">
          7+ Years Partnership Experience
        </p>
      </div>
    </div>
  );
}

function Frame229() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full md:w-[298.436px]">
      <Group7 />
      <Group8 />
      <Group12 />
    </div>
  );
}

function Frame230() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-[26px] items-start leading-[0] relative shrink-0 w-full md:w-[601px]">
      <Frame228 />
      <Frame229 />
    </div>
  );
}

function Frame231() {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-center relative shrink-0 w-full mb-[40px] md:mb-[80px] gap-[20px] md:gap-0">
      <Frame230 />
      <div
        className="h-[300px] md:h-[654px] mix-blend-exclusion opacity-80 relative shrink-0 w-full md:w-[629px]"
        data-name="ChatGPT Image Apr 30, 2026, 11_17_18 PM 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-[109.7%]"
            src={imgNewHeroImage}
          />
        </div>
      </div>
    </div>
  );
}

function Frame232() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center relative shrink-0 text-[28px] md:text-[60px] text-white tracking-[-1.8px] w-full">
        <p className="leading-[34px] md:leading-[66px]">Because People Buy from People</p>
      </div>
      <div className="flex flex-col font-['Montserrat:ExtraBold',sans-serif] justify-center relative shrink-0 text-[#bf00ff] text-[36px] md:text-[78px] tracking-[-2.4px] w-full">
        <p className="leading-[42px] md:leading-[82px]">They Trust</p>
      </div>
    </div>
  );
}

function Frame233() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center relative shrink-0 text-[#cacaca] text-[14px] md:text-[24px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[20px] md:leading-[32px]">WHY THIS WORKS</p>
      </div>
      <Frame232 />
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center relative shrink-0 text-white text-[17px] md:text-[26px] tracking-[-0.4px] w-full mt-[10px] md:mt-[18px]">
        <p className="leading-[24px] md:leading-[34px]">Partnerships Fail Without Execution Ownership</p>
      </div>
    </div>
  );
}

function Frame234() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 md:ml-[108px] mt-0 not-italic relative row-1 w-full md:w-[867px] p-[0px]">
      <Frame233 />
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center relative shrink-0 text-[#cacaca] text-[16px] md:text-[24px] mt-[16px] md:mt-[24px]">
        <p className="font-['Montserrat:Light',sans-serif] leading-[24px] md:leading-[32px] mb-0">
          Most businesses treat partnerships like a side project.
        </p>
        <p className="font-['Montserrat:Light',sans-serif]">
          <span className="leading-[24px] md:leading-[32px] text-[#bf00ff]">{`RocketRhino™ `}</span>
          <span className="leading-[24px] md:leading-[32px]">
            turns scattered relationships into a structured revenue channel with the strategy, systems, outreach, activation, follow-up, and reporting needed to make partnerships work.
          </span>
        </p>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="relative w-full">
        <div
          className="h-[400px] md:h-[959px] w-full flex justify-center items-center mt-[250px] md:mt-0"
          data-name="image 18"
        >
          <img
            alt=""
            className="h-full max-w-none object-cover object-center pointer-events-none w-full"
            src={imgImage18}
          />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-[150px] md:h-[294px] w-full"
          style={{
            backgroundImage:
              "linear-gradient(1.7204deg, rgb(5, 6, 10) 29.63%, rgba(5, 6, 10, 0) 96.977%)",
          }}
        />
        <div className="absolute inset-0 px-[20px] md:px-0">
          <Frame234 />
        </div>
      </div>
    </div>
  );
}

function Frame223() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <div
        className="aspect-[1587/244] opacity-90 relative shrink-0 w-full"
        data-name="ChatGPT Image Apr 30, 2026, 11_43_27 PM 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[433.61%] inset-x-0 max-w-none top-[-156.15%] w-full"
            src={imgChatGptImageApr302026114327Pm1}
          />
        </div>
      </div>
    </div>
  );
}

function PartnerRevenue() {
  return (
    <div
      id="how-it-works-section"
      className="content-stretch flex flex-col gap-[24px] md:gap-[36px] items-center not-italic relative shrink-0 text-center w-full max-w-[1185px]"
      data-name="Partner Revenue"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[32px] md:text-[60px] text-white tracking-[-1.5px] text-center">
        <p className="leading-[40px] md:leading-[68px]">
          RocketRhino™: The Execution-First Partner Growth System Behind Millions in{" "}
          <span className="text-[#bf00ff]">Partner Revenue</span>
        </p>
      </div>
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center relative shrink-0 text-[#cacaca] text-[16px] md:text-[24px] w-full max-w-[760px]">
        <p className="leading-[24px] md:leading-[32px]">
          Our proven 5-step framework for designing, launching,
          recruiting, and scaling strategic partner programs.
        </p>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[106px] mt-0 place-items-start relative row-1">
      <div
        className="bg-[#a21b95] blur-[60px] col-1 h-[360px] ml-0 mt-0 opacity-20 relative rounded-[9999px] row-1 w-[576px]"
        data-name="Background+Blur"
      />
      <div
        className="bg-[#2239bf] blur-[60px] col-1 h-[360px] ml-0 mt-[180px] opacity-20 relative rounded-[9999px] row-1 w-[576px]"
        data-name="Background+Blur"
      />
    </div>
  );
}

function Group17() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[599px] mt-[266px] place-items-start relative row-1">
      <div
        className="col-1 flex h-[17.718px] items-center justify-center mix-blend-plus-lighter ml-0 mt-0 relative row-1 w-[34.181px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-17.37deg]">
          <div className="h-[8.159px] relative w-[33.262px]">
            <div className="absolute inset-[-145.86%_-35.78%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 57.062 31.9585"
              >
                <g
                  filter="url(#filter0_f_7_1040)"
                  id="Ellipse 37"
                  style={{ mixBlendMode: "plus-lighter" }}
                >
                  <ellipse
                    cx="28.531"
                    cy="15.9793"
                    fill="url(#paint0_linear_7_1040)"
                    rx="16.631"
                    ry="4.07927"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="31.9585"
                    id="filter0_f_7_1040"
                    width="57.062"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_7_1040"
                      stdDeviation="5.95"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_7_1040"
                    x1="33.8688"
                    x2="32.7112"
                    y1="21.1176"
                    y2="9.86258"
                  >
                    <stop stopColor="#2239BF" />
                    <stop offset="0.2191" stopColor="#5D2BAC" />
                    <stop offset="0.4958" stopColor="#A21B95" />
                    <stop offset="0.7277" stopColor="#D41085" />
                    <stop offset="0.9025" stopColor="#F3097B" />
                    <stop offset="1" stopColor="#FF0677" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-1 flex h-[12.673px] items-center justify-center mix-blend-plus-lighter ml-[13px] mt-0 relative row-1 w-[18.055px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-17.37deg]">
          <div className="h-[8.159px] relative w-[16.365px]">
            <div className="absolute inset-[-145.86%_-72.71%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 40.1655 31.9585"
              >
                <g
                  filter="url(#filter0_f_7_1022)"
                  id="Ellipse 39"
                  style={{ mixBlendMode: "plus-lighter" }}
                >
                  <ellipse
                    cx="20.0827"
                    cy="15.9793"
                    fill="url(#paint0_linear_7_1022)"
                    rx="8.18274"
                    ry="4.07927"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="31.9585"
                    id="filter0_f_7_1022"
                    width="40.1655"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_7_1022"
                      stdDeviation="5.95"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_7_1022"
                    x1="22.709"
                    x2="20.4309"
                    y1="21.1176"
                    y2="10.2198"
                  >
                    <stop stopColor="#2239BF" />
                    <stop offset="0.2191" stopColor="#5D2BAC" />
                    <stop offset="0.4958" stopColor="#A21B95" />
                    <stop offset="0.7277" stopColor="#D41085" />
                    <stop offset="0.9025" stopColor="#F3097B" />
                    <stop offset="1" stopColor="#FF0677" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[33.646px] inline-grid ml-[8px] mt-[88px] place-items-start relative row-1 w-[38.281px]">
      <div
        className="col-1 flex h-[30.956px] items-center justify-center mix-blend-plus-lighter ml-0 mt-0 relative row-1 w-[27.312px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-50.89deg]">
          <div className="h-[8.159px] relative w-[33.262px]">
            <div className="absolute inset-[-145.86%_-35.78%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 57.062 31.9585"
              >
                <g
                  filter="url(#filter0_f_7_1040)"
                  id="Ellipse 37"
                  style={{ mixBlendMode: "plus-lighter" }}
                >
                  <ellipse
                    cx="28.531"
                    cy="15.9793"
                    fill="url(#paint0_linear_7_1040)"
                    rx="16.631"
                    ry="4.07927"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="31.9585"
                    id="filter0_f_7_1040"
                    width="57.062"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_7_1040"
                      stdDeviation="5.95"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_7_1040"
                    x1="33.8688"
                    x2="32.7112"
                    y1="21.1176"
                    y2="9.86258"
                  >
                    <stop stopColor="#2239BF" />
                    <stop offset="0.2191" stopColor="#5D2BAC" />
                    <stop offset="0.4958" stopColor="#A21B95" />
                    <stop offset="0.7277" stopColor="#D41085" />
                    <stop offset="0.9025" stopColor="#F3097B" />
                    <stop offset="1" stopColor="#FF0677" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-1 flex h-[17.845px] items-center justify-center mix-blend-plus-lighter ml-[13px] mt-0 relative row-1 w-[16.654px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-50.89deg]">
          <div className="h-[8.159px] relative w-[16.365px]">
            <div className="absolute inset-[-145.86%_-72.71%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 40.1655 31.9585"
              >
                <g
                  filter="url(#filter0_f_7_1022)"
                  id="Ellipse 39"
                  style={{ mixBlendMode: "plus-lighter" }}
                >
                  <ellipse
                    cx="20.0827"
                    cy="15.9793"
                    fill="url(#paint0_linear_7_1022)"
                    rx="8.18274"
                    ry="4.07927"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="31.9585"
                    id="filter0_f_7_1022"
                    width="40.1655"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_7_1022"
                      stdDeviation="5.95"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_7_1022"
                    x1="22.709"
                    x2="20.4309"
                    y1="21.1176"
                    y2="10.2198"
                  >
                    <stop stopColor="#2239BF" />
                    <stop offset="0.2191" stopColor="#5D2BAC" />
                    <stop offset="0.4958" stopColor="#A21B95" />
                    <stop offset="0.7277" stopColor="#D41085" />
                    <stop offset="0.9025" stopColor="#F3097B" />
                    <stop offset="1" stopColor="#FF0677" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[23.731px] inline-grid ml-[277px] mt-0 place-items-start relative row-1 w-[36.867px]">
      <div
        className="col-1 flex h-[11.996px] items-center justify-center mix-blend-plus-lighter ml-0 mt-0 relative row-1 w-[33.988px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-6.72deg]">
          <div className="h-[8.159px] relative w-[33.262px]">
            <div className="absolute inset-[-145.86%_-35.78%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 57.062 31.9585"
              >
                <g
                  filter="url(#filter0_f_7_1040)"
                  id="Ellipse 37"
                  style={{ mixBlendMode: "plus-lighter" }}
                >
                  <ellipse
                    cx="28.531"
                    cy="15.9793"
                    fill="url(#paint0_linear_7_1040)"
                    rx="16.631"
                    ry="4.07927"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="31.9585"
                    id="filter0_f_7_1040"
                    width="57.062"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_7_1040"
                      stdDeviation="5.95"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_7_1040"
                    x1="33.8688"
                    x2="32.7112"
                    y1="21.1176"
                    y2="9.86258"
                  >
                    <stop stopColor="#2239BF" />
                    <stop offset="0.2191" stopColor="#5D2BAC" />
                    <stop offset="0.4958" stopColor="#A21B95" />
                    <stop offset="0.7277" stopColor="#D41085" />
                    <stop offset="0.9025" stopColor="#F3097B" />
                    <stop offset="1" stopColor="#FF0677" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-1 flex h-[10.018px] items-center justify-center mix-blend-plus-lighter ml-[13px] mt-0 relative row-1 w-[17.208px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-6.72deg]">
          <div className="h-[8.159px] relative w-[16.365px]">
            <div className="absolute inset-[-145.86%_-72.71%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 40.1655 31.9585"
              >
                <g
                  filter="url(#filter0_f_7_1022)"
                  id="Ellipse 39"
                  style={{ mixBlendMode: "plus-lighter" }}
                >
                  <ellipse
                    cx="20.0827"
                    cy="15.9793"
                    fill="url(#paint0_linear_7_1022)"
                    rx="8.18274"
                    ry="4.07927"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="31.9585"
                    id="filter0_f_7_1022"
                    width="40.1655"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_7_1022"
                      stdDeviation="5.95"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_7_1022"
                    x1="22.709"
                    x2="20.4309"
                    y1="21.1176"
                    y2="10.2198"
                  >
                    <stop stopColor="#2239BF" />
                    <stop offset="0.2191" stopColor="#5D2BAC" />
                    <stop offset="0.4958" stopColor="#A21B95" />
                    <stop offset="0.7277" stopColor="#D41085" />
                    <stop offset="0.9025" stopColor="#F3097B" />
                    <stop offset="1" stopColor="#FF0677" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[654px] mt-[55px] place-items-start relative row-1 size-[36.699px]">
      <div
        className="col-1 flex h-[22.652px] items-center justify-center mix-blend-plus-lighter ml-0 mt-0 relative row-1 w-[33.253px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[27.63deg]">
          <div className="h-[8.159px] relative w-[33.262px]">
            <div className="absolute inset-[-145.86%_-35.78%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 57.062 31.9585"
              >
                <g
                  filter="url(#filter0_f_7_1040)"
                  id="Ellipse 37"
                  style={{ mixBlendMode: "plus-lighter" }}
                >
                  <ellipse
                    cx="28.531"
                    cy="15.9793"
                    fill="url(#paint0_linear_7_1040)"
                    rx="16.631"
                    ry="4.07927"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="31.9585"
                    id="filter0_f_7_1040"
                    width="57.062"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_7_1040"
                      stdDeviation="5.95"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_7_1040"
                    x1="33.8688"
                    x2="32.7112"
                    y1="21.1176"
                    y2="9.86258"
                  >
                    <stop stopColor="#2239BF" />
                    <stop offset="0.2191" stopColor="#5D2BAC" />
                    <stop offset="0.4958" stopColor="#A21B95" />
                    <stop offset="0.7277" stopColor="#D41085" />
                    <stop offset="0.9025" stopColor="#F3097B" />
                    <stop offset="1" stopColor="#FF0677" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-1 flex h-[14.817px] items-center justify-center mix-blend-plus-lighter ml-[13px] mt-0 relative row-1 w-[18.283px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[27.63deg]">
          <div className="h-[8.159px] relative w-[16.365px]">
            <div className="absolute inset-[-145.86%_-72.71%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 40.1655 31.9585"
              >
                <g
                  filter="url(#filter0_f_7_1022)"
                  id="Ellipse 39"
                  style={{ mixBlendMode: "plus-lighter" }}
                >
                  <ellipse
                    cx="20.0827"
                    cy="15.9793"
                    fill="url(#paint0_linear_7_1022)"
                    rx="8.18274"
                    ry="4.07927"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="31.9585"
                    id="filter0_f_7_1022"
                    width="40.1655"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_7_1022"
                      stdDeviation="5.95"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_7_1022"
                    x1="22.709"
                    x2="20.4309"
                    y1="21.1176"
                    y2="10.2198"
                  >
                    <stop stopColor="#2239BF" />
                    <stop offset="0.2191" stopColor="#5D2BAC" />
                    <stop offset="0.4958" stopColor="#A21B95" />
                    <stop offset="0.7277" stopColor="#D41085" />
                    <stop offset="0.9025" stopColor="#F3097B" />
                    <stop offset="1" stopColor="#FF0677" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[92px] place-items-start relative row-1">
      <div className="col-1 h-[304px] ml-0 mt-[8px] relative row-1 w-[743px]">
        <div className="absolute inset-[-5.24%_-3.15%_-10.71%_-3.3%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 790.945 352.511"
          >
            <g filter="url(#filter0_d_1_349)" id="Ellipse 30">
              <path
                d={svgPaths.p3579de00}
                fill="var(--stroke-0, #6D1C70)"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="352.511"
                id="filter0_d_1_349"
                width="790.945"
                x="3.57628e-07"
                y="-1.19209e-07"
              >
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="11.7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.635294 0 0 0 0 0.105882 0 0 0 0 0.584314 0 0 0 1 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_349"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_349"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="col-1 h-[304px] mix-blend-color-dodge ml-0 mt-[8px] relative row-1 w-[743px]">
        <div className="absolute inset-[-5.86%_-3.15%_-10.54%_-3.24%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 790.481 353.866"
          >
            <g
              filter="url(#filter0_df_1_337)"
              id="Ellipse 31"
              style={{ mixBlendMode: "color-dodge" }}
            >
              <path
                d={svgPaths.p130e0200}
                fill="var(--stroke-0, #FDB2FF)"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="353.866"
                id="filter0_df_1_337"
                width="790.481"
                x="5.36442e-07"
                y="7.15256e-07"
              >
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="11.7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.635294 0 0 0 0 0.105882 0 0 0 0 0.584314 0 0 0 1 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_337"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_337"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect2_foregroundBlur_1_337"
                  stdDeviation="8.75"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="col-1 h-[304px] mix-blend-color-dodge ml-0 mt-[8px] relative row-1 w-[743px]">
        <div className="absolute inset-[-5.19%_-3.22%_-10.37%_-3.18%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 790.55 351.3"
          >
            <g
              filter="url(#filter0_df_1_294)"
              id="Ellipse 32"
              style={{ mixBlendMode: "color-dodge" }}
            >
              <path
                d={svgPaths.p329a000}
                fill="var(--stroke-0, #FDB2FF)"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="351.3"
                id="filter0_df_1_294"
                width="790.55"
                x="0"
                y="0"
              >
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="11.7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.635294 0 0 0 0 0.105882 0 0 0 0 0.584314 0 0 0 1 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_294"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_294"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect2_foregroundBlur_1_294"
                  stdDeviation="1.7"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="col-1 h-[232px] mix-blend-color-dodge ml-[88px] mt-[44px] relative row-1 w-[567px]">
        <div className="absolute inset-[-6.92%_-4.15%_-14.17%_-4.37%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 615.273 280.925"
          >
            <g
              filter="url(#filter0_df_1_299)"
              id="Ellipse 33"
              opacity="0.17"
              style={{ mixBlendMode: "color-dodge" }}
            >
              <path
                d={svgPaths.pee79e00}
                fill="var(--stroke-0, #FDB2FF)"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="280.925"
                id="filter0_df_1_299"
                width="615.273"
                x="0"
                y="5.96046e-07"
              >
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="11.7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.635294 0 0 0 0 0.105882 0 0 0 0 0.584314 0 0 0 1 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_299"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_299"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect2_foregroundBlur_1_299"
                  stdDeviation="0.4"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="col-1 h-[158px] mix-blend-color-dodge ml-[179px] mt-[81px] relative row-1 w-[385px]">
        <div className="absolute inset-[-9.82%_-6.08%_-20.01%_-6.14%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 432.028 205.118"
          >
            <g
              filter="url(#filter0_df_1_306)"
              id="Ellipse 34"
              opacity="0.67"
              style={{ mixBlendMode: "color-dodge" }}
            >
              <path
                d={svgPaths.peeaf980}
                fill="var(--stroke-0, #FDB2FF)"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="205.118"
                id="filter0_df_1_306"
                width="432.028"
                x="-6.70552e-07"
                y="1.3411e-07"
              >
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="11.7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.635294 0 0 0 0 0.105882 0 0 0 0 0.584314 0 0 0 1 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_306"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_306"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect2_foregroundBlur_1_306"
                  stdDeviation="0.5"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="col-1 h-[78px] mix-blend-color-dodge ml-[277px] mt-[121px] relative row-1 w-[189px]">
        <div className="absolute inset-[-19.88%_-12.38%_-40.55%_-12.5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 236.027 125.133"
          >
            <g
              filter="url(#filter0_d_1_310)"
              id="Ellipse 35"
              opacity="0.35"
              style={{ mixBlendMode: "color-dodge" }}
            >
              <path
                d={svgPaths.p477d140}
                fill="var(--stroke-0, #FDB2FF)"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="125.133"
                id="filter0_d_1_310"
                width="236.027"
                x="7.30157e-07"
                y="-3.65078e-07"
              >
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="11.7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.635294 0 0 0 0 0.105882 0 0 0 0 0.584314 0 0 0 1 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_310"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_310"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className="col-1 flex h-[11.469px] items-center justify-center mix-blend-color-dodge ml-[657px] mt-[63px] relative row-1 w-[19.089px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[22.35deg]">
          <div className="h-[4.711px] relative w-[18.703px]">
            <div className="absolute inset-[-252.61%_-63.63%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 42.5029 28.5108"
              >
                <g
                  filter="url(#filter0_f_1_292)"
                  id="Ellipse 38"
                  style={{ mixBlendMode: "color-dodge" }}
                >
                  <ellipse
                    cx="21.2514"
                    cy="14.2554"
                    fill="var(--fill-0, #F1DAF4)"
                    rx="9.35143"
                    ry="2.35538"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="28.5108"
                    id="filter0_f_1_292"
                    width="42.5029"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_1_292"
                      stdDeviation="5.95"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-1 flex h-[15.813px] items-center justify-center mix-blend-color-dodge ml-[136px] mt-[275px] relative row-1 w-[34.248px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[13.72deg]">
          <div className="h-[8.159px] relative w-[33.262px]">
            <div className="absolute inset-[-145.86%_-35.78%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 57.062 31.9585"
              >
                <g
                  filter="url(#filter0_f_1_378)"
                  id="Ellipse 36"
                  style={{ mixBlendMode: "color-dodge" }}
                >
                  <ellipse
                    cx="28.531"
                    cy="15.9793"
                    fill="var(--fill-0, #F1DAF4)"
                    rx="16.631"
                    ry="4.07927"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="31.9585"
                    id="filter0_f_1_378"
                    width="57.062"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_1_378"
                      stdDeviation="5.95"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group17 />
      <Group18 />
      <Group20 />
      <Group19 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="hidden md:inline-grid md:col-1 md:grid-cols-[max-content] md:grid-rows-[max-content] md:ml-[227px] md:mt-[65px] md:place-items-start relative md:row-1"
      data-name="background"
    >
      <Group16 />
      <Group21 />
      <div
        className="col-1 h-[277px] mix-blend-lighten ml-[230px] mt-[12px] relative row-1 w-[303px]"
        data-name="ChatGPT Image Apr 24, 2026, 03_30_27 PM 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[141.88%] left-[-48.2%] max-w-none top-[-29.6%] w-[194.43%]"
            src={imgChatGptImageApr242026033027Pm1}
          />
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div
      className="relative shrink-0 size-[30px]"
      data-name="SVG"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30.0033"
      >
        <g id="SVG">
          <path
            d={svgPaths.p9265500}
            fill="var(--fill-0, #A21B95)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Svg2 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#0a0a0f] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px overflow-clip relative rounded-[16px] w-full"
      data-name="Background"
    >
      <Container14 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div
      className="content-stretch drop-shadow-[0px_0px_10px_rgba(162,27,149,0.4)] flex flex-col items-start justify-center p-[2px] relative rounded-[16px] shrink-0 size-[64px]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(162, 27, 149) 0%, rgb(34, 57, 191) 100%)",
      }}
      data-name="Background+Shadow"
    >
      <Background1 />
    </div>
  );
}

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[47.73px]">
        <p className="leading-[28px]">Rally</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div
      className="bg-gradient-to-r content-stretch flex from-[rgba(162,27,149,0.2)] items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0 to-[rgba(34,57,191,0.2)]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(162,27,149,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[113.28px]">
        <p className="leading-[16px] whitespace-nowrap">
          Partner Enablement
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[0.875px] pt-[3.125px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[22.75px] break-words">
          Activate partners through training, co-marketing
          campaigns, incentives, and ongoing nurture.
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[190px]"
      data-name="Container"
    >
      <Heading />
      <BackgroundBorder />
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <BackgroundShadow />
        <Container15 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[215px] items-start left-0 p-[25px] right-0 rounded-[16px] top-[39px]"
      data-name="Overlay+Border+Shadow+OverlayBlur"
    >
      <div
        aria-hidden="true"
        className="absolute backdrop-blur-[12px] bg-[rgba(20,10,40,0.4)] inset-0 pointer-events-none rounded-[16px]"
      />
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(162,27,149,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.5)]"
      />
      <Container13 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_20px_0px_rgba(162,27,149,0.15)]" />
    </div>
  );
}

function Frame239() {
  return (
    <div className="md:col-1 h-[254px] ml-0 md:ml-[851px] mt-0 md:mt-[296px] relative md:row-1 w-[320px] max-w-full">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-0 not-italic right-0 text-[24px] text-[rgba(242,185,213,0.92)] text-shadow-[0px_7px_13.2px_#f335e1] top-[16px]">
        <p className="leading-[32px]">4</p>
      </div>
      <OverlayBorderShadowOverlayBlur />
    </div>
  );
}

function Svg3() {
  return (
    <div
      className="h-[30px] relative shrink-0 w-[37.5px]"
      data-name="SVG"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 37.5 30"
      >
        <g id="SVG">
          <path
            d={svgPaths.p3f435d80}
            fill="var(--fill-0, #A21B95)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Svg3 />
    </div>
  );
}

function Background2() {
  return (
    <div
      className="bg-[#0a0a0f] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px overflow-clip relative rounded-[16px] w-full"
      data-name="Background"
    >
      <Container18 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div
      className="content-stretch drop-shadow-[0px_0px_10px_rgba(162,27,149,0.4)] flex flex-col items-start justify-center p-[2px] relative rounded-[16px] shrink-0 size-[64px]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(162, 27, 149) 0%, rgb(34, 57, 191) 100%)",
      }}
      data-name="Background+Shadow"
    >
      <Background2 />
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[69.92px]">
        <p className="leading-[28px]">Recruit</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div
      className="bg-gradient-to-r content-stretch flex from-[rgba(162,27,149,0.2)] items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0 to-[rgba(34,57,191,0.2)]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(162,27,149,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[109.56px]">
        <p className="leading-[16px] whitespace-nowrap">
          Partner Acquisition
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[2.75px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[22.75px] break-words">
          Identify and recruit high-fit strategic partners
          through targeted outreach.
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[190px]"
      data-name="Container"
    >
      <Heading1 />
      <BackgroundBorder1 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <BackgroundShadow1 />
        <Container19 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[192.25px] items-start left-0 p-[25px] right-0 rounded-[16px] top-[38px]"
      data-name="Overlay+Border+Shadow+OverlayBlur"
    >
      <div
        aria-hidden="true"
        className="absolute backdrop-blur-[12px] bg-[rgba(20,10,40,0.4)] inset-0 pointer-events-none rounded-[16px]"
      />
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(162,27,149,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.5)]"
      />
      <Container17 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_20px_0px_rgba(162,27,149,0.15)]" />
    </div>
  );
}

function Recruit() {
  return (
    <div
      className="md:col-1 h-[230.25px] ml-0 md:ml-[456px] mt-0 md:mt-[389px] relative md:row-1 w-[320px] max-w-full"
      data-name="Recruit"
    >
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-0 not-italic right-0 text-[24px] text-[rgba(242,185,213,0.92)] text-shadow-[0px_7px_13.2px_#f335e1] top-[16px]">
        <p className="leading-[32px]">3</p>
      </div>
      <OverlayBorderShadowOverlayBlur1 />
    </div>
  );
}

function Svg4() {
  return (
    <div
      className="relative shrink-0 size-[30px]"
      data-name="SVG"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="SVG">
          <path
            d={svgPaths.p312129c0}
            fill="var(--fill-0, #A21B95)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Svg4 />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="bg-[#0a0a0f] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px overflow-clip relative rounded-[16px] w-full"
      data-name="Background"
    >
      <Container22 />
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div
      className="content-stretch drop-shadow-[0px_0px_10px_rgba(162,27,149,0.4)] flex flex-col items-start justify-center p-[2px] relative rounded-[16px] shrink-0 size-[64px]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(162, 27, 149) 0%, rgb(34, 57, 191) 100%)",
      }}
      data-name="Background+Shadow"
    >
      <Background3 />
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[61.47px]">
        <p className="leading-[28px]">Ready</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div
      className="bg-gradient-to-r content-stretch flex from-[rgba(162,27,149,0.2)] items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0 to-[rgba(34,57,191,0.2)]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(162,27,149,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[124.03px]">
        <p className="leading-[16px] whitespace-nowrap">
          Partner Infrastructure
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[0.875px] pt-[3.125px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[22.75px] break-words">
          Build the messaging, assets, tracking, and systems
          needed for a scalable partner program.
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[190px]"
      data-name="Container"
    >
      <Heading2 />
      <BackgroundBorder2 />
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <BackgroundShadow2 />
        <Container23 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[215px] items-start left-0 p-[25px] right-0 rounded-[16px] top-[40px]"
      data-name="Overlay+Border+Shadow+OverlayBlur"
    >
      <div
        aria-hidden="true"
        className="absolute backdrop-blur-[12px] bg-[rgba(20,10,40,0.4)] inset-0 pointer-events-none rounded-[16px]"
      />
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(162,27,149,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.5)]"
      />
      <Container21 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_20px_0px_rgba(162,27,149,0.15)]" />
    </div>
  );
}

function Ready() {
  return (
    <div
      className="md:col-1 h-[255px] ml-0 md:ml-[60px] mt-0 md:mt-[292px] relative md:row-1 w-[320px] max-w-full"
      data-name="Ready"
    >
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-0 not-italic right-0 text-[24px] text-[rgba(242,185,213,0.92)] text-shadow-[0px_7px_13.2px_#f335e1] top-[16px]">
        <p className="leading-[32px]">2</p>
      </div>
      <OverlayBorderShadowOverlayBlur2 />
    </div>
  );
}

function Svg5() {
  return (
    <div
      className="h-[30px] relative shrink-0 w-[33.75px]"
      data-name="SVG"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 33.75 30"
      >
        <g id="SVG">
          <path
            d={svgPaths.p349d8f00}
            fill="var(--fill-0, #A21B95)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Svg5 />
    </div>
  );
}

function Background4() {
  return (
    <div
      className="bg-[#0a0a0f] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px overflow-clip relative rounded-[16px] w-full"
      data-name="Background"
    >
      <Container26 />
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div
      className="content-stretch drop-shadow-[0px_0px_10px_rgba(162,27,149,0.4)] flex flex-col items-start justify-center p-[2px] relative rounded-[16px] shrink-0 size-[64px]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(162, 27, 149) 0%, rgb(34, 57, 191) 100%)",
      }}
      data-name="Background+Shadow"
    >
      <Background4 />
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[92.05px]">
        <p className="leading-[28px]">Roadmap</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div
      className="bg-gradient-to-r content-stretch flex from-[rgba(162,27,149,0.2)] items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0 to-[rgba(34,57,191,0.2)]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(162,27,149,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[94.09px]">
        <p className="leading-[16px] whitespace-nowrap">
          Partner Strategy
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[0.875px] pt-[3.125px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[22.75px] break-words">
          Define partner strategy, ideal partner profiles,
          incentives, and success metrics.
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[190px]"
      data-name="Container"
    >
      <Heading3 />
      <BackgroundBorder3 />
      <Container28 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <BackgroundShadow3 />
        <Container27 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur3() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[215px] items-start left-0 p-[25px] right-0 rounded-[16px] top-[38px]"
      data-name="Overlay+Border+Shadow+OverlayBlur"
    >
      <div
        aria-hidden="true"
        className="absolute backdrop-blur-[12px] bg-[rgba(20,10,40,0.4)] inset-0 pointer-events-none rounded-[16px]"
      />
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(162,27,149,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.5)]"
      />
      <Container25 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_20px_0px_rgba(162,27,149,0.15)]" />
    </div>
  );
}

function Roadmap() {
  return (
    <div
      className="md:col-1 h-[253px] ml-0 md:ml-0 mt-0 md:mt-0 relative md:row-1 w-[320px] max-w-full"
      data-name="Roadmap"
    >
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-0 not-italic right-0 text-[24px] text-[rgba(242,185,213,0.92)] text-shadow-[0px_7px_13.2px_#f335e1] top-[16px]">
        <p className="leading-[32px]">1</p>
      </div>
      <OverlayBorderShadowOverlayBlur3 />
    </div>
  );
}

function Svg6() {
  return (
    <div
      className="relative shrink-0 size-[30px]"
      data-name="SVG"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30.0037 30.0037"
      >
        <g id="SVG">
          <path
            d={svgPaths.p20f72180}
            fill="var(--fill-0, #A21B95)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Svg6 />
    </div>
  );
}

function Background5() {
  return (
    <div
      className="bg-[#0a0a0f] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px overflow-clip relative rounded-[16px] w-full"
      data-name="Background"
    >
      <Container30 />
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div
      className="content-stretch drop-shadow-[0px_0px_10px_rgba(162,27,149,0.4)] flex flex-col items-start justify-center p-[2px] relative rounded-[16px] shrink-0 size-[64px]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(162, 27, 149) 0%, rgb(34, 57, 191) 100%)",
      }}
      data-name="Background+Shadow"
    >
      <Background5 />
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[41.67px]">
        <p className="leading-[28px]">Rise</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div
      className="bg-gradient-to-r content-stretch flex from-[rgba(162,27,149,0.2)] items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0 to-[rgba(34,57,191,0.2)]"
      data-name="Background+Border"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(162,27,149,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[118.44px]">
        <p className="leading-[16px] whitespace-nowrap">{`Optimization & Scale`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[2.75px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[22.75px] break-words">
          Optimize performance and scale your partner-driven
          revenue.
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[190px]"
      data-name="Container"
    >
      <Heading4 />
      <BackgroundBorder4 />
      <Container32 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <BackgroundShadow4 />
        <Container31 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur4() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[215px] items-start left-0 p-[25px] right-0 rounded-[16px] top-[37px]"
      data-name="Overlay+Border+Shadow+OverlayBlur"
    >
      <div
        aria-hidden="true"
        className="absolute backdrop-blur-[12px] bg-[rgba(20,10,40,0.4)] inset-0 pointer-events-none rounded-[16px]"
      />
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(162,27,149,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.5)]"
      />
      <Container29 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_20px_0px_rgba(162,27,149,0.15)]" />
    </div>
  );
}

function Frame240() {
  return (
    <div className="md:col-1 h-[252px] ml-0 md:ml-[906px] mt-0 md:mt-px relative md:row-1 w-[320px] max-w-full">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-0 not-italic right-0 text-[24px] text-[rgba(242,185,213,0.92)] text-shadow-[0px_7px_13.2px_#f335e1] top-[16px]">
        <p className="leading-[32px]">5</p>
      </div>
      <OverlayBorderShadowOverlayBlur4 />
    </div>
  );
}

function Group28() {
  return (
    <div className="flex flex-col md:inline-grid md:grid-cols-[max-content] md:grid-rows-[max-content] md:place-items-start relative shrink-0 gap-[20px] md:gap-0 w-full md:w-auto items-center md:items-start">
      <Background />
      <Roadmap />
      <Ready />
      <Recruit />
      <Frame239 />
      <Frame240 />
    </div>
  );
}

function Frame241() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[70px] items-center leading-[0] relative shrink-0 w-full px-[16px] md:px-0">
      <PartnerRevenue />
      <Group28 />
    </div>
  );
}

function Group22() {
  return (
    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[32px] md:text-[42px] lg:text-[52.167px] text-center tracking-[-0.6086px] text-[#111827] w-full">
      Built for companies serious about{" "}
      <span
        className="bg-clip-text text-[transparent]"
        style={{
          backgroundImage:
            "linear-gradient(173.864deg, rgb(139, 92, 246) 0%, rgb(59, 130, 246) 100%)",
        }}
      >
        partnerships
      </span>
    </p>
  );
}

function Frame() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-center max-w-[584.267px] pb-[4.347px] pt-[3.478px] relative shrink-0 w-full"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] md:text-[16px] lg:text-[17.389px] text-center tracking-[-0.4347px] w-full z-[1]">
        <p className="leading-[22px] md:leading-[26px] lg:leading-[28.692px] mb-0">Flexible engagement. Clear scope. No hidden fees.</p>
        <p className="leading-[22px] md:leading-[26px] lg:leading-[28.692px]">
          Choose the level of support that fits your stage.
        </p>
      </div>
    </div>
  );
}

function Frame242() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px] items-center w-full max-w-[688.316px] px-[16px] md:px-0">
      <Group22 />
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27.822px] not-italic relative shrink-0 text-[#111827] text-[20.867px] tracking-[-0.4347px] w-full z-[1]">
        Acquire
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start relative shrink-0 z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[31.3px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[34.778px]">$1,599</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[1.739px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[13.911px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[20.867px]">/mo</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div
      className="relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[3.478px] isolate items-baseline pr-[90.422px] relative size-full">
        <Frame5 />
        <Frame6 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12.172px] tracking-[-0.4347px] w-full z-[1]">
        <p className="leading-[17.389px] mb-0">
          Build a predictable pipeline of high-
        </p>
        <p className="leading-[17.389px]">quality partners</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[13.911px] isolate items-start relative shrink-0 w-[224.317px] z-[4]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame3 />
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  const scrollToContactForm = () => {
    const element = document.getElementById(
      "contact-form-section",
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={scrollToContactForm}
      className="content-stretch flex flex-col isolate items-center px-[20.867px] py-[12.172px] relative rounded-[8693.576px] shrink-0 w-full md:w-[224.317px] z-[3] cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#f3f4f6]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-[1.739px] border-solid inset-0 pointer-events-none rounded-[8693.576px]"
      />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.867px] not-italic relative shrink-0 text-[#111827] text-[13.911px] text-center tracking-[-0.4347px] w-full z-[1]">
        Get Started
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.389px] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[0.1739px] w-full z-[1]">
        Core
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[13.911px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-b-[0.869px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.911px] not-italic relative shrink-0 text-[#6b7280] text-[10.433px] tracking-[-0.4347px] w-full z-[1]">
        Strategy + systems, you execute
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div
      className="content-stretch flex flex-col gap-[3.478px] isolate items-start relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame16() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1183)">
            <path
              d={svgPaths.p63f5b00}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1183">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame16 />
    </div>
  );
}

function Frame15() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg7 />
    </div>
  );
}

function Frame17() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">
          Ideal Partner Profile (IPP)
        </p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div
      className="relative shrink-0 w-full z-[5]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[57.383px] relative size-full">
        <Frame15 />
        <Frame17 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1174)">
            <path
              d={svgPaths.p11912480}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1174">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg8() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame20 />
    </div>
  );
}

function Frame19() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg8 />
    </div>
  );
}

function Frame21() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">{`Targeting & outreach strategy`}</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div
      className="relative shrink-0 w-full z-[4]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[30.431px] relative size-full">
        <Frame19 />
        <Frame21 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1189)">
            <path
              d={svgPaths.p5797d00}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1189">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg9() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame24 />
    </div>
  );
}

function Frame23() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg9 />
    </div>
  );
}

function Frame25() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px] mb-0 whitespace-pre">{`Messaging & campaign `}</p>
        <p className="leading-[17.389px] whitespace-pre">
          frameworks
        </p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div
      className="content-stretch flex gap-[10.433px] isolate items-start relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame23 />
      <Frame25 />
    </div>
  );
}

function Frame28() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1183)">
            <path
              d={svgPaths.p63f5b00}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1183">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg10() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame28 />
    </div>
  );
}

function Frame27() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg10 />
    </div>
  );
}

function Frame29() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">
          Partner sourcing plan
        </p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div
      className="relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[78.25px] relative size-full">
        <Frame27 />
        <Frame29 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1168)">
            <path
              d={svgPaths.p1871bf00}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1168">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg11() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame32 />
    </div>
  );
}

function Frame31() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg11 />
    </div>
  );
}

function Frame33() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Advisory meetings</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div
      className="relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[93.9px] relative size-full">
        <Frame31 />
        <Frame33 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div
      className="content-stretch flex flex-col gap-[13.911px] isolate items-start relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame14 />
      <Frame18 />
      <Frame22 />
      <Frame26 />
      <Frame30 />
    </div>
  );
}

function Frame9() {
  return (
    <div
      className="content-stretch flex flex-col gap-[20.867px] h-[245.183px] isolate items-start relative shrink-0 w-[224.317px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame10 />
      <Frame13 />
    </div>
  );
}

function Frame35() {
  return (
    <div
      className="bg-[#fef2f2] content-stretch flex items-center justify-center px-[8.694px] py-[3.478px] relative rounded-[8693.576px] shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8693.576px]"
      />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ef4444] text-[10.433px] tracking-[-0.4347px] whitespace-nowrap">
        <p className="leading-[13.911px]">8 spots left</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[22.606px] isolate items-start left-[186.47px] pt-[1.739px] right-[21.63px] top-[21.74px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame35 />
    </div>
  );
}

interface CardProps {
  isHovered: boolean;
  isExpanded: boolean;
  onHover: () => void;
  onLeave: () => void;
  onToggleExpand: () => void;
}

function Frame1({
  isHovered,
  isExpanded,
  onHover,
  onLeave,
  onToggleExpand,
}: CardProps) {
  const breakdownData = {
    upgradeText: "Upgrade to Done For You",
    upgradePrice: "$1000/mo",
    upgradeDescription: "We execute acquisition for you",
    items: [
      "List building & enrichment",
      "Outreach campaigns",
      "Follow-ups & replies",
      "Partner onboarding",
      "CRM/PRM setup",
      "Tracking systems",
      "KPIs & reporting",
    ],
  };

  return (
    <div
      className={`bg-white content-stretch flex flex-col gap-[16px] md:gap-[20px] lg:gap-[27.822px] ${isExpanded ? "h-auto" : "h-auto md:h-[595px]"} isolate items-start p-[16px] sm:p-[20px] md:p-[24px] lg:p-[27.822px] relative rounded-[12px] md:rounded-[13.911px] shrink-0 w-full md:w-[282px] cursor-pointer transition-all duration-300 ${
        isHovered
          ? "drop-shadow-[0px_8.694px_4.347px_rgba(139,92,246,0.04),0px_17.389px_10.868px_rgba(139,92,246,0.15)]"
          : "drop-shadow-[0px_1.739px_1.739px_rgba(0,0,0,0.03),0px_3.478px_2.608px_rgba(0,0,0,0.05)]"
      }`}
      data-name="Frame"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        aria-hidden="true"
        className={`absolute border-solid inset-0 pointer-events-none rounded-[13.911px] transition-all duration-300 ${
          isHovered
            ? "border-[#bf00ff] border-[1.739px]"
            : "border-[#e5e7eb] border-[0.869px]"
        }`}
      />
      <Frame2 />
      <Frame8 />
      <Frame9 />
      <Frame34 />

      {/* Expanded Breakdown Content */}
      {isExpanded && (
        <div className="content-stretch flex flex-col gap-[13.911px] isolate items-start relative shrink-0 w-full border-t border-[#e5e7eb] pt-[20px] mt-[20px] z-[5]">
          <div className="content-stretch flex flex-col gap-[6.956px] isolate items-start relative shrink-0 w-full">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.389px] not-italic relative shrink-0 text-[#8b5cf6] text-[12.172px] tracking-[0.1739px] w-full">
              {breakdownData.upgradeText}
            </p>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#111827] text-[16px] tracking-[-0.4347px] w-full">
              {breakdownData.upgradePrice}
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#6b7280] text-[11px] tracking-[-0.4347px] w-full mb-[8px]">
              {breakdownData.upgradeDescription}
            </p>
            <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full pb-[10px]">
              {breakdownData.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[8px] w-full"
                >
                  <div className="w-[4px] h-[4px] rounded-full bg-[#8b5cf6] mt-[6px] shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic text-[#6b7280] text-[10.5px] tracking-[-0.3px] flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Frame38() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27.822px] not-italic relative shrink-0 text-[#111827] text-[20.867px] tracking-[-0.4347px] w-full z-[1]">
        Activate
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start relative shrink-0 z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[31.3px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[34.778px]">$2,499</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[1.739px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[13.911px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[20.867px]">/mo</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div
      className="relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[3.478px] isolate items-baseline pr-[82.597px] relative size-full">
        <Frame40 />
        <Frame41 />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12.172px] tracking-[-0.4347px] w-full whitespace-pre-wrap z-[1]">
        <p className="leading-[17.389px] mb-0">{`Turn partners into consistent revenue `}</p>
        <p className="leading-[17.389px]">drivers</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div
      className="content-stretch flex flex-col gap-[13.911px] isolate items-start relative shrink-0 w-[224.317px] z-[4]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame38 />
      <Frame39 />
      <Frame42 />
    </div>
  );
}

function Frame43() {
  const scrollToContactForm = () => {
    const element = document.getElementById(
      "contact-form-section",
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={scrollToContactForm}
      className="content-stretch flex flex-col isolate items-center px-[20.867px] py-[12.172px] relative rounded-[8693.576px] shrink-0 w-full md:w-[224.317px] z-[3] cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#f3f4f6]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-[1.739px] border-solid inset-0 pointer-events-none rounded-[8693.576px]"
      />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.867px] not-italic relative shrink-0 text-[#111827] text-[13.911px] text-center tracking-[-0.4347px] w-full z-[1]">
        Get Started
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.389px] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[0.1739px] w-full z-[1]">
        Core
      </p>
    </div>
  );
}

function Frame47() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[13.911px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-b-[0.869px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.911px] not-italic relative shrink-0 text-[#6b7280] text-[10.433px] tracking-[-0.4347px] w-full z-[1]">
        Activation systems, you deploy
      </p>
    </div>
  );
}

function Frame45() {
  return (
    <div
      className="content-stretch flex flex-col gap-[3.478px] isolate items-start relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function Frame51() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1162)">
            <path
              d={svgPaths.p19a1c700}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1162">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg12() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame51 />
    </div>
  );
}

function Frame50() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg12 />
    </div>
  );
}

function Frame52() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">
          Partner enablement strategy
        </p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div
      className="relative shrink-0 w-full z-[7]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[37.386px] relative size-full">
        <Frame50 />
        <Frame52 />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1156)">
            <path
              d={svgPaths.p1f0ed000}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1156">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg13() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame55 />
    </div>
  );
}

function Frame54() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg13 />
    </div>
  );
}

function Frame56() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">
          Engagement playbooks
        </p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div
      className="relative shrink-0 w-full z-[6]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[66.947px] relative size-full">
        <Frame54 />
        <Frame56 />
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1153)">
            <path
              d={svgPaths.p2a7f4700}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1153">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg14() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame59 />
    </div>
  );
}

function Frame58() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg14 />
    </div>
  );
}

function Frame60() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">
          Co-marketing frameworks
        </p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div
      className="relative shrink-0 w-full z-[5]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[50.428px] relative size-full">
        <Frame58 />
        <Frame60 />
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1150)">
            <path
              d={svgPaths.p2241080}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1150">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg15() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame63 />
    </div>
  );
}

function Frame62() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg15 />
    </div>
  );
}

function Frame64() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">
          Monthly activation planning
        </p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div
      className="relative shrink-0 w-full z-[4]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[42.603px] relative size-full">
        <Frame62 />
        <Frame64 />
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1180)">
            <path
              d={svgPaths.p1b8cf3f0}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1180">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg16() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame67 />
    </div>
  );
}

function Frame66() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg16 />
    </div>
  );
}

function Frame68() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">
          Performance optimization
        </p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div
      className="relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[53.036px] relative size-full">
        <Frame66 />
        <Frame68 />
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1186)">
            <path
              d={svgPaths.p17fd3800}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1186">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg17() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame71 />
    </div>
  );
}

function Frame70() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg17 />
    </div>
  );
}

function Frame72() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">
          Partner collateral templates
        </p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div
      className="relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[43.472px] relative size-full">
        <Frame70 />
        <Frame72 />
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1159)">
            <path
              d={svgPaths.p2615a800}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1159">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg18() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame75 />
    </div>
  );
}

function Frame74() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg18 />
    </div>
  );
}

function Frame76() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Advisory meetings</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div
      className="relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[93.9px] relative size-full">
        <Frame74 />
        <Frame76 />
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div
      className="content-stretch flex flex-col gap-[13.911px] isolate items-start relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame49 />
      <Frame53 />
      <Frame57 />
      <Frame61 />
      <Frame65 />
      <Frame69 />
      <Frame73 />
    </div>
  );
}

function Frame44() {
  return (
    <div
      className="content-stretch flex flex-col gap-[20.867px] h-[299.958px] isolate items-start relative shrink-0 w-[224.317px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame45 />
      <Frame48 />
    </div>
  );
}

function Frame78() {
  return (
    <div
      className="bg-[#fef2f2] content-stretch flex items-center justify-center px-[8.694px] py-[3.478px] relative rounded-[8693.576px] shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8693.576px]"
      />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ef4444] text-[10.433px] tracking-[-0.4347px] whitespace-nowrap">
        <p className="leading-[13.911px]">6 spots left</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[22.606px] isolate items-start left-[186.47px] pt-[1.739px] right-[21.63px] top-[21.74px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame78 />
    </div>
  );
}

function Frame36({
  isHovered,
  isExpanded,
  onHover,
  onLeave,
  onToggleExpand,
}: CardProps) {
  const breakdownData = {
    upgradeText: "Upgrade to Done For You",
    upgradePrice: "$1,500/mo",
    upgradeDescription: "We manage partner engagement",
    items: [
      "Activation campaigns",
      "Partner communication",
      "Co-marketing execution",
      "Ongoing engagement",
      "Flyers, decks, assets",
      "Engagement systems & tools setup",
      "KPIs & reporting",
    ],
  };

  return (
    <div
      className={`bg-white content-stretch flex flex-col gap-[16px] md:gap-[20px] lg:gap-[27.822px] ${isExpanded ? "h-auto" : "h-auto md:h-[595px]"} isolate items-start p-[16px] sm:p-[20px] md:p-[24px] lg:p-[27.822px] relative rounded-[12px] md:rounded-[13.911px] shrink-0 w-full md:w-[282px] cursor-pointer transition-all duration-300 ${
        isHovered
          ? "drop-shadow-[0px_8.694px_4.347px_rgba(139,92,246,0.04),0px_17.389px_10.868px_rgba(139,92,246,0.15)]"
          : "drop-shadow-[0px_1.739px_1.739px_rgba(0,0,0,0.03),0px_3.478px_2.608px_rgba(0,0,0,0.05)]"
      }`}
      data-name="Frame"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        aria-hidden="true"
        className={`absolute border-solid inset-0 pointer-events-none rounded-[13.911px] transition-all duration-300 ${
          isHovered
            ? "border-[#bf00ff] border-[1.739px]"
            : "border-[#e5e7eb] border-[0.869px]"
        }`}
      />
      <Frame37 />
      <Frame43 />
      <Frame44 />
      <Frame77 />

      {/* Expanded Breakdown Content */}
      {isExpanded && (
        <div className="content-stretch flex flex-col gap-[13.911px] isolate items-start relative shrink-0 w-full border-t border-[#e5e7eb] pt-[20px] mt-[20px] z-[5]">
          <div className="content-stretch flex flex-col gap-[6.956px] isolate items-start relative shrink-0 w-full">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.389px] not-italic relative shrink-0 text-[#8b5cf6] text-[12.172px] tracking-[0.1739px] w-full">
              {breakdownData.upgradeText}
            </p>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#111827] text-[16px] tracking-[-0.4347px] w-full">
              {breakdownData.upgradePrice}
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#6b7280] text-[11px] tracking-[-0.4347px] w-full mb-[8px]">
              {breakdownData.upgradeDescription}
            </p>
            <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full pb-[10px]">
              {breakdownData.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[8px] w-full"
                >
                  <div className="w-[4px] h-[4px] rounded-full bg-[#8b5cf6] mt-[6px] shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic text-[#6b7280] text-[10.5px] tracking-[-0.3px] flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Frame81() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27.822px] not-italic relative shrink-0 text-[#111827] text-[20.867px] tracking-[-0.4347px] w-full z-[1]">
        Manage
      </p>
    </div>
  );
}

function Frame83() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start relative shrink-0 z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8b5cf6] text-[31.3px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[34.778px]">$3,799</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[1.739px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[13.911px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[20.867px]">/mo</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div
      className="relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[3.478px] isolate items-baseline pr-[85.206px] relative size-full">
        <Frame83 />
        <Frame84 />
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[19.128px] pt-[0.869px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.389px] not-italic relative shrink-0 text-[#6b7280] text-[12.172px] tracking-[-0.4347px] w-full z-[1]">
        Your complete partner growth system
      </p>
    </div>
  );
}

function Frame80() {
  return (
    <div
      className="content-stretch flex flex-col gap-[13.911px] isolate items-start pt-[6.956px] relative shrink-0 w-[222.578px] z-[5]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame81 />
      <Frame82 />
      <Frame85 />
    </div>
  );
}

function Frame86() {
  const scrollToContactForm = () => {
    const element = document.getElementById(
      "contact-form-section",
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={scrollToContactForm}
      className="content-stretch flex flex-col isolate items-center px-[20.867px] py-[12.172px] relative rounded-[8693.576px] shrink-0 w-[222.578px] z-[4] cursor-pointer transition-all duration-300 hover:scale-105 hover:brightness-110"
      style={{
        backgroundImage:
          "linear-gradient(168.485deg, rgb(139, 92, 246) 0%, rgb(59, 130, 246) 100%)",
      }}
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8693.576px]"
      />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.867px] not-italic relative shrink-0 text-[13.911px] text-center text-white tracking-[-0.4347px] w-full z-[1]">
        Get Started
      </p>
    </div>
  );
}

function Frame89() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.389px] not-italic relative shrink-0 text-[#8b5cf6] text-[12.172px] tracking-[0.1739px] w-full z-[1]">
        Core
      </p>
    </div>
  );
}

function Frame90() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[13.911px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-b-[0.869px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.911px] not-italic relative shrink-0 text-[#6b7280] text-[10.433px] tracking-[-0.4347px] w-full z-[1]">
        Full system design + oversight
      </p>
    </div>
  );
}

function Frame88() {
  return (
    <div
      className="content-stretch flex flex-col gap-[3.478px] isolate items-start relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame89 />
      <Frame90 />
    </div>
  );
}

function Frame95() {
  return (
    <div
      className="h-[8.694px] relative shrink-0 w-[7.608px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7.60764 8.69444"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1165)">
            <path
              d={svgPaths.p82551b0}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1165">
            <path d="M0 0H7.60764V8.69444H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg19() {
  return (
    <div
      className="content-stretch flex flex-col h-[10.433px] isolate items-start py-[1.739px] relative shrink-0 w-[7.825px] z-[1]"
      data-name="svg"
    >
      <Frame95 />
    </div>
  );
}

function Frame94() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[2.608px] pt-[1.739px] relative shrink-0 w-[7.825px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg19 />
    </div>
  );
}

function Frame93() {
  return (
    <div
      className="bg-[rgba(139,92,246,0.1)] content-stretch flex isolate items-center justify-center px-[3.478px] py-[0.869px] relative rounded-[8693.576px] shrink-0 size-[13.911px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8693.576px]"
      />
      <Frame94 />
    </div>
  );
}

function Frame96() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">
          Includes Acquire + Activate Core
        </p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div
      className="relative shrink-0 w-full z-[5]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[3.478px] relative size-full">
        <Frame93 />
        <Frame96 />
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1201)">
            <path
              d={svgPaths.p2c2ab470}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1201">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg20() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame99 />
    </div>
  );
}

function Frame98() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg20 />
    </div>
  );
}

function Frame100() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">
          Unified partner strategy
        </p>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div
      className="relative shrink-0 w-full z-[4]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[62.6px] relative size-full">
        <Frame98 />
        <Frame100 />
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1192)">
            <path
              d={svgPaths.p2adb9680}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1192">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg21() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame103 />
    </div>
  );
}

function Frame102() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg21 />
    </div>
  );
}

function Frame104() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">{`Growth planning & optimization`}</p>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div
      className="relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[19.997px] relative size-full">
        <Frame102 />
        <Frame104 />
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1147)">
            <path
              d={svgPaths.p464a00}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1147">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg22() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame107 />
    </div>
  );
}

function Frame106() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg22 />
    </div>
  );
}

function Frame108() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Weekly advisory</p>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div
      className="relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[105.203px] relative size-full">
        <Frame106 />
        <Frame108 />
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1207)">
            <path
              d={svgPaths.p465ea40}
              fill="var(--fill-0, #8B5CF6)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1207">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg23() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame111 />
    </div>
  );
}

function Frame110() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg23 />
    </div>
  );
}

function Frame112() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">
          Ongoing system improvements
        </p>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div
      className="relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[20.867px] relative size-full">
        <Frame110 />
        <Frame112 />
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div
      className="content-stretch flex flex-col gap-[13.911px] isolate items-start relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame92 />
      <Frame97 />
      <Frame101 />
      <Frame105 />
      <Frame109 />
    </div>
  );
}

function Frame87() {
  return (
    <div
      className="content-stretch flex flex-col gap-[20.867px] isolate items-start relative shrink-0 w-[222.578px] z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame88 />
      <Frame91 />
    </div>
  );
}

function Frame113() {
  return (
    <div
      className="absolute content-stretch drop-shadow-[0px_0.869px_0.869px_rgba(0,0,0,0.05)] flex flex-col h-[23.475px] isolate items-start left-[49.5px] px-[13.911px] py-[5.217px] right-[49.92px] rounded-[8693.576px] top-[-10px] z-[2]"
      style={{
        backgroundImage:
          "linear-gradient(172.674deg, rgb(139, 92, 246) 0%, rgb(59, 130, 246) 100%)",
      }}
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8693.576px]"
      />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[5.22px_46.67px_4.26px_13.91px] leading-[13.042px] not-italic text-[8.694px] text-white tracking-[0.4347px] whitespace-nowrap z-[1]">
        Most Popular + Best Value
      </p>
    </div>
  );
}

function Frame116() {
  return (
    <div
      className="bg-[#fef2f2] content-stretch flex items-center justify-center px-[8.694px] py-[3.478px] relative rounded-[8693.576px] shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8693.576px]"
      />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ef4444] text-[10.433px] tracking-[-0.4347px] whitespace-nowrap">
        <p className="leading-[13.911px]">4 spots left</p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[22.606px] isolate items-start left-[185.33px] pt-[1.739px] right-[22.77px] top-[22.6px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame116 />
    </div>
  );
}

function Frame79({
  isHovered,
  isExpanded,
  onHover,
  onLeave,
  onToggleExpand,
}: CardProps) {
  // This is the Manage card - always highlighted or when hovered
  const isHighlighted = true;

  const breakdownData = {
    upgradeText: "Upgrade to Done For You",
    upgradePrice: "$2000/mo",
    upgradeDescription: "We run your entire partner program",
    items: [
      "Includes Acquire + Activate DFY",
      "End-to-end partner management",
      "Partner communication & coordination",
      "KPI tracking & reporting",
      "Continuous optimization",
    ],
  };

  return (
    <div
      className={`bg-white content-stretch flex flex-col gap-[16px] md:gap-[18px] lg:gap-[20px] ${isExpanded ? "h-auto" : "h-auto md:h-[595px]"} isolate items-start p-[16px] sm:p-[20px] md:p-[24px] lg:p-[27.822px] relative rounded-[12px] md:rounded-[13.911px] shrink-0 w-full md:w-[282px] cursor-pointer transition-all duration-300 snap-center drop-shadow-[0px_8.694px_4.347px_rgba(139,92,246,0.04),0px_17.389px_10.868px_rgba(139,92,246,0.15)]`}
      data-name="Frame"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#bf00ff] border-[1.739px] border-solid inset-0 pointer-events-none rounded-[13.911px] transition-all duration-300"
      />
      <Frame80 />
      <Frame86 />
      <Frame87 />
      <Frame113 />
      <Frame114 />

      {/* Expanded Breakdown Content */}
      {isExpanded && (
        <div className="content-stretch flex flex-col gap-[13.911px] isolate items-start relative shrink-0 w-full border-t border-[#e5e7eb] pt-[20px] mt-[20px] z-[5]">
          <div className="content-stretch flex flex-col gap-[6.956px] isolate items-start relative shrink-0 w-full">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.389px] not-italic relative shrink-0 text-[#8b5cf6] text-[12.172px] tracking-[0.1739px] w-full">
              {breakdownData.upgradeText}
            </p>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#111827] text-[16px] tracking-[-0.4347px] w-full">
              {breakdownData.upgradePrice}
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#6b7280] text-[11px] tracking-[-0.4347px] w-full mb-[8px]">
              {breakdownData.upgradeDescription}
            </p>
            <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full pb-[10px]">
              {breakdownData.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[8px] w-full"
                >
                  <div className="w-[4px] h-[4px] rounded-full bg-[#8b5cf6] mt-[6px] shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic text-[#6b7280] text-[10.5px] tracking-[-0.3px] flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Frame119() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27.822px] not-italic relative shrink-0 text-[#111827] text-[20.867px] tracking-[-0.4347px] w-full z-[1]">
        Bespoke
      </p>
    </div>
  );
}

function Frame121() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[31.3px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[34.778px]">Custom</p>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div
      className="relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex isolate items-baseline pr-[105.203px] relative size-full">
        <Frame121 />
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[19.128px] pt-[0.869px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.389px] not-italic relative shrink-0 text-[#6b7280] text-[12.172px] tracking-[-0.4347px] w-full z-[1]">{`Tailored partnerships & advisory`}</p>
    </div>
  );
}

function Frame118() {
  return (
    <div
      className="content-stretch flex flex-col gap-[13.911px] isolate items-start relative shrink-0 w-[224.317px] z-[4]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame119 />
      <Frame120 />
      <Frame122 />
    </div>
  );
}

function Frame118Copy() {
  return (
    <div
      className="content-stretch flex flex-col gap-[13.911px] isolate items-start relative shrink-0 w-[224.317px] z-[4]"
      data-name="Frame"
    >
      <div aria-hidden className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[3]">
        <div aria-hidden className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27.822px] not-italic relative shrink-0 text-[#111827] text-[20.867px] tracking-[-0.4347px] w-full z-[1]">Test Drive</p>
      </div>

      <div className="relative shrink-0 w-full z-[2]">
        <div aria-hidden className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[3.478px] isolate items-baseline pr-[90.422px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[31.3px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
            <p className="leading-[34.778px]">$65</p>
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[13.911px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
            <p className="leading-[20.867px]">/hr</p>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col isolate items-start py-[1.739px] relative shrink-0 z-[1] w-full">
        <div aria-hidden className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
        <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12.172px] tracking-[-0.4347px] w-full z-[1]">
          <p className="leading-[17.389px] mb-0">Flexible partnership support before committing to a monthly plan.</p>
        </div>
      </div>
    </div>
  );
}

function Frame123() {
  const scrollToContactForm = () => {
    const element = document.getElementById(
      "contact-form-section",
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={scrollToContactForm}
      className="content-stretch flex flex-col isolate items-center px-[20.867px] py-[12.172px] relative rounded-[8693.576px] shrink-0 w-[224.317px] z-[3] cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#f3f4f6]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-[1.739px] border-solid inset-0 pointer-events-none rounded-[8693.576px]"
      />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.867px] not-italic relative shrink-0 text-[#111827] text-[13.911px] text-center tracking-[-0.4347px] w-full z-[1]">
        Talk to Us
      </p>
    </div>
  );
}

function Frame123Copy() {
  const scrollToContactForm = () => {
    const element = document.getElementById(
      "contact-form-section",
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={scrollToContactForm}
      className="content-stretch flex flex-col isolate items-center px-[20.867px] py-[12.172px] relative rounded-[8693.576px] shrink-0 w-[224.317px] z-[3] cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#f3f4f6]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-[1.739px] border-solid inset-0 pointer-events-none rounded-[8693.576px]"
      />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.867px] not-italic relative shrink-0 text-[#111827] text-[13.911px] text-center tracking-[-0.4347px] w-full z-[1]">
        Start Test Drive
      </p>
    </div>
  );
}

function Frame126() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.389px] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[0.1739px] w-full z-[1]">
        Best for:
      </p>
    </div>
  );
}

function Frame127() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[13.911px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-b-[0.869px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.911px] not-italic relative shrink-0 text-[#6b7280] text-[10.433px] tracking-[-0.4347px] w-full z-[1]">
        Custom scope and execution
      </p>
    </div>
  );
}

function Frame125() {
  return (
    <div
      className="content-stretch flex flex-col gap-[3.478px] isolate items-start relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame126 />
    </div>
  );
}

function Frame126Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.389px] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[0.1739px] w-full z-[1]">
        Capabilities
      </p>
    </div>
  );
}

function Frame127Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[13.911px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-b-[0.869px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.911px] not-italic relative shrink-0 text-[#6b7280] text-[10.433px] tracking-[-0.4347px] w-full z-[1]">
        Custom scope and execution
      </p>
    </div>
  );
}

function Frame125Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col gap-[3.478px] isolate items-start relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame126Bespoke />
      <Frame127Bespoke />
    </div>
  );
}

function Frame124Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[13.911px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame125Bespoke />
      <Frame128Bespoke />
      <Frame153Bespoke />
    </div>
  );
}

function Frame153Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pt-[13.911px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-dashed border-t-[0.869px] inset-0 pointer-events-none"
      />
      <Frame154Bespoke />
    </div>
  );
}

function Frame154Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[0.869px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[13.911px] relative shrink-0 text-[#6b7280] text-[10.433px] tracking-[-0.4347px] w-full z-[1]">
        Limited availability each quarter
      </p>
    </div>
  );
}

function Frame128Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col gap-[13.911px] isolate items-start py-[13.911px] relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame129Bespoke />
      <Frame133Bespoke />
      <Frame137Bespoke />
      <Frame141Bespoke />
      <Frame145Bespoke />
      <Frame149Bespoke />
    </div>
  );
}

function Frame129Bespoke() {
  return (
    <div
      className="relative shrink-0 w-full z-[6]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[122.592px] relative size-full">
        <Frame130 />
        <Frame132Bespoke />
      </div>
    </div>
  );
}

function Frame132Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">PRM advisory</p>
      </div>
    </div>
  );
}

function Frame133Bespoke() {
  return (
    <div
      className="relative shrink-0 w-full z-[5]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[99.986px] relative size-full">
        <Frame134 />
        <Frame136Bespoke />
      </div>
    </div>
  );
}

function Frame136Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Product feedback</p>
      </div>
    </div>
  );
}

function Frame137Bespoke() {
  return (
    <div
      className="relative shrink-0 w-full z-[4]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[38.256px] relative size-full">
        <Frame138 />
        <Frame140Bespoke />
      </div>
    </div>
  );
}

function Frame140Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Enterprise partner programs</p>
      </div>
    </div>
  );
}

function Frame141Bespoke() {
  return (
    <div
      className="content-stretch flex gap-[10.433px] isolate items-start relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame142 />
      <Frame144Bespoke />
    </div>
  );
}

function Frame144Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Advanced partnership ecosystems</p>
      </div>
    </div>
  );
}

function Frame145Bespoke() {
  return (
    <div
      className="relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[33.908px] relative size-full">
        <Frame146 />
        <Frame148Bespoke />
      </div>
    </div>
  );
}

function Frame148Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">One-off consulting & support</p>
      </div>
    </div>
  );
}

function Frame149Bespoke() {
  return (
    <div
      className="relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[41.733px] relative size-full">
        <Frame150 />
        <Frame152Bespoke />
      </div>
    </div>
  );
}

function Frame152Bespoke() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Hybrid engagement models</p>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1177)">
            <path
              d={svgPaths.p29d52280}
              fill="var(--fill-0, #6B7280)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1177">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg24() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame131 />
    </div>
  );
}

function Frame130() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg24 />
    </div>
  );
}

function Frame132() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Strategy review</p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div
      className="relative shrink-0 w-full z-[6]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[122.592px] relative size-full">
        <Frame130 />
        <Frame132 />
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1144)">
            <path
              d={svgPaths.p464a00}
              fill="var(--fill-0, #6B7280)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1144">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg25() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame135 />
    </div>
  );
}

function Frame134() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg25 />
    </div>
  );
}

function Frame136() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Partner list feedback</p>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div
      className="relative shrink-0 w-full z-[5]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[99.986px] relative size-full">
        <Frame134 />
        <Frame136 />
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1195)">
            <path
              d={svgPaths.p2adb9680}
              fill="var(--fill-0, #6B7280)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1195">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg26() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame139 />
    </div>
  );
}

function Frame138() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg26 />
    </div>
  );
}

function Frame140() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Outreach script review</p>
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div
      className="relative shrink-0 w-full z-[4]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[38.256px] relative size-full">
        <Frame138 />
        <Frame140 />
      </div>
    </div>
  );
}

function Frame143() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1141)">
            <path
              d={svgPaths.p8efff80}
              fill="var(--fill-0, #6B7280)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1141">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg27() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame143 />
    </div>
  );
}

function Frame142() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg27 />
    </div>
  );
}

function Frame144() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Activation planning</p>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div
      className="content-stretch flex gap-[10.433px] isolate items-start relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame142 />
      <Frame144 />
    </div>
  );
}

function Frame147() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1198)">
            <path
              d={svgPaths.p63f5b00}
              fill="var(--fill-0, #6B7280)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1198">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg28() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame147 />
    </div>
  );
}

function Frame146() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg28 />
    </div>
  );
}

function Frame148() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Workflow cleanup</p>
      </div>
    </div>
  );
}

function Frame145() {
  return (
    <div
      className="relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[33.908px] relative size-full">
        <Frame146 />
        <Frame148 />
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div
      className="h-[12.172px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10.6507 12.1722"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1138)">
            <path
              d={svgPaths.p36e21b80}
              fill="var(--fill-0, #6B7280)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1138">
            <path d="M0 0H10.6507V12.1722H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg29() {
  return (
    <div
      className="content-stretch flex flex-col h-[14.781px] isolate items-start py-[2.608px] relative shrink-0 w-[10.651px] z-[1]"
      data-name="svg"
    >
      <Frame151 />
    </div>
  );
}

function Frame150() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[2.608px] relative shrink-0 w-[10.433px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg29 />
    </div>
  );
}

function Frame152() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[1.739px] pt-[0.869px] relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12.172px] tracking-[-0.4347px] whitespace-nowrap z-[1]">
        <p className="leading-[17.389px]">Light implementation support</p>
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div
      className="relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[10.433px] isolate items-start pr-[41.733px] relative size-full">
        <Frame150 />
        <Frame152 />
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div
      className="content-stretch flex flex-col gap-[13.911px] isolate items-start relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame129 />
      <Frame133 />
      <Frame137 />
      <Frame141 />
      <Frame145 />
      <Frame149 />
    </div>
  );
}

function Frame154() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[0.869px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[13.911px] relative shrink-0 text-[#6b7280] text-[10.433px] tracking-[-0.4347px] w-full z-[1]">
        Move into a monthly plan within 14 days and your first 5-hour block can be credited toward your first month.
      </p>
    </div>
  );
}

function Frame153TestDrive() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pt-[13.911px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-dashed border-t-[0.869px] inset-0 pointer-events-none"
      />
      <Frame154 />
    </div>
  );
}

function Frame124() {
  return (
    <div
      className="content-stretch flex flex-col gap-[20.867px] h-[314.739px] isolate items-start relative shrink-0 w-[224.317px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame125 />
      <Frame128 />
      <Frame153TestDrive />
    </div>
  );
}

function Frame156() {
  return (
    <div
      className="bg-[#fef2f2] content-stretch flex items-center justify-center px-[8.694px] py-[3.478px] relative rounded-[8693.576px] shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8693.576px]"
      />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ef4444] text-[10.433px] tracking-[-0.4347px] whitespace-nowrap">
        <p className="leading-[13.911px]">3 spots left</p>
      </div>
    </div>
  );
}

function Frame155() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[22.606px] isolate items-start right-[22.16px] left-auto md:left-[186.51px] pt-[1.739px] top-[21.74px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame156 />
    </div>
  );
}

function Frame155Copy() {
  return null;
}

function Frame117({
  isHovered,
  isExpanded,
  onHover,
  onLeave,
  onToggleExpand,
}: CardProps) {
  return (
    <div
      className={`bg-white content-stretch flex flex-col gap-[16px] md:gap-[20px] lg:gap-[27.822px] ${isExpanded ? "h-auto" : "h-auto md:h-[594.7px]"} isolate items-start p-[16px] sm:p-[20px] md:p-[24px] lg:p-[27.822px] relative rounded-[12px] md:rounded-[13.911px] shrink-0 w-full md:w-[281.7px] cursor-pointer transition-all duration-300 ${
        isHovered
          ? "drop-shadow-[0px_8.694px_4.347px_rgba(139,92,246,0.04),0px_17.389px_10.868px_rgba(139,92,246,0.15)]"
          : "drop-shadow-[0px_1.739px_1.739px_rgba(0,0,0,0.03),0px_3.478px_2.608px_rgba(0,0,0,0.05)]"
      }`}
      data-name="Frame"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        aria-hidden="true"
        className={`absolute border-solid inset-0 pointer-events-none rounded-[13.911px] transition-all duration-300 ${
          isHovered
            ? "border-[#bf00ff] border-[1.739px]"
            : "border-[#e5e7eb] border-[0.869px]"
        }`}
      />
      <Frame118 />
      <Frame123 />
      <Frame124Bespoke />
      <Frame155 />
    </div>
  );
}

function Frame117Copy({
  isHovered,
  isExpanded,
  onHover,
  onLeave,
  onToggleExpand,
}: CardProps) {
  return (
    <div
      className={`bg-white content-stretch flex flex-col gap-[16px] md:gap-[20px] lg:gap-[27.822px] ${isExpanded ? "h-auto" : "h-auto md:h-[594.7px]"} isolate items-start p-[16px] sm:p-[20px] md:p-[24px] lg:p-[27.822px] relative rounded-[12px] md:rounded-[13.911px] shrink-0 w-full md:w-[281.7px] cursor-pointer transition-all duration-300 ${
        isHovered
          ? "drop-shadow-[0px_8.694px_4.347px_rgba(139,92,246,0.04),0px_17.389px_10.868px_rgba(139,92,246,0.15)]"
          : "drop-shadow-[0px_1.739px_1.739px_rgba(0,0,0,0.03),0px_3.478px_2.608px_rgba(0,0,0,0.05)]"
      }`}
      data-name="Frame"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        aria-hidden="true"
        className={`absolute border-solid inset-0 pointer-events-none rounded-[13.911px] transition-all duration-300 ${
          isHovered
            ? "border-[#bf00ff] border-[1.739px]"
            : "border-[#e5e7eb] border-[0.869px]"
        }`}
      />
      <Frame118Copy />
      <Frame123Copy />
      <Frame124 />
      <Frame155Copy />
    </div>
  );
}

function Frame243({ allExpanded }: { allExpanded: boolean }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(
    null,
  );

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 400,
    cssEase: "ease-out",
    swipe: true,
    draggable: true,
    touchMove: true,
    swipeToSlide: true,
    touchThreshold: 5,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    centerMode: false,
    variableWidth: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1240,
        settings: { slidesToShow: 1, slidesToScroll: 1, swipe: true, draggable: true, touchMove: true, swipeToSlide: true, touchThreshold: 5, centerMode: false, centerPadding: "0px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, swipe: true, draggable: true, touchMove: true, swipeToSlide: true, touchThreshold: 5, centerMode: false, centerPadding: "0px" },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, swipe: true, draggable: true, touchMove: true, swipeToSlide: true, touchThreshold: 5, centerMode: false, centerPadding: "0px" },
      },
    ],
  };

  return (
    <div className="w-full py-[30px] overflow-x-hidden max-w-full">
      <Slider className="pricing-slider" {...settings}>
        <div className="px-2">
          <Frame117Copy
            isHovered={hoveredCard === 0}
            isExpanded={allExpanded}
            onHover={() => setHoveredCard(0)}
            onLeave={() => setHoveredCard(null)}
            onToggleExpand={() => {}}
          />
        </div>
        <div className="px-2">
          <Frame1
            isHovered={hoveredCard === 1}
            isExpanded={allExpanded}
            onHover={() => setHoveredCard(1)}
            onLeave={() => setHoveredCard(null)}
            onToggleExpand={() => {}}
          />
        </div>
        <div className="px-2">
          <Frame36
            isHovered={hoveredCard === 2}
            isExpanded={allExpanded}
            onHover={() => setHoveredCard(2)}
            onLeave={() => setHoveredCard(null)}
            onToggleExpand={() => {}}
          />
        </div>
        <div className="px-2">
          <Frame79
            isHovered={hoveredCard === 3}
            isExpanded={allExpanded}
            onHover={() => setHoveredCard(3)}
            onLeave={() => setHoveredCard(null)}
            onToggleExpand={() => {}}
          />
        </div>
        <div className="px-2">
          <Frame117
            isHovered={hoveredCard === 4}
            isExpanded={allExpanded}
            onHover={() => setHoveredCard(4)}
            onLeave={() => setHoveredCard(null)}
            onToggleExpand={() => {}}
          />
        </div>
      </Slider>
    </div>
  );
}

function Group24({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div className="flex items-center gap-[8px] md:gap-[10px]">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center not-italic text-[#bf00ff] text-[14px] md:text-[16px] lg:text-[18px] whitespace-nowrap">
        <p className="leading-[14px] md:leading-[15px] lg:leading-[16px]">
          {isExpanded
            ? "Hide Full Breakdown"
            : "View Full Breakdown"}
        </p>
      </div>
      <div
        className={`h-[12px] md:h-[14px] w-[6px] md:w-[7px] transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9.41421 16"
        >
          <path
            d="M1 1L8 7.99015L1 15"
            id="Vector 3"
            stroke="var(--stroke-0, #BF00FF)"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function Group25({
  isExpanded,
  onToggle,
}: {
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative inline-flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity px-[20px] sm:px-[28px] md:px-[44px] py-[12px] sm:py-[14px] md:py-[18px] bg-white border border-[rgba(191,0,255,0.38)] border-solid rounded-[34px] w-auto mx-auto"
    >
      <Group24 isExpanded={isExpanded} />
    </button>
  );
}

function Frame244() {
  const [expandedCard, setExpandedCard] = useState<
    number | null
  >(null);
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleAllExpanded = () => {
    setAllExpanded(!allExpanded);
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[30px] lg:gap-[35px] items-center w-full">
      <Frame243 allExpanded={allExpanded} />
      <Group25
        isExpanded={allExpanded}
        onToggle={toggleAllExpanded}
      />
    </div>
  );
}

function Frame246() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[60px] lg:gap-[78px] items-center justify-center w-full">
      <Frame242 />
      <Frame244 />
    </div>
  );
}

function Frame186() {
  return (
    <div className="bg-[rgba(191,0,255,0.08)] content-stretch flex items-center justify-center px-[16px] sm:px-[20px] md:px-[30px] lg:px-[37px] py-[10px] sm:py-[12px] md:py-[15px] lg:py-[17px] relative rounded-[8px] md:rounded-[10px] w-full md:w-auto shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[#bf00ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] md:rounded-[10px]"
      />
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bf00ff] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center whitespace-nowrap">
        <p className="leading-[13px] sm:leading-[14px] md:leading-[15px] lg:leading-[16px]">
          Managing 50+ active partners
        </p>
      </div>
    </div>
  );
}

function Frame187() {
  return (
    <div className="bg-[rgba(191,0,255,0.08)] content-stretch flex items-center justify-center px-[16px] sm:px-[20px] md:px-[30px] lg:px-[37px] py-[10px] sm:py-[12px] md:py-[15px] lg:py-[17px] relative rounded-[8px] md:rounded-[10px] w-full md:w-auto shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[#bf00ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] md:rounded-[10px]"
      />
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bf00ff] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center whitespace-nowrap">
        <p className="leading-[13px] sm:leading-[14px] md:leading-[15px] lg:leading-[16px]">
          Priority service
        </p>
      </div>
    </div>
  );
}

function Frame188() {
  return (
    <div className="bg-[rgba(191,0,255,0.08)] content-stretch flex items-center justify-center px-[16px] sm:px-[20px] md:px-[30px] lg:px-[37px] py-[10px] sm:py-[12px] md:py-[15px] lg:py-[17px] relative rounded-[8px] md:rounded-[10px] w-full md:w-auto shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[#bf00ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] md:rounded-[10px]"
      />
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bf00ff] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center whitespace-nowrap">
        <p className="leading-[13px] sm:leading-[14px] md:leading-[15px] lg:leading-[16px]">
          Advanced automation option
        </p>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="flex flex-col md:flex-row gap-[12px] md:gap-[16px] lg:gap-[24px] items-stretch md:items-start w-full md:w-auto">
      <Frame186 />
      <Frame187 />
      <Frame188 />
    </div>
  );
}

function Frame245() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-center leading-[0] w-full max-w-[935px] px-[16px] sm:px-0">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center min-w-full not-italic text-[#5c5c5c] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center w-[min-content]">
        <p className="leading-[22px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px]">
          Optional Add-Ons:
        </p>
      </div>
      <Group23 />
    </div>
  );
}

function Pricing() {
  return (
    <div
      id="pricing-section"
      className="bg-[#fefbff] w-full py-[32px] sm:py-[40px] md:py-[80px] lg:py-[150px]"
      data-name="Pricing"
    >
      <div className="content-stretch flex flex-col gap-[24px] md:gap-[35px] items-center justify-center w-full max-w-[1236px] mx-auto px-[16px] sm:px-[20px] md:px-[24px] lg:px-0">
        <Frame246 />
        <Frame245 />
      </div>
    </div>
  );
}

function Frame158() {
  return (
    <div
      className="opacity-82 relative rounded-[9999px] shrink-0 size-[8px] z-[2]"
      style={{
        backgroundImage:
          "linear-gradient(96.5687deg, rgb(183, 23, 142) 5.7833%, rgb(168, 26, 147) 37.51%, rgb(135, 34, 158) 116.17%)",
      }}
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
    </div>
  );
}

function Frame159() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[0.1px] whitespace-nowrap z-[1]">
        <p className="leading-[16px]">Partner Program</p>
      </div>
    </div>
  );
}

function Frame157() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] isolate items-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0 z-[4]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <Frame158 />
      <Frame159 />
    </div>
  );
}

function Frame161() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="font-['Inter:Bold',sans-serif] font-bold h-auto md:h-[127px] leading-[0] not-italic relative shrink-0 text-[#bf00ff] text-[51px] md:text-[60px] tracking-[-0.7px] w-full md:w-[315px] whitespace-pre-wrap">
        <p className="leading-[51px] md:leading-[60px] mb-0">{`Unfair `}</p>
        <p className="leading-[51px] md:leading-[60px]">Advantage</p>
      </div>
    </div>
  );
}

function InlineRow() {
  return (
    <div
      className="content-center flex flex-wrap items-center overflow-clip relative shrink-0 w-full z-[1]"
      data-name="InlineRow"
    >
      <Frame161 />
    </div>
  );
}

function Frame160() {
  return (
    <div
      className="relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col isolate items-start pr-[14px] relative size-full">
        <div className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[51px] md:text-[60px] text-white tracking-[-0.7px] w-full whitespace-pre-wrap z-[2]">
          <p className="leading-[51px] md:leading-[60px] mb-0">{`Turn `}</p>
          <p className="leading-[51px] md:leading-[60px]">{`Partnerships Into Your `}</p>
        </div>
        <InlineRow />
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start max-w-[512px] py-[4px] relative shrink-0 w-[496px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[18px] tracking-[-0.5px] w-full whitespace-pre-wrap z-[1]">
        <p className="leading-[30px] mb-0">{`Build predictable, scalable revenue through strategic `}</p>
        <p className="leading-[30px] mb-0">{`partnerships. Join the fastest-growing ecosystem of B2B `}</p>
        <p className="leading-[30px]">software companies.</p>
      </div>
    </div>
  );
}

function Frame164() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] tracking-[0.9px] w-full z-[1]">
        Trusted by industry leaders
      </p>
    </div>
  );
}

function Frame169() {
  return (
    <div
      className="relative shrink-0 size-[16px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <path
            d="M16 16H0V0H16V16Z"
            stroke="var(--stroke-0, #E5E7EB)"
          />
          <path
            d={svgPaths.p1efa7f0}
            fill="url(#paint0_linear_7_1009)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_7_1009"
            x1="0.898817"
            x2="20.26"
            y1="2.01116"
            y2="4.55908"
          >
            <stop stopColor="#B7178E" />
            <stop offset="0.2874" stopColor="#A81A93" />
            <stop offset="1" stopColor="#87229E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svg30() {
  return (
    <div
      className="content-stretch flex flex-col h-[17px] isolate items-start py-px relative shrink-0 w-[16px] z-[1]"
      data-name="svg"
    >
      <Frame169 />
    </div>
  );
}

function Frame168() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[4px] relative shrink-0 w-[16px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg30 />
    </div>
  );
}

function Frame167() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.05)] content-stretch flex isolate items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0 size-[40px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <Frame168 />
    </div>
  );
}

function Frame171() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.5px] w-full z-[1]">
        300% ROI
      </p>
    </div>
  );
}

function Frame172() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[-0.5px] w-full z-[1]">
        Average Return
      </p>
    </div>
  );
}

function Frame170() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[81px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame171 />
      <Frame172 />
    </div>
  );
}

function Frame166() {
  return (
    <div
      className="content-stretch flex gap-[12px] isolate items-center relative self-stretch shrink-0 z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame167 />
      <Frame170 />
    </div>
  );
}

function Frame176() {
  return (
    <div
      className="h-[16px] relative shrink-0 w-[20px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_7_1006)">
            <path
              d={svgPaths.p1b4569c0}
              fill="url(#paint0_linear_7_1006)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_7_1006"
            x1="1.12352"
            x2="25.2444"
            y1="1.15561"
            y2="4.6275"
          >
            <stop stopColor="#B7178E" />
            <stop offset="0.2874" stopColor="#A81A93" />
            <stop offset="1" stopColor="#87229E" />
          </linearGradient>
          <clipPath id="clip0_7_1006">
            <path d="M0 0H20V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg31() {
  return (
    <div
      className="content-stretch flex flex-col h-[16px] isolate items-start relative shrink-0 w-[20px] z-[1]"
      data-name="svg"
    >
      <Frame176 />
    </div>
  );
}

function Frame175() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[4px] relative shrink-0 w-[20px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg31 />
    </div>
  );
}

function Frame174() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.05)] content-stretch flex isolate items-center justify-center px-[10px] py-[8px] relative rounded-[9999px] shrink-0 size-[40px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <Frame175 />
    </div>
  );
}

function Frame178() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.5px] whitespace-nowrap z-[1]">
        50k+ Partners
      </p>
    </div>
  );
}

function Frame179() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[-0.5px] w-full z-[1]">
        Active Network
      </p>
    </div>
  );
}

function Frame177() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[91px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame178 />
      <Frame179 />
    </div>
  );
}

function Frame173() {
  return (
    <div
      className="content-stretch flex gap-[12px] isolate items-center relative self-stretch shrink-0 z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame174 />
      <Frame177 />
    </div>
  );
}

function Frame183() {
  return (
    <div
      className="relative shrink-0 size-[16px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_7_1062)">
            <path
              d={svgPaths.p228c4ef0}
              fill="url(#paint0_linear_7_1062)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_7_1062"
            x1="1.34263"
            x2="19.5931"
            y1="1.14929"
            y2="3.13032"
          >
            <stop stopColor="#B7178E" />
            <stop offset="0.2874" stopColor="#A81A93" />
            <stop offset="1" stopColor="#87229E" />
          </linearGradient>
          <clipPath id="clip0_7_1062">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg32() {
  return (
    <div
      className="content-stretch flex flex-col h-[16px] isolate items-start px-px relative shrink-0 w-[17px] z-[1]"
      data-name="svg"
    >
      <Frame183 />
    </div>
  );
}

function Frame182() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start py-[4px] relative shrink-0 w-[17px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg32 />
    </div>
  );
}

function Frame181() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.05)] content-stretch flex isolate items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0 size-[40px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
      <Frame182 />
    </div>
  );
}

function Frame185() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.5px] w-full z-[1]">
        Enterprise
      </p>
    </div>
  );
}

function Frame189() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[-0.5px] w-full z-[1]">
        Grade Security
      </p>
    </div>
  );
}

function Frame184() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[79px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame185 />
      <Frame189 />
    </div>
  );
}

function Frame180() {
  return (
    <div
      className="content-stretch flex gap-[12px] isolate items-center relative self-stretch shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame181 />
      <Frame184 />
    </div>
  );
}

function Frame165() {
  return (
    <div
      className="h-[40px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-wrap gap-[24px_32px] isolate items-start pr-[8px] relative size-full">
        <Frame166 />
        <Frame173 />
        <Frame180 />
      </div>
    </div>
  );
}

function Frame163() {
  return (
    <div
      className="content-stretch flex flex-col gap-[20px] isolate items-start pt-[32px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none"
      />
      <Frame164 />
      <Frame165 />
    </div>
  );
}

function LeftCol() {
  return (
    <div
      className="col-1 content-stretch flex flex-col gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] h-auto lg:h-[694px] isolate items-start ml-0 mt-0 pr-0 lg:pr-[32px] relative row-1 w-full max-w-full lg:w-[528px]"
      data-name="left col"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame157 />
      <Frame160 />
      <Frame162 />
      <Frame163 />
    </div>
  );
}

function Frame191() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.5px] w-full z-[1]">
        Get Started Today
      </p>
    </div>
  );
}

function Frame192() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] tracking-[-0.5px] w-full z-[1]">
        Fill out the form below and our team will be in touch
        shortly.
      </p>
    </div>
  );
}

function Frame190() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-[446px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame191 />
      <Frame192 />
    </div>
  );
}

function Frame194() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-center py-[2px] relative shrink-0 z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[24px]">See Available Time</p>
      </div>
    </div>
  );
}

function Frame196() {
  return (
    <div
      className="h-[14px] relative shrink-0 w-[12.25px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12.25 14"
      >
        <g id="Frame">
          <g clipPath="url(#clip0_1_1130)">
            <path
              d={svgPaths.pde8daf0}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1130">
            <path d="M0 0H12.25V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg33() {
  return (
    <div
      className="content-stretch flex flex-col h-[16px] isolate items-center py-[2px] relative shrink-0 w-[12.125px] z-[1]"
      data-name="svg"
    >
      <Frame196 />
    </div>
  );
}

function Frame195() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-center py-[3px] relative shrink-0 w-[12px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg33 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-[#bf00ff] content-stretch flex gap-[8px] isolate items-center justify-center left-0 py-[16px] rounded-[12px] top-[694px] w-[446px]"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <Frame194 />
      <Frame195 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal left-[80px] not-italic text-[12px] top-[770px] tracking-[-0.5px] whitespace-nowrap">
      <p className="absolute decoration-solid leading-[24px] left-[294px] text-white top-[770px] underline">
        Privacy Policy
      </p>
      <p className="-translate-x-1/2 absolute leading-[16px] left-[186px] text-[#9ca3af] text-center top-[774px]">
        By submitting this form, you agree to our
      </p>
    </div>
  );
}

function Frame197() {
  return (
    <div
      className="absolute h-px left-0 top-[826px] w-[446px]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Frame199() {
  return (
    <div
      className="content-stretch flex h-[16px] isolate items-start pb-px pr-[3px] relative shrink-0 w-[442px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-black tracking-[-0.5px] whitespace-nowrap z-[1]">
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] text-[#e4e4e4] text-[12px]">{`Anything else we should know? `}</span>
        <span className="leading-[16px] text-[12px] text-[rgba(156,163,175,0.5)]">
          (Optional)
        </span>
      </p>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]"
      data-name="textarea"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col isolate items-start px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.5px] w-full z-[1]">
            Tell us about your current challenges...
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function Frame198() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[6px] isolate items-start left-0 pt-[8px] right-0 top-[584px]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame199 />
      <Textarea />
    </div>
  );
}

function Frame201() {
  return (
    <div
      className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">{`What's your average deal size?`}</p>
    </div>
  );
}

function Frame204() {
  return (
    <div
      className="relative rounded-[9999px] shrink-0 size-[16px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(156,163,175,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
    </div>
  );
}

function Frame205() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[16px]">Under $1K</p>
      </div>
    </div>
  );
}

function Frame203() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.3)] content-stretch flex gap-[12px] h-[42px] isolate items-center p-[12px] relative rounded-[12px] shrink-0 w-[217px] z-[4]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <Frame204 />
      <Frame205 />
    </div>
  );
}

function Frame207() {
  return (
    <div
      className="relative rounded-[9999px] shrink-0 size-[16px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(156,163,175,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
    </div>
  );
}

function Frame208() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[16px]">$1K – $5K</p>
      </div>
    </div>
  );
}

function Frame206() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.3)] flex-[1_0_0] h-[42px] min-w-px relative rounded-[12px] z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center p-[12px] relative size-full">
          <Frame207 />
          <Frame208 />
        </div>
      </div>
    </div>
  );
}

function Frame210() {
  return (
    <div
      className="relative rounded-[9999px] shrink-0 size-[16px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(156,163,175,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
    </div>
  );
}

function Frame211() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[16px]">$5K – $20K</p>
      </div>
    </div>
  );
}

function Frame209() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.3)] content-stretch flex gap-[12px] h-[42px] isolate items-center p-[12px] relative rounded-[12px] shrink-0 w-[217px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <Frame210 />
      <Frame211 />
    </div>
  );
}

function Frame213() {
  return (
    <div
      className="relative rounded-[9999px] shrink-0 size-[16px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(156,163,175,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]"
      />
    </div>
  );
}

function Frame214() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[16px]">$20K+</p>
      </div>
    </div>
  );
}

function Frame212() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.3)] flex-[1_0_0] h-[42px] min-w-px relative rounded-[12px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center p-[12px] relative size-full">
          <Frame213 />
          <Frame214 />
        </div>
      </div>
    </div>
  );
}

function Frame202() {
  return (
    <div
      className="content-start flex flex-wrap gap-[12px] isolate items-start relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame203 />
      <Frame206 />
      <Frame209 />
      <Frame212 />
    </div>
  );
}

function Frame200() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[12px] isolate items-start left-0 pt-[8px] right-0 top-[432px]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame201 />
      <Frame202 />
    </div>
  );
}

function Frame216() {
  return (
    <div
      className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">
        What are you looking to achieve with partnerships?
      </p>
    </div>
  );
}

function Frame219() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.5)] relative rounded-[4px] shrink-0 size-[20px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
    </div>
  );
}

function Frame220() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[14px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">
          Build a partner program from scratch
        </p>
      </div>
    </div>
  );
}

function Frame218() {
  return (
    <div
      className="h-[23px] relative shrink-0 w-full z-[4]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[12px] isolate items-start pr-[169px] relative size-full">
        <Frame219 />
        <Frame220 />
      </div>
    </div>
  );
}

function Frame235() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.5)] relative rounded-[4px] shrink-0 size-[20px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
    </div>
  );
}

function Frame236() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[14px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">Get more referrals</p>
      </div>
    </div>
  );
}

function Frame221() {
  return (
    <div
      className="h-[23px] relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[12px] isolate items-start pr-[294px] relative size-full">
        <Frame235 />
        <Frame236 />
      </div>
    </div>
  );
}

function Frame238() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.5)] relative rounded-[4px] shrink-0 size-[20px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
    </div>
  );
}

function Frame248() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[14px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">
          Recruit strategic partners
        </p>
      </div>
    </div>
  );
}

function Frame237() {
  return (
    <div
      className="h-[23px] relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[12px] isolate items-start pr-[246px] relative size-full">
        <Frame238 />
        <Frame248 />
      </div>
    </div>
  );
}

function Frame250() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.5)] relative rounded-[4px] shrink-0 size-[20px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
    </div>
  );
}

function Frame251() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[14px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">
          Activate existing partners
        </p>
      </div>
    </div>
  );
}

function Frame249() {
  return (
    <div
      className="h-[23px] relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex gap-[12px] isolate items-start pr-[245px] relative size-full">
        <Frame250 />
        <Frame251 />
      </div>
    </div>
  );
}

function Frame217() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] isolate items-start relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame218 />
      <Frame221 />
      <Frame237 />
      <Frame249 />
    </div>
  );
}

function Frame215() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[12px] isolate items-start left-0 pt-[8px] right-0 top-[254px]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame216 />
      <Frame217 />
    </div>
  );
}

function Frame255() {
  return (
    <div
      className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[211px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">
        Full Name
      </p>
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]"
      data-name="input"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col isolate items-start px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.5px] w-full z-[1]">
            Jane Doe
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function Frame254() {
  return (
    <div
      className="content-stretch flex flex-col gap-[6px] h-[68px] isolate items-start relative shrink-0 w-[215px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame255 />
      <Input />
    </div>
  );
}

function Frame257() {
  return (
    <div
      className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[211px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">
        Work Email
      </p>
    </div>
  );
}

function Input1() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]"
      data-name="input"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col isolate items-start px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.5px] w-full z-[1]">
            jane@company.com
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function Frame256() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] h-[68px] isolate items-start min-w-px relative z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame257 />
      <Input1 />
    </div>
  );
}

function Frame253() {
  return (
    <div
      className="content-stretch flex gap-[16px] isolate items-start relative shrink-0 w-full z-[3]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame254 />
      <Frame256 />
    </div>
  );
}

function Frame259() {
  return (
    <div
      className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">
        Company Name
      </p>
    </div>
  );
}

function Input2() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]"
      data-name="input"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col isolate items-start px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.5px] w-full z-[1]">
            Acme Corp
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function Frame258() {
  return (
    <div
      className="content-stretch flex flex-col gap-[6px] isolate items-start relative shrink-0 w-full z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame259 />
      <Input2 />
    </div>
  );
}

function Frame261() {
  return (
    <div
      className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">
        What best describes your business?
      </p>
    </div>
  );
}

function Select() {
  return (
    <div
      className="bg-[rgba(5,6,10,0.5)] h-[46px] relative rounded-[12px] shrink-0 w-full z-[2]"
      data-name="select"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex isolate items-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white tracking-[-0.5px] w-[110px] whitespace-nowrap z-[1]">
            <p className="leading-[20px] overflow-hidden text-ellipsis">
              Select an option...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame265() {
  return (
    <div
      className="relative shrink-0 size-[12px] z-[1]"
      data-name="Frame"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Frame">
          <path
            d="M12 12H0V0H12V12Z"
            stroke="var(--stroke-0, #E5E7EB)"
          />
          <path
            d={svgPaths.p3d0f1180}
            fill="var(--fill-0, #9CA3AF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Svg34() {
  return (
    <div
      className="content-stretch flex flex-col h-[16px] isolate items-start pb-[2px] pt-[4px] px-px relative shrink-0 w-[13px] z-[1]"
      data-name="svg"
    >
      <Frame265 />
    </div>
  );
}

function Frame264() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start pb-[3px] pt-[2px] relative shrink-0 w-[13px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Svg34 />
    </div>
  );
}

function Frame263() {
  return (
    <div
      className="absolute content-stretch flex inset-[0_0_0_402px] isolate items-center px-[16px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame264 />
    </div>
  );
}

function Frame262() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Select />
      <Frame263 />
    </div>
  );
}

function Frame260() {
  return (
    <div
      className="content-stretch flex flex-col gap-[6px] isolate items-start relative shrink-0 w-full z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame261 />
      <Frame262 />
    </div>
  );
}

function Frame252() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[16px] isolate items-start left-0 right-0 top-0"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Frame253 />
      <Frame258 />
      <Frame260 />
    </div>
  );
}

function Frame193() {
  return (
    <div
      className="h-[827px] relative shrink-0 w-[446px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <Button />
      <Group26 />
      <Frame197 />
      <Frame198 />
      <Frame200 />
      <Frame215 />
      <Frame252 />
    </div>
  );
}

function Form() {
  return (
    <div
      className="bg-[#121319] col-1 content-stretch drop-shadow-[0px_0px_7.5px_#050047] flex flex-col gap-[32px] isolate items-start ml-[624px] mt-0 p-[40px] relative rounded-[16px] row-1 w-[528px]"
      data-name="Form"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <Frame190 />
      <Frame193 />
    </div>
  );
}

function GetStarted() {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-[32px] md:gap-[48px] lg:gap-[64px] leading-[0] relative shrink-0 w-full px-[16px] md:px-[24px] lg:px-0"
      data-name="Get Started"
    >
      <LeftCol />
      <RocketRhinoForm />
    </div>
  );
}

function Frame266() {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row isolate items-center justify-between gap-[30px] md:gap-0 pb-px relative shrink-0 w-full max-w-[1236px] px-[16px] z-[1]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(228,228,228,0.4)] tracking-[-0.5px] z-[1] text-center md:text-left">
        Contact us: <a href="mailto:hello@rocketrhino.co" className="hover:text-[rgba(228,228,228,0.6)] transition-colors">hello@rocketrhino.co</a>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(228,228,228,0.4)] tracking-[-0.5px] z-[1] text-center md:text-left">
        © 2026 RocketRhino Inc. All rights reserved.
      </p>
    </div>
  );
}

function Copyrights() {
  return (
    <div
      className="content-stretch flex flex-col isolate items-center py-[32px] relative shrink-0 w-full"
      data-name="copyrights"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none"
      />
      <Frame266 />
    </div>
  );
}

function Contact() {
  return (
    <div
      id="contact-form-section"
      className="bg-[#05060a] w-full pt-[147px]"
      data-name="contact"
    >
      <div className="content-stretch flex flex-col gap-[153px] items-center relative shrink-0 w-full max-w-[1236px] mx-auto">
        <GetStarted />
        <Copyrights />
      </div>
    </div>
  );
}

// Section 1: Hero Section
function HeroSection() {
  return (
    <section className="w-full flex justify-center pt-[21px] md:pt-[36px] pb-[60px] md:pb-[106px] relative">
      <div className="absolute top-[-180px] left-0 w-full h-[calc(100%+180px)] z-0 pointer-events-none overflow-hidden">
        <Group3 />
      </div>
      <div className="w-full max-w-[1236px] flex justify-center px-[16px] relative z-10">
        <Frame231 />
      </div>
    </section>
  );
}

// Section 2: Image Section (Full Width)
function ImageSection() {
  return (
    <section className="w-full flex justify-center items-center">
      <Group27 />
    </section>
  );
}

// Section 3: Banner Section (Full Width)
function BannerSection() {
  return (
    <section className="w-full flex justify-center py-[32px]">
      <div className="w-full">
        <Frame223 />
      </div>
    </section>
  );
}

// Section 3.5: Featured Growth Channel Section
function FeaturedGrowthSection() {
  return (
    <section className="w-full pt-0 pb-[60px] md:pb-[106px] overflow-hidden">
      <Component2ndSection />
    </section>
  );
}

// Section 4: How It Works Section
function HowItWorksSection() {
  return (
    <section className="w-full flex justify-center py-[60px] md:py-[106px]">
      <div className="w-full max-w-[1236px] flex justify-center px-[16px]">
        <Frame241 />
      </div>
    </section>
  );
}

// Section 4.5: Strategic Partner Channels Section
function StrategicPartnerChannelsSection() {
  return (
    <section className="w-full">
      <StrategicPartnerChannels />
    </section>
  );
}

// Section 4.6: High-Trust Industries Section
function HighTrustIndustriesSection() {
  return (
    <section className="w-full">
      <HighTrustIndustries />
    </section>
  );
}

// Section 4.63: Tools Section
function ToolsSectionWrapper() {
  return (
    <section className="w-full">
      <ToolsSection />
    </section>
  );
}

// Section 4.65: Testimonials Section
function TestimonialsSection() {
  return (
    <section className="w-full">
      <Testimonials />
    </section>
  );
}

// Section 4.7: About Bilal Section
function AboutBilalSection() {
  return (
    <section className="w-full">
      <AboutBilal />
    </section>
  );
}

// Section 5: Pricing Section (Full Width with background)
function PricingSection() {
  return (
    <section className="w-full">
      <Pricing />
    </section>
  );
}

// Section 5.5: FAQ Section
function FAQSectionWrapper() {
  return (
    <section className="w-full">
      <FAQSection />
    </section>
  );
}

// Section 6: Contact Section (Full Width with background)
function ContactSection() {
  return (
    <section className="w-full">
      <Contact />
    </section>
  );
}

function Frame247() {
  return (
    <div className="w-full pt-[180px]">
      <HeroSection />
      <FeaturedGrowthSection />
      <ImageSection />
      <BannerSection />
      <HowItWorksSection />
      <StrategicPartnerChannelsSection />
      <HighTrustIndustriesSection />
      <ToolsSectionWrapper />
      <TestimonialsSection />
      <AboutBilalSection />
      <PricingSection />
      <FAQSectionWrapper />
      <ContactSection />
    </div>
  );
}

function Navigation() {
  return (
    <div className="fixed top-0 h-[82px] md:h-[82px] z-[100] w-full">
      {/* White navbar background */}
      <div className="absolute inset-0 bg-white shadow-[0px_1px_16px_rgba(0,0,0,0.08)]" />

      {/* Menu content - centered within max-width container */}
      <div
        className="relative h-full w-full max-w-[1236px] mx-auto px-[16px] md:px-[16px] flex items-center justify-between"
        style={{
          isolation: "isolate",
          backdropFilter: "none",
          filter: "none",
        }}
      >
        <Layer />
        <div className="hidden md:flex">
          <Frame115 />
        </div>
        <Frame222 />
      </div>
    </div>
  );
}

export default function RocketRhino() {
  return (
    <div
      className="bg-[#05060a] relative w-full min-h-screen"
      data-name="rocket rhino"
    >
      <Navigation />
      <Frame247 />
    </div>
  );
}