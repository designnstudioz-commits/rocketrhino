import imgFirstpromoter from "../../assets/tool-logos/Firstpromoter.png";
import imgIntrow from "../../assets/tool-logos/Introw.png";
import imgPartnerstack from "../../assets/tool-logos/Partnerstack.png";
import imgImpact from "../../assets/tool-logos/Impact.png";
import imgTolt from "../../assets/tool-logos/Tolt.png";
import imgAwin from "../../assets/tool-logos/Awin.png";
import imgEverflow from "../../assets/tool-logos/Everflow.png";
import imgUppromote from "../../assets/tool-logos/Uppromote.png";
import imgKiflo from "../../assets/tool-logos/Kiflo.png";
import imgClay from "../../assets/tool-logos/Clay.png";
import imgGoaffpro from "../../assets/tool-logos/Goaffpro.png";
import imgUpfluence from "../../assets/tool-logos/Upfluence.png";
import imgModash from "../../assets/tool-logos/Modash.png";
import imgRewardful from "../../assets/tool-logos/Rewardful.png";
import imgPartnero from "../../assets/tool-logos/Partnero.png";
import imgHighlevel from "../../assets/tool-logos/Highlevel.png";
import imgHubspot from "../../assets/tool-logos/Hubspot.png";
import imgGooglesheets from "../../assets/tool-logos/Googlesheets.png";
import imgLemlist from "../../assets/tool-logos/Lemlist.png";
import imgClaude from "../../assets/tool-logos/Claude.png";
import imgChatgpt from "../../assets/tool-logos/Chatgpt.png";

const ROW1 = [
  { name: "FirstPromoter", img: imgFirstpromoter },
  { name: "introw",        img: imgIntrow },
  { name: "PartnerStack",  img: imgPartnerstack },
  { name: "impact.com",    img: imgImpact },
  { name: "Tolt",          img: imgTolt },
  { name: "AWIN",          img: imgAwin },
  { name: "Everflow",      img: imgEverflow },
  { name: "UpPromote",     img: imgUppromote },
  { name: "kiflo",         img: imgKiflo },
  { name: "clay",          img: imgClay },
  { name: "GoAffPro",      img: imgGoaffpro },
];

const ROW2 = [
  { name: "Upfluence",    img: imgUpfluence },
  { name: "modash",       img: imgModash },
  { name: "Rewardful",    img: imgRewardful },
  { name: "Partnero",     img: imgPartnero },
  { name: "HighLevel",    img: imgHighlevel },
  { name: "HubSpot",      img: imgHubspot },
  { name: "Google Sheets",img: imgGooglesheets },
  { name: "lemlist",      img: imgLemlist },
  { name: "Claude",       img: imgClaude },
  { name: "ChatGPT",      img: imgChatgpt },
];

function LogoCard({ name, img }: { name: string; img: string }) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-[12px] mx-[16px] cursor-default group">
      <div className="flex items-center justify-center bg-[#ffffff] rounded-[16px] px-[28px] h-[100px] min-w-[180px] max-w-[280px] shadow-[0px_1px_6px_rgba(0,0,0,0.10)] group-hover:shadow-[0px_4px_22px_rgba(191,0,255,0.22)] group-hover:-translate-y-[3px] transition-all duration-300">
        <img
          src={img}
          alt={name}
          className="object-contain"
          style={{ height: "64px", width: "auto", maxWidth: "230px", minWidth: "40px" }}
          onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
        />
      </div>
      <span className="font-['Inter:Regular',sans-serif] font-normal italic text-[#9ca3af] text-[12px] text-center whitespace-nowrap leading-none">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ tools, reverse = false }: { tools: typeof ROW1; reverse?: boolean }) {
  const doubled = [...tools, ...tools];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex items-end py-[10px]"
        style={{
          animation: `${reverse ? "marqueeReverse" : "marquee"} 38s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((tool, i) => (
          <LogoCard key={`${tool.name}-${i}`} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default function ToolsSection() {
  return (
    <div className="bg-[#05060a] w-full overflow-hidden pt-[0px] pb-[60px] sm:pb-[80px] md:pb-[100px] lg:pb-[120px]">

      {/* Separator line */}
      <div className="relative w-full mb-[50px] md:mb-[70px]">
        <div
          className="h-[2px] w-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, rgba(162,27,149,0.6) 25%, rgba(191,0,255,1) 50%, rgba(34,57,191,0.6) 75%, transparent 100%)",
          }}
        />
        <div
          className="h-[1px] w-[60%] mx-auto blur-[6px] -mt-[1px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, rgba(191,0,255,0.8) 50%, transparent 100%)",
          }}
        />
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Header */}
      <div className="max-w-[1100px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px] mb-[50px] md:mb-[70px] text-center">
        <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[34px] sm:leading-[42px] md:leading-[54px] lg:leading-[61px] mb-[20px] md:mb-[24px]">
          We Work With Your Favorite{" "}
          <span className="text-[#bf00ff]">Partnership Tools</span>
        </h2>
        <p className="font-['Montserrat:Light',sans-serif] font-light text-[#cacaca] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[32px] max-w-[280px] sm:max-w-[500px] md:max-w-[750px] lg:max-w-[880px] mx-auto">
          From partner tracking to affiliate programs, referral systems, and partner management workflows — we help you set up, clean up, and operate the tools that support your partner channel.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-[32px]">
        <MarqueeRow tools={ROW1} />
        <MarqueeRow tools={ROW2} reverse />
      </div>

      {/* Footer note */}
      <div className="max-w-[1100px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px] mt-[50px] md:mt-[70px] text-center">
        <p className="font-['Montserrat:Light',sans-serif] font-light text-[#6b7280] text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[26px]">
          Don't see your tool?{" "}
          <span
            className="text-[#bf00ff] cursor-pointer hover:underline underline-offset-2 transition-all duration-200"
            onClick={() => {
              const el = document.getElementById("contact-form-section");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            We can still help
          </span>{" "}
          map the workflow and operating system around it.
        </p>
      </div>
    </div>
  );
}
