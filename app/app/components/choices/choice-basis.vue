<template>
    <div class="flex justify-between gap-2 h-[80%] items-center">
        <div class=" h-[60vh] w-[35vw] border-black border-4 hover:bg-sky-700/70 
        transition-all duration-300 ease-in-out hover:translate-y-[-2vh] active:translate-y-[1vh] shadow-md hover:shadow-lg flex p-2
        flex-col items-center" :class="choiceMade === currentStateKey.choiceA.desc ? 'bg-white' : 'bg-slate-600/70'"
        @click="choiceMade = currentStateKey.choiceA.desc">
         <h3 class="pixfont text-[2rem]"
         :class="choiceMade === currentStateKey.choiceA.desc ? 'text-slate-900' : 'text-white'">{{currentStateKey.choiceA.desc }}</h3>
         <img :src="currentStateKey.choiceA.img" :alt="currentStateKey.choiceA.desc"
         class="max-h-[80%] max-w-full"
         >
        </div>
        <div class="pixfont text-black text-[1.5rem] lg:text-[2rem] text-center w-[20vw]">
        {{ currentStateKey.question }}
        </div>
        <div class=" h-[60vh] w-[35vw] border-black border-4 hover:bg-sky-700/70 
        transition-all duration-300 ease-in-out hover:translate-y-[-2vh] active:translate-y-[1vh] shadow-md hover:shadow-lg flex p-2
        flex-col items-center" :class="choiceMade === currentStateKey.choiceB.desc ? 'bg-white' : 'bg-slate-600/70'"
        @click="choiceMade = currentStateKey.choiceB.desc">
         <h3 class="pixfont text-[2rem]"
         :class="choiceMade === currentStateKey.choiceB.desc ? 'text-slate-900' : 'text-white'">{{currentStateKey.choiceB.desc }}</h3>
         <img :src="currentStateKey.choiceB.img" :alt="currentStateKey.choiceA.desc"
         class="max-h-[80%] max-w-full"
         >
        </div>
    </div>
    <button class="bg-slate-600/70 w-[90vw] h-[10%] fixed bottom-5 left-[5vw] border-black border-4 hover:bg-slate-800 active:bg-slate-950 shadow-md hover:shadow-lg 
    active:shadow-none transition-all duration-300 ease-in-out hover:translate-y-[-0.4vw] active:translate-y-[0.2vw] pixfont font-bold text-[3rem]"> CONFIRM CHOICE </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['continue'])
const campaignSaveStore = useCampaignSaveStore()
const choicesStore = useChoicesStore()
const stateKeys = useStateKeys()

const choiceMade = ref<string>("")
const currentStateKey = computed(() => {
    //@ts-ignore
    return choicesStore[stateKeys.keys[campaignSaveStore.gameState]!.name]
})

console.log(currentStateKey.value)
</script>

<style scoped>

</style>