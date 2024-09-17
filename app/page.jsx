import Image from "next/image";
import React from "react";

export default function UnderConstruction() {
  return (
    <div className="bg-white flex flex-col justify-between items-center">
      <header className="w-full flex justify-between items-center px-8 py-4">
        <div className="text-3xl font-bold" style={{ color: "#D305B1" }}>
          Webfudge
        </div>
        <a href="#" className="text-gray-600 hover:text-blue-400">
          Back to Home
        </a>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center">
        <div className="mb-6">
          <Image
            width={1000}
            height={1000}
            src="/g22.png"
            alt="Construction Image"
            className="w-auto h-[40vh] object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-700 mb-4">
          Under Construction!
        </h1>
        <p className="text-gray-500 text-center mb-10">
          To make things right we need some time to rebuild.
        </p>
        <p className="text-gray-600 mb-4">Get notified when we are done.</p>

        <div className="flex">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="text-white px-6 py-2 rounded-r-lg transition"
            style={{ backgroundColor: "#D305B1" }}
          >
            Send
          </button>
        </div>
      </main>

      <footer className="w-full py-6 bg-black flex flex-col items-center fixed bottom-0">
        <p className="text-base text-white">
          For Project Inquiry Contact{" "}
          <a
            href="https://webfudgeagency.com"
            className="hover:text-blue-700 font-semibold"
            style={{ color: "#D305B1" }}
          >
            WEBFUDGE
          </a>
        </p>
      </footer>
    </div>
  );
}
