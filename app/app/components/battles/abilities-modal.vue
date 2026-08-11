<template>
    <div class="bg-white fixed w-[96vw] h-[80vh] top-[10vh] left-[2vw] flex flex-col gap-2 z-8 rounded-2xl p-2">
        <div class="flex flex-row w-full justify-between items-center">
            <button
                class="pixfont text-black text-left text-2xl transition-colors ease-in-out duration-300 hover:text-red-800 active:text-red-500"
                @click="clickSFX(); $emit('close')">X</button>
            <h4 class="text-2xl pixfont text-black">Abilities</h4>
        </div>
        <div class="flex flex-row justify-between h-full px-1">
            <div
                class="w-[50%] h-full p-2 rounded-sm overflow-y-hidden bg-linear-to-tr from-slate-300 to-slate-200 shadow-lg">
                <p class="text-black text-2xl pixfont">Choose Abilities To Use</p>
                <div class="h-1 rounded-full w-full bg-black mt-2"></div>
                <div class="carousel pt-2 h-full mt-2 w-full">
                    <battles-ability-card></battles-ability-card>
                </div>
            </div>
            <div
                class="w-[45%] h-full p-2 rounded-sm overflow-y-hidden bg-linear-to-tr from-slate-300 to-slate-200 shadow-lg relative">
                <p class="text-black text-2xl pixfont">Selected Abilities</p>
                <div class="h-1 rounded-full w-full bg-black mt-2"></div>
                <div class="carousel pt-2 h-full mt-2 w-full">
                    <battles-selected-ability></battles-selected-ability>
                </div>
                <button class="absolute bottom-2 w-[90%] rounded-lg text-2xl hover:bg-slate-800 active:bg-slate-900 transition-all duration-300 ease-in-out left-[5%] h-[10%] pixfont bg-slate-700 shadow-md hover:shadow-lg active:shadow-none
                hover:-translate-y-1 active:translate-y-0.5" @click="clickSFX();">CONFIRM!</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<style scoped></style>