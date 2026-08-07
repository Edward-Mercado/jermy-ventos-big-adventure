<template>
    <div class="h-screen w-full">
        <div class="sticky flex items-center px-2 justify-between h-[8vh] bg-slate-600/70 shadow-md border-b-4 border-b-slate-900">
            <NuxtLink to="/" class="pixfont text-2xl text-white hover:font-bold transition-all duration-300 ease-in-out hover:text-sky-100 hover:border-b-3 hover:border-b-sky-100 active:text-sky-300 active:border-b-sky-300"> JERMYVENTO's BIG ADVENTURE </NuxtLink>
            <div class="flex items-center justify-center gap-2 h-full">
                <a href="https://github.com/Edward-Mercado/joey-vento-game"
                    class="px-2 h-[50%] bg-slate-600/40 pixfont shadow-lg hover:shadow-xl select-none
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-sky-600/40 active:bg-sky-600 flex items-center justify-center">
                    Github Repo
                </a>
                <button @click="resetData()"
                 class="px-2 h-[50%] bg-slate-600/40 pixfont shadow-lg hover:shadow-xl select-none
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-red-600/40 active:bg-red-700 flex items-center justify-center">
                Reset Save Data <span class="text-sm italic"> (permanent)</span> 
                </button>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const campaignStore = useCampaignSaveStore()
const endlessStore = useEndlessStore()

function resetData() {
    campaignStore.$reset()
    endlessStore.$reset()
    campaignStore.saveGame()
    return navigateTo("/")
}
</script>

<style scoped></style>