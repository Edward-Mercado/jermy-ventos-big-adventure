<template>
    <div class="w-full h-full text-[3rem] shaky flex items-center justify-center text-center">
        <p class="pixfont text-black mt-[20%] uppercase">{{!selected ? "No more abilities..." : "Select something..."}}</p>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    selected: boolean
}>()
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