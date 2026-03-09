import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Boba {
  id: number;
  x: number;
  y: number;
  type: "pink" | "purple" | "yellow";
}

const GAME_DURATION = 30;

export function PopTapGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [bobas, setBobas] = useState<Boba[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [nextId, setNextId] = useState(0);

  const spawnBoba = useCallback(() => {
    const types: ("pink" | "purple" | "yellow")[] = ["pink", "purple", "yellow"];
    const newBoba: Boba = {
      id: Date.now() + Math.random(),
      x: Math.random() * 80 + 5,
      y: Math.random() * 70 + 10,
      type: types[Math.floor(Math.random() * types.length)],
    };
    setBobas((prev) => [...prev, newBoba]);
    setNextId((prev) => prev + 1);
  }, []);

  const popBoba = (id: number) => {
    setBobas((prev) => prev.filter((boba) => boba.id !== id));
    setScore((prev) => prev + 10);
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setBobas([]);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;

    const spawner = setInterval(() => {
      if (bobas.length < 6) {
        spawnBoba();
      }
    }, 800);

    return () => clearInterval(spawner);
  }, [isPlaying, bobas.length, spawnBoba]);

  useEffect(() => {
    if (!isPlaying) return;

    const remover = setInterval(() => {
      setBobas((prev) => {
        if (prev.length > 0) {
          return prev.slice(1);
        }
        return prev;
      });
    }, 2500);

    return () => clearInterval(remover);
  }, [isPlaying]);

  const getBobaColor = (type: string) => {
    switch (type) {
      case "pink":
        return "from-pink-400 to-pink-600";
      case "purple":
        return "from-purple-400 to-purple-600";
      case "yellow":
        return "from-yellow-400 to-yellow-600";
      default:
        return "from-pink-400 to-pink-600";
    }
  };

  const getRewardLevel = () => {
    if (score >= 300) return "🎉 Free Boba!";
    if (score >= 200) return "⭐ Size Upgrade!";
    if (score >= 100) return "✨ Free Topping!";
    return "계속 터뜨려요!";
  };

  return (
    <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 rounded-3xl p-6 shadow-2xl">
      {/* Game Header */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-2xl font-black text-gray-800">
            점수: <span className="text-pink-600">{score}</span>
          </div>
          <div className="text-2xl font-black text-gray-800">
            ⏱️ {timeLeft}초
          </div>
        </div>
        <div className="text-center text-sm font-bold text-purple-600">
          {getRewardLevel()}
        </div>
      </div>

      {/* Game Area */}
      <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden aspect-[3/4] border-4 border-white/50">
        {!isPlaying && timeLeft === GAME_DURATION && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <button
              onClick={startGame}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-2xl font-black hover:scale-110 transition-transform shadow-xl"
            >
              🎮 게임 시작
            </button>
          </div>
        )}

        {!isPlaying && timeLeft === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm text-white p-8">
            <div className="text-5xl font-black mb-4">게임 종료!</div>
            <div className="text-3xl mb-2">최종 점수: {score}</div>
            <div className="text-xl mb-6">{getRewardLevel()}</div>
            <button
              onClick={startGame}
              className="bg-white text-purple-600 px-6 py-3 rounded-full text-xl font-black hover:scale-110 transition-transform"
            >
              다시 하기
            </button>
          </div>
        )}

        <AnimatePresence>
          {bobas.map((boba) => (
            <motion.button
              key={boba.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, rotate: 180 }}
              onClick={() => popBoba(boba.id)}
              className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${getBobaColor(
                boba.type
              )} shadow-xl cursor-pointer hover:scale-110 transition-transform border-4 border-white/50`}
              style={{
                left: `${boba.x}%`,
                top: `${boba.y}%`,
              }}
            >
              <div className="text-2xl">🫧</div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Instructions */}
      <div className="mt-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 text-center">
        <p className="text-sm font-bold text-gray-700">
          파핑 보바를 터뜨려서 점수를 획득하세요!
        </p>
      </div>
    </div>
  );
}
