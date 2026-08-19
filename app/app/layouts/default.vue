<template>
    <div class="h-screen w-full">
        <div
            class="sticky flex items-center px-2 justify-between h-[8vh] bg-slate-600/70 shadow-md border-b-4 border-b-slate-900">
            <NuxtLink to="/"
                class="pixfont text-2xl text-white hover:font-bold transition-all duration-300 ease-in-out hover:text-sky-100 hover:border-b-3 hover:border-b-sky-100 active:text-sky-300 active:border-b-sky-300">
                JERMYVENTO's BIG ADVENTURE </NuxtLink>
            <div class="flex items-center justify-center gap-2 h-full">
                <a href="https://github.com/Edward-Mercado/joey-vento-game"
                    class="h-[50%] bg-slate-600/40 pixfont shadow-lg hover:shadow-xl select-none gap-2 px-2
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-sky-600/40 active:bg-sky-600 flex items-center justify-center">
                    <img src="https://cdn.reicon.dev/logos/github/original.svg" alt="Github" width="20" height="20" />
                    Github Repo
                </a>
                <button @mouseover="resetHovering=true" @mouseleave="resetHovering=false" @click="resetCampaign()"
                    class="px-2 h-[50%] bg-slate-600/40 pixfont shadow-lg hover:shadow-xl select-none
                active:shadow-xs transition-all duration-300 ease-in-out hover:bg-red-600/40 active:bg-red-700 flex items-center justify-center">
                    Reset Campaign
                </button>
                <button @mouseover="resetHovering=true" @mouseleave="resetHovering=false" @click="resetAll()"
                    class="px-2 h-[50%] bg-slate-600/40 pixfont shadow-lg hover:shadow-xl select-none
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-red-600/40 active:bg-red-700 flex items-center justify-center">
                    Reset Endless
                </button>
                <button @mouseover="resetHovering=true" @mouseleave="resetHovering=false" @click="resetAll()"
                    class="px-2 h-[50%] bg-slate-600/40 pixfont shadow-lg hover:shadow-xl select-none
    active:shadow-xs transition-all duration-300 ease-in-out hover:bg-red-600/40 active:bg-red-700 flex items-center justify-center">
                    Reset All
                </button>
                <transition name="fade">
                    <div v-if="resetHovering" class="absolute right-[5%] w-[40%] h-[60%] bottom-[-40%] shadow-md hover:shadow-lg bg-slate-700/60 rounded-full pixfont text-white flex items-center justify-center gap-2">
                        <AlertCircle :size="24" /> Note: All resets are permanent.
                    </div>
                </transition>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { AlertCircle } from 'reicon-vue';

const campaignStore = useCampaignSaveStore()
const endlessStore = useEndlessStore()
const stateKeys = useStateKeys()
const resetHovering = ref<boolean>(false)

function resetCampaign() {
    campaignStore.$reset()
    campaignStore.saveGame()
    stateKeys.$reset()
    stateKeys.saveChoices()
    return navigateTo("/")
}

function resetEndless() {
    endlessStore.$reset()
    endlessStore.$reset()
    endlessStore.saveGame()
    return navigateTo("/")
}

function resetAll() {
    campaignStore.$reset()
    campaignStore.saveGame()
    stateKeys.$reset()
    stateKeys.saveChoices()
    endlessStore.$reset()
    endlessStore.$reset()
    endlessStore.saveGame()
    return navigateTo("/")
}
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
    transition: opacity 0.6s
}
</style>