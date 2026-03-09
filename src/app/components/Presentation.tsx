import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Grid3x3 } from "lucide-react";
import { Slide1Cover } from "./slides/Slide1Cover";
import { Slide2Overview } from "./slides/Slide2Overview";
import { Slide3Concept } from "./slides/Slide3Concept";
import { Slide4Offline } from "./slides/Slide4Offline";
import { Slide5Game } from "./slides/Slide5Game";
import { Slide6Online } from "./slides/Slide6Online";
import { Slide7Flow } from "./slides/Slide7Flow";
import { Slide8KPI } from "./slides/Slide8KPI";
import { Slide9Budget } from "./slides/Slide9Budget";
import { Slide10Design } from "./slides/Slide10Design";
import { Slide11Timeline } from "./slides/Slide11Timeline";
import { Slide12Impact } from "./slides/Slide12Impact";
import { Slide13SNS } from "./slides/Slide13SNS";

const slides = [
  { id: 1, Component: Slide1Cover, title: "Cover" },
  { id: 2, Component: Slide2Overview, title: "Market Analysis" },
  { id: 3, Component: Slide3Concept, title: "Core Concept" },
  { id: 4, Component: Slide4Offline, title: "In-Store Strategy" },
  { id: 5, Component: Slide5Game, title: "Mobile Game" },
  { id: 6, Component: Slide6Online, title: "Social Media" },
  { id: 7, Component: Slide7Flow, title: "Customer Journey" },
  { id: 8, Component: Slide8KPI, title: "KPIs" },
  { id: 9, Component: Slide9Budget, title: "Budget" },
  { id: 10, Component: Slide10Design, title: "Design System" },
  { id: 11, Component: Slide11Timeline, title: "Timeline" },
  { id: 12, Component: Slide12Impact, title: "Expected Impact" },
  { id: 13, Component: Slide13SNS, title: "SNS Content Sample" },
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].Component;

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Help Hint - Responsive */}
      <div className="fixed top-4 md:top-8 left-4 md:left-8 bg-white/10 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium z-10">
        <span className="hidden md:inline">⌨️ 키보드 ← → 또는 버튼으로 이동</span>
        <span className="md:hidden">👆 스와이프 또는 버튼</span>
      </div>

      {/* Main Slide - Responsive */}
      <div className="h-screen flex items-center justify-center p-2 md:p-4 lg:p-8">
        <div className="w-full h-full max-w-7xl bg-white rounded-lg shadow-2xl overflow-hidden">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation Controls - Responsive */}
      <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4 bg-gray-800/90 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
        <button
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className="p-1.5 md:p-2 rounded-full bg-pink-500 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-pink-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        
        <div className="text-white font-medium min-w-16 md:min-w-24 text-center text-sm md:text-base">
          {currentSlide + 1} / {slides.length}
        </div>
        
        <button
          onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
          disabled={currentSlide === slides.length - 1}
          className="p-1.5 md:p-2 rounded-full bg-pink-500 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-pink-600 transition-colors"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <div className="w-px h-4 md:h-6 bg-gray-600 mx-1 md:mx-2"></div>

        <button
          onClick={() => setShowThumbnails(!showThumbnails)}
          className="p-1.5 md:p-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors"
        >
          <Grid3x3 className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Thumbnail Overview - Responsive */}
      {showThumbnails && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 p-4 md:p-8 overflow-y-auto">
          <button
            onClick={() => setShowThumbnails(false)}
            className="absolute top-4 md:top-8 right-4 md:right-8 text-white text-xl md:text-2xl hover:text-pink-400 transition-colors"
          >
            ✕
          </button>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto pt-12 md:pt-16">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(index);
                  setShowThumbnails(false);
                }}
                className={`group relative aspect-video bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-105 ${
                  currentSlide === index ? "ring-4 ring-pink-500" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-2">
                    <div className="text-2xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">{slide.id}</div>
                    <div className="text-xs md:text-sm font-medium text-gray-600">{slide.title}</div>
                  </div>
                </div>
                {currentSlide === index && (
                  <div className="absolute top-1 md:top-2 right-1 md:right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    현재
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}