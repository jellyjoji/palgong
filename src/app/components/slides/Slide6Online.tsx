import { Instagram, Hash, Award, TrendingUp } from "lucide-react";

export function Slide6Online() {
  const hashtags = [
    "#PopTapBobaTO",
    "#BobaDayTO",
    "#TorontoBoba",
    "#PoppingBobaTO"
  ];

  const contentTypes = [
    {
      icon: <Instagram className="w-5 h-5" />,
      title: "Instagram Stories",
      engagement: "High",
      reach: "500-1000",
      color: "from-[#FF4F8B] to-[#FF6FA3]"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      title: "Instagram Posts",
      engagement: "Medium",
      reach: "300-800",
      color: "from-[#5B2C83] to-[#7B4CA3]"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      title: "Reels/TikTok",
      engagement: "Very High",
      reach: "1000-5000",
      color: "from-[#FFC857] to-[#FFD77A]"
    }
  ];

  return (
    <div className="h-full bg-white p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-sm font-bold text-[#5B2C83] tracking-wider uppercase">Online Strategy</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-900">Social Media Engagement</h2>
      </div>

      <div className="grid grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          {/* SNS Campaign Structure */}
          <div className="bg-gradient-to-br from-[#5B2C83]/5 to-[#FF4F8B]/5 rounded-2xl p-6 border-l-4 border-[#5B2C83]">
            <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
              <Hash className="w-6 h-6 text-[#5B2C83]" />
              Hashtag Strategy
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {hashtags.map((tag, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl px-4 py-3 text-center font-bold text-[#5B2C83] hover:bg-[#5B2C83] hover:text-white transition-colors cursor-default"
                >
                  {tag}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Branded hashtags create a unified campaign identity and enable 
              user-generated content tracking across platforms.
            </p>
          </div>

          {/* Participation Mechanics */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              How to Participate
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FF4F8B] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-bold text-gray-900">Purchase & Photograph</p>
                  <p className="text-sm text-gray-600 mt-1">Take a photo of your colorful boba drink</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#5B2C83] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-bold text-gray-900">Post with Hashtags</p>
                  <p className="text-sm text-gray-600 mt-1">Share on Instagram/TikTok with campaign hashtags</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFC857] rounded-full flex items-center justify-center text-gray-900 font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-bold text-gray-900">Enter Monthly Draw</p>
                  <p className="text-sm text-gray-600 mt-1">Automatic entry for free drinks & exclusive prizes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prize Structure */}
          <div className="bg-[#5B2C83] text-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#FFC857]" />
              <h3 className="text-xl font-bold">Monthly Prizes</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex justify-between items-center">
                <span>Grand Prize (1 winner)</span>
                <span className="font-bold text-[#FFC857]">$50 Gift Card</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex justify-between items-center">
                <span>First Prize (3 winners)</span>
                <span className="font-bold text-[#FFC857]">5 Free Drinks</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex justify-between items-center">
                <span>Participation Prize (20)</span>
                <span className="font-bold text-[#FFC857]">Free Topping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Content Performance */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-5">Expected Platform Performance</h3>
            <div className="space-y-4">
              {contentTypes.map((content, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-5 hover:border-[#5B2C83]/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`bg-gradient-to-r ${content.color} w-10 h-10 rounded-lg flex items-center justify-center text-white`}>
                        {content.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{content.title}</h4>
                        <p className="text-xs text-gray-500">Platform reach</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <div className="text-xs text-gray-500">Engagement</div>
                      <div className="font-bold text-[#5B2C83]">{content.engagement}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <div className="text-xs text-gray-500">Est. Reach</div>
                      <div className="font-bold text-[#FF4F8B]">{content.reach}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-br from-[#5B2C83]/5 to-[#FFC857]/5 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="w-6 h-6 text-[#5B2C83]" />
              <h3 className="text-xl font-bold text-gray-900">Target KPIs (Monthly)</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <div className="text-3xl font-bold text-[#5B2C83]">50+</div>
                <div className="text-sm text-gray-600 mt-1">Total Posts</div>
                <div className="text-xs text-gray-500 mt-1">with hashtags</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-3xl font-bold text-[#FF4F8B]">5K+</div>
                <div className="text-sm text-gray-600 mt-1">Impressions</div>
                <div className="text-xs text-gray-500 mt-1">organic reach</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-3xl font-bold text-[#FFC857]">3%</div>
                <div className="text-sm text-gray-600 mt-1">Engagement</div>
                <div className="text-xs text-gray-500 mt-1">rate target</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-3xl font-bold text-[#5B2C83]">25+</div>
                <div className="text-sm text-gray-600 mt-1">New Followers</div>
                <div className="text-xs text-gray-500 mt-1">monthly growth</div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-[#FF4F8B]/10 border-2 border-[#FF4F8B]/30 rounded-2xl p-5">
            <h4 className="font-bold text-[#FF4F8B] mb-3">💡 Content Best Practices</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#FF4F8B] flex-shrink-0">•</span>
                <span>Natural lighting for vibrant boba colors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF4F8B] flex-shrink-0">•</span>
                <span>Include brand logo or store name in frame</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF4F8B] flex-shrink-0">•</span>
                <span>Use Stories for real-time engagement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
