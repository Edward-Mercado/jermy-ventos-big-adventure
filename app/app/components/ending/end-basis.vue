<template>
    <div class="flex flex-col gap-2 justify-between h-[85%]">
        <h1 class="text-[4rem] text-black pixfont text-center font-extrabold shaky mt-12 select-none">YOU WIN!</h1>
        <button @click="$emit('reset-save')" class="text-4xl pixfont bg-slate-900 hover:bg-slate-800 active:bg-slate-600 transition-all duration-300 ease-in-out p-8 flex items-center justify-center border-2 border-slate-200 relative h-[30%] mt-20 z-1 select-none"> RESET CAMPAIGN </button>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits("reset-save")
</script>

<style scoped>
@keyframes shaky {

    0%,
    100% {
        transform: rotate(0deg)
    }

    16% {
        transform: rotate(5deg);
        color: rgb(8, 48, 88)
    }

    33% {
        scale: 0.9;
        transform: rotate(-5deg);
        color: black
    }

    50% {
        transform: rotate(5deg);
        color: rgb(8, 48, 88)
    }

    67% {
        scale: 1.1;
        transform: rotate(-5deg);
        color: black
    }
}

.shaky {
    animation: shaky 5s ease-in-out infinite;
    display: inline-block;
}
</style>