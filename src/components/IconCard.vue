<script setup lang="ts">
const props = defineProps(['isOpen']);
console.log("props",props.isOpen)
</script>

<template>
  <div class="group flex-none">
    <div 
    :class="['rounded-md h-20 m-2 w-20 justify-center shadow-md group-hover:opacity-75 cursor-pointer', 
              {'bg-gray-900': !props.isOpen, 'bg-white': props.isOpen}
            ]"
    >
      <slot />
    </div>
  </div>
</template>
