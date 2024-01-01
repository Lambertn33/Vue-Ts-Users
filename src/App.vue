<template>
  <div class="bg-gray-100">
    <AppNavbar />
    <div class="p-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue';
import { RouterView } from 'vue-router';
</script>

