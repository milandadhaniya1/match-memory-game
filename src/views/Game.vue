<script setup lang="ts">
import { reactive, shallowRef, computed } from 'vue';
import IconCard from '@/components/IconCard.vue';
import { gameStore } from '@/stores/game';
import * as icons from '@/components/Icons/AllIcons';

// interface iconMatrixObj {
//   name: string;
//   open: boolean;
// }

const store = gameStore();
store.setBoardSize(4);
const boardSize = store.boardSize;
const iconMatrixStore = shallowRef(reactive(store.iconMatrix));

const iconMatrix = computed({
    get: () => iconMatrixStore,
    set: (value) => {console.log("value",value);
      store.updateIconMatrix();
    },
  });

const generateIconComponentName = (row: number, clm: number) => {
        const index = (row - 1) * boardSize + clm - 1;
        console.log('aaa','icons.' + iconMatrix.value.value[index]?.name)
        return 'icons.' + iconMatrix.value.value[index]?.name;
      };

</script>

<template>
  <div class="flex flex-wrap justify-center">
    <table border="0">
      <tr v-for="row in boardSize" :key="row">
        <td v-for="clm in boardSize" :key="clm">
          <IconCard>
            <component :is="generateIconComponentName(row, clm)" />
          </IconCard>
        </td>
      </tr>
    </table>
    
  </div>
</template>
