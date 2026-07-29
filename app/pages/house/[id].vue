<script setup lang="ts">
import { getHouseById } from "~/composables/api";

const route = useRoute();
const id = route.params.id as string;

const house = await getHouseById(id);

if (!house) {
  throw createError({
    statusCode: 404,
    statusMessage: "Alojamiento no encontrado",
  });
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <NuxtLink
      to="/houses"
      class="inline-block mb-6 text-sm text-emerald-600 hover:underline"
    >
      ← Volver al listado
    </NuxtLink>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img
          :src="house.image"
          :alt="house.name"
          class="w-full h-80 object-cover rounded-2xl shadow-sm"
        />
        <h1 class="text-3xl font-bold text-slate-900 mt-4 mb-2">
          {{ house.name }}
        </h1>
        <p class="text-emerald-600 font-semibold mb-4">
          📍 {{ house.city }}, {{ house.country }}
        </p>
        <p class="text-slate-600 leading-relaxed mb-6">
          {{ house.description }}
        </p>

        <div
          class="flex gap-4 text-sm font-medium text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100"
        >
          <span>🛏️ {{ house.bedrooms }} dormitorios</span>
          <span>🛋️ {{ house.beds }} camas</span>
          <span>🚿 {{ house.bathrooms }} baños</span>
        </div>
      </div>

      <div>
        <BookingForm :house="house" />
      </div>
    </div>
  </div>
</template>
