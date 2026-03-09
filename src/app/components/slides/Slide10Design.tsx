import { Palette, Type, Layout } from "lucide-react";

export function Slide10Design() {
  const colorPalette = [
    { name: "Boba Purple", hex: "#5B2C83", usage: "Primary brand color (30%)" },
    { name: "Hot Pink", hex: "#FF4F8B", usage: "Accent & CTAs (5%)" },
    { name: "Mango Yellow", hex: "#FFC857", usage: "Highlights & energy (5%)" },
    { name: "Light Gray", hex: "#F7F7F7", usage: "Backgrounds (60%)" }
  ];

  return (
    <div className="h-full bg-white p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-sm font-bold text-[#5B2C83] tracking-wider uppercase">Brand Guidelines</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-900">Design System & Assets</h2>
      </div>

      <div className="grid grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Color Palette */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-[#5B2C83]" />
              <h3 className="text-2xl font-bold text-gray-900">Color Palette</h3>
            </div>
            <div className="space-y-4">
              {colorPalette.map((color, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div 
                    className="w-20 h-20 rounded-xl shadow-lg flex-shrink-0"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 mb-1">{color.name}</div>
                    <div className="text-sm text-gray-600 mb-1">{color.hex}</div>
                    <div className="text-xs text-gray-500">{color.usage}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gradient-to-br from-[#5B2C83]/5 to-[#FF4F8B]/5 rounded-xl p-4 border-l-4 border-[#5B2C83]">
              <p className="text-sm text-gray-700 font-medium">
                💡 60-30-10 Rule: 60% neutral backgrounds, 30% primary purple, 10% accent colors
              </p>
            </div>
          </div>

          {/* Typography */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Type className="w-6 h-6 text-[#5B2C83]" />
              <h3 className="text-2xl font-bold text-gray-900">Typography</h3>
            </div>
            <div className="space-y-5">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-2">Titles & Headlines</div>
                <div className="text-3xl font-bold text-gray-900">Pretendard Bold</div>
                <div className="text-xs text-gray-500 mt-2">36-44pt for presentations</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-2">Section Headers</div>
                <div className="text-2xl font-medium text-gray-900">Pretendard Medium</div>
                <div className="text-xs text-gray-500 mt-2">24-28pt for section titles</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-2">Body Text</div>
                <div className="text-base text-gray-900">Pretendard Regular</div>
                <div className="text-xs text-gray-500 mt-2">16-18pt for body copy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Layout Principles */}
          <div className="bg-gradient-to-br from-[#5B2C83]/5 to-[#FF4F8B]/5 rounded-2xl p-6 border-l-4 border-[#5B2C83]">
            <div className="flex items-center gap-3 mb-6">
              <Layout className="w-6 h-6 text-[#5B2C83]" />
              <h3 className="text-2xl font-bold text-gray-900">Layout Guidelines</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-bold text-gray-900 mb-2">16:9 Aspect Ratio</h4>
                <p className="text-sm text-gray-600">Standard presentation format for screens and projectors</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-bold text-gray-900 mb-2">Left-Aligned Content</h4>
                <p className="text-sm text-gray-600">Professional corporate style with text on left, visuals on right</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-bold text-gray-900 mb-2">Generous White Space</h4>
                <p className="text-sm text-gray-600">Clean, breathable design for better readability</p>
              </div>
            </div>
          </div>

          {/* Design Assets Preview */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-5">Marketing Assets</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-[#5B2C83] to-[#7B4CA3] rounded-xl p-6 flex flex-col items-center justify-center text-white">
                <div className="text-4xl mb-2">🧋</div>
                <div className="font-bold text-center text-sm">Instagram Post</div>
                <div className="text-xs opacity-75 mt-1">1080x1080</div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[#FF4F8B] to-[#FF6FA3] rounded-xl p-6 flex flex-col items-center justify-center text-white">
                <div className="text-4xl mb-2">📱</div>
                <div className="font-bold text-center text-sm">Story Template</div>
                <div className="text-xs opacity-75 mt-1">1080x1920</div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[#FFC857] to-[#FFD77A] rounded-xl p-6 flex flex-col items-center justify-center text-gray-900">
                <div className="text-4xl mb-2">🖼️</div>
                <div className="font-bold text-center text-sm">In-Store Poster</div>
                <div className="text-xs opacity-75 mt-1">A3 Size</div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[#5B2C83] to-[#FF4F8B] rounded-xl p-6 flex flex-col items-center justify-center text-white">
                <div className="text-4xl mb-2">📄</div>
                <div className="font-bold text-center text-sm">Table Tent</div>
                <div className="text-xs opacity-75 mt-1">4x6 inches</div>
              </div>
            </div>
          </div>

          {/* Brand Personality */}
          <div className="bg-[#5B2C83] text-white rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Brand Personality</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center font-medium">
                Playful
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center font-medium">
                Modern
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center font-medium">
                Engaging
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center font-medium">
                Vibrant
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
