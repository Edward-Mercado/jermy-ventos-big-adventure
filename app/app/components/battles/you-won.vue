<template>
    <div class="w-full h-dvh flex flex-col items-center">
        <h2 class="shaky text-black pixfont text-[5rem] text-center w-full uppercase">You won!</h2>
        <div class="w-[60%] flex flex-col items-center bg-slate-800/70 h-[70%] gap-4 border-4 border-black p-2 relative">
            <h4 class="pixfont text-white text-[3rem]">Enemies Defeated:</h4>
            <p class="text-sky-200 dialogue-font text-2xl" v-for="enemy in battleData!.enemies">{{ enemy.name }} ( + {{ enemy.expDrop }} EXP ) </p>
            <div class="bg-white w-full h-2 rounded-full my-4"></div>
            <p class="text-sky-200 dialogue-font text-2xl"> Total EXP Gained: {{ totalExpDrop }} EXP </p>
            <button class="absolute bottom-6 w-[80%] uppercase pixfont text-[2rem] border-black border-2
            transition-all duration-300 ease-in-out py-2 bg-slate-900 hover:bg-slate-800 active:bg-slate-600
            hover:-translate-y-1 active:translate-y-0.5 shadow-md hover:shadow-lg active:shadow-none"
            @click="()=>{clickSFX(); $emit('continue')}">Continue</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['continue'])
const stateKeys = useStateKeys()

const campaignSaveStore = useCampaignSaveStore()

const currentStateKey = computed((): string => {
    return stateKeys.keys[campaignSaveStore.gameState]!.name
})
// <p class="text-sky-200 pixfont text-2xl" v-for="enemy in battleData">{{ enemy.name }}</p>
console.log(currentStateKey.value)
const battleData = useBattleStore().$state[currentStateKey.value]

const totalExpDrop = computed(() => {
    let returnVal:number = 0
    if(battleData!.enemies) {
        battleData?.enemies.forEach((e:EnemyData) => {
            returnVal += e.expDrop
        })
    }
    return returnVal
})
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