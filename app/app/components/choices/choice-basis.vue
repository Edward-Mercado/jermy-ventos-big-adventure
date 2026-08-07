<template>
    <div v-if="currentStateKey" class="flex justify-between gap-2 h-[80%] items-center">
        <div class="h-[60vh] w-[35vw] border-black border-4 hover:bg-sky-700/70 
        transition-all duration-300 ease-in-out hover:translate-y-[-2vh] active:translate-y-[1vh] shadow-md hover:shadow-lg flex p-2
        flex-col items-center hover:-rotate-3 active:-rotate-6"
        :class="choiceMade === currentStateKey.choiceA ? 'bg-white' : 'bg-slate-600/70'"
        @click="clickSFX(); choiceMade = currentStateKey.choiceA">
         <h3 class="pixfont text-[2rem]"
         :class="choiceMade === currentStateKey.choiceA ? 'text-slate-900' : 'text-white'">{{ currentStateKey.choiceA.desc }}</h3>
         <div class="max-h-[80%] max-w-full flex items-center">
            <img :src="currentStateKey.choiceA.img" :alt="currentStateKey.choiceA.desc"
            class="max-h-full max-w-full">
         </div>
        </div>
        <div class="pixfont text-black text-[1.5rem] lg:text-[2rem] text-center w-[20vw]">
        {{ currentStateKey.question }}
        </div>
        <div class="h-[60vh] w-[35vw] border-black border-4 hover:bg-sky-700/70 
        transition-all duration-300 ease-in-out hover:translate-y-[-2vh] active:translate-y-[1vh] shadow-md hover:shadow-lg flex p-2
        flex-col items-center hover:rotate-3 active:rotate-6"
        :class="choiceMade === currentStateKey.choiceB ? 'bg-white' : 'bg-slate-600/70'"
        @click="clickSFX(); choiceMade = currentStateKey.choiceB">
         <h3 class="pixfont text-[2rem]"
         :class="choiceMade === currentStateKey.choiceB ? 'text-slate-900' : 'text-white'">{{ currentStateKey.choiceB.desc }}</h3>
         <div class="max-h-[80%] max-w-full flex items-center">
            <img :src="currentStateKey.choiceB.img" :alt="currentStateKey.choiceB.desc"
         class="max-h-full max-w-full">
         </div>
        </div>
    </div>
    <button class="bg-slate-600/70 w-[90vw] h-[10%] fixed bottom-5 left-[5vw] border-black border-4 hover:bg-slate-800 active:bg-slate-950 shadow-md hover:shadow-lg 
    active:shadow-none transition-all duration-300 ease-in-out hover:translate-y-[-0.4vw] active:translate-y-[0.2vw] pixfont font-bold text-[3rem]"
    @click="clickSFX(); confirmChoice()"> {{ buttonText }} </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['continue'])
const campaignSaveStore = useCampaignSaveStore()
const choicesStore = useChoicesStore()
const stateKeys = useStateKeys()

type ChoiceOption = { img: string; desc: string; func: () => void }

const choiceMade = ref<ChoiceOption | null>(null)
const buttonText = ref<string>("CONFIRM CHOICE")

watch(() => choiceMade.value, () => {
    buttonText.value = "CONFIRM CHOICE"
})

const currentStateKey = computed(() => {
    const key = stateKeys.keys[campaignSaveStore.gameState]?.name
    if (!key) return null

    console.log(useChoicesStore().$state)
    return choicesStore.$state[key as keyof typeof choicesStore.$state] ?? null
})

function confirmChoice() {
    if (!choiceMade.value) {
        buttonText.value = "PICK AN OPTION BEFORE PROCEEDING"
        return
    }
    choiceMade.value.func()
    emit('continue')
}
</script>

<style scoped>
</style>