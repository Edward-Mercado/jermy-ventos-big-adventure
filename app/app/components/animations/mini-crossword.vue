<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center">
        <transition name="fade-up">
            <div class="fixed w-[50vw] flex aspect-square left-[25vw] flex-wrap" v-if="mounted">
                <div class="w-[10vw] aspect-square border-2 border-black bg-black"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-black"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-white"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-white"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-white"></div>

                <div class="w-[10vw] aspect-square border-2 border-black bg-black"></div>
                <div v-for="i in 4" :key="'a'+i" class="w-[10vw] aspect-square border-2 border-black bg-white flex items-center justify-center text-2xl font-bold">
                    <span v-if="numbersActive > i - 1" class="nyt text-black  text-[3.5rem]">{{ phrase![i - 1] }}</span>
                </div>

                <div class="w-[10vw] aspect-square border-2 border-black bg-white"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-white"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-white"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-white"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-white"></div>

                <div v-for="i in 4" :key="'b'+i" class="w-[10vw] aspect-square border-2 border-black bg-white flex items-center justify-center text-2xl font-bold">
                    <span v-if="numbersActive > i + 3" class="nyt text-black text-[3.5rem]">{{ phrase![i + 3] }}</span>
                </div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-black"></div>

                <div class="w-[10vw] aspect-square border-2 border-black bg-white"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-white"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-white"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-black"></div>
                <div class="w-[10vw] aspect-square border-2 border-black bg-black"></div>
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

const numbersActive = ref<number>(0)

const phrases: string[] = ["KILLJOEY", "DEADJOEY", "WEEDKING", "FREEMINI"]
const phrase = phrases[Math.floor(Math.random() * phrases.length)]

let interval = 0

// wait for the fade-up enter (1s) to finish, then start revealing letters
setTimeout(() => {
    interval = setInterval(() => {
        numbersActive.value++
        if (numbersActive.value >= 8) clearInterval(interval)
    }, 200)
}, 1000)

// letters finish revealing at 1000 + 8*200 = 2600ms; hold, then leave
setTimeout(() => mounted.value = false, 3200)

setTimeout(() => {
    useCurrentBattleStore().animReset()
    clearInterval(interval)
}, 4200)
</script>

<style scoped>
.fade-up-enter-from,
.fade-up-leave-to {
    opacity: 0;
    transform: translateY(30vh)
}
.fade-up-enter-to,
.fade-up-leave-from {
    opacity: 1
}
.fade-up-enter-active,
.fade-up-leave-active {
    transition: all 1s ease-in-out
}

@keyframes pop-in {
    from { opacity: 0; transform: scale(0.3); }
    to { opacity: 1; transform: scale(1); }
}
.nyt {
    display: inline-block;
    animation: pop-in 200ms ease-out;
}
</style>