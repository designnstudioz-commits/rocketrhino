import { useState, FormEvent } from 'react';
import svgPaths from "./svg-irr7vdxwg9";

export default function RocketRhinoForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    dealSize: '',
    goal: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    console.log('Form submitted:', formData);

    // You can add your actual submission logic here
    // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

    setTimeout(() => {
      alert('Thank you! Our team will be in touch shortly.');
      setIsSubmitting(false);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        dealSize: '',
        goal: '',
        additionalInfo: ''
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#121319] col-1 content-stretch drop-shadow-[0px_0px_7.5px_#050047] flex flex-col isolate items-start ml-0 mt-[90px] sm:mt-0 p-0 relative rounded-[12px] md:rounded-[16px] row-1 w-full max-w-[calc(100vw-32px)] sm:max-w-[480px] md:w-[600px] lg:w-[680px] h-[550px] sm:h-[500px] md:h-[600px] lg:h-[690px] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />

      {/* TidyCal Embed */}
      <iframe
        src="https://tidycal.com/bilal3/strategy"
        width="100%"
        height="100%"
        frameBorder="0"
        className="rounded-[16px]"
        title="Schedule a meeting"
      ></iframe>

      {/* Form Fields Container */}
      <div className="h-[827px] relative shrink-0 w-[446px] z-[1] hidden">
        <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />

        {/* Name and Email Row */}
        <div className="absolute content-stretch flex flex-col gap-[16px] isolate items-start left-0 right-0 top-0">
          <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />

          <div className="content-stretch flex gap-[16px] isolate items-start relative shrink-0 w-full z-[3]">
            <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />

            {/* Full Name */}
            <div className="content-stretch flex flex-col gap-[6px] h-[68px] isolate items-start relative shrink-0 w-[215px] z-[2]">
              <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[211px] z-[2]">
                <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">Full Name</p>
              </div>
              <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    required
                    placeholder="Jane Doe"
                    className="w-full h-full bg-transparent border-0 px-[16px] py-[12px] font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-white tracking-[-0.5px] outline-none focus:ring-2 focus:ring-[#bf00ff] rounded-[12px]"
                  />
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              </div>
            </div>

            {/* Work Email */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] h-[68px] isolate items-start min-w-px relative z-[1]">
              <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[211px] z-[2]">
                <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">Work Email</p>
              </div>
              <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    placeholder="jane@company.com"
                    className="w-full h-full bg-transparent border-0 px-[16px] py-[12px] font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-white tracking-[-0.5px] outline-none focus:ring-2 focus:ring-[#bf00ff] rounded-[12px]"
                  />
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              </div>
            </div>
          </div>

          {/* Company Name */}
          <div className="content-stretch flex flex-col gap-[6px] isolate items-start relative shrink-0 w-full z-[2]">
            <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]">
              <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">Company Name</p>
            </div>
            <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]">
              <div className="overflow-clip rounded-[inherit] size-full">
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  required
                  placeholder="Acme Corp"
                  className="w-full h-full bg-transparent border-0 px-[16px] py-[12px] font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-white tracking-[-0.5px] outline-none focus:ring-2 focus:ring-[#bf00ff] rounded-[12px]"
                />
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
          </div>

          {/* Phone */}
          <div className="content-stretch flex flex-col gap-[6px] isolate items-start relative shrink-0 w-full z-[1]">
            <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]">
              <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">Phone Number</p>
            </div>
            <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]">
              <div className="overflow-clip rounded-[inherit] size-full">
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  required
                  placeholder="+1 (555) 000-0000"
                  className="w-full h-full bg-transparent border-0 px-[16px] py-[12px] font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-white tracking-[-0.5px] outline-none focus:ring-2 focus:ring-[#bf00ff] rounded-[12px]"
                />
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
          </div>
        </div>

        {/* Deal Size Selection */}
        <div className="absolute content-stretch flex flex-col gap-[12px] isolate items-start left-0 pt-[8px] right-0 top-[432px]">
          <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]">
            <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">{`What's your average deal size?`}</p>
          </div>

          <div className="content-start flex flex-wrap gap-[12px] isolate items-start relative shrink-0 w-full z-[1]">
            <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
            {['Under $1K', '$1K – $5K', '$5K – $20K', '$20K+'].map((option) => (
              <label
                key={option}
                className={`bg-[rgba(5,6,10,0.3)] content-stretch flex gap-[12px] h-[42px] isolate items-center p-[12px] relative rounded-[12px] shrink-0 cursor-pointer transition-all ${
                  formData.dealSize === option ? 'border-2 border-[#bf00ff]' : 'border border-[rgba(44,48,144,0.3)]'
                }`}
              >
                <input
                  type="radio"
                  name="dealSize"
                  value={option}
                  checked={formData.dealSize === option}
                  onChange={(e) => handleChange('dealSize', e.target.value)}
                  className="appearance-none"
                  required
                />
                <div className={`relative rounded-[9999px] shrink-0 size-[16px] z-[2] border ${
                  formData.dealSize === option ? 'border-[#bf00ff]' : 'border-[rgba(156,163,175,0.5)]'
                }`}>
                  {formData.dealSize === option && (
                    <div className="absolute inset-[3px] rounded-full bg-[#bf00ff]" />
                  )}
                </div>
                <div className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 z-[1]">
                  <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] whitespace-nowrap z-[1]">
                    <p className="leading-[16px]">{option}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Goal Selection */}
        <div className="absolute content-stretch flex flex-col gap-[12px] isolate items-start left-0 pt-[8px] right-0 top-[254px]">
          <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col h-[16px] isolate items-start pb-px relative shrink-0 w-[442px] z-[2]">
            <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] w-full z-[1]">What's your primary goal?</p>
          </div>

          <div className="content-stretch grid grid-cols-2 gap-[10px] isolate items-start relative shrink-0 w-full z-[1]">
            <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
            {[
              'Build a new partner program',
              'Recruit strategic partners',
              'Scale existing partner program',
              'Activate existing partners'
            ].map((option) => (
              <label
                key={option}
                className={`h-[42px] relative shrink-0 w-full z-[1] cursor-pointer transition-all`}
              >
                <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
                <div className={`content-stretch flex gap-[12px] isolate items-center pr-[16px] py-[12px] relative size-full rounded-[12px] ${
                  formData.goal === option ? 'bg-[rgba(191,0,255,0.1)] border-2 border-[#bf00ff]' : 'border border-[rgba(44,48,144,0.3)]'
                }`}>
                  <input
                    type="radio"
                    name="goal"
                    value={option}
                    checked={formData.goal === option}
                    onChange={(e) => handleChange('goal', e.target.value)}
                    className="appearance-none"
                    required
                  />
                  <div className={`relative rounded-[4px] shrink-0 size-[20px] z-[2] border-2 ${
                    formData.goal === option ? 'border-[#bf00ff] bg-[#bf00ff]' : 'border-[rgba(156,163,175,0.5)]'
                  }`}>
                    {formData.goal === option && (
                      <svg className="absolute inset-0 size-full" viewBox="0 0 20 20" fill="none">
                        <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e4e4e4] text-[12px] tracking-[-0.5px] whitespace-nowrap z-[1]">
                    <p className="leading-[20px]">{option}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Additional Info Textarea */}
        <div className="absolute content-stretch flex flex-col gap-[6px] isolate items-start left-0 pt-[8px] right-0 top-[584px]">
          <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex h-[16px] isolate items-start pb-px pr-[3px] relative shrink-0 w-[442px] z-[2]">
            <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-black tracking-[-0.5px] whitespace-nowrap z-[1]">
              <span className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] text-[#e4e4e4] text-[12px]">{`Anything else we should know? `}</span>
              <span className="leading-[16px] text-[12px] text-[rgba(156,163,175,0.5)]">(Optional)</span>
            </p>
          </div>
          <div className="bg-[rgba(5,6,10,0.5)] relative rounded-[12px] shrink-0 w-full z-[1]">
            <div className="overflow-clip rounded-[inherit] size-full">
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => handleChange('additionalInfo', e.target.value)}
                placeholder="Tell us about your current challenges..."
                rows={3}
                className="w-full bg-transparent border-0 px-[16px] py-[12px] font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-white tracking-[-0.5px] outline-none focus:ring-2 focus:ring-[#bf00ff] rounded-[12px] resize-none"
              />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(44,48,144,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="absolute bg-[#bf00ff] hover:bg-[#a000d9] disabled:opacity-50 disabled:cursor-not-allowed content-stretch flex gap-[8px] isolate items-center justify-center left-0 py-[16px] rounded-[12px] top-[720px] w-[446px] border-0 transition-all duration-200"
        >
          <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="content-stretch flex flex-col isolate items-center py-[2px] relative shrink-0 z-[2]">
            <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.5px] whitespace-nowrap z-[1]">
              <p className="leading-[24px]">{isSubmitting ? 'Submitting...' : 'See Available Time'}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col isolate items-center py-[3px] relative shrink-0 w-[12px] z-[1]">
            <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col h-[16px] isolate items-center py-[2px] relative shrink-0 w-[12.125px] z-[1]">
              <div className="h-[14px] relative shrink-0 w-[12.25px] z-[1]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 14">
                  <g>
                    <g clipPath="url(#clip0_1_1130)">
                      <path d={svgPaths.pde8daf0} fill="white" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1130">
                      <path d="M0 0H12.25V14H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Privacy Policy */}
        <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal left-[80px] not-italic text-[12px] top-[810px] tracking-[-0.5px] whitespace-nowrap">
          <a href="/privacy" className="absolute decoration-solid leading-[24px] left-[294px] text-white top-[810px] underline hover:text-[#bf00ff]">Privacy Policy</a>
          <p className="-translate-x-1/2 absolute leading-[16px] left-[186px] text-[#9ca3af] text-center top-[814px]">By submitting this form, you agree to our</p>
        </div>

        {/* Divider */}
        <div className="absolute h-px left-0 top-[866px] w-[446px]">
          <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </form>
  );
}
