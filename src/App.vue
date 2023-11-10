<script setup>
import Footer from './components/Footer.vue'

</script>

<template>
<router-view v-slot="{ Component, route }">
    <keep-alive v-if="route.meta.keepAlive">
      <component :is="Component" />
    </keep-alive>
    <component v-else :is="Component" />
  </router-view>

</template>
<script>

</script>
<style>

</style>
