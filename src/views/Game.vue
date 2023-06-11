<script setup lang="ts">
import IconCard from '@/components/IconCard.vue';
import { gameStore } from '@/stores/game';

import AntIcon from '@/components/Icons/AntIcon.vue';
import BearIcon from '@/components/Icons/BearIcon.vue';
import BeeIcon from '@/components/Icons/BeeIcon.vue';
import BirdIcon from '@/components/Icons/BirdIcon.vue';
import ButterflyIcon from '@/components/Icons/ButterflyIcon.vue';
import CatIcon from '@/components/Icons/CatIcon.vue';
import ChickenIcon from '@/components/Icons/ChickenIcon.vue';
import CowIcon from '@/components/Icons/CowIcon.vue';
import CrabIcon from '@/components/Icons/CrabIcon.vue';
import DogIcon from '@/components/Icons/DogIcon.vue';
import DolphinIcon from '@/components/Icons/DolphinIcon.vue';
import DonkeyIcon from '@/components/Icons/DonkeyIcon.vue';
import DuckIcon from '@/components/Icons/DuckIcon.vue';
import ElephantIcon from '@/components/Icons/ElephantIcon.vue';
import FalconIcon from '@/components/Icons/FalconIcon.vue';
import FishIcon from '@/components/Icons/FishIcon.vue';
import FlyIcon from '@/components/Icons/FlyIcon.vue';
import HorseIcon from '@/components/Icons/HorseIcon.vue';
import KangarooIcon from '@/components/Icons/KangarooIcon.vue';
import MouseIcon from '@/components/Icons/MouseIcon.vue';
import OctopusIcon from '@/components/Icons/OctopusIcon.vue';
import OwlIcon from '@/components/Icons/OwlIcon.vue';
import PeacockIcon from '@/components/Icons/PeacockIcon.vue';
import PigIcon from '@/components/Icons/PigIcon.vue';
import PigeonIcon from '@/components/Icons/PigeonIcon.vue';
import SeahorseIcon from '@/components/Icons/SeahorseIcon.vue';
import SnailIcon from '@/components/Icons/SnailIcon.vue';
import SpiderIcon from '@/components/Icons/SpiderIcon.vue';
import SquirrelIcon from '@/components/Icons/SquirrelIcon.vue';
import SwanIcon from '@/components/Icons/SwanIcon.vue';
import TurtleIcon from '@/components/Icons/TurtleIcon.vue';
import UnicornIcon from '@/components/Icons/UnicornIcon.vue';
import WhaleIcon from '@/components/Icons/WhaleIcon.vue';
import ZebraIcon from '@/components/Icons/ZebraIcon.vue';

const store = gameStore();
store.setBoardSize(4);
const boardSize = store.boardSize;
const iconMatrix = store.iconMatrix;

iconMatrix.forEach((element,i) => {
  console.log(element, i)
});

</script>

<template>
  <div class="flex flex-wrap justify-center">
    <table border="0">
      <tr v-for="row in boardSize" :key="row">
        <td v-for="clm in boardSize" :key="clm">{{ iconMatrix[(((row-1)*boardSize)+clm)-1].name }}
          <IconCard><ZebraIcon /></IconCard>
          <!-- <IconCard><component v-bind:is="iconMatrix[(((row-1)*boardSize)+clm)-1].name" /></IconCard> -->
        </td>
      </tr>
    </table>
    
  </div>
</template>
