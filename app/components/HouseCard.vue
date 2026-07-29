<script setup lang="ts">
import type { House } from "~/types/house";

defineProps<{
  house: House;
  priority?: boolean;
}>();
</script>

<template>
  <article
    class="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/80 overflow-hidden flex flex-col h-full"
  >
    <div class="relative w-full h-52 bg-slate-100 overflow-hidden">
      <img
        :src="house.image"
        :alt="house.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />
      <div
        class="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-sm border border-emerald-100"
      >
        {{ house.price }}€
        <span class="font-normal text-slate-500">/ noche</span>
      </div>
    </div>

    <div class="p-5 flex flex-col flex-grow justify-between">
      <div>
        <span
          class="text-xs font-semibold text-emerald-600 uppercase tracking-wider block mb-1"
        >
          📍 {{ house.city }}, {{ house.country }}
        </span>
        <h3
          class="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors"
        >
          {{ house.name }}
        </h3>

        <!-- Descripción: Se expande en hover -->
        <p
          class="text-slate-600 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300 mb-4 leading-relaxed"
        >
          {{ house.description }}
        </p>
      </div>

      <div>
        <div
          class="flex items-center gap-3 text-xs font-medium text-slate-600 border-t border-slate-100 pt-3 mb-4 flex-wrap"
        >
          <span>🛏️ {{ house.bedrooms }} dorm.</span>
          <span>🛋️ {{ house.beds }} camas</span>
          <span>🚿 {{ house.bathrooms }} baños</span>
        </div>

        <NuxtLink
          :to="`/house/${house.id}`"
          class="block w-full text-center bg-slate-900 hover:bg-emerald-600 text-white font-medium py-2.5 rounded-xl transition-colors duration-200 text-sm shadow-sm"
        >
          Ver Detalles
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
