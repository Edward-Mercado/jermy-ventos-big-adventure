<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" >
        <transition name="black-bg">
            <div class="w-full h-full absolute bottom-0 bg-black/50" v-if="mounted"></div>
        </transition>
        <transition name="evil-beam">
            <div v-if="beamActive" class="fixed h-[40vh] bg-linear-to-r to-red-950 from-red-500 shadow-lg shadow-red-900/50 rounded-l-full"></div>
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
const beamActive = ref<boolean>(false)

onMounted(() => mounted.value = true)

setTimeout(() => {
    beamActive.value = true
}, 300)

setTimeout(() => {
    beamActive.value = false
    mounted.value = false
}, 1300)

setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 1600)
</script>

<style scoped>
.evil-beam-enter-from,
.evil-beam-leave-to {
    width: 0vw;
    left: 100vw;
}

.evil-beam-enter-to,
.evil-beam-leave-from {
    width: 115vw;
    left: 20vw;
}

.evil-beam-enter-active,
.evil-beam-leave-active {
    transition: all 500ms ease;
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