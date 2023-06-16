<script setup lang="ts">

defineProps({
  iconPath: {
    type: String,
    required: true
  }
})
</script>

<template>
  <img :src="iconPath" alt="Icon" class="p-2" />
</template>
