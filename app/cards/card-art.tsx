import { cardholder, type BankCard } from "@/lib/cards";

export function CardArt({ card, size = "sm", frozen = false }: { card: BankCard; size?: "sm" | "lg"; frozen?: boolean }) {
  const lg = size === "lg";
  const isVisa = card.scheme === "Visa";
  const badge = card.type === "Credit" ? "PLATINUM" : "DEBIT";

  return (
    <div
      className={
        lg
          ? "nb-cardface relative h-[224px] w-[360px] max-w-full overflow-hidden rounded-[20px]"
          : "nb-cardface relative h-[210px] w-full overflow-hidden rounded-[18px]"
      }
      style={{
        boxShadow: lg ? "0 24px 50px -20px rgba(5,46,27,.65)" : "0 18px 40px -18px rgba(5,46,27,.6)",
        filter: frozen ? "saturate(.35) brightness(.72)" : undefined,
      }}
    >
      <div className="nb-weave pointer-events-none absolute inset-0" />
      {!frozen ? (
        <div
          className="pointer-events-none absolute -top-[30%] left-0 h-[160%] w-[44%]"
          style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,.26),transparent)", animation: "nbSweep 5.5s ease-in-out infinite" }}
        />
      ) : null}
      <div className={`relative flex h-full flex-col justify-between text-white ${lg ? "p-[24px_26px]" : "p-[22px_24px]"}`}>
        <div className="flex items-center justify-between">
          <span className={lg ? "text-[17px] font-semibold" : "text-[16px] font-semibold"}>Nibras</span>
          {frozen ? (
            <span className="inline-flex items-center gap-[5px] rounded-[5px] bg-loss px-2 py-[3px] font-mono text-[10px] font-semibold">
              ❄ FROZEN
            </span>
          ) : (
            <span className="rounded-[5px] border border-white/30 px-1.5 py-0.5 font-mono text-[10px] font-medium">{badge}</span>
          )}
        </div>
        <div className={`rounded-[6px] ${lg ? "h-8 w-11" : "h-[30px] w-[42px]"}`} style={{ background: "linear-gradient(135deg,#F0D48A,#C79B47)" }} />
        <div className={`font-mono tracking-[.14em] ${lg ? "text-[18px]" : "text-[17px]"}`}>•••• •••• •••• {card.last4}</div>
        <div className="flex items-end justify-between">
          {lg ? (
            <div>
              <div className="font-mono text-[8px] tracking-[.1em] text-[rgba(214,240,228,.6)]">CARDHOLDER</div>
              <div className="mt-px text-[13px] font-medium">{cardholder}</div>
            </div>
          ) : (
            <div className="text-[13px] font-medium">{cardholder}</div>
          )}
          <div className="font-semibold" style={{ fontSize: isVisa ? 14 : 13, fontStyle: isVisa ? "italic" : "normal" }}>
            {isVisa ? "VISA" : "mastercard"}
          </div>
        </div>
      </div>
    </div>
  );
}
