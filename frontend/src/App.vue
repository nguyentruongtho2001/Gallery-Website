<script setup>
import { RouterView } from 'vue-router'
import SiteNavbar from './components/SiteNavbar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <SiteNavbar />
    <main class="flex-grow h-screen">
      <RouterView />
    </main>
    <SiteFooter /> 
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.h-screen {
  height: 100vh;
}

.flex-grow {
  flex-grow: 1;
}
</style>
