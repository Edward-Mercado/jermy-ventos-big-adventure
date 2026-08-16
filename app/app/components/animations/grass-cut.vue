<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="grass">
            <div v-if="grassUp" class="relative h-screen w-screen">
                <div class="border-2 border-green-900 absolute bottom-0 w-[3vw] h-[30%] right-[5%] bg-linear-to-t from-emerald-600 to-green-500 rounded-t-lg"></div>
                <div class="border-2 border-green-900 absolute bottom-0 w-[5vw] h-[40vh] right-[12%] bg-linear-to-t from-emerald-600 to-green-500 rounded-t-lg"></div>
                <div class="border-2 border-green-900 absolute bottom-0 w-[3vw] h-[20vh] right-[10%] bg-linear-to-t from-emerald-600 to-green-500 rounded-t-lg"></div>
                <div class="border-2 border-green-900 absolute bottom-0 w-[4vw] h-[40vh] right-[2%] bg-linear-to-t from-emerald-600 to-green-500 rounded-t-lg"></div>
                <div class="border-2 border-green-900 absolute bottom-0 w-[2.5vw] h-[55vh] right-[5%] bg-linear-to-t from-emerald-600 to-green-500 rounded-t-lg"></div>
            </div>
        </transition>
        <transition name="mower">
            <img v-if="mowerRunning" src="/images/grassman.png" alt="grass man" class="fixed h-[70vh] bottom-[15%] right-[-60vw]">
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mowerRunning = ref<boolean>(false)
const grassUp = ref<boolean>(false)

onMounted(() => grassUp.value = true)
setTimeout(() => mowerRunning.value = true, 400)
setTimeout(() => grassUp.value = false, 900)

setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 1300)
</script>

<style scoped>
.grass-enter-from,
.grass-leave-to {
    transform: scaleY(0)
}
.grass-enter-to,
.grass-leave-from {
    transform: scaleY(1)
}

.grass-enter-active,
.grass-leave-active {
    transition: all ease-in-out 300ms;
    transform-origin: bottom;
}

.mower-enter-from {
    transform: translateX(-200vw)
}

.mower-enter-active {
    transition: all ease-in-out 600ms
}
</style>