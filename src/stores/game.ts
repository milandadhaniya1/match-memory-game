import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const gameStore = defineStore('game', () => {

  const boardSize = ref(0);
  const selectedIcons:Array<string> = reactive([]);
  const iconMatrix:Array<object> =  reactive([]);
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
  
  function getRandomMatrixIcons(numberofIcons: number) {
    const shuffled = [...icons].sort(() => 0.5 - Math.random());
    selectedIcons.push(...shuffled.slice(0, numberofIcons));
    
    const randomMatrixIcons = [...selectedIcons, ...selectedIcons]
      .sort(() => 0.5 - Math.random());
    
    randomMatrixIcons.forEach((e) => {
      iconMatrix.push({name: e, open:false});
    });
  }

  function setBoardSize(bSize: number) {
    boardSize.value = bSize;
    getRandomMatrixIcons((bSize * bSize) / 2);
  }

  function updateIconMatrix() {

  }

  return { boardSize, setBoardSize, iconMatrix, updateIconMatrix }
})
