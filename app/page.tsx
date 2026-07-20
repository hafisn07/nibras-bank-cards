import Link from "next/link";
import { Badge, NavBar } from "@nibras/ui";
import { nav } from "@/lib/nav";

export default function CardsRoot() {
  return (
    <>
      <NavBar links={nav} />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <Badge>Cards squad · standalone</Badge>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">Cards zone</h1>
        <p className="mt-2 text-neutral-500">
          This repo (<code>nibras-bank-cards</code>) runs standalone on <code>:3003</code> and is
          mounted at <code>/cards</code> under the bank&apos;s domain via Multi-Zones.
        </p>
        <Link
          href="/cards"
          className="mt-6 inline-flex h-10 items-center rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white hover:bg-emerald-700"
        >
          View cards →
        </Link>
      </main>
    </>
  );
}
