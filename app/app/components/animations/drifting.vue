<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? '' : 'scale-x-[-1]'">
        <transition name="black-bg">
            <div class="w-screen h-screen fixed bottom-0 bg-black/50" v-if="mounted">
                
            </div>
        </transition>
        <transition name="drifting">
            <img v-if="yootoozActive" src="/images/rtgame-yootooz.png" alt="rt game yootooz" class="h-[80vh] top-[10vh] fixed left-[-50vw]">
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
const yootoozActive = ref<boolean>(false)
onMounted(() => mounted.value = true)
setTimeout(() => {
    yootoozActive.value = true
}, 500)

setTimeout(() => {
    mounted.value = false
}, 2000)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 2300)
</script>

<style scoped>
.drifting-enter-from {
    transform: translateX(200vw) scaleX(-1);
}
.drifting-enter-to {
    transform: translateX(0) scaleX(-1);
}
.drifting-enter-active {
    transition: transform 1.3s ease-in;
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