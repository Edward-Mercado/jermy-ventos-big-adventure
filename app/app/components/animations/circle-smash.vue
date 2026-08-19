<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div class="w-screen h-screen absolute bottom-0 bg-black/50" v-if="mounted">
                
            </div>
        </transition>
        <transition name="circle">
            <div v-if="circleActive" class="w-[40vw] right-[5vw] fixed rounded-full z-22 aspect-square" :class="color"></div>
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
const circleActive = ref<boolean>(false)
onMounted(() => mounted.value = true)

const colors: string[] = ["bg-red-500", "bg-yellow-500", 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-white']
const color = colors[Math.floor(Math.random() * colors.length)]


setTimeout(() => circleActive.value = true, 500)
setTimeout(() => {
    mounted.value = false
    circleActive.value = true
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

@keyframes circleSmash {
    0% { scale: 0; opacity: 0;}
    70% { scale: 1.3; opacity: 1; }
    85% { scale: 0.95; opacity: 1; }
    85% { scale: 1.02; opacity: 1; }
    100% { scale: 1; opacity: 1;}
}

.circle-enter-active {
    animation: circleSmash ease-in-out 0.3s
}

.circle-leave-active {
    animation: circleSmash ease-in-out 0.3s reverse
}

.circle-enter-from,
.circle-leave-to {
    opacity: 0;
    scale: 0
}
</style>