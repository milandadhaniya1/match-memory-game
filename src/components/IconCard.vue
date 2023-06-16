<script setup lang="ts">
const props = defineProps(['isOpen'])
</script>

<template>
  <div class="group flex-none">
    <div
      :class="[
        'rounded-md m-1 justify-center shadow-md cursor-pointer',
        { 'bg-gray-900': props.isOpen, 'bg-white group-hover:opacity-75': !props.isOpen }
      ]"
    >
      <slot />
    </div>
  </div>
</template>
