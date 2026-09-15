import { getItem, setItem } from "../../../../utils/localStore";
import type { BusinessListing } from "../../../../types";
import { BUSINESSES } from "./businessData";

const BUSINESSES_KEY = "nmu_alumni_user_businesses";

export function getUserBusinesses(): BusinessListing[] {
  return getItem<BusinessListing[]>(BUSINESSES_KEY, []);
}

export function getAllBusinesses(): BusinessListing[] {
  return [...getUserBusinesses(), ...BUSINESSES];
}

export function getBusinessById(id: string): BusinessListing | undefined {
  return getAllBusinesses().find((b) => b.id === id);
}

export function addBusiness(
  business: Omit<BusinessListing, "id" | "logo" | "isUserSubmitted">
): BusinessListing {
  const newBusiness: BusinessListing = {
    ...business,
    id: `b${Date.now()}`,
    logo: `https://ui-avatars.com/api/?name=${encodeURIComponent(
      business.businessName
    )}&background=0A2540&color=fff&size=200&bold=true`,
    isUserSubmitted: true,
  };

  setItem(BUSINESSES_KEY, [newBusiness, ...getUserBusinesses()]);
  return newBusiness;
}
