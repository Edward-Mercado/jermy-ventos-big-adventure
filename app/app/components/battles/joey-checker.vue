<template>
                <div class="top-0 left-0 absolute w-full p-2 h-full bg-linear-to-tr from-sky-100/96 to-white/96 rounded-2xl flex flex-col justify-between">
                <button class="pixfont text-black w-full text-left text-2xl transition-colors ease-in-out duration-300 hover:text-red-800 active:text-red-500" @click="clickSFX(); $emit('close')">X</button>
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
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])
const campaignStore = useCampaignSaveStore()
function getTitle() {
    const index = Math.floor(campaignStore.playerLevel/4)
    const titles = ['Boy', 'Bruiser', 'Beast', 'Boss']
    return titles[Math.min(index, titles.length - 1)]
}
</script>

<style scoped>

</style>