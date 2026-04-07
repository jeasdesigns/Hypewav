"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Search, Heart, User } from "lucide-react";

const NAV_ITEMS = [
  { label: "Discover", href: "/discover", Icon: Flame },
  { label: "Search",   href: "/search",   Icon: Search },
  { label: "Saved",    href: "/saved",    Icon: Heart },
  { label: "Me",       href: "/me",       Icon: User },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-50 safe-bottom"
      style={{
        backgroundColor: "rgba(9,9,15,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid #1E1D2A",
      }}
    >
      <ul
        className="flex items-center justify-around"
        style={{ height: "var(--nav-height)" }}
      >
        {NAV_ITEMS.map(({ label, href, Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <li key={href}>
              <Link
                href={href}
                className="flex flex-col items-center gap-1 min-w-[56px] min-h-[44px] justify-center transition-opacity active:opacity-70"
                aria-current={active ? "page" : undefined}
              >
                <Icon
                  size={24}
                  className="transition-colors"
                  style={{ color: active ? "#A78BFA" : "#9CA3AF" }}
                  fill={active && label === "Saved" ? "#A78BFA" : "none"}
                />
                <span
                  className="text-[10px] font-medium leading-none transition-colors"
                  style={{ color: active ? "#A78BFA" : "#9CA3AF" }}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
