import { ArrowRight, Truck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useMenu, type MenuItem } from "@/utils/menu-context";
import { formatNaira } from "@/utils/format";
import { ROUTES } from "@/utils/routes";

function getTodaysSpecial(items: MenuItem[]): MenuItem | null {
  const pool = [
    ...items.filter((i) => i.category === "Special Menu"),
    ...items.filter((i) => i.category === "Local Dishes"),
  ];
  if (pool.length === 0) return null;

  const daysSinceEpoch = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
  const index = daysSinceEpoch % pool.length;
  return pool[index];
}

export function DailySpecials() {
  const { items } = useMenu();
  const item = getTodaysSpecial(items);

  if (!item) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Today's Special
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold">
            Specially made for you
          </h2>
        </div>

        <Link
          to={ROUTES.menu}
          className="group relative flex items-center justify-between overflow-hidden rounded-[28px] px-8 py-8 sm:px-14 sm:py-10 transition-transform duration-300 ease-out hover:scale-[1.01] cursor-pointer"
        >
          <div className="relative z-10 w-full sm:w-[55%]">
            <h1
              className="uppercase leading-[0.9] tracking-wide text-secondary"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(2.25rem, 5vw, 5rem)",
              }}
            >
              {item.name}
            </h1>

            {item.description && (
              <p className="mt-3 text-sm sm:text-base max-w-sm text-muted-foreground">
                {item.description}
              </p>
            )}

            <div className="mt-8 sm:mt-10 flex items-center gap-2">
              <Truck className="h-5 w-5 shrink-0 text-secondary" />
              <span
                className="text-sm sm:text-base text-secondary"
                style={{ letterSpacing: "1px" }}
              >
                Free delivery on all orders above ₦10,000
              </span>
            </div>
          </div>

          <div className="relative z-10 hidden sm:flex w-[40%] flex-col items-center">
            <div className="absolute -top-1 right-14 flex flex-col items-center justify-center text-secondary">
              <span className="text-lg font-bold leading-none">{formatNaira(item.price)}</span>
            </div>

            <img
              src={item.image}
              alt={item.name}
              className="w-[280px] h-[280px] object-contain scale-125"
              style={{ filter: "drop-shadow(0 22px 45px rgba(0,0,0,0.25))" }}
            />

            <p
              className="mt-3 text-lg text-secondary"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Made for you
            </p>

            <span className="mt-4 inline-flex items-center rounded-full px-8 py-3.5 text-primary-foreground font-bold text-sm bg-primary shadow-glow">
              Order Now
              <ArrowRight className="h-4 w-4 ml-2" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
