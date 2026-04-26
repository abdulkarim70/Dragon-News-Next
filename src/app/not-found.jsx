"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white text-center">

      <h1 className="text-8xl font-bold text-red-500 animate-pulse">
        404
      </h1>

      <p className="mt-4 text-gray-400">
        Page not found
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg z-10"
      >
        Go Home
      </Link>

      {/* Fix: pointer-events-none */}
      <div className="pointer-events-none absolute w-72 h-72 bg-red-500 opacity-20 rounded-full blur-3xl animate-bounce top-10"></div>
      <div className="pointer-events-none absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-bounce bottom-10"></div>
    </div>
  );
}