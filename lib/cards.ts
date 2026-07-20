export type BankCard = {
  id: string;
  name: string;
  type: "Credit" | "Debit";
  last4: string;
  scheme: "Visa" | "Mastercard";
  limit: number;
  spent: number;
};

export const cardholder = "Omar Haddad";

export const cards: BankCard[] = [
  { id: "platinum", name: "Nibras Platinum", type: "Credit", last4: "4021", scheme: "Visa", limit: 25000, spent: 6420.5 },
  { id: "everyday", name: "Everyday Debit", type: "Debit", last4: "7788", scheme: "Mastercard", limit: 0, spent: 0 },
];

export function getCard(id: string) {
  return cards.find((c) => c.id === id);
}

export type CardActivity = { id: string; date: string; description: string; amount: number };

export const activity: Record<string, CardActivity[]> = {
  platinum: [
    { id: "c1", date: "2026-07-02", description: "Apple Store, Dubai Mall", amount: -4999 },
    { id: "c2", date: "2026-07-04", description: "Noon.com", amount: -312.4 },
    { id: "c3", date: "2026-07-07", description: "Emirates flights", amount: -1109.1 },
  ],
  everyday: [],
};
