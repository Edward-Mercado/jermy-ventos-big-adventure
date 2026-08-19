<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div class="w-screen h-screen fixed bottom-0 bg-black/50" v-if="mounted">
                
            </div>
        </transition>
        <transition name="fade-up">
            <img v-if="doneByEnemy && slayerVisible" src="/images/edwardevil.png" alt="eviledward" class="fixed w-[20vw] left-[40vw] rounded-2xl">
        </transition>
        <transition name="fade-up">
            <div>
                <img v-if="!doneByEnemy && slayerVisible" src="/images/joey.png" alt="joey" class="fixed w-[20vw] left-[40vw] rounded-2xl">
                <img v-if="!doneByEnemy && slayerVisible && shirt?.name" :src="shirt.img" alt="shirt" class="fixed w-[20vw] left-[40vw] top-[60%] rounded-2xl translate-y-[70%]">
            </div>
        </transition>
        <div class='fixed h-screen w-screen flex items-center ease-in-out'>
            <transition name="fade-enlarge" v-for="i in 5">
                <div v-if="circleCount >= i" class="w-[200vw] aspect-square left-[-50vw] rounded-full border-20 border-red-500 fixed"></div>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const shirt = computed(() => {
    return useCampaignSaveStore().items.find((i:storeItem) => i.name.toLowerCase().includes("shirt"))
})

const mounted = ref<boolean>(false)
const slayerVisible = ref<boolean>(false)

const circleCount = ref<number>(0)
let circleInterval:number = 0

onMounted(() => mounted.value = true)

setTimeout(() => {
    slayerVisible.value = true
    circleInterval = setInterval(() => circleCount.value++, 400)
}, 300)

setTimeout(() => {slayerVisible.value = false, clearInterval(circleInterval)}, 2200)

setTimeout(() => {
    mounted.value = false
}, 2900)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 3200)
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