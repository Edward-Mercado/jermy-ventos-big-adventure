<template>
    <div class="bg-slate-400 h-dvh p-5 items-center flex flex-col justify-center select-none">
        <client-only v-if="endlessRunning && gameActive">
            <battles-battle-basis v-if="!battleOutcome"
            @win="battleOutcome = 'Won'"
            @lose="battleOutcome = 'Lost'"></battles-battle-basis>
            <battles-endless-won
            @continue="battleOutcome = null" v-else-if="battleOutcome === 'Won'"></battles-endless-won>
            <battles-endless-lost 
            @close="newRunResets(); gameActive = false; battleOutcome = null; lostFunction()" v-else-if="battleOutcome === 'Lost'"></battles-endless-lost>
        </client-only>
        <div v-else class="h-[90%] justify-around ease-in-out  flex flex-col items-center translate-y-[-5%] w-[80%]">
            <h2 class="pixfont text-black text-[3rem] h-[15%]">Welcome to <span class="uppercase text-slate-800">Endless</span> Mode</h2>
            <div class="h-[55%] w-[90%] bg-slate-600/70 border-black border-4 flex flex-col items-center p-2 gap-2 justify-around">
                <p class="pixfont text-[2rem] text-white">Current Wave: {{ endlessStore.gameState > 1 ? endlessStore.gameState : "No Run Data" }}</p>
                <p class="pixfont text-[2rem] text-white">High Score: {{ endlessStore.highScore > 1 ? endlessStore.highScore : "No Run Data" }}</p>
                <button class="py-4 w-[80%] bg-slate-600 hover:bg-slate-700 active:bg-slate-900 transition-all duration-300 border-black border-4 text-white pixfont p-4 text-4xl 
                shadow-md hover:shadow-lg active:shadow-none hover:-translate-y-1.5 active:translate-y-0.5" @click="clickSFX(); generateEndlessWave(endlessStore.gameState); showFriends = true" v-if="endlessStore.gameState > 1">View Friends Accquired</button>
            </div>
            <div class="flex h-[20%] w-full justify-between items-center gap-4">
                <button class="h-full w-full bg-slate-600 hover:bg-slate-700 active:bg-slate-900 transition-all duration-300 border-black border-4 text-white pixfont p-4 text-4xl 
                shadow-md hover:shadow-lg active:shadow-none hover:-translate-y-1.5 active:translate-y-0.5"
                @click="newRunResets(); clickSFX(); gameActive = true"> New Run
                </button>
                <button v-if="endlessStore.gameState > 1" class="h-full w-full bg-slate-600 hover:bg-slate-700 active:bg-slate-900 transition-all duration-300 border-black border-4 text-white pixfont p-4 text-4xl 
                shadow-md hover:shadow-lg active:shadow-none hover:-translate-y-1.5 active:translate-y-0.5"
                @click="clickSFX(); generateEndlessWave(endlessStore.gameState); gameActive = true"> Continue
                </button>
            </div>
        </div>
    </div>
    <transition name="modal">
        <div v-if="showFriends" class="fixed w-[96vw] h-[94vh] left-[2vw] top-[3vh] rounded-2xl bg-white/95 p-3 flex flex-col gap-2 justify-between">
            <div class="flex items-center gap-6 h-[7%] justify-start w-full">
                <button class="pixfont text-black text-left text-2xl transition-colors ease-in-out duration-300 hover:text-red-800 active:text-red-500 h-full"
        @click="clickSFX(); showFriends = false">X</button>
                <h3 class="text-black text-2xl pixfont w-[95%]">Friends Accquired In Your Current Endless Run</h3>
            </div>
            <endless-friends-carousel></endless-friends-carousel>
        </div>
    </transition>
</template>

<script setup lang="ts">
const showFriends = ref<boolean>(false)
const endlessStore = useEndlessStore();
const endlessRunning = ref<boolean>(false);
const gameActive = ref<boolean>(false);
const battleOutcome = ref<null | "Won" | "Lost">(null)

onMounted(() => endlessStore.loadFromLocalStorage())

onMounted(() => endlessRunning.value = true)

function newRunResets() {
    endlessStore.endlessExp = 0;
    endlessStore.gameState = 0;
    endlessStore.difficultyMultiplier = 0.4;
    endlessStore.friendsAccquired = [];
    endlessStore.saveGame()
    endlessStore.loadFromLocalStorage()
}

function lostFunction() {
    return navigateTo("/")
}
</script>

<style scoped>
.modal-enter-from,
.modal-leave-to {
    transform: translateY(50%);
    opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.modal-enter-active,
.modal-leave-active {
    transition: all 500ms ease;
    transform-origin: bottom;
}
</style>