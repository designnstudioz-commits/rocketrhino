import svgPaths from "../../imports/Frame264/svg-2h5k2bx83k";
import imgPartnershipLeaders from "../../imports/Frame264/163ee27f00bfe38ad226e9b73b4c5805b92a2a9c.webp";
import imgJMU from "../../imports/Frame264/d6e6d1b848d27254a7126edd9c10926d4a3eadff.webp";
import imgBilal from "../../imports/Frame264/fe4504c781d652bd62b8d6dea07f4b471319c879.webp";

function CheckIcon() {
  return (
    <div className="size-[20px] shrink-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
      >
        <g>
          <circle cx="10" cy="10" fill="var(--fill-0, #5D2BAC)" r="10" />
          <path d={svgPaths.pabea6f0} fill="var(--fill-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function StarIcon() {
  return (
    <div className="size-[24px] relative">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d={svgPaths.p9b81900}
            fill="url(#paint0_linear_star)"
            stroke="url(#paint1_linear_star)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_star"
            x1="3.12182"
            x2="27.3907"
            y1="3.3776"
            y2="6.30838"
          >
            <stop stopColor="#B7178E" />
            <stop offset="0.2874" stopColor="#A81A93" />
            <stop offset="1" stopColor="#87229E" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_star"
            x1="3.12182"
            x2="27.3907"
            y1="3.3776"
            y2="6.30838"
          >
            <stop stopColor="#B7178E" />
            <stop offset="0.2874" stopColor="#A81A93" />
            <stop offset="1" stopColor="#87229E" />
          </linearGradient>
        </defs>
      </svg>
      {/* Glow effect */}
      <div className="absolute inset-[-62.5%] opacity-60 pointer-events-none">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 54.0018 53.0721"
        >
          <g filter="url(#filter_star_glow)" opacity="0.6">
            <path
              d={svgPaths.p19452100}
              fill="url(#paint0_linear_glow)"
              stroke="url(#paint1_linear_glow)"
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
              id="filter_star_glow"
              width="56"
              x="-0.9982"
              y="-1.00011"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur"
                stdDeviation="8"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_glow"
              x1="18.1236"
              x2="42.3925"
              y1="18.3775"
              y2="21.3083"
            >
              <stop stopColor="#B7178E" />
              <stop offset="0.2874" stopColor="#A81A93" />
              <stop offset="1" stopColor="#87229E" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_glow"
              x1="18.1236"
              x2="42.3925"
              y1="18.3775"
              y2="21.3083"
            >
              <stop stopColor="#B7178E" />
              <stop offset="0.2874" stopColor="#A81A93" />
              <stop offset="1" stopColor="#87229E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function AboutBilal() {
  return (
    <div className="bg-[#05060a] w-full py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]">
        {/* Mobile: Title at top */}
        <h2 className="lg:hidden font-['Montserrat:Bold',sans-serif] text-[#e5e7eb] text-[32px] sm:text-[44px] md:text-[52px] leading-[38px] sm:leading-[50px] md:leading-[58px] text-center mb-[40px] sm:mb-[60px]">
          About Bilal Quddoos
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-[40px] sm:gap-[60px] lg:gap-[80px]">
          {/* Left Side - Content */}
          <div className="flex-1 w-full">
            {/* Desktop: Title with gradient */}
            <h2
              className="hidden lg:block font-['Montserrat:Bold',sans-serif] text-[48px] leading-[72px] mb-[8px]"
              style={{
                background:
                  "linear-gradient(166.098deg, rgb(174, 103, 255) 11.583%, rgb(34, 211, 238) 164.3%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Bilal Quddoos
            </h2>

            {/* Subtitle */}
            <p className="font-['Montserrat:Medium',sans-serif] text-[#9ca3af] text-[18px] sm:text-[20px] md:text-[22px] leading-[28px] sm:leading-[30px] md:leading-[33px] mb-[24px] sm:mb-[32px] md:mb-[40px]">
              Founder & CEO, RocketRhino™
            </p>

            {/* Description */}
            <div className="font-['Inter:Regular',sans-serif] text-[#e5e7eb] text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] md:leading-[36px] mb-[32px] sm:mb-[40px] md:mb-[48px]">
              <p className="mb-[16px] sm:mb-[20px] md:mb-[24px]">
                Bilal is a partnerships strategist with{" "}
                <span className="font-['Inter:Bold',sans-serif] text-[#bf00ff]">
                  7+ years of experience building strategic partner programs
                </span>{" "}
                that generate scalable revenue.
              </p>
              <p>
                After helping companies generate millions in partner-driven
                revenue, he founded RocketRhino™ to help high-ticket service
                businesses turn relationships into structured partner systems
                that drive predictable growth.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-[12px] mb-[32px] sm:mb-[40px]">
              <div className="flex items-center gap-[16px] sm:gap-[20px]">
                <div
                  className="size-[20px] rounded-full shrink-0"
                  style={{
                    background:
                      "linear-gradient(119.177deg, rgb(174, 103, 255) 11.583%, rgb(34, 211, 238) 164.3%)",
                  }}
                />
                <p className="font-['Inter:Regular',sans-serif] text-[#e5e7eb] text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] sm:leading-[28px] md:leading-[30px]">
                  Executive Member, Partnership Leaders
                </p>
              </div>
              <div className="flex items-center gap-[16px] sm:gap-[20px]">
                <div
                  className="size-[20px] rounded-full shrink-0"
                  style={{
                    background:
                      "linear-gradient(119.177deg, rgb(174, 103, 255) 11.583%, rgb(34, 211, 238) 164.3%)",
                  }}
                />
                <p className="font-['Inter:Regular',sans-serif] text-[#e5e7eb] text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] sm:leading-[28px] md:leading-[30px]">
                  James Madison University Alum
                </p>
              </div>
            </div>

            {/* Logos */}
            <div className="flex items-center gap-[20px] sm:gap-[25px] mb-[32px] sm:mb-[40px]">
              <div className="bg-white rounded-[97px] px-[20px] sm:px-[24px] md:px-[29px] py-[6px] h-[60px] sm:h-[68px] md:h-[75px] flex items-center">
                <img
                  src={imgPartnershipLeaders}
                  alt="Partnership Leaders"
                  className="h-[48px] sm:h-[56px] md:h-[62px] w-auto object-contain"
                />
              </div>
              <div className="bg-white rounded-full size-[95px] sm:size-[105px] md:size-[115px] flex items-center justify-center p-[4px]">
                <img
                  src={imgJMU}
                  alt="James Madison University"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center gap-[12px]">
                <CheckIcon />
                <p className="font-['Montserrat:Medium_Italic',sans-serif] italic text-white text-[14px] sm:text-[16px] leading-[normal]">
                  $3M+ in Partner-Driven Revenue
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <CheckIcon />
                <p className="font-['Montserrat:Medium_Italic',sans-serif] italic text-white text-[14px] sm:text-[16px] leading-[normal]">
                  100+ Strategic Partnerships Built
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <CheckIcon />
                <p className="font-['Montserrat:Medium_Italic',sans-serif] italic text-white text-[14px] sm:text-[16px] leading-[normal]">
                  7+ Years Partnership Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <div className="relative max-w-[400px] sm:max-w-[500px] lg:max-w-[577px] mx-auto">
              {/* Image */}
              <div className="relative w-full aspect-[577/752] rounded-[20px] overflow-hidden">
                <img
                  src={imgBilal}
                  alt="Bilal Quddoos"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating Badge - Desktop (absolute position) */}
              <div className="hidden lg:block absolute bottom-[40px] left-[62px]">
                <p className="font-['Montserrat:Medium',sans-serif] text-[#e0e0e0] text-[22px] leading-[33px] mb-[16px]">
                  Consistently Rated 5-Stars
                </p>
                <div className="flex gap-[8px]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* Rating Badge - Mobile/Tablet (below image) */}
            <div className="lg:hidden mt-[24px] sm:mt-[32px] text-center">
              <p className="font-['Montserrat:Medium',sans-serif] text-[#e0e0e0] text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] mb-[12px] sm:mb-[16px]">
                Consistently Rated 5-Stars
              </p>
              <div className="flex gap-[6px] sm:gap-[8px] justify-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
