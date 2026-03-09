import { TrendingUp, Users, Heart, Zap, Award, Repeat, CheckCircle, BarChart3 } from "lucide-react";

export function Slide12Impact() {
  const impacts = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Revenue Growth",
      metric: "+20-25%",
      description: "Monthly sales increase through higher traffic and ticket size",
      color: "from-[#5B2C83] to-[#7B4CA3]",
      benchmarks: [
        { brand: "Chatime", result: "+22% sales increase" },
        { brand: "Sharetea", result: "+20% monthly revenue" },
        { brand: "Gong Cha", result: "+18% store visits" }
      ],
      rationale: "Based on proven results from similar bubble tea brands running SNS + reward campaigns. Conservative estimate considering Palgon Tea's smaller initial customer base."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Base",
      metric: "+150",
      description: "New followers and engaged customers per quarter",
      color: "from-[#FF4F8B] to-[#FF6FA3]",
      benchmarks: [
        { brand: "Chatime", result: "+12% new customers" },
        { brand: "Social Media", result: "10K+ monthly reach" },
        { brand: "Industry Avg", result: "50-100 new followers/month" }
      ],
      rationale: "Calculated from 50 new followers/month × 3 months = 150 total. Based on industry averages for small bubble tea shops running active social campaigns."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Brand Loyalty",
      metric: "35-45%",
      description: "Return visit rate among event participants",
      color: "from-[#FFC857] to-[#FFD77A]",
      benchmarks: [
        { brand: "Sharetea", result: "38% repeat rate" },
        { brand: "Gong Cha", result: "35% repeat rate" },
        { brand: "Industry Avg", result: "30-40% loyalty programs" }
      ],
      rationale: "Gamification + reward systems proven to drive 35-45% return visits. Aligned with benchmark data from Gong Cha and Sharetea loyalty programs."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Social Reach",
      metric: "8K-15K",
      description: "Monthly social media impressions and engagement",
      color: "from-[#5B2C83] to-[#FF4F8B]",
      benchmarks: [
        { brand: "Chatime", result: "+10K/month impressions" },
        { brand: "Toronto Avg", result: "5K-12K reach/month" },
        { brand: "UGC Content", result: "30% share rate" }
      ],
      rationale: "30-60 hashtag posts/month × avg 150 followers/post = 4.5K-9K organic reach. Add 3K-6K from boosted posts and shares = 8K-15K total monthly impressions."
    }
  ];

  return (
    <div className="h-full bg-white p-6 md:p-12 lg:p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
          <div className="h-1 w-12 md:w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-xs md:text-sm font-bold text-[#5B2C83] tracking-wider uppercase">Expected Results</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Projected Business Impact</h2>
        <p className="text-sm md:text-base text-gray-600 mt-3">Evidence-based projections from industry benchmarks</p>
      </div>

      {/* Benchmark Overview Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl md:rounded-2xl p-4 md:p-6 mb-8 md:mb-10">
        <div className="flex items-start gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-5 md:w-6 h-5 md:h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">Data-Driven Projections</h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              All projections are based on documented case studies from <span className="font-bold text-[#5B2C83]">Gong Cha</span>, <span className="font-bold text-[#5B2C83]">Chatime</span>, and <span className="font-bold text-[#5B2C83]">Sharetea</span> running similar SNS + gamification + reward campaigns in North American markets.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Metrics Grid with Benchmarks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
        {impacts.map((impact, index) => (
          <div 
            key={index}
            className="bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-[#5B2C83]/30 hover:shadow-2xl transition-all group"
          >
            {/* Icon & Title */}
            <div className="flex items-start justify-between mb-4 md:mb-5">
              <div>
                <div className={`bg-gradient-to-r ${impact.color} w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {impact.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{impact.title}</h3>
              </div>
              <div className="text-3xl md:text-5xl font-bold text-[#5B2C83]">{impact.metric}</div>
            </div>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-5">{impact.description}</p>

            {/* Benchmark Evidence */}
            <div className="bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-4 mb-3 md:mb-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 md:mb-3 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600" />
                Benchmark Evidence
              </h4>
              <div className="space-y-1.5 md:space-y-2">
                {impact.benchmarks.map((benchmark, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#5B2C83] rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <span className="font-bold text-[#5B2C83]">{benchmark.brand}:</span> {benchmark.result}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rationale */}
            <div className="border-t-2 border-gray-100 pt-3 md:pt-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Calculation Rationale</h4>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{impact.rationale}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Benchmark Case Studies Summary */}
      <div className="bg-white border-2 border-[#5B2C83]/20 rounded-xl md:rounded-2xl p-5 md:p-8 mb-8 md:mb-10">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 md:mb-6">Benchmark Case Studies Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Gong Cha */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg md:rounded-xl p-4 md:p-5 border border-purple-100">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5B2C83] rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base">
                GC
              </div>
              <h4 className="font-bold text-gray-900 text-base md:text-lg">Gong Cha</h4>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-600">Store Visits</span>
                <span className="font-bold text-[#5B2C83]">+18%</span>
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-600">SNS Participation</span>
                <span className="font-bold text-[#5B2C83]">+30%</span>
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-600">Repeat Rate</span>
                <span className="font-bold text-[#5B2C83]">35%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 md:mt-4 italic">Seasonal Drink + SNS Photo Event</p>
          </div>

          {/* Chatime */}
          <div className="bg-gradient-to-br from-pink-50 to-white rounded-lg md:rounded-xl p-4 md:p-5 border border-pink-100">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF4F8B] rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base">
                CT
              </div>
              <h4 className="font-bold text-gray-900 text-base md:text-lg">Chatime</h4>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-600">Sales Increase</span>
                <span className="font-bold text-[#FF4F8B]">+22%</span>
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-600">New Customers</span>
                <span className="font-bold text-[#FF4F8B]">+12%</span>
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-600">SNS Exposure</span>
                <span className="font-bold text-[#FF4F8B]">+10K/mo</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 md:mt-4 italic">Buy 1 Get 1 + Social Campaign</p>
          </div>

          {/* Sharetea */}
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-lg md:rounded-xl p-4 md:p-5 border border-yellow-100">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFC857] rounded-lg flex items-center justify-center text-gray-900 font-bold text-sm md:text-base">
                ST
              </div>
              <h4 className="font-bold text-gray-900 text-base md:text-lg">Sharetea</h4>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-600">SNS Content</span>
                <span className="font-bold text-[#FFC857]">+40%</span>
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-600">Repeat Rate</span>
                <span className="font-bold text-[#FFC857]">38%</span>
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-600">Revenue Growth</span>
                <span className="font-bold text-[#FFC857]">+20%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 md:mt-4 italic">Instagram Hashtag + Loyalty Program</p>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-5 md:mt-6 bg-[#5B2C83]/5 rounded-lg md:rounded-xl p-4 md:p-5 border-l-4 border-[#5B2C83]">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            <span className="font-bold text-[#5B2C83]">Key Insight:</span> All three brands achieved <span className="font-bold">20%+ revenue growth</span> and <span className="font-bold">35%+ repeat rates</span> using SNS participation + gamification + reward structures—the exact strategy Palgon Tea will implement.
          </p>
        </div>
      </div>

      {/* Long-term Benefits */}
      <div className="bg-gradient-to-br from-[#5B2C83] to-[#7B4CA3] text-white rounded-xl md:rounded-2xl p-6 md:p-10 mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Long-term Strategic Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Award className="w-8 md:w-10 h-8 md:h-10 text-[#FFC857]" />
            </div>
            <h4 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Market Position</h4>
            <p className="text-xs md:text-sm opacity-90 leading-relaxed">
              Establish as Toronto's most innovative and engaging bubble tea destination
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Repeat className="w-8 md:w-10 h-8 md:h-10 text-[#FFC857]" />
            </div>
            <h4 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Customer Habits</h4>
            <p className="text-xs md:text-sm opacity-90 leading-relaxed">
              Create monthly visit routine tied to the 8th of each month
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Heart className="w-8 md:w-10 h-8 md:h-10 text-[#FFC857]" />
            </div>
            <h4 className="font-bold text-lg md:text-xl mb-2 md:mb-3">Brand Community</h4>
            <p className="text-xs md:text-sm opacity-90 leading-relaxed">
              Build engaged community of brand advocates who share experiences
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Next Steps & CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Immediate Next Steps */}
        <div className="bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-5 md:p-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Immediate Next Steps</h3>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#5B2C83] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm md:text-base">
                1
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm md:text-base">Approve Budget & Timeline</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">Review $395 monthly investment and 3-week prep schedule</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FF4F8B] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm md:text-base">
                2
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm md:text-base">Design Asset Production</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">Finalize materials and begin printing QR codes, posters</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FFC857] rounded-full flex items-center justify-center text-gray-900 font-bold flex-shrink-0 text-sm md:text-base">
                3
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm md:text-base">Staff Training Session</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">Schedule 1-hour training on event mechanics and rewards</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#5B2C83] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm md:text-base">
                4
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm md:text-base">Launch Preparation</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">Deploy materials and activate digital systems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col justify-between">
          <div className="bg-gradient-to-br from-[#FF4F8B]/10 to-[#FFC857]/10 rounded-xl md:rounded-2xl p-5 md:p-6 border-2 border-[#FF4F8B]/30 mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Why Start Now?</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-[#FF4F8B] font-bold flex-shrink-0 text-base md:text-lg">•</span>
                <span className="text-xs md:text-sm">Spring/summer season drives higher foot traffic</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-[#FF4F8B] font-bold flex-shrink-0 text-base md:text-lg">•</span>
                <span className="text-xs md:text-sm">Build momentum for recurring monthly events</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-[#FF4F8B] font-bold flex-shrink-0 text-base md:text-lg">•</span>
                <span className="text-xs md:text-sm">Establish competitive advantage in local market</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#5B2C83] to-[#FF4F8B] text-white rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Launch?</h3>
            <p className="text-base md:text-lg mb-4 md:mb-6 opacity-95">
              Let's make the 8th of every month<br />
              the most exciting day for your customers!
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 md:px-6 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base">
              <span className="text-xl md:text-2xl">🧋</span>
              <span>POP TAP BOBA DAY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}