<script setup lang="ts">
import { ref, watch } from "vue";
import type { LocationQueryRaw } from "vue-router";

const route = useRoute();
const router = useRouter();

const queryParam = ref((route.query.query as string) || "");
const locationParam = ref((route.query.location as string) || "");

let timeout: ReturnType<typeof setTimeout> | null = null;

const handleSearch = () => {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    const query: LocationQueryRaw = { ...route.query };

    delete query.page;

    if (queryParam.value.trim()) {
      query.query = queryParam.value;
    } else {
      delete query.query;
    }

    if (locationParam.value.trim()) {
      query.location = locationParam.value;
    } else {
      delete query.location;
    }

    router.replace({ query });
  }, 300);
};

watch([queryParam, locationParam], () => {
  handleSearch();
});
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-4 mb-6">
    <!-- Filtro por Nombre -->
    <div class="flex-1">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        v-model="queryParam"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- Filtro por Ubicación -->
    <div class="flex-1">
      <input
        type="text"
        placeholder="Ubicación (ej. Málaga, Asturias...)..."
        v-model="locationParam"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
</template>
