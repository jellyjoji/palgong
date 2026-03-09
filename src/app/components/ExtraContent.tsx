import { useState } from "react";
import { X, ChevronLeft } from "lucide-react";
import { SNSContent } from "./SNSContent";
import { PopTapGame } from "./PopTapGame";
import { QRCodeDisplay } from "./QRCodeDisplay";

interface ExtraContentProps {
  onClose: () => void;
}

export function ExtraContent({ onClose }: ExtraContentProps) {
  const [activeTab, setActiveTab] = useState<"sns" | "game" | "qr">("sns");

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-pink-600 to-purple-600 text-white p-6 shadow-xl z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 hover:bg-white/10 px-4 py-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-bold">프레젠테이션으로 돌아가기</span>
          </button>
          <h2 className="text-3xl font-black">추가 콘텐츠 & 자료</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-[88px] z-10">
        <div className="max-w-7xl mx-auto flex gap-2 p-4">
          <button
            onClick={() => setActiveTab("sns")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === "sns"
                ? "bg-pink-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            📱 SNS 콘텐츠 샘플
          </button>
          <button
            onClick={() => setActiveTab("game")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === "game"
                ? "bg-purple-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            🎮 게임 데모
          </button>
          <button
            onClick={() => setActiveTab("qr")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === "qr"
                ? "bg-yellow-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            📲 QR 코드 & 자료
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-8">
        {activeTab === "sns" && <SNSContent />}
        
        {activeTab === "game" && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12">
            <h3 className="text-4xl font-black text-gray-800 mb-8 text-center">
              POP TAP 게임 풀 데모
            </h3>
            <div className="max-w-md mx-auto">
              <PopTapGame />
            </div>
            <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">게임 특징</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h5 className="font-bold text-gray-800 mb-2">빠른 반응</h5>
                  <p className="text-sm text-gray-600">터치 즉시 반응하는 인터랙션</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h5 className="font-bold text-gray-800 mb-2">점수 시스템</h5>
                  <p className="text-sm text-gray-600">실시간 점수 및 리워드 표시</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎨</div>
                  <h5 className="font-bold text-gray-800 mb-2">컬러풀 UI</h5>
                  <p className="text-sm text-gray-600">브랜드 컬러 일관성 유지</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "qr" && (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-3xl p-12">
              <h3 className="text-4xl font-black text-gray-800 mb-8 text-center">
                QR 코드 자료
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    게임 접속용
                  </h4>
                  <QRCodeDisplay url="https://poptapboba.game" size={250} />
                  <p className="text-center text-sm text-gray-600 mt-4">
                    컵과 포스터에 사용
                  </p>
                </div>
                
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    인스타그램 프로필
                  </h4>
                  <QRCodeDisplay url="https://instagram.com/poptapboba" size={250} />
                  <p className="text-center text-sm text-gray-600 mt-4">
                    SNS 팔로우 유도용
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-6 text-center">QR 배치 위치</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">🥤</div>
                    <h5 className="font-bold mb-2">컵 스티커</h5>
                    <p className="text-sm opacity-90">음료 컵 측면에 부착</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">📋</div>
                    <h5 className="font-bold mb-2">테이블 텐트</h5>
                    <p className="text-sm opacity-90">매장 내 테이블 위</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">🪧</div>
                    <h5 className="font-bold mb-2">포스터</h5>
                    <p className="text-sm opacity-90">입구 및 주문 카운터</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Downloadable Assets */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                다운로드 가능한 자료
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <button className="bg-pink-100 hover:bg-pink-200 text-pink-700 font-bold py-4 px-6 rounded-2xl transition-colors flex items-center justify-between">
                  <span>📄 컵 스티커 템플릿</span>
                  <span>↓</span>
                </button>
                <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-4 px-6 rounded-2xl transition-colors flex items-center justify-between">
                  <span>📄 포스터 디자인</span>
                  <span>↓</span>
                </button>
                <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-bold py-4 px-6 rounded-2xl transition-colors flex items-center justify-between">
                  <span>📄 SNS 콘텐츠 가이드</span>
                  <span>↓</span>
                </button>
                <button className="bg-green-100 hover:bg-green-200 text-green-700 font-bold py-4 px-6 rounded-2xl transition-colors flex items-center justify-between">
                  <span>📄 프레젠테이션 PDF</span>
                  <span>↓</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
