<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="parent-bg bg-gradient-to-r from-purple-500 to-pink-500">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.parent-bg {
  height: 100vh;
}
</style>
