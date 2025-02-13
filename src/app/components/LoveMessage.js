"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image"; 

export default function LoveMessage() {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [images.length]);

 
  useEffect(() => {
    audioRef.current = new Audio("/love-song.mp3");

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
    <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
 
      <div className="w-full h-64 mb-4 relative overflow-hidden rounded-lg">
        <Image
          src={images[currentImage]}
          alt="Love"
          width={500} 
          height={500}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>


      <h2 className="text-3xl text-pink-600 font-bold">To My Forever Love Bibi ❤️</h2>
      <p className="text-gray-700 mt-4 italic">"Thank you so much for coming into my life." 💖</p>


      <div className="flex justify-center mt-6">
        <button
          onClick={toggleMusic}
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-700 transition flex items-center justify-center"
        >
          {play ? "Pause Love Song 💚" : "Play Love Song 🤍"}
        </button>
      </div>


      <p className="text-gray-600 mt-6 leading-relaxed">
      **"Thank you so much, Bibi, for coming into my life and making me so happy. Even though we sometimes argue and have our ups and downs, it's truly amazing how much love you give me.

      Every single day, I want to talk to you so much, from the moment I wake up to the moment I go to sleep. I don’t even know how to put everything into words because if I tried to write it all down, it would be endless.

      If I were to list all the good things about having you in my life, I could talk for days and still not be done.

      In the end, I just want to say that I love you so much, Bibi. Big hugs for you. 🤍💚"**
      </p>
    </div>
  );
}
