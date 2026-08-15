<template>
    <transition name="black-bg">
        <div class="w-full h-full absolute bg-black/50 top-0 z-20" v-if="mounted">
        </div>
    </transition>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
            <img v-if="mounted && mangoCounter < 5" :src="`/images/mango${mangoCounter}.png`" alt="mango" class="fixed w-[40vw] left-[30vw]">
            <img v-if="doneByEnemy" src="/images/humd.png" alt="my lovely" class="left-[2%] fixed h-[80%] shaking">
            <img v-else src="/images/joey.png" alt="ugh" class="left-[2%] fixed h-[80%] shaking">
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mangoCounter = ref<number>(1)

const mounted = ref<boolean>(false)
onMounted(() => mounted.value = true)

setTimeout(() => {mangoCounter.value++}, 500)
setTimeout(() => {mangoCounter.value++}, 750)
setTimeout(() => {mangoCounter.value++}, 850)
setTimeout(() => {mangoCounter.value++}, 900)
setTimeout(() => {mangoCounter.value++; useCurrentBattleStore().animReset()}, 1000)
</script>

<style scoped>

@keyframes shaking {
    0% { transform: rotate(0deg) }
    25% { transform: rotate(5deg) }
    75% { transform: rotate(-5deg) }
    100% { transform: rotate(0deg)}
}

.shaking {
    animation: shaking 0.2s infinite linear
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