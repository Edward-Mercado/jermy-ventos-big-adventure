<template>
    <div class="border-2 w-[38%] flex flex-col justify-between relative overflow-hidden"> <!-- JOEY CONTAINER-->
        <div
            class="border-2 h-[30%] bg-slate-600/70 border-black shadow-lg p-2 gap-2 flex flex-col justify-between m-2">
            <h4 class="pixfont text-2xl -mb-2">Joey</h4>
            <battles-health-bar :currentHP="100" :maxHP="100"></battles-health-bar>
            <button class="bg-slate-900 flex items-center justify-center w-full h-[30%] p-2 pixfont border-2 hover:bg-slate-600 
                    active:bg-slate-200 active:text-black transition-all duration-300 ease-in-out shadow-md 
                    hover:shadow-xl active:shadow-none hover:-translate-y-1 active:translate-y-0.5"
                @click="checking = true">Check</button>
        </div>
        <img src="/images/joey.png" alt="Joey"
            class="border-b-6 border-black rounded-2xl absolute bottom-0 max-w-full max-h-[60%] m-2 mx-2">
        <transition name="checking-container">
            <div class="top-0 left-0 absolute w-full p-2 h-full bg-linear-to-tr from-sky-100/96 to-white/96 rounded-2xl flex flex-col justify-between" v-if="checking">
                <button class="pixfont text-black w-full text-left text-2xl transition-colors ease-in-out duration-300 hover:text-red-800 active:text-red-500" @click="checking = false">X</button>
                <div class="h-[90%] flex flex-col gap-4">
                    <div class="flex flex-row w-full justify-between">
                        <p class="text-2xl text-black pixfont">Joey</p>
                        <p class="text-2xl text-black pixfont">{{ campaignStore.currentHP }}/{{ campaignStore.maxHP }}</p>
                    </div>
                    <p class="text-2xl text-slate-700 pixfont italic">LV. {{ campaignStore.playerLevel }} Birthday {{ getTitle() }}</p>
                    <p class="text-md text-slate-700 pixfont italic">It's the man's birthday and he's got something to prove.</p>
                    <p class="text-2xl text-black pixfont">Stats:</p>
                    <div class="flex items-between justify-between flex-wrap gap-2 flex-row w-full">
                        <p class="min-w-10 w-[48%] text-lg pixfont text-black">ATK: {{ campaignStore.attack }}</p>
                        <p class="min-w-10 w-[48%] text-lg pixfont text-black">DEF: {{ campaignStore.defense }}</p>
                        <p class="min-w-10 w-[48%] text-lg pixfont text-black">FRIEND SLOTS: {{ campaignStore.friendSlots }}</p>
                    </div>
                    <p class="text-2xl text-black pixfont">MANA:</p>
                    <battles-health-bar :currentHP="campaignStore.currentMana" :maxHP="campaignStore.maxMana" :isMana="true" :nextLevel="campaignStore.playerLevel + 1"></battles-health-bar>
                    <p class="text-2xl text-black pixfont">EXP:</p>
                    <battles-health-bar :currentHP="campaignStore.expGained" :maxHP="campaignStore.playerLevelData[campaignStore.playerLevel+1]!.expRequirement" :isEXP="true" :nextLevel="campaignStore.playerLevel + 1"></battles-health-bar>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
const campaignStore = useCampaignSaveStore()
const checking = ref<boolean>(false)

function getTitle() {
    const index = Math.floor(campaignStore.playerLevel/4)
    const titles = ['Boy', 'Bruiser', 'Beast', 'Boss']
    return titles[Math.min(index, titles.length - 1)]
}
</script>

<style scoped>
.checking-container-enter-from,
.checking-container-leave-to {
    transform: translateY(50%);
    opacity: 0;
}

.checking-container-enter-to,
.checking-container-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.checking-container-enter-active,
.checking-container-leave-active {
    transition: all 500ms ease;
    transform-origin: bottom;
}
</style>