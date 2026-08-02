<template>
    <cutscenes-dialogue-box :current-line="currentLine" v-if="linePlaying"
        @proceed="proceedDialogue()"
        @skip="campaignSaveStore.gameState++"></cutscenes-dialogue-box>
</template>

<script setup lang="ts">
const campaignSaveStore = useCampaignSaveStore()
const cutsceneScore = useCutsceneStore()
const currentCutsceneIndex = ref<string>('opening')
const currentLineIndex = ref<number>(0)
const linePlaying = ref<boolean>(true)

const currentCutscene = computed(() => {
    // @ts-ignore
    return cutsceneScore.cutscenes[currentCutsceneIndex.value]
})

const currentLine = computed(() => {
    return currentCutscene.value[currentLineIndex.value]
})

async function proceedDialogue() {
    const cutscene = currentCutscene.value
    console.log(campaignSaveStore.gameState)
    if (!cutscene || cutscene.length === 0) {
        console.warn("Cutscene not loaded yet, ignoring proceed")
        return
    }

    if (currentLineIndex.value >= cutscene.length - 1) {
        campaignSaveStore.gameState++
        linePlaying.value = false
        campaignSaveStore.saveGame()
    } else {
        currentLineIndex.value++
        linePlaying.value = false
        await nextTick()
        linePlaying.value = true
    }
}
</script>

<style scoped></style>