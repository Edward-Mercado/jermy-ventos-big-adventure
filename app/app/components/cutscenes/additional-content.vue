<template>
    <transition name="fade">
        <img :src="prop.currentLine.backgroundURL" class="absolute bg-white h-[80%] w-[90%] top-[10%] border-4 border-slate-800 shadow-xl">
        
        </img>
    </transition>
</template>

<script setup lang="ts">
const prop = defineProps<{
    currentLine: DialogueLine
}>()
const fadeSpeed = ref<number>(prop.currentLine.speed * 2)
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1
}
.fade-enter-active,
.fade-leave-active {
    transition: all ease-in-out v-bind(fadeSpeed)
}
</style>