import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const gameStore = defineStore('game', () => {

  const boardSize = ref(6);
  const selectedIcons:Array<string> = reactive([]);
  const iconMatrix:Array<object> =  reactive([]);
  const icons = [
    'AntIcon',
    'BearIcon',
    'BeeIcon',
    'BirdIcon',
    'ButterflyIcon',
    'CatIcon',
    'ChickenIcon',
    'CowIcon',
    'CrabIcon',
    'DogIcon',
    'DolphinIcon',
    'DonkeyIcon',
    'DuckIcon',
    'ElephantIcon',
    'FalconIcon',
    'FishIcon',
    'FlyIcon',
    'HorseIcon',
    'KangarooIcon',
    'MouseIcon',
    'OctopusIcon',
    'OwlIcon',
    'PeacockIcon',
    'PigIcon',
    'PigeonIcon',
    'SeahorseIcon',
    'SnailIcon',
    'SpiderIcon',
    'SquirrelIcon',
    'SwanIcon',
    'TurtleIcon',
    'UnicornIcon',
    'WhaleIcon',
    'ZebraIcon'
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

  function uodateIconMatrix() {

  }

  return { boardSize, setBoardSize, iconMatrix, uodateIconMatrix }
})
