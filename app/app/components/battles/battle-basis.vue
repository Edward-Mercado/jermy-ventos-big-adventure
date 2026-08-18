<template>
    <animations-anim-basis v-if="useCurrentBattleStore().animation.playing"
        :animation-name="useCurrentBattleStore().animation.name"
        :done-by-enemy="useCurrentBattleStore().animation.doneByEnemy"></animations-anim-basis>
    <transition name="fade">
        <div class="fixed h-screen w-screen bg-black z-15 top-0" v-if="lost">

        </div>
    </transition>
    <div class="flex flex-col h-[88vh] w-full justify-between overflow-x-none mb-none">
        <main class="h-[85%] w-full flex justify-between">
            <transition name="fade-left">
                <battles-joey-container v-if="mounted" :pickingMove="pickingMove" :atk-target="attackTarget" :wand-striking="wandStriking"
                    @finish-selection="beginTurn()" @select-move="(move: 'Attack' | 'Block') => {
                        if (move === 'Attack') enemyMode = 'Target'
                        if (move === 'Block') enemyMode = 'Check'
                    }">
                </battles-joey-container>
            </transition>
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
            @click="clickSFX(); getExp(); $emit('win')">SKIP</button>
    </div>
    <div class="mx-[2vw] w-[96vw] justify-between items-center flex m-2 h-[13vh] fixed bottom-[1vh] -pl-[2%] z-16">
        <h2 class="mx-3 text-center pixfont text-4xl underline shaky text-black">TIME TO BATTLE!</h2>
        <transition name="slide-up">
            <battles-dialogue-box v-if="battleIndex > -1 && battlePlaying"
                :battle-instance="useCurrentBattleStore().thisTurnEvents[battleIndex]!" :speed="45"
                @proceed="proceedBattle()"></battles-dialogue-box>
        </transition>
        <transition name="fade">
            <div v-if="phase2StuffUp"
                class="bg-white dialogue-font text-yellow-400 border-4 border-yellow-400 fixed left-[5%] bottom-[5%] w-[35vw] h-[30vh] shaky flex! items-center justify-center p-5">
                <p class="dialogue-font text-4xl text-yellow-400 w-full text-center">You have unlocked a new skill! <span class="uppercase">Joevil</span>'s DEFENSE dropped to 0! </p>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="phase2StuffUp"
                class="bg-black border-5 border-white flex! gap-2 flex-col justify-between items-center dialogue-font text-black fixed right-[9%] top-[10%] w-[30vw] h-[70vh] shaky py-6">
                <img src="/images/joevil-enraged.png" alt="joevil" class="h-[70%]">
                <p class="dialogue-font text-red-400 text-[1.7rem] w-full text-center uppercase font-black">Joevil: {{visibleText}}</p>
            </div>
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
const mounted = ref<boolean>(false)
onMounted(() => mounted.value = true)

const phase2 = ref<boolean>(false)
const phase2StuffUp = ref<boolean>(false)
const visibleText = ref<string>("")

const lost = ref<boolean>(false)

watch(() => battleIndex.value, () => useCurrentBattleStore().thisTurnIndex = battleIndex.value)
watch(() => useCampaignSaveStore().currentMana, () => {
    useCampaignSaveStore().currentMana = Math.max(useCampaignSaveStore().currentMana, 0)
})

const currentStateKey = computed((): string => {
    return stateKeys.keys[campaignSaveStore.gameState]!.name
})

if (!phase2.value) {
    useCampaignSaveStore().friends = useCampaignSaveStore().friends.filter((f: string) => f !== 'Joey')
    useCampaignSaveStore().saveGame()
    useCampaignSaveStore().loadFromLocalStorage()
}

useBattleGuiStore().initialize()
currentBattleStore.initialize(currentStateKey.value)
useCampaignSaveStore().consecutiveBlocks = 0

function beginTurn() {
    pickingMove.value = false;
    battlePlaying.value = true;
    useCurrentBattleStore().thisTurnEvents = currentBattleStore.compileTurnData(attackTarget.value);
    attackTarget.value = null;
    enemyMode.value = "Check";
    while (useBattleGuiStore().selectedFriends.length) {
        //@ts-ignore
        useBattleGuiStore().move(useBattleGuiStore().selectedFriends[0])
    }
    proceedBattle()
}

function getExp() {
    useCurrentBattleStore().currentEnemies.forEach((e: Enemy) => {
        useCampaignSaveStore().expGained += e.expDrop
        useCampaignSaveStore().listenLevelUp()
    })
}



