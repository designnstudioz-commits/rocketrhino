import svgPaths from "../../imports/Group228/svg-q6h46joxzp";

function IconHandshake() {
  return (
    <div className="h-[40px] sm:h-[55.77px] w-[25px] sm:w-[34.856px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
        <g>
          <path d="M8 24c0-2.12 1.72-3.84 3.84-3.84H16v7.68h-4.16C9.72 27.84 8 26.12 8 24zm32 0c0-2.12-1.72-3.84-3.84-3.84H32v7.68h4.16c2.12 0 3.84-1.72 3.84-3.84zM12 20.16h8v7.68h-8zm16 0h8v7.68h-8zM16 16h16v3.2H16z" fill="var(--fill-0, #BF00FF)" />
        </g>
      </svg>
    </div>
  );
}

function IconReferral() {
  return (
    <div className="h-[40px] sm:h-[55.77px] w-[25px] sm:w-[34.856px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
        <g>
          <circle cx="24" cy="10" r="4" fill="var(--fill-0, #BF00FF)" />
          <path d="M24 16c-2.2 0-4 1.8-4 4v8h2v-8c0-1.1.9-2 2-2s2 .9 2 2v8h2v-8c0-2.2-1.8-4-4-4z" fill="var(--fill-0, #BF00FF)" />
          <circle cx="12" cy="32" r="4" fill="var(--fill-0, #BF00FF)" />
          <path d="M12 38c-2.2 0-4 1.8-4 4v2h2v-2c0-1.1.9-2 2-2s2 .9 2 2v2h2v-2c0-2.2-1.8-4-4-4z" fill="var(--fill-0, #BF00FF)" />
          <circle cx="36" cy="32" r="4" fill="var(--fill-0, #BF00FF)" />
          <path d="M36 38c-2.2 0-4 1.8-4 4v2h2v-2c0-1.1.9-2 2-2s2 .9 2 2v2h2v-2c0-2.2-1.8-4-4-4z" fill="var(--fill-0, #BF00FF)" />
          <path d="M24 20v8M18 28l-6 4M30 28l6 4" stroke="var(--stroke-0, #BF00FF)" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function IconCorporate() {
  return (
    <div className="h-[40px] sm:h-[55.77px] w-[25px] sm:w-[34.856px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
        <g>
          <rect x="8" y="12" width="10" height="22" rx="1" fill="var(--fill-0, #BF00FF)" opacity="0.6" />
          <rect x="22" y="8" width="10" height="26" rx="1" fill="var(--fill-0, #BF00FF)" />
          <rect x="36" y="14" width="10" height="20" rx="1" fill="var(--fill-0, #BF00FF)" opacity="0.6" />
          <rect x="6" y="34" width="36" height="2" rx="1" fill="var(--fill-0, #BF00FF)" />
          <circle cx="13" cy="18" r="1.5" fill="white" />
          <circle cx="13" cy="23" r="1.5" fill="white" />
          <circle cx="13" cy="28" r="1.5" fill="white" />
          <circle cx="27" cy="14" r="1.5" fill="white" />
          <circle cx="27" cy="19" r="1.5" fill="white" />
          <circle cx="27" cy="24" r="1.5" fill="white" />
          <circle cx="41" cy="20" r="1.5" fill="white" />
          <circle cx="41" cy="25" r="1.5" fill="white" />
        </g>
      </svg>
    </div>
  );
}

function Connector() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center gap-[3px] w-[89px] shrink-0 self-center">
      <svg className="block w-full h-[5.33px]" fill="none" preserveAspectRatio="none" viewBox="0 0 94.3333 5.33333">
        <path d={svgPaths.p1de8a100} fill="var(--stroke-0, #BF00FF)" fillOpacity="0.72" />
      </svg>
      <div className="w-[68px] h-[6px] relative">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 14">
          <g filter="url(#filter0_f_connector)" style={{ mixBlendMode: "hard-light" }}>
            <ellipse cx="38" cy="7" fill="var(--fill-0, #D146FF)" rx="34" ry="3" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14" id="filter0_f_connector" width="76" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="2" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

interface PartnerCardProps {
  icon: "handshake" | "referral" | "corporate";
  title: string;
  description: string;
}

function PartnerCard({ icon, title, description }: PartnerCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case "handshake":
        return <IconHandshake />;
      case "referral":
        return <IconReferral />;
      case "corporate":
        return <IconCorporate />;
      default:
        return <IconHandshake />;
    }
  };

  return (
    <div className="relative w-full">
      <div className="bg-white border border-[#f8f8f8] rounded-[26px] shadow-[0px_18px_43.2px_0px_rgba(238,188,255,0.54)] h-full sm:min-h-[450px] md:min-h-[489px] p-[32px] md:p-[39px] flex flex-col">
        <div className="bg-[rgba(191,0,255,0.08)] rounded-[18.59px] w-[70px] h-[70px] sm:w-[99.147px] sm:h-[99.147px] flex items-center justify-center mb-[40px] sm:mb-[56px] md:mb-[66px] shrink-0">
          {renderIcon()}
        </div>
        <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050047] text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] md:leading-[32px] mb-[16px] md:mb-[20px]">
          {title}
        </h3>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#9ca3af] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] md:leading-[26px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function StrategicPartnerChannels() {
  return (
    <div className="bg-[#fefbff] w-full py-[60px] sm:py-[80px] md:py-[100px] lg:py-[126px]">
      <div className="max-w-[1225px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[60px] md:mb-[80px] lg:mb-[99px]">
          <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[#050047] text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[38px] sm:leading-[46px] md:leading-[56px] lg:leading-[normal] mb-[20px] md:mb-[23px]">
            Strategic Partner Channels{" "}
            <span className="text-[#bf00ff]">We Build</span>
          </h2>
          <p className="font-['Inter:Light',sans-serif] font-light text-[#0f0f0f] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] max-w-[280px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[797px]">
            RocketRhino™ helps you recruit and activate the right partners to
            drive consistent referrals, co-marketing opportunities, and
            high-trust deals.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-[40px] lg:gap-[12px]">
          <PartnerCard
            icon="handshake"
            title="Strategic Partners"
            description="Complementary businesses serving the same customers without competing."
          />
          <Connector />
          <PartnerCard
            icon="referral"
            title="Customer Referral Programs"
            description="Turn satisfied clients into a powerful word-of-mouth revenue channel."
          />
          <Connector />
          <PartnerCard
            icon="corporate"
            title="Corporate Partnerships"
            description="Collaborate with larger organizations to unlock new distribution opportunities."
          />
        </div>
      </div>
    </div>
  );
}
