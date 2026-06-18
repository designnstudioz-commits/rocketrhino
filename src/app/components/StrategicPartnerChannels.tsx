import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {
  Handshake,
  Users,
  Target,
  Building2,
  Megaphone,
  MapPin,
  Globe,
} from "lucide-react";

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="drop-shadow-[0px_0px_10px_rgba(162,27,149,0.4)] flex items-center justify-center p-[2.5px] rounded-[20px] shrink-0 w-[70px] h-[70px] sm:w-[86px] sm:h-[86px] mb-[32px] sm:mb-[44px]"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(162, 27, 149) 0%, rgb(34, 57, 191) 100%)" }}
    >
      <div className="bg-white flex items-center justify-center w-full h-full rounded-[18px]">
        {children}
      </div>
    </div>
  );
}

const ICON_SIZE = 30;
const ICON_COLOR = "#BF00FF";
const ICON_STROKE = 1.5;

const CARDS = [
  {
    icon: <Handshake size={ICON_SIZE} color={ICON_COLOR} strokeWidth={ICON_STROKE} />,
    title: "Strategic Partners",
    description: "Complementary businesses serving the same customers without competing.",
  },
  {
    icon: <Users size={ICON_SIZE} color={ICON_COLOR} strokeWidth={ICON_STROKE} />,
    title: "Customer Referral Programs",
    description: "Turn satisfied clients, users, or buyers into a word-of-mouth revenue channel.",
  },
  {
    icon: <Target size={ICON_SIZE} color={ICON_COLOR} strokeWidth={ICON_STROKE} />,
    title: "Co-Selling Partners",
    description: "Work with partners who can introduce, influence, or help close shared opportunities.",
  },
  {
    icon: <Building2 size={ICON_SIZE} color={ICON_COLOR} strokeWidth={ICON_STROKE} />,
    title: "Corporate Partnerships",
    description: "Collaborate with larger organizations to unlock new distribution opportunities.",
  },
  {
    icon: <Megaphone size={ICON_SIZE} color={ICON_COLOR} strokeWidth={ICON_STROKE} />,
    title: "Influencers, UGC Creators & Affiliates",
    description: "Leverage trusted creators, ambassadors, communities, and industry voices to drive referrals.",
  },
  {
    icon: <MapPin size={ICON_SIZE} color={ICON_COLOR} strokeWidth={ICON_STROKE} />,
    title: "Local Brand Partnerships",
    description: "Partner with local businesses that share your customer base.",
  },
  {
    icon: <Globe size={ICON_SIZE} color={ICON_COLOR} strokeWidth={ICON_STROKE} />,
    title: "Platform & Marketplace Partners",
    description: "Collaborate with platforms, tools, marketplaces, and ecosystems your audience already uses.",
  },
];

function PartnerCard({ icon, title, description }: typeof CARDS[0]) {
  return (
    <div className="px-[10px] h-full">
      <div className="bg-white border border-[#f0e8ff] rounded-[26px] shadow-[0px_18px_43.2px_0px_rgba(238,188,255,0.54)] h-full p-[28px] md:p-[36px] flex flex-col">
        <IconBox>{icon}</IconBox>
        <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#050047] text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] mb-[12px] md:mb-[16px]">
          {title}
        </h3>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#9ca3af] text-[14px] md:text-[15px] leading-[22px] md:leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
}

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 400,
  swipe: true,
  draggable: true,
  touchMove: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

export default function StrategicPartnerChannels() {
  return (
    <div className="bg-[#fefbff] w-full py-[60px] sm:py-[80px] md:py-[100px] lg:py-[126px]">
      <div className="max-w-[1225px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[60px] md:mb-[80px] lg:mb-[80px]">
          <h2 className="font-['Montserrat:Bold',sans-serif] font-bold text-[#050047] text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[38px] sm:leading-[46px] md:leading-[56px] lg:leading-[normal] mb-[20px] md:mb-[23px]">
            Strategic Partner Channels
            <br />
            <span className="text-[#bf00ff]">We Build & Activate</span>
          </h2>
          <p className="font-['Inter:Light',sans-serif] font-light text-[#0f0f0f] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] max-w-[280px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[860px]">
            RocketRhino™ helps you recruit and activate the right partners to drive referrals, co-selling opportunities, co-marketing campaigns, warm introductions, and high-trust deals.
          </p>
        </div>

        {/* Slider */}
        <div className="partner-slider">
          <Slider {...sliderSettings}>
            {CARDS.map((card) => (
              <PartnerCard key={card.title} {...card} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
