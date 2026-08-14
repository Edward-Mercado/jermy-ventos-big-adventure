<template>
    <animations-anim-basis v-if="useCurrentBattleStore().animation.playing"
    :animation-name="useCurrentBattleStore().animation.name" :done-by-enemy="useCurrentBattleStore().animation.doneByEnemy"></animations-anim-basis>
    <transition name="fade">
        <div class="fixed h-screen w-screen bg-black z-15 top-0" v-if="lost">

        </div>
    </transition>
    <div class="flex flex-col h-[88vh] w-full justify-between overflow-x-none mb-none">
        <main class="h-[85%] w-full flex justify-between">
            <battles-joey-container :pickingMove="pickingMove" :atk-target="attackTarget"
            :wand-striking="wandStriking"
                @finish-selection="beginTurn()" @select-move="(move: 'Attack' | 'Block') => {
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
                    }">
                </battles-enemy-container>
            </div>
        </main>
        <button
            class="px-2 h-[5%] bg-slate-700 pixfont shadow-lg hover:shadow-xl w-[20%] my-2 border-black border-4 text-lg select-none
            active:shadow-xs transition-all duration-300 ease-in-out hover:bg-slate-800 active:bg-slate-900 flex items-center justify-center fixed top-2 left-[40%]"
            @click="clickSFX(); $emit('win')">SKIP</button>
    </div>
    <div class="mx-[2vw] w-[96vw] justify-between items-center flex m-2 h-[13vh] fixed bottom-[1vh] -pl-[2%]">
        <h2 class="mx-3 text-center pixfont text-4xl underline shaky text-black">TIME TO BATTLE!</h2>
        <transition name="slide-up">
            <battles-dialogue-box v-if="battleIndex > -1 && battlePlaying" :battle-instance="useCurrentBattleStore().thisTurnEvents[battleIndex]!" 
            :speed="45"
            @proceed="proceedBattle()"    
            ></battles-dialogue-box>
        </transition>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['lose', 'win'])
const attackTarget = ref<null | Enemy>(null)
const stateKeys = useStateKeys()
const campaignSaveStore = useCampaignSaveStore()
const currentBattleStore = useCurrentBattleStore()
const pickingMove = ref<boolean>(true)
const currentEnemies = computed(() => useCurrentBattleStore().currentEnemies)
const enemyMode = ref<("Check" | "Target")>("Check")
const battleIndex = ref<number>(-1)
const battlePlaying = ref<boolean>(false)
const wandStriking = ref<boolean>(false)

const lost = ref<boolean>(false)

watch(() => battleIndex.value, () => useCurrentBattleStore().thisTurnIndex = battleIndex.value)

const currentStateKey = computed((): string => {
    return stateKeys.keys[campaignSaveStore.gameState]!.name
})

currentBattleStore.initialize(currentStateKey.value)
useCampaignSaveStore().consecutiveBlocks = 0

function beginTurn() {
    pickingMove.value = false; 
    battlePlaying.value = true;
    useCurrentBattleStore().thisTurnEvents = currentBattleStore.compileTurnData(attackTarget.value);
    battleIndex.value++;
    attackTarget.value = null;
    enemyMode.value = "Check";
    useBattleGuiStore().selectedFriends.forEach((friend:Friend) => {
        useBattleGuiStore().move(friend)
    })
}

async function proceedBattle() {
    battlePlaying.value = false
    if(campaignSaveStore.currentHP === 0) {
        useCurrentBattleStore().thisTurnEvents.forEach((event:BattleEvent, index) => {
            if(index >= battleIndex.value && event.user === 'Joey') {
                useCurrentBattleStore().thisTurnEvents.splice(index)
                index--
            }
        })
    } 
    battleIndex.value++
    useCurrentBattleStore().animation.name = null
    useCurrentBattleStore().animation.playing = false
    useCurrentBattleStore().animation.doneByEnemy = false
    if(battleIndex.value >= useCurrentBattleStore().thisTurnEvents.length) {
        
        campaignSaveStore.currentMana = Math.min(campaignSaveStore.maxMana, campaignSaveStore.currentMana + (10+campaignSaveStore.playerLevel * 5))
        useCurrentBattleStore().battleEventsDone.length = 0
        useCurrentBattleStore().currentEnemies.forEach((e:Enemy) => {
            if(e.currentHP === 0) {
                useCampaignSaveStore().expGained += e.expDrop
                useCampaignSaveStore().listenLevelUp()
            }
        })
        useCurrentBattleStore().currentEnemies = useCurrentBattleStore().currentEnemies.filter((e:Enemy) => e.currentHP > 0)
        
        if(useCampaignSaveStore().currentHP === 0) {
            lost.value = true
            setTimeout(() => {emit('lose')}, 1000)
        } else if (useCurrentBattleStore().currentEnemies.length === 0) {
            emit('win')
        }

        battleIndex.value = -1;
        pickingMove.value = true;
        campaignSaveStore.isBlocking = false;
        wandStriking.value = false
        useCurrentBattleStore().currentEnemies.forEach((enemy:Enemy) => {
            enemy.isBlocking = false
            enemy.currentMana = Math.min(enemy.maxMana, enemy.currentMana + (10 + enemy.level*5))
        })
    
    } else {
        await nextTick()

        battlePlaying.value = true
        wandStriking.value = false
        useCurrentBattleStore().currentEnemies.forEach((e:Enemy) => {
            e.attackThisEvent = false
        })

        if(useCurrentBattleStore().thisTurnEvents[battleIndex.value]!.action === attack 
        && useCurrentBattleStore().thisTurnEvents[battleIndex.value]!.user === "Joey") {
            wandStriking.value = true
        } else if (useCurrentBattleStore().thisTurnEvents[battleIndex.value]!.action === attack) {
            useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.name === useCurrentBattleStore().thisTurnEvents[battleIndex.value]!.user)!
            .attackThisEvent = true
        }
    }
}

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

.fade-enter-from,
.fade-leave-to {
    opacity: 0
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s
}
</style>