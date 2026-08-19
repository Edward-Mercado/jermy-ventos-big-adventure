<template>
    <div
        class="w-[80%] bg-slate-600/70 fixed bottom-[5%] h-[12%] border-black border-4 p-3 shadow-md flex justify-between">
        <span class="typewriter dialogue-font text-xl select-none">{{ displayedText }}<span class="cursor pixfont"
                v-if="!isDone">|</span></span>
        <transition name="slide-up">
            <button v-if="canProceed" @click="clickSFX(); $emit('proceed')"
                class="px-2 h-[50%] bg-slate-700 pixfont shadow-lg hover:shadow-xl w-[20%] right-[5%] bottom-[-30%] border-black border-4 text-lg select-none
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-slate-800 active:bg-slate-900 flex items-center justify-center absolute">
                Proceed.
            </button>
        </transition>
        <button @click="clickSFX(); stopInterval(); $emit('skip')"
            class="px-2 h-[50%] bg-slate-700 pixfont shadow-lg hover:shadow-xl w-[20%] left-[5%] bottom-[-30%] border-black border-4 text-lg
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-slate-800 active:bg-slate-900 flex items-center justify-center select-none absolute">
            Skip
        </button>
        <div class="absolute bg-slate-700 top-[-30%] h-[40%] pixfont flex items-center justify-center text-xl min-w-[30%] z-8"
            :class="`${currentLine.align}-[5%] z-8`">
            <div
                class="bg-slate-700 px-4 border-4 border-black h-full pixfont flex items-center justify-center text-xl w-full z-8 select-none">
                {{ props.currentLine.speaker }}
            </div>

            <div v-if="props.currentLine.imgURL"
                class="absolute bottom-full left-1/2 -translate-x-1/2 z-7 h-[30vh] p-0 overflow-x-visible">
                <img :src="props.currentLine.imgURL" :alt="props.currentLine.speaker"
                    class="h-full w-auto block max-w-none select-none" :class="{
                        'shake-left': !isDone && currentLine.align === 'left',
                        'shake-right': !isDone && currentLine.align === 'right'
                    }">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Howl, Howler } from 'howler';

const emit = defineEmits(["proceed", "skip"])
const props = defineProps<{
    currentLine: DialogueLine
}>()

const displayedText = ref<string>("")
const isDone = ref<boolean>(false)
const canProceed = ref<boolean>(false)

var dialogueBeep = new Howl({
    src: [props.currentLine.sound as string | '/sounds/basehigh.m4a'],
    volume: 0.8
})

let interval:any = null

onMounted(() => {
    const charSpeed = props.currentLine.speed ?? 50
    let index = 0

    interval = setInterval(() => {
        if (index < props.currentLine.dialogue!.length) {
            if (!(index % 2)) dialogueBeep.play()
            displayedText.value += props.currentLine.dialogue![index]
            index++
        } else {
            clearInterval(interval)
            isDone.value = true
            setTimeout(() => {
                canProceed.value = true
            }, props.currentLine.speed * 5)
        }
    }, charSpeed)
})

function stopInterval() {
    if(interval) clearInterval(interval)
}

onUnmounted(() => stopInterval())

const transitionSpeed = computed(() => {
    return `${props.currentLine.speed * 10}ms`
})

const shakeSpeed = computed(() => {
    return `${props.currentLine.speed * 2}ms`
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

@keyframes shake-left {
    0% {
        transform: rotate(-5deg) translateY(-12%);
    }

    100% {
        transform: rotate(5deg) translateY(-4%);
    }
}

@keyframes shake-right {
    0% {
        transform: rotate(5deg) translateY(-12%);
    }

    100% {
        transform: rotate(-5deg) translateY(-4%);
    }
}

.shake-right {
    animation: shake-right v-bind(shakeSpeed) infinite linear alternate;
}

.shake-left {
    animation: shake-left v-bind(shakeSpeed) infinite linear alternate;
}
</style>