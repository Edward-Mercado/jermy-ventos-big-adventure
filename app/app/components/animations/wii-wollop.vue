<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        <transition name="black-bg">
            <div class="w-full h-full absolute bottom-0 bg-[#334BFF]/90" v-if="mounted">
                
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
</style>