<script setup lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps({
      iconPath: {
        type: String,
        required: true
      }
    });
    
</script>

<template>
  <img :src="iconPath" alt="Icon" class="p-2"/>
</template>