async function proceedBattle() {
    useCurrentBattleStore().joeyURL = '/images/joey.png'
    battlePlaying.value = false
    if (campaignSaveStore.currentHP === 0 && campaignSaveStore.currentStatus?.name !== "Will Revive"
        && campaignSaveStore.currentStatus?.length === 1
    ) {
        useCurrentBattleStore().thisTurnEvents.forEach((event: BattleEvent, index) => {
            if (index >= battleIndex.value && event.user === 'Joey') {
                useCurrentBattleStore().thisTurnEvents.splice(index)
                index--
            }
        })
    } else if (campaignSaveStore.currentHP === 0) {
        useCurrentBattleStore().thisTurnEvents.push({
            user: 'Joey',
            action: reviveTest,
            actionArgs: [useCampaignSaveStore()],
            flavorText: "REVIVE ENERGY AWAKEN!",
            spriteURL: '/images/joey.png',
            sound: '/sounds/joey.m4a',
            actionPerformed: false
        })
    }

    battleIndex.value++
    useCurrentBattleStore().animation.name = null
    useCurrentBattleStore().animation.playing = false
    useCurrentBattleStore().animation.doneByEnemy = false


    if (battleIndex.value >= useCurrentBattleStore().thisTurnEvents.length) {
        attackTarget.value = null;
        useCurrentBattleStore().usingMana = true
        campaignSaveStore.currentMana = Math.min(campaignSaveStore.maxMana, campaignSaveStore.currentMana + (10 + campaignSaveStore.playerLevel * 5))
        useCurrentBattleStore().battleEventsDone.length = 0
        useCurrentBattleStore().currentEnemies.forEach((e: Enemy) => {
            if (Number.isNaN(e.currentHP) || e.currentHP === undefined) e.currentHP = 0
            if (e.currentHP === 0) {
                useCampaignSaveStore().expGained += e.expDrop
                useCampaignSaveStore().listenLevelUp()
            } else {
                useCurrentBattleStore().enemyChooseMove(e)
                if (e.status) {
                    e.status.length--
                    if (e.status.length === 0) e.status = null
                }
            }
        })

        if (campaignSaveStore.currentStatus?.length) {
            campaignSaveStore.currentStatus.length--
            if (campaignSaveStore.currentStatus.length === 0) campaignSaveStore.currentStatus = null
        }

        useCurrentBattleStore().currentEnemies = useCurrentBattleStore().currentEnemies.filter((e: Enemy) => e.currentHP > 0)
        useCurrentBattleStore().singleTargetPairs.length = 0

        if (useCampaignSaveStore().currentHP === 0) {
            lost.value = true
            setTimeout(() => { emit('lose') }, 1000)
        } else if (useCurrentBattleStore().currentEnemies.length === 0 && (currentStateKey.value !== 'battleJoevil' || phase2.value)) {
            emit('win')
        }
        if (useCurrentBattleStore().currentEnemies.length === 0 && currentStateKey.value === 'battleJoevil') {
            phase2.value = true
            useCurrentBattleStore().currentEnemies = [{
                name: "Joevil (ENRAGED)",
                attack: 90,
                defense: 0,
                abilityType: "offense",
                abilityName: "Reign of Evil",
                ability: evilReign,
                manaCost: 100,
                currentHP: 1616,
                maxHP: 1616,
                currentMana: 300,
                maxMana: 300,
                img: '/images/joevil-enraged.png',
                expDrop: 300,
                desc: "This is now... truly, the end.",
                level: 16,
                title: "Birthday Bane",
                sound: '/sounds/joey.m4a',
                nextMove: 'Use Ability',
                targetOf: [] as Friend[],
                status: null,
                shrinkCount: 0,
                consecutiveBlocks: 0,
                isBlocking: false,
                attackThisEvent: false,
            }]

            phase2StuffUp.value = true

            const message = "You'll never defeat me! I am immortal!".split("")

            let messageIndex = 0

            const interval = setInterval(() => {
                visibleText.value += message[messageIndex]
                messageIndex++
                if(messageIndex === message.length) {
                    clearInterval(interval)
                }
                let sound = new Howl({
                        src: ['/sounds/joey.m4a']
                    })
                sound.play()
            }, 75)

            useCampaignSaveStore().friends.unshift("Joey")
            useCampaignSaveStore().saveGame()
            useCampaignSaveStore().loadFromLocalStorage()
            useCampaignSaveStore().playerLevel = 16
            useCampaignSaveStore().changeStats()
            setTimeout(() => {phase2StuffUp.value = false; clearInterval(interval)}, 4000)
        }

        battleIndex.value = -1;
        pickingMove.value = true;
        campaignSaveStore.isBlocking = false;
        wandStriking.value = false
        useCurrentBattleStore().currentEnemies.forEach((enemy: Enemy) => {
            enemy.isBlocking = false
            enemy.currentMana = Math.min(enemy.maxMana, enemy.currentMana + (10 + enemy.level * 5))
            enemy.targetOf.length = 0
        })

    } else {
        await nextTick()

        battlePlaying.value = true
        wandStriking.value = false
        useCurrentBattleStore().currentEnemies.forEach((e: Enemy) => {
            e.attackThisEvent = false
        })

        if (useCurrentBattleStore().thisTurnEvents[battleIndex.value]!.action === attack
            && useCurrentBattleStore().thisTurnEvents[battleIndex.value]!.user === "Joey") {
            wandStriking.value = true
        } else if (useCurrentBattleStore().thisTurnEvents[battleIndex.value]!.action === attack) {
            useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === useCurrentBattleStore().thisTurnEvents[battleIndex.value]!.user)!
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

.fade-left-enter-from,
.fade-left-leave-to {
    opacity: 0;
    translate: -50%
}

.fade-left-enter-to,
.fade-left-leave-from {
    opacity: 1;
}

.fade-left-enter-active,
.fade-left-leave-active {
    transition: ease-out 0.5s all
}
</style>