import { Link } from "@tanstack/react-router";
import { UtensilsCrossed } from "lucide-react";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const txt =
    size === "xl"
      ? "text-5xl sm:text-6xl lg:text-7xl"
      : size === "lg"
        ? "text-2xl"
        : size === "sm"
          ? "text-base"
          : "text-xl";
  const ico =
    size === "xl"
      ? "h-16 w-16 sm:h-20 sm:w-20"
      : size === "lg"
        ? "h-9 w-9"
        : size === "sm"
          ? "h-7 w-7"
          : "h-8 w-8";
  const sub = size === "xl" ? "text-xs sm:text-sm" : "text-[10px]";

  return (
    <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
      <div
        className={`${ico} shrink-0 grid place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft group-hover:scale-105 transition-transform`}
      >
        <UtensilsCrossed className="h-1/2 w-1/2" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${txt} font-display font-bold tracking-tight`}>DELSU Eatery</span>
        <span className={`${sub} uppercase tracking-[0.18em] text-white mt-1`}>Food Faculty</span>
      </div>
    </Link>
  );
}
