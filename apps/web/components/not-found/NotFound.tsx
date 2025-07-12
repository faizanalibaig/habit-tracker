import Link from "next/link";
import { global } from "../../data";

interface NotFoundProps {
  url?: string;
  page?: string;
}

export default function NotFound({ url, page }: NotFoundProps) {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-2 sm:gap-5 text-[#2F5249]">
      <h1 className="text-3xl sm:text-5xl font-bold font-serif text-center">
        {global["not-found"].title} - {global["not-found"].code}
      </h1>
      <Link className="font-sans text-base sm:text-lg" href={url || "/"}>
        {global["not-found"].message}{" "}
        <span className="hover:underline">{page || "homepage"}</span>
      </Link>
    </main>
  );
}
