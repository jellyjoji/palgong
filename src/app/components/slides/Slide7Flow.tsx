import { ArrowRight, CheckCircle } from "lucide-react";

export function Slide7Flow() {
  const flowSteps = [
    {
      stage: "Awareness",
      activity: "Customer sees POP TAP promotion",
      channels: ["In-store signage", "Social media posts", "Email newsletter"],
      color: "from-[#5B2C83] to-[#7B4CA3]"
    },
    {
      stage: "Engagement",
      activity: "Customer visits on the 8th",
      channels: ["Purchase drink", "Scan QR code", "Play game"],
      color: "from-[#FF4F8B] to-[#FF6FA3]"
    },
    {
      stage: "Experience",
      activity: "Interactive participation",
      channels: ["Game completion", "Photo capture", "Social sharing"],
      color: "from-[#FFC857] to-[#FFD77A]"
    },
    {
      stage: "Conversion",
      activity: "Reward redemption",
      channels: ["Instant rewards", "Bounce-back coupon", "Loyalty points"],
      color: "from-[#5B2C83] to-[#FF4F8B]"
    },
    {
      stage: "Retention",
      activity: "Customer returns",
      channels: ["Next month visit", "Referral sharing", "Brand advocacy"],
      color: "from-[#FF4F8B] to-[#FFC857]"
    }
  ];

  return (
    <div className="h-full bg-white p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-sm font-bold text-[#5B2C83] tracking-wider uppercase">Customer Journey</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-900">Online-to-Offline Integration</h2>
      </div>

      {/* Flow Diagram */}
      <div className="space-y-6 mb-12">
        {flowSteps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex items-center gap-6">
              {/* Stage Number */}
              <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                {index + 1}
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#5B2C83]/30 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">
                      {step.stage}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.activity}</h3>
                  </div>
                  {index < flowSteps.length - 1 && (
                    <CheckCircle className="w-6 h-6 text-[#5B2C83]" />
                  )}
                </div>

                {/* Channels */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {step.channels.map((channel, idx) => (
                    <span 
                      key={idx}
                      className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 border border-gray-200"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow Connector */}
            {index < flowSteps.length - 1 && (
              <div className="absolute left-8 top-full h-6 w-0.5 bg-gradient-to-b from-[#5B2C83] to-[#FF4F8B]"></div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Summary */}
      <div className="bg-gradient-to-br from-[#5B2C83] to-[#7B4CA3] text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6">Integration Benefits</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
            <div className="text-4xl mb-3">🔄</div>
            <h4 className="font-bold mb-2">Seamless Experience</h4>
            <p className="text-sm opacity-90">
              Smooth transition from online discovery to offline purchase and back to online sharing
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-bold mb-2">Trackable Metrics</h4>
            <p className="text-sm opacity-90">
              QR codes and hashtags enable complete customer journey tracking
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
            <div className="text-4xl mb-3">💎</div>
            <h4 className="font-bold mb-2">Compound Value</h4>
            <p className="text-sm opacity-90">
              Each touchpoint reinforces brand message and drives next action
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
