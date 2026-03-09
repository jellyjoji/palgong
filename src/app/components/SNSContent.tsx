import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";

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

export function SNSContent() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl">
      <h3 className="text-3xl font-black text-gray-800 mb-8 text-center">
        SNS 콘텐츠 샘플 (Instagram)
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Post Header */}
            <div className="p-4 flex items-center gap-3 border-b">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {post.username[0].toUpperCase()}
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">{post.username}</div>
                <div className="text-xs text-gray-500">Toronto, ON</div>
              </div>
              <div className="text-2xl">{patternEmojis[post.pattern]}</div>
            </div>

            {/* Post Image */}
            <div className="aspect-square bg-gray-200 relative overflow-hidden">
              <img 
                src={post.image} 
                alt={`Boba post ${post.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                #{post.pattern}
              </div>
            </div>

            {/* Post Actions */}
            <div className="p-4">
              <div className="flex items-center gap-4 mb-3">
                <button className="hover:scale-110 transition-transform">
                  <Heart className="w-7 h-7 text-pink-500 fill-pink-500" />
                </button>
                <button className="hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-gray-700" />
                </button>
                <button className="hover:scale-110 transition-transform">
                  <Send className="w-7 h-7 text-gray-700" />
                </button>
                <button className="ml-auto hover:scale-110 transition-transform">
                  <Bookmark className="w-7 h-7 text-gray-700" />
                </button>
              </div>

              <div className="font-bold text-gray-800 mb-2">{post.likes.toLocaleString()} likes</div>
              
              <div className="text-sm text-gray-800">
                <span className="font-bold mr-2">{post.username}</span>
                {post.caption}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hashtag Guide */}
      <div className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-6 text-white">
        <h4 className="text-2xl font-bold mb-4 text-center">공식 해시태그</h4>
        <div className="flex justify-center gap-4 flex-wrap text-xl font-bold">
          <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            #PopTapBobaTO
          </span>
          <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            #BobaDayTO
          </span>
          <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            #TorontoBoba
          </span>
        </div>
      </div>
    </div>
  );
}
