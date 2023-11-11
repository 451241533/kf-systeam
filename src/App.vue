<script setup>
import Footer from './components/Footer.vue'

</script>

<template>
 <div id="app">
    <router-view v-slot="{ Component, route }">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component v-else :is="Component" />
    </router-view>
    <Footer />
  </div>

</template>
<script>

</script>
<style>

</style>
