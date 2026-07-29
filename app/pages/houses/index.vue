<script setup lang="ts">
import { ref, watch } from "vue";
import { getHouses } from "~/composables/api";
import type { House } from "~/types/house";

const route = useRoute();
const houses = ref<House[]>([]);

const fetchHouses = async () => {
  const query = route.query.query as string;
  const location = route.query.location as string;
  houses.value = await getHouses(query, location);
};

await fetchHouses();

watch(
  () => route.query,
  async () => {
    await fetchHouses();
  },
);
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-slate-900 mb-6">
      Alojamientos Disponibles
    </h1>
    <SearchFilter />

    <div
      v-if="houses.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <HouseCard v-for="house in houses" :key="house.id" :house="house" />
    </div>
    <div v-else class="text-center py-12 text-slate-500">
      No se encontraron alojamientos que coincidan con la búsqueda.
    </div>
  </div>
</template>
