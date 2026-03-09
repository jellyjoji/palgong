import { PopTapGame } from "../PopTapGame";
import { QRCodeDisplay } from "../QRCodeDisplay";
import { Smartphone, Trophy, Target, Zap } from "lucide-react";

export function Slide5Game() {
  const rewards = [
    { score: "50+", reward: "Extra Topping", color: "from-[#5B2C83] to-[#7B4CA3]" },
    { score: "100+", reward: "Size Upgrade", color: "from-[#FF4F8B] to-[#FF6FA3]" },
    { score: "150+", reward: "Free Popping Boba", color: "from-[#FFC857] to-[#FFD77A]" },
  ];

  return (
    <div className="h-full bg-white p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-sm font-bold text-[#5B2C83] tracking-wider uppercase">Interactive Experience</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-900">POP TAP Mobile Game</h2>
      </div>

      <div className="grid grid-cols-2 gap-12 h-[calc(100%-8rem)]">
        {/* Left Column - Game Info */}
        <div className="space-y-6">
          {/* Game Description */}
          <div className="bg-gradient-to-br from-[#5B2C83]/5 to-[#FF4F8B]/5 rounded-2xl p-6 border-l-4 border-[#5B2C83]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#5B2C83] rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">How to Play</h3>
                <p className="text-sm text-gray-600">Mobile web-based game</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#5B2C83] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <span className="text-gray-700">Scan QR code on your cup or table tent</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#FF4F8B] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <span className="text-gray-700">Tap the popping boba pearls as they appear</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#FFC857] rounded-full flex items-center justify-center text-gray-900 text-xs font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <span className="text-gray-700">Earn points and unlock instant rewards</span>
              </li>
            </ul>
          </div>

          {/* Reward Structure */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <Trophy className="w-6 h-6 text-[#FFC857]" />
              <h3 className="text-xl font-bold text-gray-900">Score-Based Rewards</h3>
            </div>
            <div className="space-y-3">
              {rewards.map((item, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-r ${item.color} rounded-xl p-4 flex items-center justify-between text-white`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold">
                      {item.score}
                    </div>
                    <span className="font-bold">{item.reward}</span>
                  </div>
                  <Target className="w-5 h-5 opacity-70" />
                </div>
              ))}
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
              Scan to Play Now
            </h3>
            <QRCodeDisplay url="https://poptapboba.game" />
            <p className="text-center text-sm text-gray-500 mt-3">
              poptapboba.game
            </p>
          </div>

          {/* Key Benefits */}
          <div className="bg-[#5B2C83] text-white rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#FFC857]" />
              <h4 className="font-bold">Strategic Value</h4>
            </div>
            <ul className="space-y-2 text-sm opacity-95">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#FFC857] rounded-full"></div>
                <span>Increases dwell time and engagement</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#FFC857] rounded-full"></div>
                <span>Drives social media sharing</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#FFC857] rounded-full"></div>
                <span>Creates memorable brand experience</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Game Demo */}
        <div className="flex flex-col">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 flex-1 flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <h3 className="text-white text-2xl font-bold mb-2">Live Demo</h3>
              <p className="text-gray-400 text-sm">Try the game right now!</p>
            </div>
            <div className="w-full max-w-md">
              <PopTapGame />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-[#5B2C83]/5 rounded-xl">
              <div className="text-2xl font-bold text-[#5B2C83]">60s</div>
              <div className="text-xs text-gray-600 mt-1">Avg Play Time</div>
            </div>
            <div className="text-center p-4 bg-[#FF4F8B]/5 rounded-xl">
              <div className="text-2xl font-bold text-[#FF4F8B]">85%</div>
              <div className="text-xs text-gray-600 mt-1">Completion Rate</div>
            </div>
            <div className="text-center p-4 bg-[#FFC857]/5 rounded-xl">
              <div className="text-2xl font-bold text-[#FFC857]">3.2x</div>
              <div className="text-xs text-gray-600 mt-1">Replay Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
