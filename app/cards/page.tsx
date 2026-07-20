import { NavBar } from "@nibras/ui";
import { nav } from "@/lib/nav";
import { cards } from "@/lib/cards";
import { CardTile } from "./card-tile";

export default function CardsPage() {
  return (
    <>
      <NavBar links={nav} current="/cards" />
      <main className="nb-canvas">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-[22px] px-6 py-8 md:py-[34px] md:pb-[46px]">
          <h1 className="text-[28px] font-semibold tracking-[-.025em]">Cards</h1>
          <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
            {cards.map((c) => (
              <CardTile key={c.id} card={c} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
