import mainBobaImage from "figma:asset/6e8f3ed0c9d69761909fb79774b2a8d815f59793.png";
import { Gamepad2, Camera, Gift, QrCode, Instagram } from "lucide-react";

export function Slide1Cover() {
  return (
    <div className="h-full relative overflow-hidden bg-white">
      {/* Main Content Container */}
      <div className="h-full flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 lg:gap-16 max-w-7xl w-full">
          
          {/* Left Side - Poster Showcase */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* A4 Vertical Poster Container with 3D Effect */}
            <a 
              href="https://emu-donut-81192104.figma.site/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
            >
              {/* Shadow layers for depth */}
              <div className="absolute inset-0 bg-gray-200 rounded-2xl transform rotate-1 translate-x-2 translate-y-2"></div>
              <div className="absolute inset-0 bg-gray-100 rounded-2xl transform -rotate-0.5 translate-x-1 translate-y-1"></div>
              
              {/* Main Poster - A4 ratio (210:297 = 1:1.414) */}
              <div className="relative w-[280px] md:w-[360px] lg:w-[420px] aspect-[1/1.414] bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300 border border-gray-200">
                
                {/* TOP SECTION - Title Area */}
                <div className="relative bg-gradient-to-br from-[#5B2C83] via-[#7B4CA3] to-[#5B2C83] px-6 md:px-8 py-8 md:py-10 text-white">
                  {/* Decorative circles pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative z-10">
                    {/* Event Badge */}
                    <div className="inline-block bg-[#FFC857] px-4 py-1 rounded-full mb-4">
                      <span className="text-[#5B2C83] font-bold text-xs md:text-sm tracking-wider">MONTHLY EVENT</span>
                    </div>
                    
                    {/* Main Title */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
                      POP<br/>
                      TAP<br/>
                      <span className="text-[#FFC857]">BOBA DAY</span>
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-sm md:text-base text-white/90 font-medium tracking-wide">
                      Sip · Pop · Snap · Play
                    </p>
                    
                    {/* Date Badge */}
                    <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <span className="text-2xl md:text-3xl font-bold text-[#FFC857]">8th</span>
                      <span className="text-xs md:text-sm">Every<br/>Month</span>
                    </div>
                  </div>
                </div>

                {/* MIDDLE SECTION - Hero Image */}
                <div className="relative bg-white px-4 py-6 md:py-8">
                  {/* Image container with decorative frame */}
                  <div className="relative">
                    {/* Decorative number 8 in background */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[150px] font-bold text-[#5B2C83]/5 z-0">
                      8
                    </div>
                    
                    {/* Main Boba Image */}
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={mainBobaImage} 
                        alt="Colorful Popping Boba"
                        className="w-full h-48 md:h-56 object-cover"
                      />
                      {/* Color overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#5B2C83]/20 to-transparent"></div>
                    </div>
                    
                    {/* Floating circles decoration */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#FF4F8B] rounded-full opacity-80 blur-sm"></div>
                    <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-[#FFC857] rounded-full opacity-60 blur-md"></div>
                  </div>
                </div>

                {/* BOTTOM SECTION - Event Info */}
                <div className="bg-gradient-to-b from-white to-gray-50 px-6 md:px-8 py-6 md:py-8">
                  {/* Event Title */}
                  <h3 className="text-[#5B2C83] font-bold text-lg md:text-xl mb-4 text-center">
                    EVENT
                  </h3>
                  
                  {/* Event Items */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#5B2C83] to-[#7B4CA3] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Gamepad2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-xs md:text-sm">POP TAP GAME</p>
                        <p className="text-xs text-gray-500">게임하고 점수 획득</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#FF4F8B] to-[#FF6FA3] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Camera className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-xs md:text-sm">SNS 인증샷</p>
                        <p className="text-xs text-gray-500">사진 올리고 리워드 받기</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#FFC857] to-[#FFD77A] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Gift className="w-4 h-4 text-gray-900" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-xs md:text-sm">Lucky 8 Reward</p>
                        <p className="text-xs text-gray-500">랜덤 보상 이벤트</p>
                      </div>
                    </div>
                  </div>

                  {/* QR Code Area */}
                  <div className="bg-gradient-to-br from-[#5B2C83] to-[#7B4CA3] rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <QrCode className="w-5 h-5 text-[#FFC857]" />
                      <p className="text-white font-bold text-sm md:text-base">SCAN & PLAY</p>
                    </div>
                    <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <QrCode className="w-12 h-12 text-[#5B2C83]" />
                    </div>
                    <p className="text-white/80 text-xs">Tap the Boba · Win Rewards</p>
                  </div>
                </div>

                {/* FOOTER - Brand */}
                <div className="bg-[#5B2C83] px-6 md:px-8 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg md:text-xl">Palgon Tea</p>
                    <p className="text-white/70 text-xs">Toronto Premium Bubble Tea</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-[#FFC857]" />
                    <span className="text-white/80 text-xs">@palgontea</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Right Side - Presentation Info */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left px-4 md:px-0">
            {/* Badge */}
            <div className="inline-block bg-gradient-to-r from-[#5B2C83] to-[#FF4F8B] px-5 py-2 rounded-full">
              <span className="text-white font-bold text-sm md:text-base tracking-wider">MARKETING PROPOSAL</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                팔공티<br/>
                <span className="text-[#5B2C83]">팝핑 보바 이벤트</span>
              </h1>
              <div className="h-2 w-32 bg-gradient-to-r from-[#FF4F8B] to-[#FFC857] rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Description */}
            <div className="space-y-2 text-base md:text-lg text-gray-700">
              <p className="leading-relaxed">
                <span className="font-bold text-[#5B2C83]">토론토 프리미엄 버블티</span><br/>
                매월 8일 고객 참여형 이벤트 전략
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
              <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-[#5B2C83]/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5B2C83] to-[#7B4CA3] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <p className="font-bold text-gray-900 text-sm">인터랙티브 게임</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-[#FF4F8B]/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF4F8B] to-[#FF6FA3] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <p className="font-bold text-gray-900 text-sm">SNS 콘텐츠</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-[#FFC857]/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFC857] to-[#FFD77A] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Gift className="w-6 h-6 text-gray-900" />
                </div>
                <p className="font-bold text-gray-900 text-sm">리워드 프로그램</p>
              </div>
            </div>

            {/* Meta Info */}
            <div className="space-y-2 text-sm md:text-base text-gray-600 pt-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-[#5B2C83] rounded-full"></div>
                <span className="font-medium">제안일: 2026년 3월 7일</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-[#FF4F8B] rounded-full"></div>
                <span className="font-medium">타겟: 매월 8일 정기 이벤트</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Brand Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r from-[#FF4F8B] via-[#5B2C83] to-[#FFC857]"></div>
    </div>
  );
}