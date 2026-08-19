<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" >
        <transition name="black-bg">
            <div class="w-screen h-screen fixed bottom-0 bg-linear-to-tr from-sky-400/90 to-sky-300/90" v-if="mounted">
            </div>
        </transition>
        <transition name="fade-up">
            <img v-if="mounted" src="/images/american-flag.png" alt="american flag" class="h-[60vh] fixed bottom-0 left-[-5vw]">
        </transition>
        <transition name="fade-up">
            <div v-if="mounted" class="fixed bottom-0 w-screen h-[10%] z-22 bg-green-400">
                <img src="/images/whitehouse.png" alt="white house" class="h-[60vh] fixed bottom-0 right-[-5vw]">
            </div>
        </transition>
        <transition name="eagle">
            <img v-if="eagleActive" src="/images/eagle.png" alt="eagle"
            class="aspect-square fixed w-[20vw] left-[5vw] top-[25vh] z-23 scale-x-[-1]">
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
const eagleActive = ref<boolean>(false)
onMounted(() => mounted.value = true)

setTimeout(() => eagleActive.value = true, 300)

setTimeout(() => eagleActive.value = false, 2300)

setTimeout(() => {
    mounted.value = false
}, 3000)

setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 3300)
</script>

<style scoped>
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

.eagle-enter-from {
    left: 200vw;
    top: -70vh;
    rotate: -10deg;
}

.eagle-leave-to {
    left: -200vw;
    top: -100vh;
    rotate: 30deg;
}

.eagle-enter-active,
.eagle-leave-active {
    transition: all 1s ease-in-out
}
</style>