<script setup lang="ts">
// Redirige automáticamente de '/' a '/houses'
definePageMeta({
  middleware: [() => navigateTo("/houses")],
});
</script>

<template>
  <div></div>
</template>
