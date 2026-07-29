import { houses } from "~/data/houses";
import type { House } from "~/types/house";

export const getHouses = async (
  query?: string,
  location?: string,
): Promise<House[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = [...houses];
      if (query) {
        result = result.filter((h) =>
          h.name.toLowerCase().includes(query.toLowerCase()),
        );
      }
      if (location) {
        result = result.filter(
          (h) =>
            h.city.toLowerCase().includes(location.toLowerCase()) ||
            h.country.toLowerCase().includes(location.toLowerCase()),
        );
      }
      resolve(result);
    }, 200);
  });
};

export const getHouseById = async (id: string): Promise<House | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const house = houses.find((h) => h.id.toString() === id);
      resolve(house);
    }, 200);
  });
};
