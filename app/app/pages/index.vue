<template>
    <div class="bg-slate-400 h-dvh p-5 items-center flex flex-col">
        <h1 class="text-[4rem] text-black pixfont text-center font-extrabold shaky mt-12">WELCOME TO JOEY VENTO'S BIG
            ADVENTURE!</h1>
        <div class="w-full flex items-center justify-center gap-2 h-[40%]">
            <transition name="slide-right">
                <NuxtLink to="/campaign" v-if="playClicked"
                    class="text-2xl pixfont bg-slate-900 hover:bg-slate-800 active:bg-slate-600 transition-all duration-300 ease-in-out p-2 flex items-center justify-center border-2 border-slate-200 relative mt-20 h-[50%] px-5">
                    CAMPAIGN
                </NuxtLink>
            </transition>
            <button @click="playClicked = !playClicked"
                class="text-8xl pixfont bg-slate-900 hover:bg-slate-800 active:bg-slate-600 transition-all duration-300 ease-in-out p-8 flex items-center justify-center border-2 border-slate-200 relative h-full mt-20 z-1">
                {{ playClicked ? "DO NOT" : "PLAY" }}
            </button>
            <transition name="slide-left">
                <NuxtLink to="/endless" v-if="playClicked"
                    class="text-2xl pixfont bg-slate-900 hover:bg-slate-800 active:bg-slate-600 transition-all duration-300 ease-in-out p-2 flex items-center justify-center border-2 border-slate-200 relative mt-20 h-[50%] px-5">
                    ENDLESS
                </NuxtLink>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
const playClicked = ref<boolean>(false)
</script>

<style scoped>
@keyframes shaky {

    0%,
    100% {
        transform: rotate(0deg)
    }

    33% {
        transform: rotate(5deg);
        color: rgb(8, 48, 88)
    }

    67% {
        transform: rotate(-5deg);
        color: black
    }
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all ease-in-out 0.3s;
}

.slide-left-enter-from,
.slide-left-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-right-enter-from,
.slide-right-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.slide-left-enter-to,
.slide-left-leave-from,
.slide-right-enter-to,
.slide-right-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.shaky {
    animation: shaky 5s ease-in-out infinite;
    display: inline-block;
}
</style>