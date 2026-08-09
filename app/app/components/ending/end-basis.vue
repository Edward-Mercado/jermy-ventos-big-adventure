<template>
    <div class="flex flex-col gap-2 justify-between h-[85%] w-full items-center">
        <h1 class="text-[4rem] text-black pixfont text-center font-extrabold shaky mt-12 select-none">YOU WIN!</h1>
        <div class="bg-slate-600 min-h-[40vh] w-[30vw] border-black border-2 shadow-xl flex items-center justify-center flex-col gap-2 p-2">
            <p class="text-sky-200 pixfont text-2xl text-center">Ending achieved: {{ stateKeys.choicesMade.ending === 'spareJoevil' ? "Joevil Spared" : "Joevil Killed" }}</p>
            <p class="text-white pixfont text-2xl text-center">Deaths: <span class="dialogue-font">{{ deaths }}</span></p>
            <p class="text-sky-200 pixfont text-2xl text-center">Time since start: <span class="dialogue-font">{{ (timeTaken) }}</span></p>
        </div>
        <button @click="clickSFX(); $emit('reset-save')" class="text-4xl pixfont bg-slate-900 hover:bg-slate-800 active:bg-slate-600 transition-all duration-300 ease-in-out p-8 flex items-center justify-center border-2 border-slate-200 relative h-[12%] w-[80%] mt-20 z-1 select-none hover:-translate-y-1 active:translate-y-0.5"> RESET CAMPAIGN </button>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["reset-save"])
const stateKeys = useStateKeys()
const deaths = useEndStore().deaths

if(!useEndStore().timeEnd) {
    useEndStore().getEndTime()
} 
let endTime = useEndStore().timeEnd

const secondsTaken = (endTime - useEndStore().timeStart)/ 1000

function secondsToHHMMSSMS(totalSeconds: number): string {
  const isNegative = totalSeconds < 0;
  const absSeconds = Math.abs(totalSeconds);

  const hours = Math.floor(absSeconds / 3600);
  const minutes = Math.floor((absSeconds % 3600) / 60);
  const seconds = Math.floor(absSeconds % 60);
  const milliseconds = Math.round((absSeconds - Math.floor(absSeconds)) * 1000);

  const pad = (num: number, len = 2): string => String(num).padStart(len, '0');

  const formatted = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
  return isNegative ? `-${formatted}` : formatted;
}

const timeTaken = secondsToHHMMSSMS(secondsTaken)

</script>

<style scoped>
@keyframes shaky {

    0%,
    100% {
        transform: rotate(0deg)
    }

    16% {
        transform: rotate(5deg);
        color: rgb(8, 48, 88)
    }

    33% {
        scale: 0.9;
        transform: rotate(-5deg);
        color: black
    }

    50% {
        transform: rotate(5deg);
        color: rgb(8, 48, 88)
    }

    67% {
        scale: 1.1;
        transform: rotate(-5deg);
        color: black
    }
}

.shaky {
    animation: shaky 5s ease-in-out infinite;
    display: inline-block;
}
</style>