import { Circle } from "lucide-react";
// image is now served from the public folder
const colorfulBobaImage = "/5145690b23f593865d795fdca6ca4b7fad7aa497.png";

export function Slide3Concept() {
  const concepts = [
    {
      icon: "🥤",
      title: "SIP",
      description: "Premium bubble tea experience with popping boba",
      color: "from-[#5B2C83] to-[#7B4CA3]",
    },
    {
      icon: "💥",
      title: "POP",
      description: "Unique popping sensation that creates memorable moments",
      color: "from-[#FF4F8B] to-[#FF6FA3]",
    },
    {
      icon: "📸",
      title: "SNAP",
      description: "Instagram-worthy presentation for social sharing",
      color: "from-[#FFC857] to-[#FFD77A]",
    },
    {
      icon: "📱",
      title: "SHARE",
      description: "Social media engagement with branded hashtags",
      color: "from-[#5B2C83] to-[#FF4F8B]",
    },
    {
      icon: "🎮",
      title: "PLAY",
      description: "Interactive mobile game for customer engagement",
      color: "from-[#FF4F8B] to-[#FFC857]",
    },
  ];

  return (
    <div className="h-full bg-white p-6 md:p-12 lg:p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
          <div className="h-1 w-12 md:w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-xs md:text-sm font-bold text-[#5B2C83] tracking-wider uppercase">
            Core Concept
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Five-Step Experience Journey
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column - Concepts */}
        <div className="space-y-4 md:space-y-6">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#5B2C83]/30 hover:shadow-lg transition-all"
            >
              {/* Number Badge */}
              <div className="absolute -top-2 md:-top-3 -left-2 md:-left-3 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#5B2C83] to-[#FF4F8B] rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg">
                {index + 1}
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                {/* Icon */}
                <div className="text-3xl md:text-4xl">{concept.icon}</div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                    {concept.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {concept.description}
                  </p>
                </div>

                {/* Color Indicator */}
                <div
                  className={`w-1 h-12 md:h-16 bg-gradient-to-b ${concept.color} rounded-full`}
                ></div>
              </div>
            </div>
          ))}

          {/* Summary Box */}
          <div className="bg-gradient-to-br from-[#5B2C83] to-[#7B4CA3] text-white rounded-xl md:rounded-2xl p-5 md:p-6 mt-6 md:mt-8">
            <h4 className="font-bold text-lg md:text-xl mb-2 md:mb-3">
              💡 Strategic Approach
            </h4>
            <p className="text-xs md:text-sm leading-relaxed opacity-95">
              This five-step journey transforms a simple beverage purchase into
              a comprehensive brand experience, driving customer engagement both
              online and offline while building community through shared
              moments.
            </p>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="flex flex-col justify-center">
          {/* Main Image */}
          <div className="relative mb-6 md:mb-8">
            <img
              src={colorfulBobaImage}
              alt="Colorful Boba Drinks Collection"
              className="w-full rounded-xl md:rounded-2xl shadow-2xl"
            />

            {/* Overlay Badge */}
            <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl px-4 md:px-5 py-2 md:py-3 shadow-lg">
              <p className="text-xs md:text-sm text-gray-600 mb-1">
                Visual Appeal
              </p>
              <p className="font-bold text-lg md:text-xl text-[#5B2C83]">
                Instagram-Ready
              </p>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="bg-[#5B2C83]/5 rounded-lg md:rounded-xl p-3 md:p-4 border-l-4 border-[#5B2C83]">
              <div className="text-xl md:text-2xl font-bold text-[#5B2C83]">
                100%
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">
                Visual Impact
              </div>
            </div>
            <div className="bg-[#FF4F8B]/5 rounded-lg md:rounded-xl p-3 md:p-4 border-l-4 border-[#FF4F8B]">
              <div className="text-xl md:text-2xl font-bold text-[#FF4F8B]">
                5x
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">
                Engagement Rate
              </div>
            </div>
            <div className="bg-[#FFC857]/5 rounded-lg md:rounded-xl p-3 md:p-4 border-l-4 border-[#FFC857]">
              <div className="text-xl md:text-2xl font-bold text-[#FFC857]">
                Multi
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">
                Touch Points
              </div>
            </div>
            <div className="bg-[#5B2C83]/5 rounded-lg md:rounded-xl p-3 md:p-4 border-l-4 border-[#5B2C83]">
              <div className="text-xl md:text-2xl font-bold text-[#5B2C83]">
                Daily
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1">
                Social Sharing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
