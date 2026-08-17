<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="!doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div class="w-full h-full absolute bottom-0 bg-black/50" v-if="mounted">
                
            </div>
        </transition>
        <transition name="fade-up">
            <img v-if="singerActive" :src="doneByEnemy ? '/images/lucia.png' : '/images/joey.png'" alt="singer" class="w-[30vw] left-[35vw] fixed rounded-full bg-linear-to-tr from-yellow-200 to-white aspect-square object-cover">
        </transition>
        <transition name="fade-left">
            <img v-if="notesActive" src="/images/sheetmusicfx.png" alt="notes" class="fixed left-[-40vw] w-[40vw] top-[5vh]">
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
const singerActive = ref<boolean>(false)
const notesActive = ref<boolean>(false)

onMounted(() => mounted.value = true)
setTimeout(() => {
    singerActive.value = true
}, 400)

setTimeout(() => notesActive.value = true, 800)

setTimeout(() => {
    mounted.value = false
}, 2900)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 3200)
</script>

<style scoped>
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

.fade-left-enter-from,
.fade-left-leave-to {
    opacity: 0;
    transform: translateX(180vw) translateY(70vh)
}
.fade-left-enter-to,
.fade-left-leave-from {
    opacity: 1
}
.fade-left-enter-active {
    transition: all 2s ease-in-out
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