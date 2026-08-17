<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div class="w-full h-full absolute bottom-0 bg-black/50" v-if="mounted"></div>
        </transition>
        <transition name="magnifying-glass">
            <img v-if="magnifyingGlass" src="/images/magnifying-glass.png" alt="magnifying-glass" class="fixed h-[40%] transition-all duration-150 ease-in-out" :class="imgClass">
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
const magnifyingGlass = ref<boolean>(false)
const index = ref<number>(0)

const imgClasses: string[] = ['left-[5%] top-[5%]', 'left-[35%] top-[50%]', 'left-[10%] top-[60%]', 'left-[75%] top-[35%]']

const imgClass = computed(() => {
    return imgClasses[Math.min(index.value, imgClasses.length - 1)]
})

onMounted(() => mounted.value = true)
let interval = 0
setTimeout(() => {
    magnifyingGlass.value = true
    interval = setInterval(() => {
        index.value++
    }, 500)
}, 400)

setTimeout(() => {
    mounted.value = false
    magnifyingGlass.value = false
    clearInterval(interval)
}, 2400)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 2700)
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

.magnifying-glass-enter-from,
.magnifying-glass-leave-to {
    opacity: 0
}
.magnifying-glass-enter-active,
.magnifying-glass-leave-active {
    transition: opacity 0.3s ease-in-out
}
</style>