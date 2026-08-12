<template>
    <div class="flex flex-col h-[88vh] w-full justify-between overflow-x-none mb-none">
        <main class="h-[85%] w-full flex justify-between">
            <battles-joey-container :pickingMove="pickingMove" :atk-target="attackTarget"
                @finish-selection="pickingMove = false" @select-move="(move: 'Attack' | 'Block') => {
                    attackTarget = null;
                    if (move === 'Attack') enemyMode = 'Target'
                    if (move === 'Block') enemyMode = 'Check'
                }">
            </battles-joey-container>
            <div class="h-full w-2 bg-black flex flex-col justify-center items-center rounded-full">
                <div
                    class="bg-slate-600 border-3 border-black text-white pixfont p-2 rounded-full hover:bg-sky-700 hover:rotate-180 transition-all duration-3000 ease-in-out">
                    VS.
                </div>
            </div>
            <div class="relative w-[60%] h-full  flex items-center justify-between flex-wrap"> <!-- ENEMY CONTAINER-->
                <battles-enemy-container v-for="(enemy, index) in currentEnemies" :key="enemy.name"
                    :amount="currentEnemies.length" :enemy="enemy" :index="index" :pickingMove="pickingMove"
                    :mode="enemyMode" :isTarget="attackTarget?.name === enemy.name" @target="(enemyName: string) => {
                        attackTarget = useCurrentBattleStore().currentEnemies.find((enemy: Enemy) => enemy.name === enemyName)!
                        enemyMode = 'Check'
                        console.log(attackTarget.name)
                    }">
                </battles-enemy-container>
            </div>
        </main>
        <button
            class="px-2 h-[5%] bg-slate-700 pixfont shadow-lg hover:shadow-xl w-[20%] my-2 border-black border-4 text-lg select-none
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-slate-800 active:bg-slate-900 flex items-center justify-center fixed top-2 left-[40%]"
            @click="$emit('proceed')">SKIP</button>
    </div>
    <div class="mx-[2vw] w-[96vw] justify-between items-center flex m-2 h-[13vh] fixed bottom-[1vh] -pl-[2%]">
        <h2 class="mx-3 text-center pixfont text-4xl underline shaky text-black">TIME TO BATTLE!</h2>
        <transition name="slide-up">
            <battles-dialogue-box v-if="!pickingMove" :speed="45" :sound="'/sounds/basehigh.m4a'"
                :text="'TRIPLE FINISH!'" :speaker="'Scott the Woz'"></battles-dialogue-box>
        </transition>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['proceed'])
const attackTarget = ref<null | Enemy>(null)
const stateKeys = useStateKeys()
const campaignSaveStore = useCampaignSaveStore()
const currentBattleStore = useCurrentBattleStore()
const pickingMove = ref<boolean>(true)
const currentEnemies = useCurrentBattleStore().currentEnemies
const enemyMode = ref<("Check" | "Target")>("Check")

const currentStateKey = computed((): string => {
    return stateKeys.keys[campaignSaveStore.gameState]!.name
})

if (!currentBattleStore.currentEnemies.length) currentBattleStore.initialize(currentStateKey.value)

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

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(50%);
    opacity: 0
}

.slide-up-enter-to,
.slide-up-leave-from {
    opacity: 1
}

.slide-up-enter-active {
    transition: all ease-in-out 500ms
}
</style>