import { useState, FormEvent } from 'react';
import svgPaths from "./svg-8ppte6x0mt";

function Frame1() {
  return (
    <div className="opacity-82 relative rounded-[9999px] shrink-0 size-[8px] z-[2]" style={{ backgroundImage: "linear-gradient(96.5687deg, rgb(183, 23, 142) 5.7833%, rgb(168, 26, 147) 37.51%, rgb(135, 34, 158) 116.17%)" }} data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[0.1px] whitespace-nowrap z-[1]">
        <p className="leading-[16px]">Partner Program</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] isolate items-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0 z-[4]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Bold',sans-serif] font-bold h-[127px] leading-[0] not-italic relative shrink-0 text-[#bf00ff] text-[60px] tracking-[-0.7px] w-[315px] whitespace-pre-wrap">
        <p className="leading-[60px] mb-0">{`Unfair `}</p>
        <p className="leading-[60px]">Advantage</p>
      </div>
    </div>
  );
}

function InlineRow() {
  return (
    <div className="content-center flex flex-wrap items-center overflow-clip relative shrink-0 w-full z-[1]" data-name="InlineRow">
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col isolate items-start pr-[14px] relative size-full">
        <div className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[60px] text-white tracking-[-0.7px] w-full whitespace-pre-wrap z-[2]">
          <p className="leading-[60px] mb-0">{`Turn `}</p>
          <p className="leading-[60px]">{`Partnerships Into Your `}</p>
        </div>
        <InlineRow />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col isolate items-start max-w-[512px] py-[4px] relative shrink-0 w-[496px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[18px] tracking-[-0.5px] w-full whitespace-pre-wrap z-[1]">
        <p className="leading-[30px] mb-0">{`Build predictable, scalable revenue through strategic `}</p>
        <p className="leading-[30px] mb-0">{`partnerships. Join the fastest-growing ecosystem of B2B `}</p>
        <p className="leading-[30px]">software companies.</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] tracking-[0.9px] w-full z-[1]">Trusted by industry leaders</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[16px] z-[1]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.p1efa7f0} fill="url(#paint0_linear_1_1204)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1204" x1="0.898817" x2="20.26" y1="2.01116" y2="4.55908">
            <stop stopColor="#B7178E" />
            <stop offset="0.2874" stopColor="#A81A93" />
            <stop offset="1" stopColor="#87229E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex flex-col h-[17px] isolate items-start py-px relative shrink-0 w-[16px] z-[1]" data-name="svg">
      <Frame12 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col isolate items-start py-[4px] relative shrink-0 w-[16px] z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Svg />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex isolate items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0 size-[40px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.5px] w-full z-[1]">300% ROI</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 w-full z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[-0.5px] w-full z-[1]">Average Return</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[81px] z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center relative self-stretch shrink-0 z-[3]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame10 />
      <Frame13 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px] z-[1]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Frame">
          <g clipPath="url(#clip0_1_1133)">
            <path d={svgPaths.p1b4569c0} fill="url(#paint0_linear_1_1133)" id="Vector" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1133" x1="1.12352" x2="25.2444" y1="1.15561" y2="4.6275">
            <stop stopColor="#B7178E" />
            <stop offset="0.2874" stopColor="#A81A93" />
            <stop offset="1" stopColor="#87229E" />
          </linearGradient>
          <clipPath id="clip0_1_1133">
            <path d="M0 0H20V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] isolate items-start relative shrink-0 w-[20px] z-[1]" data-name="svg">
      <Frame19 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col isolate items-start py-[4px] relative shrink-0 w-[20px] z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Svg1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex isolate items-center justify-center px-[10px] py-[8px] relative rounded-[9999px] shrink-0 size-[40px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame18 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.5px] whitespace-nowrap z-[1]">50k+ Partners</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 w-full z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[-0.5px] w-full z-[1]">Active Network</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[91px] z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center relative self-stretch shrink-0 z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame17 />
      <Frame20 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 size-[16px] z-[1]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <g clipPath="url(#clip0_1_1171)">
            <path d={svgPaths.p228c4ef0} fill="url(#paint0_linear_1_1171)" id="Vector" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1171" x1="1.34263" x2="19.5931" y1="1.14929" y2="3.13032">
            <stop stopColor="#B7178E" />
            <stop offset="0.2874" stopColor="#A81A93" />
            <stop offset="1" stopColor="#87229E" />
          </linearGradient>
          <clipPath id="clip0_1_1171">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="content-stretch flex flex-col h-[16px] isolate items-start px-px relative shrink-0 w-[17px] z-[1]" data-name="svg">
      <Frame26 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col isolate items-start py-[4px] relative shrink-0 w-[17px] z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Svg2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex isolate items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0 size-[40px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame25 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.5px] w-full z-[1]">Enterprise</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 w-full z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[-0.5px] w-full z-[1]">Grade Security</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[79px] z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center relative self-stretch shrink-0 z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame24 />
      <Frame27 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-wrap gap-[24px_32px] isolate items-start pr-[8px] relative size-full">
        <Frame9 />
        <Frame16 />
        <Frame23 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] isolate items-start pt-[32px] relative shrink-0 w-full z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function LeftCol() {
  return (
    <div className="flex flex-col gap-[24px] items-start w-[528px] shrink-0" data-name="left col">
      <Frame />
      <Frame3 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.5px] w-full z-[1]">Get Started Today</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 w-full z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] tracking-[-0.5px] w-full z-[1]">Fill out the form below and our team will be in touch shortly.</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-[446px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col isolate items-center py-[2px] relative shrink-0 z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[24px]">See Available Time</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[14px] relative shrink-0 w-[12.25px] z-[1]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 14">
        <g id="Frame">
          <g clipPath="url(#clip0_1_1130)">
            <path d={svgPaths.pde8daf0} fill="var(--fill-0, white)" id="Vector" />
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

function Svg3() {
  return (
    <div className="content-stretch flex flex-col h-[16px] isolate items-center py-[2px] relative shrink-0 w-[12.125px] z-[1]" data-name="svg">
      <Frame36 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col isolate items-center py-[3px] relative shrink-0 w-[12px] z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Svg3 />
    </div>
  );
}

function Button({ isSubmitting, onClick }: { isSubmitting: boolean; onClick: (e: FormEvent) => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isSubmitting}
      className="absolute bg-[#bf00ff] content-stretch flex gap-[8px] isolate items-center justify-center left-0 py-[16px] rounded-[12px] top-[694px] w-[446px] border-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      data-name="button"
    >
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      {isSubmitting ? (
        <div className="content-stretch flex flex-col isolate items-center py-[2px] relative shrink-0 z-[2]">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.5px] whitespace-nowrap z-[1]">
            <p className="leading-[24px]">Submitting...</p>
          </div>
        </div>
      ) : (
        <>
          <Frame34 />
          <Frame35 />
        </>
      )}
    </button>
  );
}

function Group() {
  return (
    <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal left-[80px] not-italic text-[12px] top-[770px] tracking-[-0.5px] whitespace-nowrap">
      <p className="absolute decoration-solid leading-[24px] left-[294px] text-white top-[770px] underline">Privacy Policy</p>
      <p className="-translate-x-1/2 absolute leading-[16px] left-[186px] text-[#9ca3af] text-center top-[774px]">By submitting this form, you agree to our</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute h-px left-0 top-[826px] w-[446px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex h-[16px] isolate items-start pb-px pr-[3px] relative shrink-0 w-[442px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-black tracking-[-0.5px] whitespace-nowrap z-[1]">
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] text-[#e4e4e4] text-[12px]">{`Anything else we should know? `}</span>
        <span className="leading-[16px] text-[12px] text-[rgba(156,163,175,0.5)]">(Optional)</span>
      </p>
    </div>
  );
}

function Textarea({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="textarea">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tell us about your current challenges..."
        rows={4}
        className="w-full bg-transparent border-0 rounded-[12px] px-[16px] py-[12px] text-white text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] tracking-[-0.5px] outline-none focus:ring-2 focus:ring-[#bf00ff] resize-none placeholder:text-white"
      />
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame38({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] isolate items-start left-0 pt-[8px] right-0 top-[584px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame39 />
      <Textarea value={value} onChange={onChange} />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">{`What's your average deal size?`}</p>
    </div>
  );
}

function Frame44({ selected }: { selected: boolean }) {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[16px] z-[2]" data-name="Frame">
      {selected && (
        <div className="absolute inset-[4px] rounded-[9999px] bg-[#bf00ff]" />
      )}
      <div aria-hidden="true" className="absolute border border-[rgba(156,163,175,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[16px]">Under $1K</p>
      </div>
    </div>
  );
}

function Frame43({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-[rgba(5,6,10,0.3)] content-stretch flex gap-[12px] h-[42px] isolate items-center p-[12px] relative rounded-[12px] shrink-0 w-[217px] z-[4] cursor-pointer" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame44 selected={selected} />
      <Frame45 />
    </div>
  );
}

function Frame47({ selected }: { selected: boolean }) {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[16px] z-[2]" data-name="Frame">
      {selected && (
        <div className="absolute inset-[4px] rounded-[9999px] bg-[#bf00ff]" />
      )}
      <div aria-hidden="true" className="absolute border border-[rgba(156,163,175,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[16px]">$1K – $5K</p>
      </div>
    </div>
  );
}

function Frame46({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-[rgba(5,6,10,0.3)] flex-[1_0_0] h-[42px] min-w-px relative rounded-[12px] z-[3] cursor-pointer" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center p-[12px] relative size-full">
          <Frame47 selected={selected} />
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame50({ selected }: { selected: boolean }) {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[16px] z-[2]" data-name="Frame">
      {selected && (
        <div className="absolute inset-[4px] rounded-[9999px] bg-[#bf00ff]" />
      )}
      <div aria-hidden="true" className="absolute border border-[rgba(156,163,175,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[16px]">$5K – $20K</p>
      </div>
    </div>
  );
}

function Frame49({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-[rgba(5,6,10,0.3)] content-stretch flex gap-[12px] h-[42px] isolate items-center p-[12px] relative rounded-[12px] shrink-0 w-[217px] z-[2] cursor-pointer" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame50 selected={selected} />
      <Frame51 />
    </div>
  );
}

function Frame53({ selected }: { selected: boolean }) {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[16px] z-[2]" data-name="Frame">
      {selected && (
        <div className="absolute inset-[4px] rounded-[9999px] bg-[#bf00ff]" />
      )}
      <div aria-hidden="true" className="absolute border border-[rgba(156,163,175,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[16px]">$20K+</p>
      </div>
    </div>
  );
}

function Frame52({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-[rgba(5,6,10,0.3)] flex-[1_0_0] h-[42px] min-w-px relative rounded-[12px] z-[1] cursor-pointer" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center p-[12px] relative size-full">
          <Frame53 selected={selected} />
          <Frame54 />
        </div>
      </div>
    </div>
  );
}

function Frame42({ dealSize, setDealSize }: { dealSize: string; setDealSize: (size: string) => void }) {
  return (
    <div className="content-start flex flex-wrap gap-[12px] isolate items-start relative shrink-0 w-full z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame43 selected={dealSize === 'under1k'} onClick={() => setDealSize('under1k')} />
      <Frame46 selected={dealSize === '1k-5k'} onClick={() => setDealSize('1k-5k')} />
      <Frame49 selected={dealSize === '5k-20k'} onClick={() => setDealSize('5k-20k')} />
      <Frame52 selected={dealSize === '20k+'} onClick={() => setDealSize('20k+')} />
    </div>
  );
}

function Frame40({ dealSize, setDealSize }: { dealSize: string; setDealSize: (size: string) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] isolate items-start left-0 pt-[8px] right-0 top-[432px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame41 />
      <Frame42 dealSize={dealSize} setDealSize={setDealSize} />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">What are you looking to achieve with partnerships?</p>
    </div>
  );
}

function Frame59({ checked }: { checked: boolean }) {
  return (
    <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[4px] shrink-0 size-[20px] z-[2]" data-name="Frame">
      {checked && (
        <svg className="absolute inset-0 m-auto w-[12px] h-[12px]" fill="none" viewBox="0 0 12 12">
          <path d="M10 3L4.5 8.5L2 6" stroke="#bf00ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[14px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">Build a partner program from scratch</p>
      </div>
    </div>
  );
}

function Frame58({ checked, onClick }: { checked: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} className="h-[23px] relative shrink-0 w-full z-[4] cursor-pointer" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[12px] isolate items-start pr-[169px] relative size-full">
        <Frame59 checked={checked} />
        <Frame60 />
      </div>
    </div>
  );
}

function Frame62({ checked }: { checked: boolean }) {
  return (
    <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[4px] shrink-0 size-[20px] z-[2]" data-name="Frame">
      {checked && (
        <svg className="absolute inset-0 m-auto w-[12px] h-[12px]" fill="none" viewBox="0 0 12 12">
          <path d="M10 3L4.5 8.5L2 6" stroke="#bf00ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[14px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">Get more referrals</p>
      </div>
    </div>
  );
}

function Frame61({ checked, onClick }: { checked: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} className="h-[23px] relative shrink-0 w-full z-[3] cursor-pointer" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[12px] isolate items-start pr-[294px] relative size-full">
        <Frame62 checked={checked} />
        <Frame63 />
      </div>
    </div>
  );
}

function Frame65({ checked }: { checked: boolean }) {
  return (
    <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[4px] shrink-0 size-[20px] z-[2]" data-name="Frame">
      {checked && (
        <svg className="absolute inset-0 m-auto w-[12px] h-[12px]" fill="none" viewBox="0 0 12 12">
          <path d="M10 3L4.5 8.5L2 6" stroke="#bf00ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[14px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">Recruit strategic partners</p>
      </div>
    </div>
  );
}

function Frame64({ checked, onClick }: { checked: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} className="h-[23px] relative shrink-0 w-full z-[2] cursor-pointer" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[12px] isolate items-start pr-[246px] relative size-full">
        <Frame65 checked={checked} />
        <Frame66 />
      </div>
    </div>
  );
}

function Frame68({ checked }: { checked: boolean }) {
  return (
    <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[4px] shrink-0 size-[20px] z-[2]" data-name="Frame">
      {checked && (
        <svg className="absolute inset-0 m-auto w-[12px] h-[12px]" fill="none" viewBox="0 0 12 12">
          <path d="M10 3L4.5 8.5L2 6" stroke="#bf00ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[2px] pt-px relative shrink-0 z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[14px] tracking-[-0.5px] whitespace-nowrap z-[1]">
        <p className="leading-[20px]">Activate existing partners</p>
      </div>
    </div>
  );
}

function Frame67({ checked, onClick }: { checked: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} className="h-[23px] relative shrink-0 w-full z-[1] cursor-pointer" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[12px] isolate items-start pr-[245px] relative size-full">
        <Frame68 checked={checked} />
        <Frame69 />
      </div>
    </div>
  );
}

function Frame57({ goals, setGoals }: { goals: string[]; setGoals: (goals: string[]) => void }) {
  const toggleGoal = (goal: string) => {
    if (goals.includes(goal)) {
      setGoals(goals.filter(g => g !== goal));
    } else {
      setGoals([...goals, goal]);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[10px] isolate items-start relative shrink-0 w-full z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame58 checked={goals.includes('build')} onClick={() => toggleGoal('build')} />
      <Frame61 checked={goals.includes('referrals')} onClick={() => toggleGoal('referrals')} />
      <Frame64 checked={goals.includes('recruit')} onClick={() => toggleGoal('recruit')} />
      <Frame67 checked={goals.includes('activate')} onClick={() => toggleGoal('activate')} />
    </div>
  );
}

function Frame55({ goals, setGoals }: { goals: string[]; setGoals: (goals: string[]) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] isolate items-start left-0 pt-[8px] right-0 top-[254px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame56 />
      <Frame57 goals={goals} setGoals={setGoals} />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[211px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">Full Name</p>
    </div>
  );
}

function Input({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="input">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Jane Doe"
        required
        className="w-full h-full bg-transparent border-0 rounded-[12px] px-[16px] py-[12px] text-white text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] tracking-[-0.5px] outline-none focus:ring-2 focus:ring-[#bf00ff] placeholder:text-white"
      />
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame72({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[68px] isolate items-start relative shrink-0 w-[215px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame73 />
      <Input value={value} onChange={onChange} />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[211px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">Work Email</p>
    </div>
  );
}

function Input1({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="input">
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="jane@company.com"
        required
        className="w-full h-full bg-transparent border-0 rounded-[12px] px-[16px] py-[12px] text-white text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] tracking-[-0.5px] outline-none focus:ring-2 focus:ring-[#bf00ff] placeholder:text-white"
      />
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame74({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] h-[68px] isolate items-start min-w-px relative z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame75 />
      <Input1 value={value} onChange={onChange} />
    </div>
  );
}

function Frame71({ fullName, email, setFullName, setEmail }: { fullName: string; email: string; setFullName: (value: string) => void; setEmail: (value: string) => void }) {
  return (
    <div className="content-stretch flex gap-[16px] isolate items-start relative shrink-0 w-full z-[3]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame72 value={fullName} onChange={setFullName} />
      <Frame74 value={email} onChange={setEmail} />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">Company Name</p>
    </div>
  );
}

function Input2({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="input">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Acme Corp"
        required
        className="w-full h-full bg-transparent border-0 rounded-[12px] px-[16px] py-[12px] text-white text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] tracking-[-0.5px] outline-none focus:ring-2 focus:ring-[#bf00ff] placeholder:text-white"
      />
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame76({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] isolate items-start relative shrink-0 w-full z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame77 />
      <Input2 value={value} onChange={onChange} />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">What best describes your business?</p>
    </div>
  );
}

function Select({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="bg-[rgba(5,6,10,0.5)] h-[46px] relative rounded-[12px] shrink-0 w-full z-[2]" data-name="select">
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full bg-transparent border-0 rounded-[12px] px-[16px] py-[12px] text-white text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] tracking-[-0.5px] outline-none focus:ring-2 focus:ring-[#bf00ff] appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%239CA3AF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 16px center',
          backgroundSize: '12px 12px'
        }}
      >
        <option value="">Select an option...</option>
        <option value="agency">Marketing Agency</option>
        <option value="saas">SaaS Company</option>
        <option value="consulting">Consulting Firm</option>
        <option value="coaching">Coaching/Training</option>
        <option value="ecommerce">E-commerce</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

function Frame83() {
  return (
    <div className="relative shrink-0 size-[12px] z-[1]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M12 12H0V0H12V12Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.p3d0f1180} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-[2px] pt-[4px] px-px relative shrink-0 w-[13px] z-[1]" data-name="svg">
      <Frame83 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[3px] pt-[2px] relative shrink-0 w-[13px] z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Svg4 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute content-stretch flex inset-[0_0_0_402px] isolate items-center px-[16px] z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame82 />
    </div>
  );
}

function Frame80({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Select value={value} onChange={onChange} />
      <Frame81 />
    </div>
  );
}

function Frame78({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] isolate items-start relative shrink-0 w-full z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame79 />
      <Frame80 value={value} onChange={onChange} />
    </div>
  );
}

function Frame70({ formData, setFormData }: { formData: any; setFormData: (data: any) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] isolate items-start left-0 right-0 top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame71
        fullName={formData.fullName}
        email={formData.email}
        setFullName={(value) => setFormData({ ...formData, fullName: value })}
        setEmail={(value) => setFormData({ ...formData, email: value })}
      />
      <Frame76
        value={formData.companyName}
        onChange={(value) => setFormData({ ...formData, companyName: value })}
      />
      <Frame78
        value={formData.businessType}
        onChange={(value) => setFormData({ ...formData, businessType: value })}
      />
    </div>
  );
}

function Frame33({ formData, setFormData, handleSubmit, isSubmitting }: { formData: any; setFormData: (data: any) => void; handleSubmit: (e: FormEvent) => void; isSubmitting: boolean }) {
  return (
    <div className="h-[827px] relative shrink-0 w-[446px] z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Button isSubmitting={isSubmitting} onClick={handleSubmit} />
      <Group />
      <Frame37 />
      <Frame38 value={formData.message} onChange={(value) => setFormData({ ...formData, message: value })} />
      <Frame40 dealSize={formData.dealSize} setDealSize={(size) => setFormData({ ...formData, dealSize: size })} />
      <Frame55 goals={formData.goals} setGoals={(goals) => setFormData({ ...formData, goals })} />
      <Frame70 formData={formData} setFormData={setFormData} />
    </div>
  );
}

function Form({ formData, setFormData, handleSubmit, isSubmitting }: { formData: any; setFormData: (data: any) => void; handleSubmit: (e: FormEvent) => void; isSubmitting: boolean }) {
  return (
    <div className="bg-[#121319] drop-shadow-[0px_0px_7.5px_#050047] flex flex-col gap-[32px] items-start p-[40px] relative rounded-[16px] w-[528px] shrink-0" data-name="Form">
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame30 />
      <Frame33 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}

function GetStarted({ formData, setFormData, handleSubmit, isSubmitting }: { formData: any; setFormData: (data: any) => void; handleSubmit: (e: FormEvent) => void; isSubmitting: boolean }) {
  return (
    <div className="flex gap-[32px] items-start justify-center w-full max-w-[1152px] mx-auto mb-[100px]" data-name="Get Started">
      <LeftCol />
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col isolate items-center pb-px relative shrink-0 w-full z-[1]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(228,228,228,0.4)] text-center tracking-[-0.5px] w-full z-[1]">© 2026 PartnerPro Inc. All rights reserved.</p>
    </div>
  );
}

function Copyrights() {
  return (
    <div className="content-stretch flex flex-col isolate items-center py-[32px] relative shrink-0 w-full" data-name="copyrights">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Frame84 />
    </div>
  );
}

export default function Frame85() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    businessType: '',
    goals: [] as string[],
    dealSize: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    if (!formData.fullName || !formData.email || !formData.companyName) {
      setSubmitMessage('❌ Please fill in all required fields');
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage('❌ Please enter a valid email address');
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 3000);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitMessage('✅ Thank you! Our team will be in touch shortly.');
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        businessType: '',
        goals: [],
        dealSize: '',
        message: ''
      });
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      setSubmitMessage('❌ Something went wrong. Please try again.');
      setTimeout(() => setSubmitMessage(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center relative w-full pt-[100px]">
      {submitMessage && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-8 py-4 rounded-lg shadow-2xl z-[200] max-w-md">
          <p className="text-base font-semibold text-center">{submitMessage}</p>
        </div>
      )}
      <GetStarted formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
      <Copyrights />
    </div>
  );
}