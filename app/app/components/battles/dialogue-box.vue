<template>
    <div
        class="bg-slate-950/70 min-w-[80vw] h-full text-2xl border-4 border-black relative overflow-b-hidden justify-end flex z-25">
        <div class="absolute pl-1 bottom-0 -left-1 h-[120%] w-[10%] pixfont overflow-hidden z-25">
            <img :src="battleInstance.spriteURL" :alt="battleInstance.user" class="h-full w-full object-cover z-25"
            :style="{ transform: getShrinks }">
            >
        </div>
        <div class="absolute py-1 px-2 top-[-45%] bg-slate-950 -left-2 border-white pixfont border-2 z-25">{{ battleInstance.user }}</div>
        <p class="w-[90%] h-full mr-0 pixfont text-xl p-2">
            <span class="typewriter dialogue-font text-xl select-none">{{ displayedText }}<span class="cursor pixfont"
                    v-if="!isDone">|</span></span>
        </p>
        <transition name="slide-up">
            <button v-if="isDone"
                class="px-2 h-[50%] bg-slate-700 pixfont shadow-lg hover:shadow-xl w-[20%] right-[-1%] bottom-[-15%] border-black border-4 text-lg select-none z-25
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-slate-800 active:bg-slate-900 flex items-center justify-center absolute"
                @click="clickSFX(); $emit('proceed')">
                Proceed.
            </button>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { Howl } from 'howler';

const prop = defineProps<{
    battleInstance: BattleEvent
    speed: number
}>()

const emit = defineEmits(["proceed"])

const displayedText = ref<string>("")
const isDone = ref<boolean>(false)
const canProceed = ref<boolean>(false)

var dialogueBeep = new Howl({
    src: [prop.battleInstance.sound as string | '/sounds/basehigh.m4a'],
    volume: 0.8
})

const getShrinks = computed(() => {
    if(prop.battleInstance.user === "Joey") {
        return `scale(${1 * (0.66 ** useCampaignSaveStore().shrinkCount)})`
    } else if (useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.name === prop.battleInstance.user)) {
        let shrinkCount = useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.name === prop.battleInstance.user)!.shrinkCount
        return `scale(${1 * (0.66 ** shrinkCount)})`
    } else return `scale(1)`
})

let interval: any = null

onMounted(() => {
    if(!useCurrentBattleStore().battleEventsDone.find((battleEvent:BattleEvent) =>battleEvent === prop.battleInstance)) {
        if(prop.battleInstance.action) prop.battleInstance.action(prop.battleInstance.actionArgs)
        prop.battleInstance.actionPerformed = true
        useCurrentBattleStore().battleEventsDone.push(prop.battleInstance)
    }
    const charSpeed = prop.speed ?? 50
    let index = 0

    interval = setInterval(() => {
        if (index < prop.battleInstance.flavorText.length) {
            if (!(index % 2)) dialogueBeep.play()
            displayedText.value += prop.battleInstance.flavorText[index]
            index++
        } else {
            clearInterval(interval)
            isDone.value = true
            setTimeout(() => {
                canProceed.value = true
            }, prop.speed * 5)
        }
    }, charSpeed)
})

function stopInterval() {
    if (interval) clearInterval(interval)
}

const transitionSpeed = computed(() => {
    return `${prop.speed * 10}ms`
})

const shakeSpeed = computed(() => {
    return `${prop.speed * 2}ms`
})
</script>

<style scoped>
.typewriter {
    white-space: pre-wrap;
}

.cursor {
    animation: blink 0.8s steps(1) infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.slide-up-enter-from,
.slide-up-leave-to {
    bottom: -100%;
    opacity: 0
}

.slide-up-enter-to,
.slide-up-leave-from {
    bottom: -30%;
    opacity: 1
}

.slide-up-enter-active {
    transition: all ease-in-out v-bind(transitionSpeed)
}
</style>