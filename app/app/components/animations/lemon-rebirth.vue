<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div v-if="mounted" class="w-screen h-screen bg-linear-to-tr from-purple-950/95 to-pink-800/95 fixed bottom-0">

            </div>
        </transition>
        <transition name="ufo">
            <img v-if="ufoActive" src="/images/ufo.png" alt="UFO"
            class="aspect-square fixed w-[20vw] right-[40vw] top-[5vh] z-23">
        </transition>
        <transition name="lemon">
            <img v-if="lemonActive" src="/images/lemon.png" alt="lomen game"
            class="aspect-square absolute w-[5vw] right-[47.5vw] top-[70vh] spinning z-22">
        </transition>
        <transition name="tractor-beam">    
            <div v-if="tractorBeamActive"  class="fixed w-[10vw] right-[45vw] top-[25vh] h-[60vh] bg-linear-to-b from-emerald-400/60 to-emerald-200/30 z-21"></div>
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()
const mounted = ref<boolean>(false)
const ufoActive = ref<boolean>(false)
const lemonActive = ref<boolean>(false)
const tractorBeamActive = ref<boolean>(false)

onMounted(() => {mounted.value = true; lemonActive.value = true})
setTimeout(() => ufoActive.value = true, 300)
setTimeout(() => tractorBeamActive.value = true, 700)
setTimeout(() => {lemonActive.value = false; tractorBeamActive.value = false}, 1400)
setTimeout(() => ufoActive.value = false, 2100)
setTimeout(() => mounted.value = false, 2100)

setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 2500)
</script>

<style scoped>
@keyframes spin {
  from { rotate: (0deg); }
  to { rotate: (360deg); }
}

.spinning {
  animation: spin 2s linear infinite;
}

.lemon-enter-from {
    scale: 0;
    opacity: 0
}

.lemon-enter-to,
.lemon-leave-from {
    scale: 1;
    opacity: 1;
}

.lemon-leave-to {
    opacity: 0;
    transform: translateY(-30vh);
}

.lemon-enter-active,
.lemon-leave-active {
    transition: ease-in-out 300ms all
}

.tractor-beam-enter-from,
.tractor-beam-leave-to {
    right: 45vw;
    transform: scaleY(0%) translateY(-30vh)
}

.tractor-beam-enter-to,
.tractor-beam-leave-from {
    right: 45vw;
    transform: scaleY(1) translateY(0vh)
}

.tractor-beam-enter-active,
.tractor-beam-leave-active {
    transition: all 300ms ease-in-out
}


.ufo-enter-from {
    right: 200vw;
    top: -10vh;
    rotate: -10deg;
}

.ufo-enter-to,
.ufo-leave-from {
    right: 35vw;
    top: 5vh
}

.ufo-leave-to {
    right: -200vw;
    top: -20vh;
    rotate: 30deg;
}

.ufo-enter-active,
.ufo-leave-active {
    transition: all 400ms ease-in-out
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