"use client";

import { useState } from "react";
import Link from "next/link";
import type { BankCard } from "@/lib/cards";
import { CardArt } from "./card-art";

export function CardTile({ card }: { card: BankCard }) {
  const [frozen, setFrozen] = useState(false);

  return (
    <div>
      <CardArt card={card} size="sm" frozen={frozen} />

      <div className="mt-3 text-[12.5px] font-medium text-muted">
        {card.name} · {card.scheme} · {card.type} · •••• {card.last4}
      </div>

      <div className="mt-3 flex items-center gap-2.5">
        <button
          onClick={() => setFrozen((f) => !f)}
          aria-pressed={frozen}
          className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[10px] border text-[12.5px] font-semibold transition-colors"
          style={
            frozen
              ? { borderColor: "rgba(220,38,38,.3)", background: "#FEF7F7", color: "var(--color-loss)" }
              : { borderColor: "#E5E7EB", background: "#fff", color: "#052E1B" }
          }
        >
          <span className="relative inline-block h-[15px] w-[26px] rounded-full" style={{ background: frozen ? "var(--color-loss)" : "var(--color-brand)" }}>
            <span className="absolute top-[1.5px] size-3 rounded-full bg-white" style={frozen ? { left: "1.5px" } : { right: "1.5px" }} />
          </span>
          {frozen ? "Unfreeze" : "Freeze"}
        </button>
        <Link href={`/cards/${card.id}`} className="text-[12.5px] font-semibold text-brand-mid">
          Details →
        </Link>
      </div>
    </div>
  );
}
