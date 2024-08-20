"use client";

import { Clock, History, ThumbsUp } from "lucide-react";
import { useRouter } from "next/navigation";

const iconMap = {
  ["History"]: History,
  ["Watch Later"]: Clock,
  ["Liked Videos"]: ThumbsUp,
};

export default function SideUserlinks({ name }) {
  const Icon = iconMap[name];
  const router = useRouter();

  const onClick = () => {
    router.push(`/user/${name}`);
  };

  return (
    <button
      onClick={onClick}
      className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1"
    >
      <Icon className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
      <p className="line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition">
        {name}
      </p>
    </button>
  );
}
