<template>
    <div class="bg-slate-400 h-dvh p-5 items-center flex flex-col justify-between py-4 select-none">
        <client-only v-if="campaignRunning">
            <cutscenes-cutscene-basis v-if="useStateKeys().keys[storyPoint]!.type === 'cutscene' && storyPointRunning"
                @continue="proceedLevel()"></cutscenes-cutscene-basis>
            <choices-choice-basis v-if="useStateKeys().keys[storyPoint]!.type === 'choice' && storyPointRunning"
                @continue = proceedLevel()
            ></choices-choice-basis>
        </client-only>
        <div v-else class=" w-full flex items-center justify-center gap-[20%] h-[80%]">
            <button class="bg-slate-600 hover:bg-slate-700 active:bg-slate-900 transition-all duration-300 border-black border-4 text-white pixfont p-4 text-4xl 
            shadow-md hover:shadow-lg active:shadow-none hover:-translate-y-1.5 active:translate-y-0.5"
                @click="campaignStore.$reset(); campaignRunning = true">New Save</button>
            <button class="bg-slate-600 hover:bg-slate-700 active:bg-slate-900 transition-all duration-300 border-black border-4 text-white pixfont p-4 text-4xl
            shadow-md hover:shadow-lg active:shadow-none hover:-translate-y-1.5 active:translate-y-0.5"
                @click="campaignStore.loadFromLocalStorage(); campaignRunning = true">Load Save </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const campaignStore = useCampaignSaveStore()

const campaignRunning = ref<boolean>(false)
const storyPointRunning = ref<boolean>(true)

onMounted(() => {
    const stateKeys = useStateKeys()
    stateKeys.loadChoices()
    stateKeys.choicesMade.HumdNoureBattle1 = 'battleHumd'
    stateKeys.saveChoices()
})

const storyPoint = computed((): number => {
    return campaignStore.gameState
})

async function proceedLevel() {
    storyPointRunning.value = false
    campaignStore.gameState++
    campaignStore.saveGame()
    await nextTick()
    storyPointRunning.value = true
}

</script>

<style scoped></style>