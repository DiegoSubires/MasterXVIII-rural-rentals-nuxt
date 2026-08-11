import { houses } from "~/data/houses";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  let result = [...houses];

  if (query.q) {
    const searchTerm = String(query.q).toLowerCase();
    result = result.filter((h) => h.name.toLowerCase().includes(searchTerm));
  }

  if (query.location) {
    const locationTerm = String(query.location).toLowerCase();
    result = result.filter(
      (h) =>
        h.city.toLowerCase().includes(locationTerm) ||
        h.country.toLowerCase().includes(locationTerm),
    );
  }

  return result;
});
