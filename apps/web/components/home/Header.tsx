"use client";

import { useEffect, useState } from "react";
import { FaGithubAlt } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [streak, setStreak] = useState<number | null>(0);

  useEffect(() => {
    const newStreak = parseInt(localStorage.getItem("streak") || "0", 10);

    if (newStreak !== streak) {
      setStreak(newStreak);
    }
  }, [streak]);

  return (
    <header className="h-20 flex items-center justify-between px-5 sm:px-10 flex-shrink-0">
      <Image
        src="/logo.png"
        alt="Habit Tracker Logo"
        width={30}
        height={25}
        priority={true}
      />
      <nav className="flex items-center gap-4">
        <h2 className="text-sm sm:text-base font-sans font-medium text-white">
          streak - {streak || "zero"} days
        </h2>
        <span className="text-white">{" | "}</span>
        <Link
          href="https://github.com/faizanalibaig/habit-tracker"
          target="_blank"
        >
          <FaGithubAlt color="white" size={20} />
        </Link>
      </nav>
    </header>
  );
}

/*Backend*/
/* Fetch streak from API */
// const fetchStreak = async () => {
//   const response = await fetch('api', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch streak');
//   }

//   const data = await response.json();
//   setStreak(data.streak);
// };

// fetchStreak();
