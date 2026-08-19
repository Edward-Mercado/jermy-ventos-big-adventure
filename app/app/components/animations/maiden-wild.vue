<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div class="w-screen h-screen fixed bottom-0 bg-black/50 z-20" v-if="mounted">

            </div>
        </transition>
<transition name="spin">
    <div v-if="mounted" class="w-[50vw] fixed left-[25vw] rounded-full aspect-square bg-linear-to-tr from-emerald-500 to-green-300 border-black 
    border-2" :class="Math.random() < 0.5 ? 'rotate-22.5' : 'rotate-67.5'">
        <div class="w-full h-2 bg-black absolute top-1/2 left-0 -translate-y-1/2"></div>
        <div class="w-full h-2 bg-black absolute top-1/2 left-0 -translate-y-1/2 rotate-45"></div>
        <div class="w-full h-2 bg-black absolute top-1/2 left-0 -translate-y-1/2 rotate-90"></div>
        <div class="w-full h-2 bg-black absolute top-1/2 left-0 -translate-y-1/2 rotate-135"></div>

        <div class="h-[15%] aspect-square rounded-full absolute top-[62%] left-[80%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <img src="/images/maiden-o-luck.webp" alt="maiden o luck" class="h-full w-full object-cover">
        </div>
        <div class="h-[15%] aspect-square rounded-full absolute top-[80%] left-[62%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <img src="/images/joey.png" alt="joey" class="h-full w-full object-cover">
        </div>
        <div class="h-[15%] aspect-square rounded-full absolute top-[80%] left-[38%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <img src="/images/maiden-o-luck.webp" alt="maiden o luck" class="h-full w-full object-cover">
        </div>
        <div class="h-[15%] aspect-square rounded-full absolute top-[62%] left-[20%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <img src="/images/joey.png" alt="joey" class="h-full w-full object-cover">
        </div>
        <div class="h-[15%] aspect-square rounded-full absolute top-[38%] left-[20%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <img src="/images/maiden-o-luck.webp" alt="maiden o luck" class="h-full w-full object-cover">
        </div>
        <div class="h-[15%] aspect-square rounded-full absolute top-[20%] left-[38%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <img src="/images/joey.png" alt="joey" class="h-full w-full object-cover">
        </div>
        <div class="h-[15%] aspect-square rounded-full absolute top-[20%] left-[62%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <img src="/images/maiden-o-luck.webp" alt="maiden o luck" class="h-full w-full object-cover">
        </div>
        <div class="h-[15%] aspect-square rounded-full absolute top-[38%] left-[80%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <img src="/images/joey.png" alt="joey" class="h-full w-full object-cover">
        </div>
    </div>
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
    mounted.value = false
}, 3700)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 4000)
console.log("hi")
</script>

<style scoped>
.spin-enter-active {
    transition: all ease-in-out 3.2s
}

.spin-leave-active {
    transition: all ease-in-out .3s
}

.spin-enter-from {
    rotate: 0deg;
    opacity: 0
}

.spin-enter-to {
    rotate: 9060deg;
    opacity: 1
}

.spin-leave-from {
    opacity: 0;
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