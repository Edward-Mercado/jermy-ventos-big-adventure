<template>
    <div class="bg-slate-400 h-dvh p-5 items-center flex flex-col justify-between py-4 select-none">
        <client-only v-if="campaignRunning">
            <cutscenes-cutscene-basis
                v-if="currentKeyType === 'cutscene' && storyPointRunning"
                @continue="proceedLevel()"
            ></cutscenes-cutscene-basis>
            <choices-choice-basis
                v-if="currentKeyType === 'choice' && storyPointRunning"
                @continue="proceedLevel()"
            ></choices-choice-basis>
            <ending-end-basis
                v-if="currentKeyType === 'end'"
                @reset-save="resetCampaign()"
            ></ending-end-basis>
        </client-only>
        <div v-else class="w-full flex items-center justify-center gap-[20%] h-[80%]">
            <button class="bg-slate-600 hover:bg-slate-700 active:bg-slate-900 transition-all duration-300 border-black border-4 text-white pixfont p-4 text-4xl 
            shadow-md hover:shadow-lg active:shadow-none hover:-translate-y-1.5 active:translate-y-0.5"
                @click="clickSFX(); campaignStore.$reset(); campaignRunning = true">New Save</button>
            <button class="bg-slate-600 hover:bg-slate-700 active:bg-slate-900 transition-all duration-300 border-black border-4 text-white pixfont p-4 text-4xl
            shadow-md hover:shadow-lg active:shadow-none hover:-translate-y-1.5 active:translate-y-0.5"
                @click="clickSFX(); campaignStore.loadFromLocalStorage(); campaignRunning = true">Load Save</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const campaignStore = useCampaignSaveStore()
const stateKeys = useStateKeys()

const campaignRunning = ref<boolean>(false)
const storyPointRunning = ref<boolean>(true)

function resetCampaign() {
    storyPointRunning.value = false
    campaignStore.$reset()
    campaignStore.saveGame()
    stateKeys.$reset()
    stateKeys.saveChoices()
    return navigateTo("/")
}

onMounted(() => {
    stateKeys.loadChoices()
    stateKeys.choicesMade.HumdNoureBattle1 = 'battleHumd'
    stateKeys.saveChoices()
})

const storyPoint = computed((): number => {
    return campaignStore.gameState
})

// Guarded lookup - avoids the '!' non-null assertion throwing if
// gameState ever points past the end of the keys array
const currentKeyType = computed(() => {
    return stateKeys.keys[storyPoint.value]?.type ?? null
})

async function proceedLevel() {
    storyPointRunning.value = false
    campaignStore.gameState++
    campaignStore.saveGame()
    await nextTick()
    storyPointRunning.value = true
    console.log(storyPoint.value)
}
</script>

<style scoped></style>