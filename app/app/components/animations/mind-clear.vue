<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center">
        <transition name="black-bg">
            <div class="w-full h-full absolute bottom-0 bg-black/50" v-if="mounted">
                
            </div>
        </transition>
        <transition name="brain">
            <img v-if="brainVisible" src="/images/brain.png" alt="brain" class="w-[20vw] left-[40vw] fixed top-[30vh]">
        </transition>
        <transition name="drop">
            <img v-if="dropping" src="/images/water-drop.png" alt="water drop" class="fixed bottom-[-40vh] w-[10vw] left-[45vw]">
        </transition>
        <transition name="static">
            <img v-if="brainStatic" src="/images/brain-static.png" alt="brain static" class="shake-loop w-[40vw] left-[30vw] fixed">
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
const brainStatic = ref<boolean>(false)
const brainVisible = ref<boolean>(false)
const dropping = ref<boolean>(false)

onMounted(() => {mounted.value = true; brainStatic.value = true})

setTimeout(() => {dropping.value = true}, 400)

setTimeout(() => {brainStatic.value = false; brainVisible.value = true}, 800)

setTimeout(() => {
    mounted.value = false
    brainVisible.value = false
    dropping.value = false
}, 2900)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 3200)
</script>

<style scoped>
.black-bg-enter-from,
.black-bg-leave-to {
    opacity: 0
}

.drop-enter-from {
    transform: translateY(-200vh)
}

.drop-enter-active {
    transition: all 500ms ease-in
}

.black-bg-enter-to,
.black-bg-leave-from {
    opacity: 0.5
}

.brain-enter-from {
    transform: rotate(180deg)
}

.brain-enter-active {
    transition: all 1s ease-in-out
}

.brain-leave-active {
    transition: all 0.3s ease-in-out
}

.brain-leave-to {
    opacity: 0
}

.black-bg-enter-active,
.black-bg-leave-active {
    transition: opacity 0.3s ease-in-out
}

@keyframes shaky {
    0%, 100% { rotate: 0deg; scale: 1; }
    16% { rotate: 15deg; }
    33% { scale: 0.7; rotate: -15deg; }
    50% { rotate: 15deg; }
    67% { scale: 1.3; rotate: -15deg; }
}

.shake-loop {
    animation: shaky 1s linear infinite;
}

.static-enter-to,
.static-leave-from {
    opacity: 1;
    scale: 1
}

.static-leave-active {
    transition: all 300ms ease-in-out
}

.static-leave-to {
    opacity: 0;
    scale: 0
}
</style>