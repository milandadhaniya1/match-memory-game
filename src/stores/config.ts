import { ref } from 'vue'
import { defineStore } from 'pinia'

export const configStore = defineStore('config', () => {

  const boardSize = ref(0);
  const isGameStarted = ref(false);
  const isWinner = ref(false);
  const icons = [
    'anticon',
    'bearicon',
    'beeicon',
    'birdicon',
    'butterflyicon',
    'caticon',
    'chickenicon',
    'cowicon',
    'crabicon',
    'dogicon',
    'dolphinicon',
    'donkeyicon',
    'duckicon',
    'elephanticon',
    'falconicon',
    'fishicon',
    'flyicon',
    'horseicon',
    'kangarooicon',
    'mouseicon',
    'octopusicon',
    'owlicon',
    'peacockicon',
    'pigicon',
    'pigeonicon',
    'seahorseicon',
    'snailicon',
    'spidericon',
    'squirrelicon',
    'swanicon',
    'turtleicon',
    'unicornicon',
    'whaleicon',
    'zebraicon'
  ];

  return { boardSize, icons, isGameStarted, isWinner }
})
