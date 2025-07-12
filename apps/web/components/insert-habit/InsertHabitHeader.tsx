"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function InsertHabitHeader() {
  const router = useRouter();

  return (
    <header className="py-10 px-5 sm:px-12">
      <IoIosArrowRoundBack
        onClick={() => router.back()}
        size={25}
        className="cursor-pointer"
      />
    </header>
  );
}
