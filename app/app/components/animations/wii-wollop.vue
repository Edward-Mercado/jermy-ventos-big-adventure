<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div class="w-full h-full absolute bottom-0 bg-[#334BFF]/30 border-[1.5vh] border-[#334BFF]" v-if="mounted">
                
            </div>
        </transition>
        <transition v-for="i in 70" name="game">
            <img v-if="gamesShown" :src="getRandomImage()" alt="img" :style="{
                transitionDuration: `${Math.floor(Math.random()*60)*50}ms`,
                top: `${Math.random()*140 - 20}vh`}"
                class="w-[5vw] -rotate-90 right-[-60vw] fixed border-2 border-white"
            >
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
const gamesShown = ref<boolean>(false)

const images = ['/images/wii-callofduty.jpeg','/images/wii-fling-smash.png',
'/images/wii-mario-kart.jpeg','/images/wii-wiisports.png']

function getRandomImage():string {
    return (images[Math.floor(Math.random() * images.length)] as string)
}

onMounted(() => mounted.value = true)

setTimeout(() => {
    gamesShown.value = true
}, 500)

setTimeout(() => {
    mounted.value = false
    gamesShown.value = false
}, 3500)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 3800)
</script>

<style scoped>

.game-enter-from {
    translate: -180vw
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