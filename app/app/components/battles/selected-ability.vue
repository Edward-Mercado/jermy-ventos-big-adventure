<template>
    <div class="h-24 w-full rounded-lg bg-slate-700 py-1 px-2 gap-5 flex flex-row items-center justify-between">
        <button class="rounded-lg h-[95%] hover:translate-x-2 active:-translate-x-1 aspect-square bg-white hover:bg-red-200 active:bg-red-400 ease-in-out transition-all
        duration-300 pixfont text-slate-900 text-3xl shadow-md hover:shadow-lg active:shadow-none"
            @click="clickSFX();">DONT</button>
        <div class="flex flex-col w-[50%] items-center justify-center">
            <div class="w-full flex flex-row items-center gap-px text-center justify-center">
                <h5 class="pixfont text-sky-200 uppercase xl:text-2xl text-lg">Kortnee⋅</h5>
                <p class="dialogue-font text-white italic uppercase xl:text-xl text-md">40 Mana</p>
            </div>
            <p class="pixfont text-[1rem] text-white w-full text-center">Moon Princess Halation</p>
        </div>
        <div class="h-[90%] aspect-square bg-sky-200 rounded-full overflow-hidden flex items-center justify-center">
            <img src="/images/kortnee.png" alt="" class="bottom-0 min-h-full w-auto">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>