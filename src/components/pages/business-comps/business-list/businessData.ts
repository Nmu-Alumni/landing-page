import type { BusinessListing } from "../../../../types";

const logo = (name: string, bg: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=${bg}&color=fff&size=200&bold=true`;

const cover = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const BUSINESSES: BusinessListing[] = [
  {
    id: "1",
    businessName: "Delta Marine Supplies Ltd.",
    ownerName: "Rotimi Oladele ('17)",
    category: "Marine Equipment & Supplies",
    description:
      "Wholesale and retail supplier of marine safety equipment, ropes, and deck hardware to vessels operating along the Niger Delta. We stock everything from life jackets and fire suppression kits to anchor chains and deck fittings, and offer same-week delivery to Warri, Port Harcourt, and Lagos ports. Our workshop also handles custom fabrication and repair for smaller vessel operators who can't wait on imported parts.",
    logo: logo("Delta Marine Supplies", "0A2540"),
    coverImage: cover("photo-1504328345606-18bbc8c9d7d1"),
    location: "Warri, Delta State",
    phone: "+234 803 000 1111",
    email: "sales@deltamarinesupplies.example.com",
    website: "deltamarinesupplies.example.com",
  },
  {
    id: "2",
    businessName: "Okerenkoko Logistics & Freight",
    ownerName: "Chioma Nwafor ('22)",
    category: "Logistics & Freight Forwarding",
    description:
      "Freight forwarding and customs clearance services for import/export businesses operating through Nigerian seaports. We manage the full chain from bill of lading to final-mile trucking, with a dedicated desk for alumni-owned businesses needing priority clearance turnaround. Our fleet covers the Lagos–Port Harcourt–Warri corridor daily.",
    logo: logo("Okerenkoko Logistics", "0D9488"),
    coverImage: cover("photo-1601584115197-04ecc0da31d7"),
    location: "Port Harcourt, Nigeria",
    phone: "+234 803 000 2222",
    email: "info@okerenkokologistics.example.com",
  },
  {
    id: "3",
    businessName: "Anchor Point Consulting",
    ownerName: "Dr. Olayinka Adeyemi ('21)",
    category: "Maritime Consulting",
    description:
      "Advisory services for port operations, terminal efficiency audits, and maritime regulatory compliance. We've worked with port authorities and private terminal operators across the Gulf of Guinea to cut cargo dwell time and pass NIMASA compliance reviews on the first attempt. Engagements range from a single-day audit to multi-month operational overhauls.",
    logo: logo("Anchor Point Consulting", "C9A84C"),
    coverImage: cover("photo-1497366216548-37526070297c"),
    location: "Lagos, Nigeria",
    email: "hello@anchorpointconsulting.example.com",
    website: "anchorpointconsulting.example.com",
  },
  {
    id: "4",
    businessName: "Seafarer's Table Catering",
    ownerName: "Faith Williams ('20)",
    category: "Catering & Hospitality",
    description:
      "Onboard catering and event catering for maritime conferences, reunions, and shipping company functions. From a 20-person crew mess menu to a 500-guest alumni gala, we plan around dietary needs and delivery logistics that regular caterers don't handle — including provisioning for extended sea-time voyages.",
    logo: logo("Seafarers Table", "0A2540"),
    coverImage: cover("photo-1555244162-803834f70033"),
    location: "Lagos, Nigeria",
    phone: "+234 803 000 3333",
  },
  {
    id: "5",
    businessName: "Bello Marine Academy Prep",
    ownerName: "Capt. Ibrahim Bello ('22)",
    category: "Training & Education",
    description:
      "Tutoring and exam preparation for STCW certifications and maritime academy entrance exams. Small-group and one-on-one sessions run evenings and weekends around cadets' academic schedules, taught by working officers who sat the same exams within the last five years.",
    logo: logo("Bello Marine Academy Prep", "0D9488"),
    coverImage: cover("photo-1577896851231-70ef18881754"),
    location: "Lagos, Nigeria",
    email: "info@bellomarineprep.example.com",
  },
  {
    id: "6",
    businessName: "Nautical Threads",
    ownerName: "Chidinma Okafor ('24)",
    category: "Fashion & Merchandise",
    description:
      "Custom uniforms, alumni merchandise, and maritime-themed apparel for graduation and reunion events. We handle bulk orders for chapter branches and student cohorts, with embroidery and print-on-demand options so small orders don't get stuck behind large ones.",
    logo: logo("Nautical Threads", "C9A84C"),
    coverImage: cover("photo-1441986300917-64674bd600d8"),
    location: "Lagos, Nigeria",
    website: "nauticalthreads.example.com",
  },
  {
    id: "7",
    businessName: "Coastal Realty Partners",
    ownerName: "Kelechi Obi ('18)",
    category: "Real Estate",
    description:
      "Property management and real estate investment advisory for alumni relocating to port cities. We specialize in short-notice housing for officers between postings, plus longer-term investment properties near major shipping hubs for alumni building a portfolio while they're still at sea.",
    logo: logo("Coastal Realty Partners", "0A2540"),
    coverImage: cover("photo-1483058712412-4245e9b90334"),
    location: "Port Harcourt, Nigeria",
    phone: "+234 803 000 4444",
    email: "invest@coastalrealty.example.com",
  },
  {
    id: "8",
    businessName: "BlueTech Marine Software",
    ownerName: "Musa Abdullahi ('19)",
    category: "Technology",
    description:
      "Fleet management and predictive maintenance software for small-to-mid-size shipping operators. Our platform ingests engine sensor data to flag maintenance issues before they cause downtime — the same approach that won our founder a maritime innovation award last year.",
    logo: logo("BlueTech Marine", "0D9488"),
    coverImage: cover("photo-1522071820081-009f0129c71c"),
    location: "Lagos, Nigeria (Remote)",
    website: "bluetechmarine.example.com",
    email: "hello@bluetechmarine.example.com",
  },
];
