<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div class="w-full h-full absolute bottom-0 bg-black/50" v-if="mounted">
                
            </div>
        </transition>
        <transition name="fade-right">
            <img v-if="itemsMoving" src="/images/question-mark.png" alt="question mark" class="object-cover aspect-square h-[70vh] right-[35vw] fixed">
        </transition>
        <transition name="fade-left">
            <img v-if="itemsMoving" src="/images/bicep.png" alt="bicep" class="object-cover aspect-square h-[70vh] left-[35vw] fixed">
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

console.log(prop.doneByEnemy)

const mounted = ref<boolean>(false)
const itemsMoving = ref<boolean>(false)
onMounted(() => mounted.value = true)

setTimeout(() => itemsMoving.value = true, 500)

setTimeout(() => {
    mounted.value = false
    itemsMoving.value = false
}, 1500)
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

.fade-right-enter-from,
.fade-right-leave-to {
    opacity: 0;
    transform: translateX(25vw) rotate(45deg) translateY(10vh);
}
.fade-left-enter-from,
.fade-left-leave-to {
    opacity: 0;
    transform: translateX(-25vw) rotate(-45deg) translateY(10vh);
}

.fade-right-enter-to,
.fade-right-leave-from,
.fade-left-enter-to,
.fade-left-leave-from {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
}

.fade-right-enter-active,
.fade-right-leave-active,
.fade-left-enter-active,
.fade-left-leave-active {
    transition: all 500ms ease-in-out;
}
</style>