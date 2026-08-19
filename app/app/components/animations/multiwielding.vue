<template>
    <div class="fixed w-screen h-screen z-20 top-0" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
    <transition name="black-bg">
        <div class="w-screen h-screen fixed bottom-0 bg-black/50 overflow-y-hidden" v-if="mounted">
            <img v-if="doneByEnemy" src="/images/noure-multihit.png" alt="noure multihit" class="h-[80%] top-[10%] absolute">
            <img v-if="!doneByEnemy" src="/images/joey-multihit.png" alt="joey multihit" class="h-[80%] top-[10%] absolute">
            <img v-if="!doneByEnemy && shirt" :src="shirt.img" alt="shirt" class="w-[40vw] top-[65%] absolute left-[3%]">
        </div>
    </transition>
    <transition name="arm">
        <img v-if="armIndex === 1 && armVisible" src="/images/multihit-arm.png" alt="Multihit Arm"
        class="fixed left-[40%] h-[60%] rotate-200 bottom-[10vh]">
    </transition>
    <transition name="arm">
        <img v-if="armIndex === 2 && armVisible" src="/images/multihit-arm.png" alt="Multihit Arm"
        class="fixed left-[40%] h-[60%] rotate-200 bottom-[10vh]">
    </transition>
    <transition name="arm">
        <img v-if="armIndex === 3 && armVisible" src="/images/multihit-arm.png" alt="Multihit Arm"
        class="fixed left-[40%] h-[60%] rotate-200 bottom-[10vh]">
    </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const shirt = computed(() => {
    return useCampaignSaveStore().items.find((i:storeItem) => i.name.includes("the Shirt"))
})

const armIndex = ref<number>(0)
const mounted = ref<boolean>(false)
const armVisible = ref<boolean>(false)
onMounted(() => mounted.value = true)

setTimeout(() => {
    armIndex.value++
    armVisible.value = true
}, 300)

setTimeout(() => {
    armVisible.value = false
}, 1000)

setTimeout(() => {
    armIndex.value++
    armVisible.value = true
}, 1300)

setTimeout(() => {
    armVisible.value = false
}, 2000)

setTimeout(() => {
    armIndex.value++
    armVisible.value = true
}, 2300)

setTimeout(() => {
    mounted.value = false
    armVisible.value =false
}, 2600)

setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 2900)

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

.arm-enter-from {
    opacity: 0;
    rotate: 90deg;
    bottom: 39vh;
    right: 10vw;
}

.arm-enter-to,
.arm-leave-from,
.arm-leave-to {
    rotate: 200deg;
    bottom: 0vh;
    right: 1vw;
}

.arm-leave-to {
    opacity: 0;
}

.arm-enter-active,
.arm-leave-active {
    transition: all 300ms ease-in-out;
}

.arm-enter-active, .arm-leave-active {
    transition: all 300ms ease-in-out
}
</style>