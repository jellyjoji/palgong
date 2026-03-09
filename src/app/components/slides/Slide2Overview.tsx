import { TrendingUp, Users, Target, Zap } from "lucide-react";
// image is now served from the public folder
const rainbowBobaImage = "/b4f42456c1efdeb166f3327faf8e8a67700fe1de.png";

export function Slide2Overview() {
  return (
    <div className="h-full bg-white p-6 md:p-12 lg:p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
          <div className="h-1 w-12 md:w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-xs md:text-sm font-bold text-[#5B2C83] tracking-wider uppercase">
            Event Overview
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Toronto Market Analysis
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column - Content */}
        <div className="space-y-6 md:space-y-8">
          {/* Market Characteristics */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-[#5B2C83]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 md:w-5 h-4 md:h-5 text-[#5B2C83]" />
              </div>
              Market Characteristics
            </h3>
            <div className="space-y-3 md:space-y-4 ml-2">
              <div className="flex items-start gap-3 group">
                <div className="w-2 h-2 bg-[#5B2C83] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <p className="font-medium text-gray-900 text-sm md:text-base">
                    Increasing Competition
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Multiple bubble tea brands in Toronto area
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-2 h-2 bg-[#FF4F8B] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <p className="font-medium text-gray-900 text-sm md:text-base">
                    SNS-Driven Consumption
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Social media influence on purchase decisions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-2 h-2 bg-[#FFC857] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <p className="font-medium text-gray-900 text-sm md:text-base">
                    Experiential Marketing
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Customer engagement beyond product
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Objectives */}
          <div className="bg-gradient-to-br from-[#5B2C83]/5 to-[#FF4F8B]/5 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-4 border-[#5B2C83]">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-3">
              <Target className="w-5 md:w-6 h-5 md:h-6 text-[#5B2C83]" />
              Core Objectives
            </h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#5B2C83]">
                  +30%
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  Visit Rate Increase
                </div>
              </div>
              <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#FF4F8B]">
                  +50
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  SNS Posts/Month
                </div>
              </div>
            </div>
          </div>

          {/* Key Strategy */}
          <div className="bg-[#5B2C83] text-white rounded-xl md:rounded-2xl p-5 md:p-6">
            <div className="flex items-center gap-3 mb-2 md:mb-3">
              <Zap className="w-5 md:w-6 h-5 md:h-6 text-[#FFC857]" />
              <h3 className="text-lg md:text-xl font-bold">
                Palgon Tea BOBA Event Strategy
              </h3>
            </div>
            <p className="text-xs md:text-sm opacity-90 leading-relaxed">
              Monthly recurring event on the 8th, combining in-store experience,
              mobile gaming, and social media engagement to drive customer
              retention and brand awareness for Palgon Tea.
            </p>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="flex flex-col justify-center">
          <div className="relative">
            <img
              src={rainbowBobaImage}
              alt="Rainbow Popping Boba Pearls"
              className="w-full rounded-xl md:rounded-2xl shadow-xl"
            />
            {/* Overlay Label */}
            <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl px-4 md:px-5 py-2 md:py-3 shadow-lg">
              <p className="text-xs md:text-sm text-gray-600 mb-1">
                Featured Product
              </p>
              <p className="font-bold text-lg md:text-xl text-[#5B2C83]">
                Popping Boba Pearls
              </p>
              <div className="flex gap-1 mt-1 md:mt-2">
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-red-400 rounded-full"></div>
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-orange-400 rounded-full"></div>
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-green-400 rounded-full"></div>
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-purple-400 rounded-full"></div>
              </div>
            </div>

            {/* Key Feature Badges */}
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 space-y-2">
              <div className="bg-[#FF4F8B] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                SNS-Friendly Visual
              </div>
              <div className="bg-[#FFC857] text-gray-900 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                Interactive Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
