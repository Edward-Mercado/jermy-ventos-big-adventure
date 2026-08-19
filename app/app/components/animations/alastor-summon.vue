<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div class="w-screen h-screen absolute bottom-0 bg-black/50 z-20" v-if="mounted">
                
            </div>
        </transition>
        <transition name="summon">
            <img v-if="summoned" src="/images/alastor.png" alt="alastor" class="fixed w-[40vw] top-[5vh] left-[30vw] z-22">
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
const summoned = ref<boolean>(false)

onMounted(() => mounted.value = true)
setTimeout(() => {
    summoned.value = true
}, 400)

setTimeout(() => {
    summoned.value = false
    mounted.value = false
}, 1700)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 2000)
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

@keyframes summon {
    0% { scale: 0; opacity: 0; translate: 0 40vh}
    90% { scale: 1.2; opacity: 1; translate: 0 -2vh }
    100% { scale: 1; opacity: 1; translate: 0}
}

.summon-enter-active {
    animation: summon 0.7s ease-in-out;
}

.summon-leave-active {
    animation: summon 0.7s ease-in-out reverse;
}
</style>