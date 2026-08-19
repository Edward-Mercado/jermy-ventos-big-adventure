<template>
    <div class="h-screen w-screen fixed items-center justify-center flex">
        <transition name="black-bg">
            <div class="w-screen h-screen fixed bottom-0 bg-black/50 z-20" v-if="mounted">
                
            </div>
        </transition>
        <transition name="shaky">
            <img v-if="cloudActive" src="/images/fight-cloud.png" alt="fight cloud" class="fixed h-[96vh] top-[2vh] shake-loop z-23">
        </transition>
        <transition name="fade-left">
            <img v-if="fightersOnScreen" src="/images/joey.png" alt="joey" class="h-[50vh] z-21 top-[25vh] shake-loop">
        </transition>
        <transition name="fade-left">
            <img v-if="fightersOnScreen && shirt" :src="shirt.img" alt="shirt" class="h-[50vh] z-21 top-[25vh] shake-loop fixed translate-y-[80%] translate-x-[-25%]">
        </transition>
        <transition name="fade-right">
            <img v-if="fightersOnScreen" :src="enemyURL" alt="enemy" class="h-[50vh] z-21 top-[25vh] shake-loop">
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
const cloudActive = ref<boolean>(false)
const fightersOnScreen = ref<boolean>(false)

const shirt = computed(() => {
    return useCampaignSaveStore().items.find((i:storeItem) => i.name.includes("the Shirt"))
})

onMounted(() => mounted.value = true)

let enemyURL: string = useCurrentBattleStore().currentEnemies[Math.floor(Math.random() * useCurrentBattleStore().currentEnemies.length)]!.img

setTimeout(() => fightersOnScreen.value = true, 400)

setTimeout(() => cloudActive.value = true, 900)

setTimeout(() => fightersOnScreen.value = false, 3600)

setTimeout(() => {
    mounted.value = false
    cloudActive.value = false
}, 3900)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 4200)
</script>

<style scoped>
@keyframes shaky {
    0%, 100% { rotate: 0deg; scale: 1; }
    16% { rotate: 15deg; }
    33% { scale: 0.7; rotate: -15deg; }
    50% { rotate: 15deg; }
    67% { scale: 1.3; rotate: -15deg; }
}

.shake-loop {
    animation: shaky 1s linear infinite;
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

.shaky-enter-from,
.shaky-leave-to {
    opacity: 0;
    scale: 0;
}
.shaky-enter-to,
.shaky-leave-from {
    opacity: 1;
    scale: 1;
}
.shaky-enter-active,
.shaky-leave-active {
    transition: opacity 0.5s ease-in-out, scale 0.5s ease-in-out;
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