import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar } from "@nibras/ui";
import { nav } from "@/lib/nav";
import { activity, cards, getCard } from "@/lib/cards";
import { CardArt } from "../card-art";
const nf = new Intl.NumberFormat("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

type Params = { params: Promise<{ id: string }> };

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short" });
const aed = (n: number) => "AED " + nf.format(n);

export function generateStaticParams() {
  return cards.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const card = getCard((await params).id);
  return { title: card ? `${card.name} · Nibras Bank` : "Card · Nibras Bank" };
}

function StatTile({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-[14px] border border-hair bg-white p-[16px_18px] shadow-[0_2px_6px_-2px_rgba(5,46,27,.08)]">
      <div className="text-[11.5px] font-medium text-muted">{label}</div>
      <div className="mt-1.5 font-mono text-[18px] font-semibold tabular-nums" style={color ? { color } : undefined}>
        {value}
      </div>
    </div>
  );
}

export default async function CardDetail({ params }: Params) {
  const card = getCard((await params).id);
  if (!card) notFound();
  const available = card.limit - card.spent;
  const acts = activity[card.id] ?? [];
  const isCredit = card.type === "Credit";

  return (
    <>
      <NavBar links={nav} current="/cards" />
      <main className="nb-canvas">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-6 py-8 md:py-7 md:pb-[46px]">
          <Link href="/cards" className="text-[13px] font-medium text-brand-mid">
            ← Cards
          </Link>

          <div className="flex justify-center">
            <CardArt card={card} size="lg" />
          </div>

          {isCredit ? (
            <>
              <div className="grid grid-cols-3 gap-3.5">
                <StatTile label="Limit" value={aed(card.limit)} />
                <StatTile label="Spent" value={aed(card.spent)} color="var(--color-loss)" />
                <StatTile label="Available" value={aed(available)} color="var(--color-gain)" />
              </div>

              <div className="overflow-hidden rounded-[16px] border border-hair bg-white shadow-[0_2px_8px_-2px_rgba(5,46,27,.08)]">
                <div className="px-[22px] pb-3 pt-4 text-[15px] font-semibold">Recent card activity</div>
                {acts.map((t) => (
                  <div key={t.id} className="flex items-center justify-between border-t border-line-soft px-[22px] py-[13px]">
                    <div className="flex items-center gap-3.5">
                      <span className="w-11 flex-none font-mono text-[11.5px] font-medium text-faint">
                        {dateFmt.format(new Date(t.date))}
                      </span>
                      <span className="text-[13.5px] font-medium">{t.description}</span>
                    </div>
                    <span className="font-mono text-[14px] font-semibold tabular-nums text-loss">
                      −{nf.format(Math.abs(t.amount))}
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3.5 rounded-[14px] border border-hair bg-white p-[18px_20px] shadow-[0_2px_6px_-2px_rgba(5,46,27,.08)]">
                <div className="flex size-[38px] flex-none items-center justify-center rounded-[11px] bg-gradient-to-br from-brand-mid to-[#064E37] text-[14px] font-semibold text-white">
                  C
                </div>
                <div>
                  <div className="text-[13.5px] font-medium">This debit card is linked to your Everyday Current account.</div>
                  <div className="mt-0.5 font-mono text-[11.5px] text-faint">Current · •••• 4021 · AED 18,452.30 available</div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex h-11 flex-1 items-center justify-center rounded-[10px] border border-line bg-white text-[13px] font-semibold text-forest transition-colors hover:border-[#0B7A57]">
                  Freeze card
                </button>
                <button className="flex h-11 flex-1 items-center justify-center rounded-[10px] border border-line bg-white text-[13px] font-semibold text-forest transition-colors hover:border-[#0B7A57]">
                  View PIN
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
