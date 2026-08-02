<template>
    <div class="h-screen w-full">
        <div class="sticky flex items-center px-2 justify-between h-[8vh] bg-slate-600/70">
            <NuxtLink to="/" class="pixfont text-2xl text-white hover:font-bold transition-all duration-300 ease-in-out hover:text-sky-100"> JOEY VENTO's BIG ADVENTURE </NuxtLink>
            <div class="flex items-center justify-center gap-2 h-full">
                <a href="https://github.com/Edward-Mercado/joey-vento-game"
                    class="px-2 h-[50%] bg-slate-600/40 pixfont shadow-lg hover:shadow-xl 
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-slate-600/80 active:bg-slate-400 flex items-center justify-center">
                    Github Repo
                </a>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>