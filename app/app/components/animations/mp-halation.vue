<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div v-if="mounted" class="w-screen h-screen fixed bg-linear-to-tr from-sky-500/95 to-pink-300/95">

            </div>
        </transition>
        <transition name="fade-up">
            <img v-if="wandActive" src="/images/sailor-moon-wand.png" alt="sailor moon wand" class="h-[50vh] top-[25vh] fixed left-[15vw] transition-all duration-300 ease-in-out z-22" :class="rotateActive ? 'rotate-90 translate-x-[10vw]' : ''">
        </transition>
        <transition name="fade">
            <img v-if="wandActive" :src="doneByEnemy ? '/images/sailorkortnee.png' : '/images/sailorjoey.png'" :class="doneByEnemy ? '' : 'scale-x-[-1]'" alt="sailor moon" class="h-[50vh] top-[25vh] fixed z-21 left-[5vw]">
        </transition>
        <transition name="flying">
            <img v-if="flyingActive" src="/images/moon-cutter.png" alt="moon-cutter" class="h-[50vh] top-[25vh] fixed z-21 right-[-50vw]">
        </transition>
        <transition name="effect">
            <div v-if="effectActive" class="h-screen w-[10vw] bg-linear-to-l from-yelow-500 to-white fixed z-21 right-0 rounded-l-screen"></div>
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)

if(!prop.doneByEnemy) useCurrentBattleStore().joeyURL = '/images/sailorjoey.png'

const rotateActive = ref<boolean>(false)
const wandActive = ref<boolean>(false)
const flyingActive = ref<boolean>(false)

const effectActive = ref<boolean>(false)
onMounted(() => mounted.value = true)
setTimeout(() => wandActive.value = true, 300)
setTimeout(() => rotateActive.value = true, 900)
setTimeout(() => flyingActive.value = true, 1400)
setTimeout(() => effectActive.value = true, 1700)

setTimeout(() => effectActive.value = true, 2100)
setTimeout(() => mounted.value = false, 2600)
setTimeout(() => wandActive.value = false, 2600)

setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 2900)
</script>

<style scoped>
.effect-enter-from,
.effect-leave-to {
    transform: translateX(10vw)
}

.effect-enter-to,
.effect-leave-from {
    transform: translateX(0)
}

.effect-enter-active,
.effect-leave-active {
    transition: ease-in-out 300ms all
}

.flying-enter-from {
    transform: translateX(-200vw)
}   

.flying-enter-to {
    transform: translateX(0) rotate(720deg)
}

.flying-enter-active {
    transition: all 900ms ease-in-out
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1
}
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease-in-out
}

.fade-up-enter-from,
.fade-up-leave-to {
    opacity: 0;
    transform: translateY(30vh)
}
.fade-up-enter-to,
.fade-up-leave-from {
    opacity: 1
}
.fade-up-enter-active,
.fade-up-leave-active {
    transition: all 1s ease-in-out
}

.black-bg-enter-from,
.black-bg-leave-to {
    opacity: 0
}

.black-bg-enter-to,
.black-bg-leave-from {
    opacity: 0.5
}

.black-bg-enter-active,
.black-bg-leave-active {
    transition: opacity 0.3s ease-in-out
}
</style>