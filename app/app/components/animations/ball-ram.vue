<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="ball-ram">
            <img v-if="mounted" src="/images/superblockyball.png" alt="Super Blocky Ball"
            class="aspect-square absolute">
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()
const mounted = ref<boolean>(false)
onMounted(() => mounted.value = true)

setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 700)
</script>

<style scoped>
@keyframes ball-roll {
    0% {
        rotate: 0deg;
        left: -100vw;
    }
    100% {
        rotate: -720deg;
        left: 600vw;
    }
}

.ball-ram-enter-active {
    animation: ball-roll 700ms linear;
}
</style>