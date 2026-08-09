<template>
    <div class="flex flex-col h-[88vh] w-full justify-between overflow-x-none">
        <h2 class="w-full text-center pixfont text-4xl underline shaky text-black">TIME TO BATTLE!</h2>
        <main class="h-[85%] border-2 w-full flex justify-between">
            <battles-joey-container></battles-joey-container>
            <div class="relative w-[60%] h-full border-2 flex items-center justify-between flex-wrap"> <!-- ENEMY CONTAINER-->
                <battles-enemy-container v-for="enemy, index in enemies" :amount="enemies.length"
                :enemy="enemy" :index="index" :action="'Check'" @action=""
                >

                </battles-enemy-container>
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

const enemies = [{
    name: 'Edward',
    maxHealth: 100,
    currentHealth: 20,
    desc: 'This is a sample description.',
    level: 1,
    title: '',
    attack: 10,
    defense: 0,
    maxMana: 10,
    currentMana: 5,
},{
    name: 'Glorbus 2',
    maxHealth: 100,
    currentHealth: 20,
    desc: 'This is a sample description.',
    level: 1,
    title: '',
    attack: 10,
    defense: 0,
    maxMana: 10,
    currentMana: 5,
},{
    name: 'Glorbus 3',
    maxHealth: 100,
    currentHealth: 20,
    desc: 'This is a sample description.',
    level: 1,
    title: '',
    attack: 10,
    defense: 0,
    maxMana: 10,
    currentMana: 5,
}]

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