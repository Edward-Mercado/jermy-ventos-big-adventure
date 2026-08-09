<template>
    <div class="flex flex-col h-[88vh] w-full justify-between overflow-x-none">
        <h2 class="w-full text-center pixfont text-4xl underline shaky text-black">TIME TO BATTLE!</h2>
        <main class="h-[91%] border-2 w-full flex justify-between">
            <div class="border-2 w-[30%] p-2 flex flex-col justify-beween h-full gap-10"> <!-- JOEY CONTAINER-->
                <div class="border-2 h-[30%] bg-slate-600/70 border-black shadow-lg p-2 gap-2 flex flex-col justify-between"> 
                    <h4 class="pixfont text-2xl -mb-2">Joey</h4> 
                    <battles-health-bar :currentHP="1" :maxHP="100"></battles-health-bar>
                    <button class="bg-slate-900  w-full h-[30%] p-2 pixfont border-2 hover:bg-slate-600 
                    active:bg-slate-200 active:text-black transition-all duration-300 ease-in-out shadow-md 
                    hover:shadow-xl active:shadow-none hover:-translate-y-1 active:translate-y-0.5">Check</button>
                </div>
                <img src="/images/joey.png" alt="Joey" class="border-b-6 border-black rounded-2xl">
            </div>
            <div> <!-- ENEMY CONTAINER-->

            </div>
        </main>
        <button class="px-2 h-[5%] bg-slate-700 pixfont shadow-lg hover:shadow-xl w-[20%] my-2 border-black border-4 text-lg select-none
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-slate-800 active:bg-slate-900 flex items-center justify-center " @click="$emit('proceed')">SKIP</button>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['proceed'])
const stateKeys = useStateKeys()
const campaignSaveStore = useCampaignSaveStore()
const battleStore = useBattleStore()

const currentStateKey = computed(() => {
    //@ts-ignore
    return battleStore[stateKeys.keys[campaignSaveStore.gameState]!.name as keyof battleStore]
})

console.log(currentStateKey.value)

</script>

<style scoped>
@keyframes shaky {

    0% {
        transform: translateX(2vw)
    }

    25% {
        transform: rotate(-2deg) translateX(-2vw);
        color: rgb(8, 48, 88)
    }

    50% {
        transform: rotate(2deg) translateX(2vw);
        color: black
    }

    75% {
        transform: rotate(-2deg) translateX(-2vw);
        color: rgb(8, 48, 88)
    }

    100% {
        transform: translateX(2vw); 
        color: black
    }
}

.shaky {
    animation: shaky 5s ease-in-out infinite;
    display: inline-block;
}
</style>