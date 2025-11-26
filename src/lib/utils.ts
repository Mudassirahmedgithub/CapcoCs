
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUserEmail(user: any) {
  const email =
    user?.emailAddresses?.find((e: any) => e.id === user?.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return email;
}

