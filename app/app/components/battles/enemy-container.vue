<template>
    <div class="flex items-center justify-between flex-col bg-slate-700/40 rounded-md shadow-lg overflow-hidden p-1"
    :class="fullClasses"
    >
        <div class="border-2 h-35 bg-slate-600/70 border-black shadow-lg p-2 gap-2 flex flex-col justify-between w-full rounded-md">
            <div class="flex justify-between items-center h-[40%]">
            <h4 class="pixfont text-md lg:text-2xl h-full pt-2">{{ enemy.name }}</h4>
            <battles-health-bar :currentHP="enemy.currentHP" :maxHP="enemy.maxHP"></battles-health-bar>
            </div>
            <button class="bg-slate-900 flex items-center justify-center w-full h-[30%] p-2 pixfont border-2 hover:bg-slate-600 
                    active:bg-slate-200 active:text-black transition-all duration-300 ease-in-out shadow-md 
                    hover:shadow-xl active:shadow-none hover:-translate-y-1 active:translate-y-0.5"
                    @click="clickSFX(); performAction()">{{ props.action }}</button>
        </div>
        <img :src="enemy.img" :alt="enemy.name" :class="imgClasses">
        <transition name="checking-container">
            <div class="top-0 left-0 absolute w-full p-2 h-full bg-linear-to-tr from-sky-100/96 to-white/96 rounded-2xl flex flex-col justify-between z-2" v-if="checking">
                <button class="pixfont text-black w-full text-left text-2xl transition-colors ease-in-out duration-300 hover:text-red-800 active:text-red-500" @click="clickSFX(); checking = false">X</button>
                <div class="h-[90%] flex flex-col gap-6">
                    <div class="flex flex-row w-full justify-between">
                        <p class="text-2xl text-black pixfont">{{ enemy.name }}</p>
                        <p class="text-2xl text-black pixfont">{{ campaignStore.currentHP }}/{{ campaignStore.maxHP }}</p>
                    </div>
                    <p class="text-2xl text-slate-700 pixfont italic">LV. {{ enemy.level }} Thing</p>
                    <p class="text-md text-slate-700 pixfont italic">{{ enemy.desc }}</p>
                    <p class="text-2xl text-black pixfont">Stats:</p>
                    <div class="flex items-between justify-between flex-wrap gap-2 flex-row w-full">
                        <p class="min-w-10 w-[48%] text-lg pixfont text-black">ATK: {{ enemy.attack }}</p>
                        <p class="min-w-10 w-[48%] text-lg pixfont text-black">DEF: {{ enemy.defense }}</p>
                    </div>
                    <p class="text-2xl text-black pixfont">MANA:</p>
                    <battles-health-bar :currentHP="campaignStore.currentMana" :maxHP="campaignStore.maxMana" :isMana="true" :nextLevel="campaignStore.playerLevel + 1"></battles-health-bar>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
const checking = ref<boolean>(false)
const campaignStore = useCampaignSaveStore()

const props = defineProps<{
    enemy: any,
    index: number,
    amount: number,
    action: "Check" | "Target"
}>()

const fullClasses = computed(() => {
    if(props.amount === 1) {
        return 'w-full h-full'
    } else if (props.amount === 2) {
        return 'w-[48%] h-full'
    } else if (props.amount === 3) {
        return 'w-[48%] h-[48%]'
    }
})

function performAction() {
    if(props.action === 'Check') {
        checking.value = true
    }
}

const imgClasses = computed(() => {
    if(props.amount === 1 || props.amount === 2)  return 'max-h-[70%]'
    else if (props.amount === 3) return 'max-h-[50%]'
})
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