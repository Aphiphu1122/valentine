"use client";

import { useState, useRef, useEffect } from "react";

export default function LoveMessage() {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  // กำหนด Audio แค่ครั้งเดียวตอนโหลด Component
  useEffect(() => {
    audioRef.current = new Audio("/love-song.mp3");

    // Cleanup เมื่อ Component ถูกปิด
    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!play);
  };

  return (
    <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md">
      <p className="text-xl text-pink-600 font-semibold">You are my Fav Girl! ❤️</p>
      <p className="text-gray-600 mt-2">Wishing you lots of love and happiness!</p>
      <button
        onClick={toggleMusic}
        className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-700 transition"
      >
        {play ? "Pause Love Song 🎶" : "Play Love Song 🎵"}
      </button>
    </div>
  );
}
