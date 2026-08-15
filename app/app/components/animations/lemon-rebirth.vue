<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div class="w-full h-full bg-black/50">

            </div>
        </transition>
        <transition name="ufo">
            <img v-if="ufoActive" src="/images/ufo.png" alt="UFO"
            class="aspect-square absolute w-[30vw] right-[40vw] top-[10vh]">
        </transition>
        <transition name="lemon">
            
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

onMounted(() => mounted.value = true)
setTimeout(() => ufoActive.value = true, 300)
setTimeout(() => lemonActive.value = true, 700)

setTimeout(() => ufoActive.value = false, 2100)
setTimeout(() => mounted.value = false, 2100)

setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 2500)
</script>

<style scoped>
.ufo-enter-from {
    left: -10vw;
    top: -10vh;
    rotate: -10deg;
}

.ufo-enter-to,
.ufo-leave-from {
    right: 35vw;
    top: 10vh
}

.ufo-leave-to {
    right: -50vw;
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