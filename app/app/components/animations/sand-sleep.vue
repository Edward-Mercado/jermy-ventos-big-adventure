<template>
    <transition name="black-bg">
        <div class="w-screen h-screen bottom-0 bg-radial from-amber-400 to-amber-100 top-0 fixed" v-if="mounted">
        </div>
    </transition>
    <transition v-for="i in 1200" name="falling">
        <div class="h-6 w-2 fixed bottom-[-10vh]" v-if="sand" :style="{rotate: `${Math.random()*360}deg`, left: `${Math.random()*100}vw`, transition: `${Math.random()*3.4}s`}" :class="colors[Math.floor(Math.random()*colors.length)]"></div>
    </transition>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()
const colors = [
    'bg-[#f2ad5f]', 'bg-[#f2b55f]', 'bg-[#f2bc5f]', 'bg-[#f2c35f]', 'bg-[#f2cb5f]',
    'bg-[#f2d25f]', 'bg-[#f2d95f]', 'bg-[#f2a85f]', 'bg-[#f2b75f]', 'bg-[#f2c65f]',
    'bg-[#f8ae59]', 'bg-[#f8b659]', 'bg-[#f8be59]', 'bg-[#f8c659]', 'bg-[#f8ce59]',
    'bg-[#f8d559]', 'bg-[#f8dd59]', 'bg-[#f8a859]', 'bg-[#f8b859]', 'bg-[#f8c859]',
    'bg-[#ffae52]', 'bg-[#ffb752]', 'bg-[#ffbf52]', 'bg-[#ffc852]', 'bg-[#ffd152]',
    'bg-[#ffd952]', 'bg-[#ffe252]', 'bg-[#ffa852]', 'bg-[#ffba52]', 'bg-[#ffcb52]',
    'bg-[#f4b771]', 'bg-[#f4bd71]', 'bg-[#f4c471]', 'bg-[#f4ca71]', 'bg-[#f4d171]',
    'bg-[#f4d771]', 'bg-[#f4de71]', 'bg-[#f4b371]', 'bg-[#f4c071]', 'bg-[#f4cd71]',
    'bg-[#f9b76c]', 'bg-[#f9be6c]', 'bg-[#f9c56c]', 'bg-[#f9cc6c]', 'bg-[#f9d36c]',
    'bg-[#f9da6c]', 'bg-[#f9e16c]', 'bg-[#f9b36c]', 'bg-[#f9c16c]', 'bg-[#f9cf6c]',
]

const sand = ref<boolean>(false)
const mounted = ref<boolean>(false)
onMounted(() => mounted.value = true)
setTimeout(() => sand.value = true, 300)

setTimeout(() => {
    mounted.value = false
}, 3700)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 4000)
</script>

<style scoped>
.falling-enter-from {
    opacity: 1;
    translate: 0 -120vh
}

.falling-leave-to {
    opacity: 0
}
.falling-enter-active,
.falling-leave-active {
    transition: all ease-in-out 3.4s
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