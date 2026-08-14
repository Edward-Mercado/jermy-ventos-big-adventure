<template>
    <div class="flex items-center justify-between flex-col bg-slate-700/40 rounded-md shadow-lg overflow-y-scroll overflow-x-hidden p-1 relative"
    :class="fullClasses"
    >
        <div class="border-2 h-35 bg-slate-600/70 border-black shadow-lg p-2 gap-2 flex flex-col justify-between w-full rounded-md relative">
            <div class="flex justify-between items-center h-[40%]">
            <h4 class="pixfont text-md lg:text-2xl h-full pt-2">{{ enemy.name }}</h4>
            <div class="absolute bottom-13 z-9 left-2 flex ">
                <Target :size="32" v-if="isTarget" color="white" class=""/>
                <Target :size="32" v-for="friend in enemy.targetOf" color=" #bae6fd" class=""/>
                <Target :size="32" v-for="friend in useBattleGuiStore().selectedFriends.filter((friend:Friend) => friend.targetType === 'AOE')" 
                color="#dfc7ff"    
                />
            </div>
            <battles-health-bar :currentHP="enemy.currentHP" :maxHP="enemy.maxHP"></battles-health-bar>
            </div>
            
            <button class="bg-slate-900 flex items-center justify-center w-full h-[30%] p-2 pixfont border-2 hover:bg-slate-600 
                    active:bg-slate-200 active:text-black transition-all duration-300 ease-in-out shadow-md 
                    hover:shadow-xl active:shadow-none hover:-translate-y-1 active:translate-y-0.5"
                    @click="clickSFX(); handleAction()" v-if="pickingMove" :class="mode === 'Target' ? 'uppercase' : ''">{{mode}}</button>
            <battles-health-bar v-else :currentHP="enemy.currentMana" :maxHP="enemy.maxMana" :isMana="true"></battles-health-bar>
        </div>
        <transition name="fade">
            <img class="transition-all duration-300 ease-in-out" v-if="enemy.currentHP > 0"
            :src="enemy.img" :alt="enemy.name" :class="[imgClasses, moveClasses]" :style="{ transform: `scale(${1*(0.66**enemy.shrinkCount)})`}">
        </transition>
        <transition name="fade"> 
            <img v-if="enemy.currentHP === 0"
            src="/images/deadsmoke.png" alt="deadsmoke" :class="imgClasses" class="absolute bottom-0" >
        </transition>
        <transition name="fade">
            <img v-if="enemy.isBlocking" src="/images/shield.png" alt="shield"
            class="absolute bottom-[12%] left-0 h-[35%] opacity-80">
        </transition>


        <transition name="checking-container" v-if="pickingMove">
            <div class="top-0 left-0 absolute w-full p-2 h-full bg-linear-to-tr from-sky-100/96 to-white/96 rounded-2xl flex flex-col justify-between z-10 overflow-y-scroll" v-if="checking">
                <div class="flex w-full flex-between items-center">
                    <button class="pixfont text-black w-full text-left text-2xl transition-colors ease-in-out duration-300 hover:text-red-800 active:text-red-500" @click="clickSFX(); checking = false">X</button>
                    <Target :size="32" v-if="isTarget" color="black"/>
                    <Target :size="32" v-for="i in enemy.targetOf" color="#1a3b70"/>
                    <Target :size="32" v-for="friend in useBattleGuiStore().selectedFriends.filter((friend:Friend) => friend.targetType === 'AOE')" 
                    color="#430e8a"    
                    />
                </div>
                <div class="h-[90%] flex flex-col gap-6">
                    <div class="flex flex-row w-full justify-between">
                        <p class="text-2xl text-black pixfont">{{ enemy.name }}</p>
                        <p class="text-2xl text-black pixfont">{{ campaignStore.currentHP }}/{{ campaignStore.maxHP }}</p>
                    </div>
                    <p class="text-2xl text-slate-700 pixfont italic">LV. {{ enemy.level }} {{enemy.title}}</p>
                    <p class="text-md text-slate-700 pixfont italic">{{ enemy.desc }}</p>
                    <p class="text-2xl text-black pixfont">Stats:</p>
                    <div class="flex items-between justify-between flex-wrap gap-2 flex-row w-full">
                        <p class="min-w-10 w-[48%] text-lg pixfont text-black">ATK: {{ enemy.attack }}</p>
                        <p class="min-w-10 w-[48%] text-lg pixfont text-black">DEF: {{ enemy.defense }}</p>
                    </div>
                    <p class="text-2xl text-black pixfont">MANA:</p>
                    <battles-health-bar :currentHP="enemy.currentMana" :maxHP="enemy.maxMana" :isMana="true" :nextLevel="campaignStore.playerLevel + 1"></battles-health-bar>
                    <p class="text-lg text-black pixfont" v-if="useCurrentBattleStore().columboActive">Enemy Next Move: {{ enemy.nextMove }}</p>
                    <p class="text-lg text-slate-800 pixfont italic" v-else>Maybe using an ability would allow you to see this enemy's next move.</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { Target } from 'reicon-vue';
const checking = ref<boolean>(false)
const campaignStore = useCampaignSaveStore()
const emit = defineEmits(['target'])

const props = defineProps<{
    enemy: Enemy,
    index: number,
    amount: number,
    pickingMove: boolean,
    isTarget: boolean,
    mode: ("Check" | "Target")
}>()

const moveClasses = ref<string>('')

watch(() => props.enemy.currentHP, async () => {
    moveClasses.value = "rotate-45 translate-x-[20%] translate-y-[5%]"
    setInterval(() => {
        moveClasses.value = ""
    }, 1000)
})

watch(() => props.enemy.attackThisEvent, async () => {
    moveClasses.value = "-rotate-45 translate-x-[-20%] translate-y-[5%]"
    setInterval(() => {
        moveClasses.value = ""
    }, 1000)
})

const fullClasses = computed(() => {
    if(props.amount === 1) {
        return 'w-full h-full'
    } else if (props.amount === 2) {
        return 'w-[48%] h-full'
    } else if (props.amount === 3 || props.amount === 4) {
        return 'w-[48%] h-[48%]'
    }
})

const imgClasses = computed(() => {
    if(props.amount === 1 || props.amount === 2)  return 'max-h-[70%]'
    else if (props.amount === 3) return 'max-h-[50%]'
})

function handleAction() {
    if(props.mode === "Check") checking.value = true
    else {
        emit('target', props.enemy.name)
    }
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

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: ease-out 0.5s all
}
</style>