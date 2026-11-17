import type { SponsorPartner } from "../../../../types";

const logo = (name: string, bg: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=${bg}&color=fff&size=160&bold=true&font-size=0.4`;

export const SPONSORS: SponsorPartner[] = [
  {
    id: "1",
    name: "Okerenkoko Shipping Group",
    logo: logo("Okerenkoko Shipping Group", "0A2540"),
    tier: "Platinum",
  },
  {
    id: "2",
    name: "Escravos Marine Holdings",
    logo: logo("Escravos Marine Holdings", "0A2540"),
    tier: "Platinum",
  },
  {
    id: "3",
    name: "Delta Ports Foundation",
    logo: logo("Delta Ports Foundation", "0D9488"),
    tier: "Gold",
  },
  {
    id: "4",
    name: "Nigerline Freight Partners",
    logo: logo("Nigerline Freight Partners", "0D9488"),
    tier: "Gold",
  },
  {
    id: "5",
    name: "Anchor & Bell Maritime Bank",
    logo: logo("Anchor Bell Maritime Bank", "C9A84C"),
    tier: "Silver",
  },
  {
    id: "6",
    name: "Riverine Energy Alliance",
    logo: logo("Riverine Energy Alliance", "C9A84C"),
    tier: "Silver",
  },
];
