import { houses } from "~/data/houses";

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  const house = houses.find((h) => String(h.id) === String(id));

  if (!house) {
    throw createError({
      statusCode: 404,
      statusMessage: "Casa no encontrada",
    });
  }

  return house;
});
