import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { User } from "lucide-react";
import svgPaths from "../../imports/Testimonials/svg-aog8xacjor";

function StarIcon() {
  return (
    <div className="size-[20px] sm:size-[22px] md:size-[24px] relative shrink-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d={svgPaths.p9b81900}
            fill="url(#paint0_linear_star_testimonial)"
            stroke="url(#paint1_linear_star_testimonial)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_star_testimonial"
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
            id="paint1_linear_star_testimonial"
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
          <g filter="url(#filter_star_glow_testimonial)" opacity="0.6">
            <path
              d={svgPaths.p19452100}
              fill="url(#paint0_linear_glow_testimonial)"
              stroke="url(#paint1_linear_glow_testimonial)"
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
              id="filter_star_glow_testimonial"
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
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="8" />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_glow_testimonial"
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
              id="paint1_linear_glow_testimonial"
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

interface TestimonialCardProps {
  text: string;
  name: string;
  company: string;
  videoUrl?: string;
}

function TestimonialCard({ text, name, company, videoUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[20px] sm:rounded-[24px] md:rounded-[28px] shadow-[0px_4px_14px_0px_rgba(170,25,146,0.14)] p-[24px] sm:p-[32px] md:p-[40px] flex flex-col justify-between w-full h-full min-h-[420px] sm:min-h-[440px] md:min-h-[470px] lg:min-h-[520px]">
      {/* Stars */}
      <div className="flex gap-[6px] sm:gap-[7px] md:gap-[8px] mb-[24px] sm:mb-[32px] md:mb-[38px]">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="font-['Inter:Italic',sans-serif] italic text-[#9ca3af] text-[14px] sm:text-[15px] md:text-[16px] leading-[26px] sm:leading-[30px] md:leading-[32px] mb-auto">
        {text}
      </p>

      {/* Profile */}
      <div className="flex items-center gap-[14px] sm:gap-[16px] md:gap-[18px] mt-[24px] sm:mt-[32px] md:mt-[36px]">
        <div className="size-[48px] sm:size-[56px] md:size-[64px] rounded-full bg-[#f3e5ff] text-[#7c1ad3] flex items-center justify-center shrink-0">
          <User className="size-[22px] sm:size-[26px] md:size-[30px]" />
        </div>
        <div>
          <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#7c1ad3] text-[15px] sm:text-[16px] md:text-[17px] leading-[22px] sm:leading-[24px] md:leading-[26px] mb-[2px]">
            {name}
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[#9ca3af] text-[13px] sm:text-[14px] md:text-[15px] leading-[18px] sm:leading-[20px] md:leading-[22px]">
            {company}
          </p>
        </div>
      </div>
      {videoUrl ? (
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="mt-[24px] sm:mt-[28px] inline-flex items-center justify-center gap-[10px] rounded-[16px] bg-[#f3e5ff] px-[20px] py-[14px] text-[15px] font-semibold text-[#5d1287] shadow-[0px_12px_30px_rgba(184,67,236,0.15)] transition-colors hover:bg-[#e1c4ff]"
            >
              <span className="size-[16px] rounded-full bg-[#7c1ad3] text-white inline-flex items-center justify-center">
                ▶
              </span>
              Watch Video
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-[90vw] sm:max-w-[760px] p-0 overflow-hidden">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                title={`${name} testimonial video`}
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    const updateSlidesPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerPage(3);
      } else if (width >= 640) {
        setSlidesPerPage(2);
      } else {
        setSlidesPerPage(1);
      }
    };

    updateSlidesPerPage();
    window.addEventListener("resize", updateSlidesPerPage);
    return () => window.removeEventListener("resize", updateSlidesPerPage);
  }, []);

  const testimonials = [
    {
      text: '"Bilal has been excellent to work with — proactive, reliable, and consistently bringing strong partnership ideas to the table. He communicates clearly, takes ownership, and genuinely adds value beyond what’s expected."',
      name: "Ben A.",
      company: "Unavelle | Luxury Home Maintenance",
      videoUrl: "https://www.youtube.com/embed/uVnwr649bbc",
    },
    {
      text: '"Bilal has a strong grasp of building structured partnership systems that go beyond ad-hoc efforts. He’s professional, easy to work with, and brings clear, strategic thinking to how partnerships should be approached."',
      name: "Omer S.",
      company: "Sher & Co. Global | Boutique Investment Banking",
    },
    {
      text: '"Bilal exceeded our expectations! We generate more than 50% of our revenue through partnerships as a result of his hard work, dedication, consistency and the amazing systems he has built for us."',
      name: "Mo K.",
      company: "The AdExecutives | Digital Marketing Agency",
    },
    {
      text: '"Bilal helped us turn our partner relationships into a more structured and revenue-focused program. His support directly helped us organize the process, activate co-selling opportunities, and close partner-driven deals."',
      name: "Law Firm",
      company: "Client Information Confidential Upon Request",
    },
  ];

  const totalPages = Math.max(1, Math.ceil(testimonials.length / slidesPerPage));
  const lastPageStart = Math.max(0, testimonials.length - slidesPerPage);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const selectedSnap = emblaApi.selectedScrollSnap();
    const pageIndex = selectedSnap >= lastPageStart
      ? totalPages - 1
      : Math.floor(selectedSnap / slidesPerPage);
    setCurrentIndex(pageIndex);
  }, [emblaApi, slidesPerPage, lastPageStart, totalPages]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const goToSlide = useCallback(
    (pageIndex: number) => {
      if (emblaApi) emblaApi.scrollTo(pageIndex * slidesPerPage);
    },
    [emblaApi, slidesPerPage]
  );

  const nextSlide = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const prevSlide = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <div className="bg-[#fefbff] w-full py-[60px] sm:py-[80px] md:py-[90px] relative overflow-hidden">
      {/* Purple glow background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[40%] w-full max-w-[1214px] h-[300px] sm:h-[350px] md:h-[380px] pointer-events-none">
        <div
          className="w-full h-full blur-[180px] rounded-full transform -scale-y-100 rotate-180"
          style={{ backgroundColor: "rgba(98,32,172,0.21)" }}
        />
      </div>

      <div className="relative z-10 max-w-[1175px] mx-auto px-[16px] sm:px-[24px] md:px-[32px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[40px] sm:mb-[60px] md:mb-[77px]">
          <h2 className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#050047] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] leading-[40px] sm:leading-[58px] md:leading-[76px] lg:leading-[92px] tracking-[-1.12px] mb-[12px] sm:mb-[15px] max-w-[280px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1074px]">
            What Clients Say After{" "}
            <span className="text-[#bf00ff]">Partnerships</span> Start Working
          </h2>
          <p className="font-['Inter:Light',sans-serif] font-light text-[#0f0f0f] text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] max-w-[280px] sm:max-w-[500px] md:max-w-[700px]">
            Hear from businesses that turned relationships into a scalable
            growth channel.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden py-[20px] h-full" ref={emblaRef}>
            <div className="flex touch-pan-y cursor-grab active:cursor-grabbing items-stretch h-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 h-full flex flex-col justify-between px-[16px] sm:px-[21px]"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>


          {/* Dots Indicator */}
          <div className="flex justify-center gap-[6px] mt-[20px] sm:mt-[24px]">
            {Array.from(
              { length: Math.ceil(testimonials.length / slidesPerPage) },
              (_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => goToSlide(pageIndex)}
                  className={`size-[10px] rounded-full transition-colors ${
                    pageIndex === currentIndex ? "bg-[#bf00ff]" : "bg-[#d9d9d9]"
                  }`}
                  aria-label={`Go to testimonial page ${pageIndex + 1}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
