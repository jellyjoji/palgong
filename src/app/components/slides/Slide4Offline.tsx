import { Store, QrCode, Gift, Users } from "lucide-react";

export function Slide4Offline() {
  const offlineStrategies = [
    {
      icon: <Store className="w-5 md:w-6 h-5 md:h-6" />,
      title: "In-Store Experience",
      points: [
        "Special Palgon Tea BOBA menu on the 8th of each month",
        "Eye-catching in-store displays and signage",
        "Photo zone with branded backdrop"
      ],
      color: "bg-[#5B2C83]"
    },
    {
      icon: <QrCode className="w-5 md:w-6 h-5 md:h-6" />,
      title: "QR Code Integration",
      points: [
        "QR codes on cups for instant game access",
        "Table tents with game instructions",
        "Digital menu integration"
      ],
      color: "bg-[#FF4F8B]"
    },
    {
      icon: <Gift className="w-5 md:w-6 h-5 md:h-6" />,
      title: "Instant Rewards",
      points: [
        "Random topping upgrades",
        "Surprise size upgrades",
        "Next-visit coupons (Bounce Back)"
      ],
      color: "bg-[#FFC857]"
    }
  ];

  return (
    <div className="h-full bg-white p-6 md:p-12 lg:p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
          <div className="h-1 w-12 md:w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-xs md:text-sm font-bold text-[#5B2C83] tracking-wider uppercase">Offline Strategy</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">In-Store Engagement Tactics</h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        {offlineStrategies.map((strategy, index) => (
          <div 
            key={index}
            className="bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-5 md:p-6 hover:border-[#5B2C83]/30 hover:shadow-xl transition-all group"
          >
            {/* Icon Header */}
            <div className={`${strategy.color} w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
              {strategy.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{strategy.title}</h3>

            {/* Points */}
            <ul className="space-y-2 md:space-y-3">
              {strategy.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-[#5B2C83] rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Customer Journey Flow */}
      <div className="bg-gradient-to-br from-[#5B2C83]/5 to-[#FF4F8B]/5 rounded-xl md:rounded-2xl p-5 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Customer Journey Flow</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Step 1 */}
          <div className="flex-1 text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#5B2C83] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mb-2 md:mb-3 mx-auto">
              1
            </div>
            <div className="font-bold text-gray-900 mb-1 text-sm md:text-base">Visit Store</div>
            <div className="text-xs md:text-sm text-gray-600">on the 8th</div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 mx-4 md:block hidden">
            <div className="w-12 h-0.5 bg-[#5B2C83]"></div>
          </div>
          <div className="md:hidden h-8 w-0.5 bg-[#5B2C83]"></div>

          {/* Step 2 */}
          <div className="flex-1 text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FF4F8B] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mb-2 md:mb-3 mx-auto">
              2
            </div>
            <div className="font-bold text-gray-900 mb-1 text-sm md:text-base">Scan QR</div>
            <div className="text-xs md:text-sm text-gray-600">on cup/table</div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 mx-4 md:block hidden">
            <div className="w-12 h-0.5 bg-[#FF4F8B]"></div>
          </div>
          <div className="md:hidden h-8 w-0.5 bg-[#FF4F8B]"></div>

          {/* Step 3 */}
          <div className="flex-1 text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FFC857] rounded-full flex items-center justify-center text-gray-900 font-bold text-lg md:text-xl mb-2 md:mb-3 mx-auto">
              3
            </div>
            <div className="font-bold text-gray-900 mb-1 text-sm md:text-base">Play Game</div>
            <div className="text-xs md:text-sm text-gray-600">earn points</div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 mx-4 md:block hidden">
            <div className="w-12 h-0.5 bg-[#FFC857]"></div>
          </div>
          <div className="md:hidden h-8 w-0.5 bg-[#FFC857]"></div>

          {/* Step 4 */}
          <div className="flex-1 text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#5B2C83] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mb-2 md:mb-3 mx-auto">
              4
            </div>
            <div className="font-bold text-gray-900 mb-1 text-sm md:text-base">Get Reward</div>
            <div className="text-xs md:text-sm text-gray-600">instant/coupon</div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
        <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border-2 border-[#5B2C83]/20">
          <div className="text-2xl md:text-3xl font-bold text-[#5B2C83]">70%</div>
          <div className="text-xs md:text-sm text-gray-600 mt-1">QR Code Scan Rate</div>
        </div>
        <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border-2 border-[#FF4F8B]/20">
          <div className="text-2xl md:text-3xl font-bold text-[#FF4F8B]">85%</div>
          <div className="text-xs md:text-sm text-gray-600 mt-1">Game Participation</div>
        </div>
        <div className="text-center p-3 md:p-4 bg-white rounded-lg md:rounded-xl border-2 border-[#FFC857]/20">
          <div className="text-2xl md:text-3xl font-bold text-[#FFC857]">40%</div>
          <div className="text-xs md:text-sm text-gray-600 mt-1">Coupon Redemption</div>
        </div>
      </div>
    </div>
  );
}