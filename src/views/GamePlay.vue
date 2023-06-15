<script setup lang="ts">
import { reactive, shallowRef, computed } from "vue";
import IconCard from "@/components/IconCard.vue";
import { gameStore } from "@/stores/game";
import { configStore } from "@/stores/config";
import * as icons from "@/components/AllIcons";

// interface iconMatrixObj {
//   name: string;
//   open: boolean;
// }

const game = gameStore();
const config = configStore();
game.setBoardSize(6);
const boardSize = config.boardSize;
const iconMatrixStore = shallowRef(reactive(game.iconMatrix));

const iconMatrix = computed({
    get: () => iconMatrixStore,
    set: (value) => {console.log("value",value);
    game.updateIconMatrix();
    },
  });

const generateIconComponent = (row: number, clm: number) => {
        const index = (row - 1) * boardSize + clm - 1;
        let iconCompName:string = '';

        if(iconMatrix.value.value[index]?.open) {
          iconCompName = 'defaulticon';
        } else {
          iconCompName = iconMatrix.value.value[index]?.name;
        }

        const iconComp = icons[iconCompName];

        return {
          index: index,
          component: iconComp,
          compName: iconMatrix.value.value[index]?.name,
          open: iconMatrix.value.value[index]?.open || false,
        }
      };

const flipCard = (comp : any) => {
  game.updateIconMatrix(comp.index, !comp.open);
}
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <table border="0">
      <tr v-for="row in boardSize" :key="row">
        <td v-for="clm in boardSize" :key="clm">
          <IconCard :is-open="generateIconComponent(row, clm).open" @click="flipCard(generateIconComponent(row, clm))">
            <component :is="generateIconComponent(row, clm).component" />
          </IconCard>
        </td>
      </tr>
    </table>
    
  </div>
</template>
