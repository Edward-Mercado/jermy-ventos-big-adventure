<template>
    <cutscenes-additional-content
    v-if="linePlaying && currentLine"
    :current-line="currentLine">
    </cutscenes-additional-content>
    <cutscenes-dialogue-box
        :current-line="currentLine"
        v-if="linePlaying && currentLine"
        @proceed="proceedDialogue()"
        @skip="skipCutscene()"
    ></cutscenes-dialogue-box>
</template>

<script setup lang="ts">
const campaignSaveStore = useCampaignSaveStore()
const cutsceneStore = useCutsceneStore()
const currentLineIndex = ref<number>(0)

//@ts-ignore
const linePlaying = ref<boolean>(cutsceneStore.cutscenes[stateKeys[campaignSaveStore.gameState].name][0] ? true : false)

watch(() => campaignSaveStore.gameState, () => {
    console.log(campaignSaveStore.gameState)
})

const currentStateKey = computed(() => {
    return stateKeys[campaignSaveStore.gameState]
})

const currentCutscene = computed(() => {
    if (!currentStateKey.value) return []
    return cutsceneStore.cutscenes[currentStateKey.value.name] ?? []
})

const currentLine = computed(() => {
    return currentCutscene.value[currentLineIndex.value]
})

function skipCutscene() {
    campaignSaveStore.gameState++
    linePlaying.value = false
    currentLineIndex.value = 0
    campaignSaveStore.saveGame()
}

async function proceedDialogue() {
    const cutscene = currentCutscene.value
    if (!cutscene || cutscene.length === 0) {
        console.warn("Cutscene not loaded yet, ignoring proceed")
        return
    }

    if (currentLineIndex.value >= cutscene.length - 1) {
        campaignSaveStore.gameState++
        linePlaying.value = false
        currentLineIndex.value = 0
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