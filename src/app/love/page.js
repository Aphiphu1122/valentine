"use client";

import Head from "next/head";
import Header from "@components/Header";
import LoveMessage from "@components/LoveMessage";
import HeartAnimation from "@components/HeartAnimation";

export default function LovePage() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center">
      <Head>
        <title>Happy Valentine’s Day 💖</title>
      </Head>

      <Header />
      <LoveMessage />
      <HeartAnimation />
    </div>
  );
}