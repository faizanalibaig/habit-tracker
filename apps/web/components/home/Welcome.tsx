import Link from "next/link";

export default function Welcome() {
  return (
    <main className="flex-1 flex flex-col gap-6 sm:gap-8 justify-center items-center text-white">
      <h1 className="text-4xl sm:text-8xl font-serif font-bold text-center">
        Build Habits <br /> Track Your Progress
      </h1>
      <Link href="/habit">
        <button className="px-8 py-3 bg-white text-base sm:text-lg text-[#2F5249] font-sans font-semibold rounded-full">
          Get Started
        </button>
      </Link>
    </main>
  );
}
