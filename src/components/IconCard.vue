<script setup lang="ts">
const props = defineProps(["isOpen", "isMatched"])
</script>

<template>
  <div class="group flex-none">
    <div
      :class="[
        'rounded-md m-1 justify-center shadow-md',
        { 'bg-gray-900': props.isOpen,
          'bg-gray-900 cursor-pointer': props.isOpen && !props.isMatched, 
          'bg-white group-hover:opacity-75 cursor-pointer': !props.isOpen, 
          'opacity-75':props.isMatched }
      ]"
    >
      <slot />
    </div>
  </div>
</template>
