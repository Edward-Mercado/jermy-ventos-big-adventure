<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center">
        <transition name="black-bg">
            <div class="w-full h-full absolute bottom-0 bg-black/90" v-if="mounted">
                
            </div>
        </transition>
        <div class='fixed h-screen w-screen flex items-center ease-in-out'>
            <transition name="fade-enlarge" v-for="i in 5">
                <div v-if="circleCount >= i" class="w-[200vw] aspect-square left-[-50vw] rounded-full border-20 border-amber-300 fixed"></div>
            </transition>
            <transition name="fade-enlarge">
                <img v-if="clockMounted" src="/images/clock.gif" alt="clock" class="fixed w-[50vw] left-[25vw] rounded-full aspect-square object-cover border-yellow-500 border-4"></img>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)

const circleCount = ref<number>(0)
const clockMounted = ref<boolean>(false)

let circleInterval:number = 0

onMounted(() => mounted.value = true)

setTimeout(() => clockMounted.value = true, 300)

setTimeout(() => {    
    circleInterval = setInterval(() => circleCount.value++, 400)
}, 600)

setTimeout(() => {clearInterval(circleInterval)}, 2200)

setTimeout(() => {
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

@keyframes fade-enlarge {
    0% {
        scale: 0.1;
        opacity: 1;
    }
    100% {
        scale: 1;
        opacity: 0.5;
    }
}

.fade-enlarge-enter-active {
    animation: fade-enlarge ease-in-out 800ms;
}
</style>