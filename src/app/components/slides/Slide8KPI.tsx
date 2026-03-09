import { Target, Users, TrendingUp, DollarSign, Share2, Repeat, Info } from "lucide-react";

export function Slide8KPI() {
  const kpiCategories = [
    {
      icon: <Users className="w-5 md:w-6 h-5 md:h-6" />,
      title: "Customer Engagement",
      color: "from-[#5B2C83] to-[#7B4CA3]",
      metrics: [
        { 
          label: "Game Participations", 
          target: "50-100", 
          unit: "/month",
          explanation: "Based on 2-3 plays per day from estimated 25-35 unique daily participants during event week"
        },
        { 
          label: "QR Code Scans", 
          target: "60-120", 
          unit: "/month",
          explanation: "20% higher than game plays as customers scan for rewards tracking and prize checking"
        },
        { 
          label: "Average Play Time", 
          target: "45-60", 
          unit: "seconds",
          explanation: "Optimized duration to maximize engagement without causing store congestion"
        }
      ]
    },
    {
      icon: <Share2 className="w-5 md:w-6 h-5 md:h-6" />,
      title: "Social Media Metrics",
      color: "from-[#FF4F8B] to-[#FF6FA3]",
      metrics: [
        { 
          label: "Hashtag Posts", 
          target: "30-60", 
          unit: "/month",
          explanation: "30-50% of game participants share on Instagram/TikTok, incentivized by social media prize draws"
        },
        { 
          label: "Total Impressions", 
          target: "3K-8K", 
          unit: "/month",
          explanation: "Each post reaches 100-150 followers on average; boosted posts add 2K-3K additional impressions"
        },
        { 
          label: "Engagement Rate", 
          target: "2.5-4", 
          unit: "%",
          explanation: "Above industry average (1.5-2%) due to authentic user-generated content and colorful visuals"
        }
      ]
    },
    {
      icon: <DollarSign className="w-5 md:w-6 h-5 md:h-6" />,
      title: "Business Impact",
      color: "from-[#FFC857] to-[#FFD77A]",
      metrics: [
        { 
          label: "Sales Increase", 
          target: "15-25", 
          unit: "%",
          explanation: "Event week sees 20-30% boost; off-event weeks maintain 10-15% lift from repeat visits"
        },
        { 
          label: "Repeat Visit Rate", 
          target: "35-45", 
          unit: "%",
          explanation: "Gamification drives return visits; customers come back 2-3x to earn higher reward tiers"
        },
        { 
          label: "Average Ticket Size", 
          target: "+$2-4", 
          unit: "",
          explanation: "Customers add premium toppings or upgrade size when redeeming rewards or playing game"
        }
      ]
    }
  ];

  return (
    <div className="h-full bg-white p-6 md:p-12 lg:p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
          <div className="h-1 w-12 md:w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-xs md:text-sm font-bold text-[#5B2C83] tracking-wider uppercase">Performance Metrics</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Key Performance Indicators</h2>
        <p className="text-sm md:text-base text-gray-600 mt-3">Data-driven projections with detailed rationale</p>
      </div>

      {/* KPI Cards with Explanations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
        {kpiCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#5B2C83]/30 hover:shadow-xl transition-all"
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${category.color} w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-white mb-3 md:mb-4 shadow-lg`}>
              {category.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">{category.title}</h3>

            {/* Metrics with Explanations */}
            <div className="space-y-3 md:space-y-4">
              {category.metrics.map((metric, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-4 group hover:bg-[#5B2C83]/5 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                      {metric.label}
                    </div>
                    <Info className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#5B2C83]/40 group-hover:text-[#5B2C83] transition-colors" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xl md:text-2xl font-bold text-[#5B2C83]">
                      {metric.target}
                    </span>
                    <span className="text-xs md:text-sm text-gray-600">{metric.unit}</span>
                  </div>
                  {/* Explanation */}
                  <div className="text-xs text-gray-600 leading-relaxed border-t border-gray-200 pt-2 mt-2">
                    {metric.explanation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Calculation Methodology */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl md:rounded-2xl p-5 md:p-8 mb-6 md:mb-8 border-2 border-blue-100">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-5 md:w-6 h-5 md:h-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Calculation Methodology</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white rounded-xl p-4 md:p-5">
            <h4 className="font-bold text-gray-900 mb-3 text-sm md:text-base">Baseline Data Sources</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#5B2C83] rounded-full mt-1.5"></div>
                <span>Current daily foot traffic: 80-120 customers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#FF4F8B] rounded-full mt-1.5"></div>
                <span>Industry benchmark: 15-25% event participation rate</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#FFC857] rounded-full mt-1.5"></div>
                <span>Toronto boba tea market: High SNS engagement demographic</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-5">
            <h4 className="font-bold text-gray-900 mb-3 text-sm md:text-base">Conservative Projections</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#5B2C83] rounded-full mt-1.5"></div>
                <span>Lower range: Minimum expected engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#FF4F8B] rounded-full mt-1.5"></div>
                <span>Upper range: Optimistic scenario with viral spread</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#FFC857] rounded-full mt-1.5"></div>
                <span>Monthly average accounts for event week peaks</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Measurement Timeline */}
      <div className="bg-gradient-to-br from-[#5B2C83]/5 to-[#FF4F8B]/5 rounded-xl md:rounded-2xl p-5 md:p-8 mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Measurement Timeline</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-white rounded-xl p-4 md:p-5 text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5B2C83] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2 md:mb-3 text-sm md:text-base">
              W1
            </div>
            <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Week 1</h4>
            <p className="text-xs md:text-sm text-gray-600">Baseline measurement & setup tracking</p>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-5 text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF4F8B] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2 md:mb-3 text-sm md:text-base">
              W2
            </div>
            <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Week 2</h4>
            <p className="text-xs md:text-sm text-gray-600">Mid-month check & optimization</p>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-5 text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFC857] rounded-full flex items-center justify-center text-gray-900 font-bold mx-auto mb-2 md:mb-3 text-sm md:text-base">
              W3
            </div>
            <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Week 3</h4>
            <p className="text-xs md:text-sm text-gray-600">Performance review & adjustment</p>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-5 text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5B2C83] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2 md:mb-3 text-sm md:text-base">
              M
            </div>
            <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Month End</h4>
            <p className="text-xs md:text-sm text-gray-600">Full report & next month planning</p>
          </div>
        </div>
      </div>

      {/* Success Criteria */}
      <div className="bg-[#5B2C83] text-white rounded-xl md:rounded-2xl p-5 md:p-8">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <Target className="w-6 md:w-7 h-6 md:h-7 text-[#FFC857]" />
          <h3 className="text-xl md:text-2xl font-bold">Success Criteria (First 3 Months)</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#FFC857] mb-1 md:mb-2">200+</div>
            <div className="text-xs md:text-sm opacity-90">Total Game Plays</div>
            <div className="text-xs opacity-75 mt-1">~65-70 per month</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#FFC857] mb-1 md:mb-2">100+</div>
            <div className="text-xs md:text-sm opacity-90">SNS Posts Generated</div>
            <div className="text-xs opacity-75 mt-1">~35-40 per month</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#FFC857] mb-1 md:mb-2">20%</div>
            <div className="text-xs md:text-sm opacity-90">Revenue Increase</div>
            <div className="text-xs opacity-75 mt-1">Sustained average</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#FFC857] mb-1 md:mb-2">150+</div>
            <div className="text-xs md:text-sm opacity-90">New Followers</div>
            <div className="text-xs opacity-75 mt-1">~50 per month</div>
          </div>
        </div>
      </div>
    </div>
  );
}
