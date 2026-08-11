import type { House } from "~/types/house";

export const getHouses = async (
  query?: string,
  location?: string,
): Promise<House[]> => {
  return await $fetch<House[]>("/api/houses", {
    params: { q: query, location },
  });
};

export const getHouseById = async (id: string): Promise<House | undefined> => {
  try {
    return await $fetch<House>(`/api/houses/${id}`);
  } catch {
    return undefined;
  }
};
