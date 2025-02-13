"use client";

import { useRouter } from "next/navigation";  // ✅ ตรวจสอบการ Import

export default function Home() {  // ✅ เปลี่ยนเป็น LovePage()
  const router = useRouter();  // ✅ ใช้ useRouter ได้เฉพาะใน Client Component

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        You are My Forever Love 🤍💚
      </h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Thank you for being in my life. You make every moment special! 💕
      </p>

      {/* ปุ่มไปที่หน้า love/page.js */}
      <div className="mt-6">
        <button
          onClick={() => router.push("/love")}  // ✅ ปุ่มกดไปหน้า love/page.js
          className="px-6 py-3 bg-green-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          ลองกดดู นะจ้ะ 💚
        </button>
      </div>
    </div>
  );
}
