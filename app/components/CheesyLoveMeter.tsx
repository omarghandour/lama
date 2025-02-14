import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CheesyLoveMeter = () => {
  const [cheesiness, setCheesiness] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isSwooning, setIsSwooning] = useState(false);

  const chapterTitles = [
    "Chapter 1: The Sweetest Texts That Made Us Smile Across Miles",
    "Chapter 2: The One-Sided Crush—How He Fell First and Loved from Afar",
    "Chapter 3: The Late-Night Confession—She Said ‘I Love You’ While He Slept",
    "Chapter 4: Watching Reels Miles Apart—Laughing, Crying, and Texting Reactions in Sync",
    "Chapter 5: Voice Notes at 3 AM — Sleepy Words, Silly Stories, and Secret Feelings",
    "Chapter 6: The ‘Good Morning’ and ‘Goodnight’ Routine —  A Love Language of Its Own",
    "Chapter 7: When Her Mom Knows His Name — The Moment It Got Serious",
    "Chapter 8: Love Without Borders — How We Made Distance Just a Number",
    "Chapter 9: Counting the Days—Dreaming of the Moment We’d Finally Be Together",
    "Chapter 10: Full Cringe Immunity Achieved: When Love Makes Us Go All Out, No Matter the Distance",
  ];

  const dramaticLines = [
    "Their hearts beat in sync, even with oceans between them...",
    "He loved her long before she loved him back, every message a quiet wish for something more...",
    "She waited for his reply. Three dots appeared... then disappeared. The suspense was real.",
    "They shared memes, laughed until their stomachs hurt, and melted over adorable baby videos. True love in its purest form.",
    "Their 3 AM voice notes were a mix of sleepy whispers and soft laughter, their voices heavy with exhaustion but filled with warmth. Between silly stories and quiet confessions, they found comfort in each other’s words, understanding each other in a way no one else could",
    "They listened to the same song, feeling close even when oceans apart.",
    "Their daily texts turned into a routine, a comfort, a reminder: ‘I’m always here for you.’ ",
    "Distance tested them, but love won. Every time. No matter what.",
    "One day, the distance will disappear. Until then, they’ll keep making every moment count.",
    // "They used the 🥺 emoji unironically, because sometimes words just weren't enough!",
    // "Couple selfies were taken on video calls, capturing the essence of love in pixels!",
    "The cheesiest long-distance romance ever. 📖 A love story that defies the miles! Sounds familiar? Us? Yeah, okay... XD",
  ];

  const handleCheeseClick = () => {
    if (cheesiness < 100) {
      setCheesiness((prev) => Math.min(prev + Math.random() * 8, 100));
    } else {
      setIsSwooning(true);
      setTimeout(() => setIsSwooning(false), 1000);
    }
  };

  useEffect(() => {
    setCurrentChapter(
      Math.floor((cheesiness / 100) * (chapterTitles.length - 1))
    );
  }, [chapterTitles.length, cheesiness]);

  return (
    <div className="relative mb-12 bg-rose-50 p-8 rounded-xl shadow-lg w-full">
      {/* Book Cover Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl transform rotate-1 scale-95 opacity-50" />

      {/* Main Content */}
      <motion.div
        className="relative"
        animate={{ rotate: isSwooning ? [0, -2, 2, 0] : 0 }}
      >
        {/* Title */}
        <h2 className="text-xl font-serif font-bold text-purple-700 mb-6">
          {cheesiness < 100
            ? "Our Long Distance Novel XD"
            : "ULTIMATE LOVE STORY"}
        </h2>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2 font-semibold text-pink-600">
            <span>🌱 Mildly Cheesy</span>
            <span>🔥 Extra Cheesy</span>
          </div>
          <div className="h-8 bg-white rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"
              initial={{ width: 0 }}
              animate={{ width: `${cheesiness}%` }}
              transition={{ type: "spring" }}
            />
          </div>
        </div>

        {/* Chapter Display */}
        <div className="text-left text-pretty mb-8">
          <div className="text-lg font-bold text-purple-600 mb-2">
            {cheesiness < 100
              ? chapterTitles[currentChapter]
              : "EPILOGUE: Happily Ever After (Duh)"}
          </div>
          <div className="text-sm text-gray-600 italic">
            {dramaticLines[currentChapter]}
          </div>
        </div>

        {/* Cheese Button */}
        <motion.button
          onClick={handleCheeseClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 rounded-full font-bold text-lg shadow-md transition-colors"
        >
          {cheesiness < 100 ? (
            <>Add Cheese! 🧀</>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span className="animate-pulse">MAXIMUM CHEESE!</span> 🚨
            </div>
          )}
        </motion.button>

        {/* Cheese Effects */}
        {cheesiness >= 100 && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="text-2xl absolute"
                initial={{
                  x: Math.random() * 100 - 50 + "%",
                  y: Math.random() * 100 - 50 + "%",
                  rotate: Math.random() * 360,
                  scale: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  y: ["0%", "-500%"],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {["🧀", "💘", "📖", "😂", "🥺", "🔥", "✨", "🎉"][i % 8]}
              </motion.div>
            ))}
          </div>
        )}

        {/* Book Flair */}
        <div className="mt-6 flex justify-center gap-4 text-4xl">
          {cheesiness > 30 && <span>💌</span>}
          {cheesiness > 50 && <span>🌹</span>}
          {cheesiness > 70 && <span>🕯️</span>}
          {cheesiness >= 100 && <span className="animate-bounce">📖</span>}
        </div>
      </motion.div>

      {/* Hidden Message */}
      {cheesiness >= 100 && (
        <div className="absolute bottom-2 right-2 text-sm text-gray-500 rotate-3">
          (Please {"don't"} actually write this book)
        </div>
      )}
    </div>
  );
};
export default CheesyLoveMeter;
// Usage in your main component:
// <CheesyLoveMeter />
