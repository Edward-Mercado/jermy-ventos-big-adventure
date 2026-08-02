<template>
    <div
        class="w-[80%] bg-slate-600/70 fixed bottom-[5%] h-[12%] border-black border-4 p-3 shadow-md flex justify-between">
        <span class="typewriter dialogue-font text-xl">{{ displayedText }}<span class="cursor pixfont"
                v-if="!isDone">|</span></span>
        <transition name="slide-up">
            <button v-if="canProceed" @click="$emit('proceed')"
                class="px-2 h-[50%] bg-slate-700 pixfont shadow-lg hover:shadow-xl w-[20%] right-[5%] bottom-[-30%] border-black border-4 text-lg
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-slate-800 active:bg-slate-900 flex items-center justify-center absolute">
                Proceed.
            </button>
        </transition>
        <button @click="$emit('skip')"
            class="px-2 h-[50%] bg-slate-700 pixfont shadow-lg hover:shadow-xl w-[20%] left-[5%] bottom-[-30%] border-black border-4 text-lg
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-slate-800 active:bg-slate-900 flex items-center justify-center absolute">
            Skip
        </button>
        <div class="absolute bg-slate-700 top-[-30%] px-4 border-4 border-black h-[40%] pixfont flex items-center justify-center text-xl min-w-[30%] z-2"
            :class="`${currentLine.align}-[5%]`">
            {{ props.currentLine.speaker }}
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["proceed", "skip"])
const props = defineProps<{
    currentLine: {
        speaker: string,
        align: string,
        dialogue: string,
        speed: number
    }
}>()

const displayedText = ref<string>("")
const isDone = ref<boolean>(false)
const canProceed = ref<boolean>(false)

onMounted(() => {
    const charSpeed = props.currentLine.speed ?? 50
    let index = 0

    const interval = setInterval(() => {
        if (index < props.currentLine.dialogue.length) {
            displayedText.value += props.currentLine.dialogue[index]
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

const transitionSpeed = computed(() => {
    return `${props.currentLine.speed * 10}ms`
})

'left-[5%]'
'right-[5%]'
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