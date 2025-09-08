<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  }
})
</script>

<template>
  <!-- About -->
  <section class="!pt-5">
      <h2 class="major !mb-2"><span>{{ title }}</span></h2>
      <p class="text-center">{{ description }}
      </p>
  </section>
</template>