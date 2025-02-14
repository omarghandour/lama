"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import MusicCard from "./Music";
import CheesyLoveMeter from "./CheesyLoveMeter";

type QuizQuestion = {
  question: string;
  options: string[];
  correct: string;
  funnyResponses: string[];
};

export default function Hero() {
  const [isExploding] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [funnyResponse, setFunnyResponse] = useState("");

  const quizQuestions: QuizQuestion[] = [
    {
      question: "What's my favorite thing about you?",
      options: [
        "Your amazing cooking skills 🍰🧁",
        "Your ability to make me laugh 😂",
        "Your beautiful eyes 👀",
        "Your Cat Abood the retired cat? 😾",
      ],
      correct: "Your beautiful eyes 👀",
      funnyResponses: [
        "Nice try, but I'm the cook here!",
        "You really are the reason I laugh way too much alone in my room! but still incorrect 😂",
        "Correct! Those eyes melt me 🫠",
        "Really? 🤨",
      ],
    },
    {
      question: "What's our idea of the perfect date",
      options: [
        "Wishing we could teleport just for one hug 🛸❤️",
        "Watching the same movie at the same time and texting reactions 🍿",
        "Falling asleep on a chat while talking about everything and nothing 😴📱",
        "Fighting Abood together 😾⚔️",
      ],
      correct:
        "Watching the same movie at the same time and texting reactions 🍿",
      funnyResponses: [
        "Teleportation WHEN?! Science, hurry up! 😭",
        "Correct! And let’s be real, I mostly watch the movie just to see your messages pop up. 🥰",
        "Falling asleep together is adorable, but I’d 100% stay awake just to talk to you ❤️",
        "Ok run Abood is coming! we were joking 😭",
      ],
    },
    {
      question: "How much do I love you? (Choose wisely! 👀)",
      options: [
        "Meh 🤷",
        "To the fridge and back 🚶♂️",
        "More than coffee ☕",
        "Infinity × ∞",
      ],
      correct: "Infinity × ∞",
      funnyResponses: [
        "Ouch! Try again 😤",
        "That's not even to the mailbox!",
        "So Close, but keep going...",
        "Correct! My love overflows! 🌊",
      ],
    },
  ];

  const handleAnswer = (selectedAnswer: string, questionIndex: number) => {
    if (selectedAnswer === quizQuestions[questionIndex].correct) {
      setScore((prev) => prev + 1);
      setShowConfetti(true);
      setFunnyResponse(quizQuestions[questionIndex].funnyResponses[2]); // Response at the same index as the answer
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      // Show a funny response if the answer is incorrect
      const randomResponse =
        quizQuestions[questionIndex].funnyResponses[
          quizQuestions[questionIndex].options.indexOf(selectedAnswer)
        ];
      setFunnyResponse(randomResponse);
    }

    if (questionIndex === quizQuestions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
    setFunnyResponse(""); // Reset funny response
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="min-h-screen text-black bg-gradient-to-br from-pink-100 to-red-100 flex flex-col items-center justify-center p-4 overflow-x-hidden">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      <motion.div
        className="relative text-center max-w-4xl w-full"
        animate={{ scale: isExploding ? 1.2 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Floating Elements */}
        <div className="absolute inset-0 flex justify-between px-4 opacity-30 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="text-2xl"
              animate={{ y: [0, -40, 0], rotate: [0, 360] }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <h1 className="text-3xl md:text-6xl font-bold text-neutral-500 mb-8 z-10 relative">
          Happy {"Valentine's"} Day, <br />
          <span>Lama 💖</span>
        </h1>

        <div className="w-full flex justify-center">
          <CheesyLoveMeter />
        </div>
        {/* Quiz Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl mb-12">
          {!quizStarted ? (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-purple-600">
                Relationship Pop Quiz! 🧠💘
              </h2>
              <p className="text-lg text-gray-700">
                Prove {"you're"} paying attention... No pressure... but{" "}
                {"there's"} only one right answer 😇
              </p>
              <button
                onClick={() => setQuizStarted(true)}
                className="bg-purple-500 text-white px-8 py-3 rounded-full text-xl hover:bg-purple-600 transition-colors"
              >
                Start Quiz! 🚀
              </button>
            </div>
          ) : !showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-pink-600">
                Question {currentQuestion + 1}:{" "}
                {quizQuestions[currentQuestion].question}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quizQuestions[currentQuestion].options.map((option, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="p-4 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors text-left"
                    onClick={() => handleAnswer(option, currentQuestion)}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
              {funnyResponse && (
                <p className="text-xl text-red-500 mt-4">{funnyResponse}</p>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-green-600">
                Quiz Complete! 🎉
              </h2>
              <p className="text-2xl">
                Score: {score}/{quizQuestions.length}
              </p>
              <p className="text-xl text-gray-700">
                {score === quizQuestions.length
                  ? "Perfect! You're the ultimate soulmate! 💍"
                  : score > quizQuestions.length / 2
                  ? "Not bad... I guess we can keep dating 😏"
                  : "Yikes... Still keeping you though ❤️🔥"}
              </p>
              <button
                onClick={resetQuiz}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                Try Again? 🔄
              </button>
            </motion.div>
          )}
        </div>
        <MusicCard />
        {/* Footer */}
        <motion.div
          className="mt-12 text-red-500 text-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Made with Love ❤️
        </motion.div>
      </motion.div>
    </div>
  );
}
