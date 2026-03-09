import { Heart, MessageCircle, Send, Bookmark, Instagram } from "lucide-react";

interface SNSPost {
  id: number;
  username: string;
  image: string;
  caption: string;
  likes: number;
  pattern: "8" | "heart" | "colorful";
}

const mockPosts: SNSPost[] = [
  {
    id: 1,
    username: "boba_lover_to",
    image: "https://images.unsplash.com/photo-1682422319466-011464028916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJvYmElMjB0ZWElMjBkcmlua3xlbnwxfHx8fDE3NzI2NDU4Mjd8MA&ixlib=rb-4.1.0&q=80&w=400",
    caption: "Lucky 8 Day! 🎉 파핑 보바 너무 예뻐요 💗\n\n#PopTapBobaTO #BobaDayTO #TorontoBoba",
    likes: 248,
    pattern: "8",
  },
  {
    id: 2,
    username: "to_foodie_life",
    image: "https://images.unsplash.com/photo-1622480916897-1e463e868461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWJibGUlMjB0ZWElMjBwb3BwaW5nJTIwYm9iYXxlbnwxfHx8fDE3NzI2NDU4Mjh8MA&ixlib=rb-4.1.0&q=80&w=400",
    caption: "하트 파핑 보바 발견! 💕 터질 때마다 달콤해요 😍\n\n#PopTapBobaTO #BobaDayTO #BubbleTea",
    likes: 312,
    pattern: "heart",
  },
  {
    id: 3,
    username: "toronto_eats",
    image: "https://images.unsplash.com/photo-1682422319466-011464028916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJvYmElMjB0ZWElMjBkcmlua3xlbnwxfHx8fDE3NzI2NDU4Mjd8MA&ixlib=rb-4.1.0&q=80&w=400",
    caption: "컬러풀 파핑 보바 챌린지! 🎨 POP TAP 게임도 완전 재밌음 🎮\n\n#PopTapBobaTO #BobaDayTO",
    likes: 189,
    pattern: "colorful",
  },
];

const patternEmojis = {
  "8": "8️⃣",
  "heart": "💗",
  "colorful": "🎨",
};

export function Slide13SNS() {
  return (
    <div className="h-full bg-white p-6 md:p-12 lg:p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
          <div className="h-1 w-12 md:w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-xs md:text-sm font-bold text-[#5B2C83] tracking-wider uppercase">Social Media Sample</span>
        </div>
        <div className="flex items-center gap-3 md:gap-4 mb-3">
          <Instagram className="w-8 h-8 md:w-10 md:h-10 text-[#FF4F8B]" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">SNS 콘텐츠 샘플</h2>
        </div>
        <p className="text-sm md:text-base text-gray-600 mt-2">Instagram 게시물 예시 및 공식 해시태그</p>
      </div>

      {/* SNS Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
        {mockPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-[#5B2C83]/30 transition-all">
            {/* Post Header */}
            <div className="p-3 md:p-4 flex items-center gap-3 border-b border-gray-100">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#FF4F8B] to-[#5B2C83] flex items-center justify-center text-white font-bold text-sm md:text-base">
                {post.username[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-gray-800 text-sm md:text-base truncate">{post.username}</div>
                <div className="text-xs text-gray-500">Toronto, ON</div>
              </div>
              <div className="text-xl md:text-2xl flex-shrink-0">{patternEmojis[post.pattern]}</div>
            </div>

            {/* Post Image */}
            <div className="aspect-square bg-gray-200 relative overflow-hidden">
              <img 
                src={post.image} 
                alt={`Boba post ${post.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                #{post.pattern}
              </div>
            </div>

            {/* Post Actions */}
            <div className="p-3 md:p-4">
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                <button className="hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5 md:w-7 md:h-7 text-pink-500 fill-pink-500" />
                </button>
                <button className="hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 md:w-7 md:h-7 text-gray-700" />
                </button>
                <button className="hover:scale-110 transition-transform">
                  <Send className="w-5 h-5 md:w-7 md:h-7 text-gray-700" />
                </button>
                <button className="ml-auto hover:scale-110 transition-transform">
                  <Bookmark className="w-5 h-5 md:w-7 md:h-7 text-gray-700" />
                </button>
              </div>

              <div className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{post.likes.toLocaleString()} likes</div>
              
              <div className="text-xs md:text-sm text-gray-800 leading-relaxed">
                <span className="font-bold mr-2">{post.username}</span>
                {post.caption}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hashtag Guide */}
      <div className="bg-gradient-to-r from-[#FF4F8B] to-[#5B2C83] rounded-2xl md:rounded-3xl p-5 md:p-8 text-white">
        <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
          <Instagram className="w-6 h-6 md:w-8 md:h-8" />
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">공식 해시태그</h4>
        </div>
        <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
          <span className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base lg:text-xl">
            #PopTapBobaTO
          </span>
          <span className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base lg:text-xl">
            #BobaDayTO
          </span>
          <span className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base lg:text-xl">
            #TorontoBoba
          </span>
        </div>
        <p className="text-center mt-4 md:mt-6 text-xs md:text-sm opacity-90 leading-relaxed">
          고객들이 이벤트 참여 시 위 해시태그를 사용하여 자동으로 브랜드 홍보 효과를 극대화합니다
        </p>
      </div>

      {/* Campaign Engagement Tips */}
      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-gradient-to-br from-[#5B2C83]/5 to-white rounded-xl p-4 md:p-5 border-2 border-[#5B2C83]/10">
          <div className="text-2xl md:text-3xl font-bold text-[#5B2C83] mb-2">30-60</div>
          <div className="text-xs md:text-sm font-bold text-gray-900 mb-1">월간 예상 게시물</div>
          <div className="text-xs text-gray-600">이벤트 참여자의 50% SNS 공유 예상</div>
        </div>
        <div className="bg-gradient-to-br from-[#FF4F8B]/5 to-white rounded-xl p-4 md:p-5 border-2 border-[#FF4F8B]/10">
          <div className="text-2xl md:text-3xl font-bold text-[#FF4F8B] mb-2">3K-8K</div>
          <div className="text-xs md:text-sm font-bold text-gray-900 mb-1">월간 총 노출 수</div>
          <div className="text-xs text-gray-600">게시물당 평균 100-150명 도달</div>
        </div>
        <div className="bg-gradient-to-br from-[#FFC857]/5 to-white rounded-xl p-4 md:p-5 border-2 border-[#FFC857]/10">
          <div className="text-2xl md:text-3xl font-bold text-[#FFC857] mb-2">2.5-4%</div>
          <div className="text-xs md:text-sm font-bold text-gray-900 mb-1">참여율 (Engagement)</div>
          <div className="text-xs text-gray-600">업계 평균(1.5-2%)의 2배 수준</div>
        </div>
      </div>
    </div>
  );
}
