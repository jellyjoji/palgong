import { DollarSign, PieChart, TrendingDown, FileText, Package, Zap } from "lucide-react";

export function Slide9Budget() {
  const budgetItems = [
    {
      category: "Promotional Materials",
      color: "bg-[#5B2C83]",
      items: [
        { 
          name: "QR Code Table Tents", 
          qty: "50 units", 
          cost: 30,
          detail: "Waterproof acrylic stands with Palgon Tea branding and QR codes for each table (in-store & patio)"
        },
        { 
          name: "Cup Stickers", 
          qty: "500 pcs", 
          cost: 40,
          detail: "Event-themed stickers with game instructions and hashtag; ~100-150 used per event week"
        },
        { 
          name: "In-Store Posters", 
          qty: "5 large", 
          cost: 25,
          detail: "24x36\" professional prints for windows, counter, and waiting area showcasing colorful boba visuals"
        },
        { 
          name: "Social Media Graphics", 
          qty: "Package", 
          cost: 35,
          detail: "Template set for Instagram Stories, Posts, Reels covering announcement, countdown, and winner reveals"
        }
      ],
      subtotal: 130,
      notes: "One-time production cost; materials reusable for 3-6 months with proper care"
    },
    {
      category: "Rewards & Incentives",
      color: "bg-[#FF4F8B]",
      items: [
        { 
          name: "Free Toppings (50pts)", 
          qty: "~30 servings", 
          cost: 45,
          detail: "Popping boba, jelly, or pudding redemptions; cost $1.50 per serving x 30 redemptions"
        },
        { 
          name: "Size Upgrades (100pts)", 
          qty: "~20 servings", 
          cost: 30,
          detail: "Medium to Large upgrade; incremental cost $1.50 x 20 redemptions"
        },
        { 
          name: "Free Drinks (150pts)", 
          qty: "~10 servings", 
          cost: 40,
          detail: "Full drink redemption; average drink cost $4 x 10 = $40"
        },
        { 
          name: "Monthly Prize Draw", 
          qty: "Gift cards", 
          cost: 75,
          detail: "1st prize: $50 gift card, 2nd: $25 x 2, Runner-up: $15 x 3; Total = $145 retail, $75 cost"
        }
      ],
      subtotal: 190,
      notes: "Variable costs scale with participation; estimates based on 60-80 monthly active players"
    },
    {
      category: "Digital & Technical",
      color: "bg-[#FFC857]",
      items: [
        { 
          name: "Game Hosting", 
          qty: "Monthly", 
          cost: 15,
          detail: "Cloud hosting for mobile game (Vercel/Netlify Pro tier) with custom domain and analytics"
        },
        { 
          name: "Social Media Ads", 
          qty: "Boosted posts", 
          cost: 50,
          detail: "$10-15 per boosted post x 3-4 posts/month targeting Toronto 18-35 demographic"
        },
        { 
          name: "QR Code Generation", 
          qty: "Setup", 
          cost: 0,
          detail: "Free with qrcode.react library; dynamic QR codes track scans via Google Analytics"
        },
        { 
          name: "Analytics Tools", 
          qty: "Monthly", 
          cost: 10,
          detail: "Google Analytics 4 (free) + Instagram Insights Pro features for detailed engagement tracking"
        }
      ],
      subtotal: 75,
      notes: "Recurring monthly operational costs; essential for tracking ROI and campaign optimization"
    }
  ];

  const totalBudget = budgetItems.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="h-full bg-white p-6 md:p-12 lg:p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
          <div className="h-1 w-12 md:w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-xs md:text-sm font-bold text-[#5B2C83] tracking-wider uppercase">Financial Planning</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Monthly Budget Breakdown</h2>
        <p className="text-sm md:text-base text-gray-600 mt-3">Detailed line-item explanations with vendor recommendations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
        {/* Budget Categories with Detailed Explanations */}
        {budgetItems.map((category, index) => (
          <div 
            key={index}
            className="bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl overflow-hidden hover:border-[#5B2C83]/30 hover:shadow-xl transition-all"
          >
            {/* Header */}
            <div className={`${category.color} text-white p-4 md:p-5`}>
              <h3 className="text-lg md:text-xl font-bold mb-1">{category.category}</h3>
              <div className="text-2xl md:text-3xl font-bold">${category.subtotal}</div>
              <div className="text-xs mt-2 opacity-90">{Math.round((category.subtotal/totalBudget)*100)}% of total budget</div>
            </div>

            {/* Items with Detailed Explanations */}
            <div className="p-4 md:p-5 space-y-3 md:space-y-4">
              {category.items.map((item, idx) => (
                <div key={idx} className="pb-3 md:pb-4 border-b border-gray-100 last:border-0 group">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm md:text-base">{item.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{item.qty}</div>
                    </div>
                    <div className="font-bold text-gray-900 text-base md:text-lg">${item.cost}</div>
                  </div>
                  {/* Detailed Explanation */}
                  <div className="bg-gray-50 rounded-lg p-2.5 md:p-3 mt-2 group-hover:bg-[#5B2C83]/5 transition-colors">
                    <div className="flex items-start gap-2">
                      <FileText className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#5B2C83]/60 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Category Notes */}
              <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-3 mt-3 md:mt-4">
                <div className="flex items-start gap-2">
                  <Package className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-blue-900 font-medium leading-relaxed">{category.notes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vendor Recommendations */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl md:rounded-2xl p-5 md:p-8 mb-6 md:mb-8 border-2 border-green-100">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-xl flex items-center justify-center">
            <Zap className="w-5 md:w-6 h-5 md:h-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Recommended Vendors (Toronto)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-xl p-4 md:p-5">
            <h4 className="font-bold text-gray-900 mb-3 text-sm md:text-base">Print Materials</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div>
                <span><strong>Staples Print & Marketing:</strong> Fast turnaround, table tents & posters</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div>
                <span><strong>StickerYou (Toronto):</strong> Custom stickers, minimum 100 qty</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-5">
            <h4 className="font-bold text-gray-900 mb-3 text-sm md:text-base">Digital Services</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>
                <span><strong>Vercel/Netlify:</strong> Free tier available, $15/mo Pro for analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>
                <span><strong>Meta Business Suite:</strong> Instagram/Facebook ad management</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-5">
            <h4 className="font-bold text-gray-900 mb-3 text-sm md:text-base">Gift Cards</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5"></div>
                <span><strong>In-House Gift Cards:</strong> Best margin, builds brand loyalty</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5"></div>
                <span><strong>Alt Option:</strong> Tim Hortons/Starbucks cards at retail cost</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Total & Breakdown */}
        <div className="bg-gradient-to-br from-[#5B2C83] to-[#7B4CA3] text-white rounded-xl md:rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <DollarSign className="w-7 md:w-8 h-7 md:h-8 text-[#FFC857]" />
            <h3 className="text-xl md:text-2xl font-bold">Total Monthly Investment</h3>
          </div>
          <div className="text-5xl md:text-6xl font-bold mb-4 md:mb-6">${totalBudget}</div>
          <div className="space-y-2 md:space-y-3">
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="opacity-90">Promotional Materials</span>
              <span className="font-bold">${budgetItems[0].subtotal} ({Math.round((budgetItems[0].subtotal/totalBudget)*100)}%)</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="opacity-90">Rewards & Incentives</span>
              <span className="font-bold">${budgetItems[1].subtotal} ({Math.round((budgetItems[1].subtotal/totalBudget)*100)}%)</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="opacity-90">Digital & Technical</span>
              <span className="font-bold">${budgetItems[2].subtotal} ({Math.round((budgetItems[2].subtotal/totalBudget)*100)}%)</span>
            </div>
          </div>
          
          {/* Cost Scaling Note */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-xs md:text-sm opacity-90 leading-relaxed">
              <strong>Month 1:</strong> $395 (includes one-time setup)<br />
              <strong>Month 2+:</strong> $265-300 (recurring operational costs)<br />
              <em>Rewards scale with actual participation</em>
            </p>
          </div>
        </div>

        {/* ROI Projection & Cost Efficiency */}
        <div className="space-y-4 md:space-y-6">
          {/* Expected ROI */}
          <div className="bg-gradient-to-br from-[#FFC857]/10 to-[#FF4F8B]/10 rounded-xl md:rounded-2xl p-5 md:p-6 border-2 border-[#FFC857]/30">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <TrendingDown className="w-5 md:w-6 h-5 md:h-6 text-[#5B2C83]" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Expected ROI</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="bg-white rounded-xl p-4 md:p-5">
                <div className="text-xs md:text-sm text-gray-600 mb-1">Additional Monthly Revenue</div>
                <div className="text-2xl md:text-3xl font-bold text-[#5B2C83]">$800 - $1,200</div>
                <div className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Based on current avg. monthly revenue of $5,000; 15-25% lift = $750-$1,250 increase
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-5">
                <div className="text-xs md:text-sm text-gray-600 mb-1">Return on Investment</div>
                <div className="text-2xl md:text-3xl font-bold text-[#FF4F8B]">2x - 3x</div>
                <div className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Month 1: $800/$395 = 2.0x ROI<br />
                  Month 2+: $1,000/$300 = 3.3x ROI (stabilized)
                </div>
              </div>
            </div>
          </div>

          {/* Cost Efficiency */}
          <div className="bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-5 md:p-6">
            <h4 className="font-bold text-gray-900 mb-4 text-base md:text-lg">Cost Efficiency Analysis</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-gray-600">Cost per Customer Engagement</span>
                <span className="font-bold text-[#5B2C83]">$3-4</span>
              </div>
              <div className="text-xs text-gray-500 mb-3 leading-relaxed">
                $395 ÷ 100-120 participants = $3.29-3.95 per engaged customer
              </div>
              
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-gray-600">Cost per Social Media Post</span>
                <span className="font-bold text-[#FF4F8B]">$6-7</span>
              </div>
              <div className="text-xs text-gray-500 mb-3 leading-relaxed">
                $395 ÷ 60 UGC posts = $6.58 per authentic social post (vs. $20-50 for influencer post)
              </div>
              
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-gray-600">Customer Acquisition Cost</span>
                <span className="font-bold text-[#FFC857]">$8-10</span>
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">
                $395 ÷ 40-50 new customers = $7.90-9.88 CAC (industry avg: $15-25 for F&B)
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-[#5B2C83]/5 rounded-xl md:rounded-2xl p-4 md:p-5 border-l-4 border-[#5B2C83]">
            <h4 className="font-bold text-[#5B2C83] mb-2 text-sm md:text-base">💡 Budget Optimization Tips</h4>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              <strong>Cost Reduction Options:</strong> Use existing staff for design (save $35), 
              reduce sticker qty to 300 pcs (save $15), skip paid ads initially (save $50). 
              <strong>Minimum viable budget: $295/month.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
