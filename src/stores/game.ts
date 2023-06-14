import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const gameStore = defineStore('game', () => {

  const boardSize = ref(0);
  const selectedIcons:Array<string> = reactive([]);
  const iconMatrix:Array<object> =  reactive([]);
  const icons = [
    'ant-icon',
    'bear-icon',
    'bee-icon',
    'bird-icon',
    'butterfly-icon',
    'cat-icon',
    'chicken-icon',
    'cow-icon',
    'crab-icon',
    'dog-icon',
    'dolphin-icon',
    'donkey-icon',
    'duck-icon',
    'elephant-icon',
    'falcon-icon',
    'fish-icon',
    'fly-icon',
    'horse-icon',
    'kangaroo-icon',
    'mouse-icon',
    'octopus-icon',
    'owl-icon',
    'peacock-icon',
    'pig-icon',
    'pigeon-icon',
    'seahorse-icon',
    'snail-icon',
    'spider-icon',
    'squirrel-icon',
    'swan-icon',
    'turtle-icon',
    'unicorn-icon',
    'whale-icon',
    'zebra-icon'
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
