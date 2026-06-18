import svgPaths from "../../imports/HighTrust/svg-evu526vvub";
import imgNetwork from "../../imports/HighTrust/503222493397382df87458696c9728307c6ab35e.png";

interface IndustryTagProps {
  label: string;
}

function IndustryTag({ label }: IndustryTagProps) {
  return (
    <div className="bg-gradient-to-r from-[rgba(255,6,119,0.11)] via-[rgba(119,37,163,0.11)] to-[rgba(34,57,191,0.11)] rounded-[30px] px-[20px] py-[12px] md:py-[17px] relative">
      <div aria-hidden="true" className="absolute border border-[#691866] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="font-['Montserrat:Light',sans-serif] text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[16px] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

function CheckmarkIcon() {
  return (
    <div className="size-[20px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
        <g>
          <circle cx="10" cy="10" r="9.5" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.pabea6f0} fill="var(--fill-0, white)" />
        </g>
      </svg>
    </div>
  );
}

export default function HighTrustIndustries() {
  const industriesRow1 = [
    "Home Services",
    "Accounting & Finance",
    "Events",
    "Tourism",
    "Education",
  ];

  const industriesRow2 = [
    "Marketing",
    "Consulting",
    "Supply Chain/Manufacturing",
    "HR",
    "Law Firms",
  ];

  return (
    <div className="bg-[#05060a] w-full py-[60px] sm:py-[80px] md:py-[100px] lg:py-[126px]">
      <div className="max-w-[997px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-[40px] md:mb-[60px]">
          <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[34px] sm:leading-[42px] md:leading-[54px] lg:leading-[61px] mb-[20px] md:mb-[24px] max-w-[280px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[821px]">
            Partnerships Work Across Every{" "}
            <span className="text-[#bf00ff]">High-Trust</span> Industry
          </h2>
          <p className="font-['Montserrat:Light',sans-serif] font-light text-[#cacaca] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[32px] max-w-[280px] sm:max-w-[500px] md:max-w-[750px] lg:max-w-[951px]">
            RocketRhino™ has helped agencies, trades, and professional service
            firms build high-performing partner programs across industries
            including:
          </p>
        </div>

        {/* Network Image */}
        <div className="relative w-full mb-[40px] md:mb-[60px] lg:mb-[80px] flex justify-center -mt-[50px]">
          <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[969px]">
            <img
              src={imgNetwork}
              alt="Partnership network visualization"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Industry Tags */}
        <div className="flex flex-col gap-[24px] md:gap-[34px] items-center mb-[40px] md:mb-[62px]">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px]">
            {industriesRow1.map((industry) => (
              <IndustryTag key={industry} label={industry} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px]">
            {industriesRow2.map((industry) => (
              <IndustryTag key={industry} label={industry} />
            ))}
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="flex justify-center">
          <div className="bg-[rgba(34,57,191,0.16)] border border-[#2a2b2d] rounded-[14px] px-[16px] sm:px-[20px] py-[12px] sm:py-[17px] flex items-center gap-[8px] sm:gap-[10px]">
            <CheckmarkIcon />
            <p className="font-['Montserrat:Light',sans-serif] text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] leading-[16px] whitespace-nowrap">
              Partner programs built across 10+ industries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
