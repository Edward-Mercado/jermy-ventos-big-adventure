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
const emit = defineEmits(['continue'])
const stateKeys = useStateKeys()

//@ts-ignore
const linePlaying = ref<boolean>(stateKeys.keys[campaignSaveStore.gameState]?.name ? true : false)

watch(() => campaignSaveStore.gameState, () => {
    console.log(campaignSaveStore.gameState)
})

const currentStateKey = computed(() => {
    return stateKeys.keys[campaignSaveStore.gameState]
})

const currentCutscene = computed(() => {
    if (!currentStateKey.value) return []
    return cutsceneStore.cutscenes[currentStateKey.value.name] ?? []
})

const currentLine = computed(() => {
    return currentCutscene.value[currentLineIndex.value]
})

function skipCutscene() {
    linePlaying.value = false
    currentLineIndex.value = 0
    emit('continue')
}

async function proceedDialogue() {
    const cutscene = currentCutscene.value
    if (!cutscene || cutscene.length === 0) {
        console.warn("Cutscene not loaded yet, ignoring proceed")
        return
    }

    if (currentLineIndex.value >= cutscene.length - 1) {
        linePlaying.value = false
        currentLineIndex.value = 0
        emit('continue')
    } else {
        currentLineIndex.value++
        linePlaying.value = false
        await nextTick()
        linePlaying.value = true
    }
}
</script>

<style scoped></style>