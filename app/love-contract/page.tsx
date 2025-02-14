import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-500 text-white text-center p-6">
      <h1 className="text-4xl font-bold">The Official Love Contract 💕</h1>
      <p className="mt-4 text-lg">By clicking below, you agree to:</p>
      <ul className="mt-2 text-xl space-y-2">
        <li>✅ Laugh at my bad jokes.</li>
        <li>✅ Never steal my fries (unless I allow it).</li>
        <li>✅ Always remind me how awesome I am.</li>
      </ul>
      <button className="mt-6 px-6 py-3 bg-white text-pink-500 rounded-full text-lg hover:scale-110 transition">
        Sign with 💖
      </button>
    </div>
  );
};

export default page;
