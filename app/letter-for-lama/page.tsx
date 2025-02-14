import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-500 text-white text-center px-6">
      <h1 className="text-3xl font-bold">The Official Love Contract 💕</h1>
      <p className="mt-4">By clicking below, you agree to:</p>
      <ul className="mt-2 text-lg">
        <li>✅ Never steal my food (unless {"it's"} pizza).</li>
        <li>✅ Laugh at my bad jokes.</li>
        <li>✅ Always remind me how lucky I am to have you.</li>
        <li>✅ Watch at least one cringey rom-com per month.</li>
      </ul>
      <button className="mt-6 px-6 py-3 bg-white text-black text-loveRed rounded-full text-lg">
        Sign with 💖
      </button>
    </div>
  );
};

export default page;
