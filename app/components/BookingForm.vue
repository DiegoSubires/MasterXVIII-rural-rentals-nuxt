<script setup lang="ts">
import { ref, computed } from "vue";
import type { House } from "~/types/house";

const props = defineProps<{
  house: House;
}>();

const checkIn = ref("");
const checkOut = ref("");
const guests = ref(1);
const isBooked = ref(false);

const nights = computed(() => {
  if (!checkIn.value || !checkOut.value) return 0;
  const start = new Date(checkIn.value);
  const end = new Date(checkOut.value);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
});

const totalPrice = computed(() => nights.value * props.house.price);

const handleSubmit = () => {
  if (nights.value <= 0) return;
  isBooked.value = true;
};

const resetForm = () => {
  isBooked.value = false;
  checkIn.value = "";
  checkOut.value = "";
};
</script>

<template>
  <div>
    <!-- Confirmación de reserva -->
    <div
      v-if="isBooked"
      class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center shadow-sm"
    >
      <div
        class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold"
      >
        ✓
      </div>
      <h3 class="text-xl font-bold text-emerald-900 mb-2">
        ¡Reserva Confirmada! 🎉
      </h3>
      <p class="text-emerald-800 text-sm mb-4 leading-relaxed">
        Has reservado <strong>{{ house.name }}</strong> del
        <span class="font-semibold">{{ checkIn }}</span> al
        <span class="font-semibold">{{ checkOut }}</span> ({{ nights }}
        {{ nights === 1 ? "noche" : "noches" }}).
      </p>
      <div
        class="bg-white/80 rounded-xl p-3 border border-emerald-100 max-w-xs mx-auto mb-4 text-xs text-emerald-900"
      >
        Total pagado:
        <strong class="text-sm">{{ totalPrice }}€</strong> para {{ guests }}
        {{ guests === 1 ? "huésped" : "huéspedes" }}.
      </div>
      <button
        type="button"
        @click="resetForm"
        class="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors"
      >
        Hacer otra reserva
      </button>
    </div>

    <!-- Formulario de reserva -->
    <form
      v-else
      @submit.prevent="handleSubmit"
      class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
    >
      <div
        class="flex items-center justify-between mb-4 border-b border-slate-100 pb-4"
      >
        <h3 class="text-xl font-bold text-slate-900">Reservar estancia</h3>
        <div class="text-right">
          <span class="text-2xl font-bold text-emerald-600">
            {{ house.price }}€
          </span>
          <span class="text-xs text-slate-500 font-normal"> / noche</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            for="check-in"
            class="block text-xs font-semibold text-slate-600 mb-1"
          >
            Entrada (Check-in)
          </label>
          <input
            id="check-in"
            type="date"
            required
            v-model="checkIn"
            class="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            for="check-out"
            class="block text-xs font-semibold text-slate-600 mb-1"
          >
            Salida (Check-out)
          </label>
          <input
            id="check-out"
            type="date"
            required
            :min="checkIn || undefined"
            v-model="checkOut"
            class="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div class="mb-6">
        <label
          for="guests"
          class="block text-xs font-semibold text-slate-600 mb-1"
        >
          Huéspedes
        </label>
        <select
          id="guests"
          v-model.number="guests"
          class="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
        >
          <option v-for="num in [1, 2, 3, 4, 5, 6]" :key="num" :value="num">
            {{ num }} {{ num === 1 ? "huésped" : "huéspedes" }}
          </option>
        </select>
      </div>

      <!-- Desglose de precio si hay fechas seleccionadas -->
      <div
        v-if="nights > 0"
        class="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm space-y-2"
      >
        <div class="flex justify-between text-slate-600">
          <span>
            {{ house.price }}€ x {{ nights }}
            {{ nights === 1 ? "noche" : "noches" }}
          </span>
          <span>{{ totalPrice }}€</span>
        </div>
        <div
          class="flex justify-between font-bold text-slate-900 border-t border-slate-200 pt-2 text-base"
        >
          <span>Total</span>
          <span>{{ totalPrice }}€</span>
        </div>
      </div>

      <button
        type="submit"
        :disabled="nights <= 0 && Boolean(checkIn && checkOut)"
        class="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-bold py-3 rounded-xl transition-colors shadow-sm text-sm"
      >
        {{
          nights > 0
            ? `Confirmar Reserva (${totalPrice}€)`
            : "Selecciona fechas"
        }}
      </button>
    </form>
  </div>
</template>
