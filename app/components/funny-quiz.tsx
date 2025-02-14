"use client";
import { useState } from "react";

export default function FunnyQuiz() {
  const questions = [
    {
      question: "How much do you love me?",
      options: ["A lot", "More than anything", "Infinity"],
    },
    {
      question: "If I steal your fries, what will you do?",
      options: ["Give you more fries", "Cry but still love you"],
    },
  ];
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-600 text-white text-center px-6">
      <h1 className="text-3xl font-bold mb-4">{questions[step].question}</h1>
      {questions[step].options.map((option, index) => (
        <button
          key={index}
          onClick={() => setStep((prev) => (prev + 1) % questions.length)}
          className="block mt-2 px-6 py-3 bg-white text-pink-600 rounded-full text-lg hover:scale-105 transition"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
