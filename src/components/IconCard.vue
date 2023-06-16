<script setup lang="ts">
const props = defineProps(['isOpen'])
</script>

<template>
  <div class="group flex-none">
    <div
      :class="[
        'rounded-md m-1 justify-center shadow-md group-hover:opacity-75 cursor-pointer',
        { 'bg-gray-900': props.isOpen, 'bg-white': !props.isOpen }
      ]"
    >
      <slot />
    </div>
  </div>
</template>
