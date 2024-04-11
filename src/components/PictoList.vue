<template>
  <section class="flex items-start justify-start flex-wrap gap-5">
    <PictoCard v-for="(_, idx) in 5" :key="`picto-${idx}`" />
  </section>
</template>

<script setup lang="ts">
import PictoCard from './PictoCard.vue'
</script>
