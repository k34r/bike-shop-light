<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>

  <div class="w-4/5 mx-auto">
    <AppHeader />
    <RouterView />
  </div>

</template>

<style></style>
