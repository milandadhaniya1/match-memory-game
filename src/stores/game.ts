import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { configStore } from '@/stores/config';

const config = configStore()

export const gameStore = defineStore('game', () => {

  const selectedIcons:Array<string> = reactive([]);
  const iconMatrix:Array<object> =  reactive([]);
  
  const startGame = () => config.isGameStarted = true;
  const winGame = () => {
    config.isGameStarted = false;
    config.isWinner = true;
  };

  const getRandomMatrixIcons = (numberofIcons: number) => {
    const shuffled = [...config.icons].sort(() => 0.5 - Math.random());
    selectedIcons.push(...shuffled.slice(0, numberofIcons));
    
    const randomMatrixIcons = [...selectedIcons, ...selectedIcons]
      .sort(() => 0.5 - Math.random());
    
    randomMatrixIcons.forEach((e) => {
      iconMatrix.push({name: e, open:true});
    });
  };
  
  const setBoardSize = (bSize: number) => {
    config.boardSize = bSize;
    getRandomMatrixIcons((bSize * bSize) / 2);
  };

  const updateIconMatrix = (index: number, status: boolean) => {
    iconMatrix.map((e, i) => { 
      if(i === index) {
        e.open = status;
      }
      return e;
    })
  };

  return { setBoardSize, iconMatrix, updateIconMatrix, startGame, winGame }
})
