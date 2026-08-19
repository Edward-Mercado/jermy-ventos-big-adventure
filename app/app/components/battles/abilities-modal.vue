<template>
    <div class="bg-white/90 fixed w-[96vw] h-[90vh] top-[5vh] left-[2vw] flex flex-col gap-2 rounded-2xl p-2 z-12 overflow-y-hidden">
        <div class="flex flex-row w-full justify-between items-center">
            <button
                class="pixfont text-black text-left text-2xl transition-colors ease-in-out duration-300 hover:text-red-800 active:text-red-500"
                @click="clickSFX(); unselectAll();
                $emit('close')">X</button>
            <h4 class="text-2xl pixfont text-black">Abilities</h4>
        </div>
        <div class="flex flex-row justify-between h-full px-1">
            <div
                class="w-[50%] h-full p-2 rounded-sm bg-linear-to-tr from-slate-300/90 to-slate-200/90 shadow-lg overflow-y-scroll">
                <p class="text-black text-2xl pixfont">Choose Abilities To Use</p>
                <div class="h-1 rounded-full w-full bg-black mt-2"></div>
                <div class="carousel pt-2 min-h-full mt-2 w-full flex-col gap-3 pb-20">
                    <battles-ability-card v-if="battleGuiStore.notSelectedFriends.length"
                        v-for="friend in battleGuiStore.notSelectedFriends" :friend="friend"
                        :full="battleGuiStore.selectedFriends.length === useCampaignSaveStore().friendSlots"></battles-ability-card>
                    <transition v-else name="fade" appear>
                        <battles-nothing-here :selected="false"></battles-nothing-here>
                    </transition>
                </div>
            </div>
            <div
                class="w-[45%] h-full p-2 rounded-sm overflow-y-hidden bg-linear-to-tr from-slate-300/90 to-slate-200/90 shadow-lg relative">
                <div class="w-full flex justify-between items-center">
                    <p class="text-black text-2xl pixfont">Selected Abilities</p>
                    <p class="text-2xl dialogue-font transition-colors ease-in-out duration-300"
                        :class="battleGuiStore.selectedFriends.length === useCampaignSaveStore().friendSlots || battleGuiStore.selectedFriends.reduce((accumulator, value) => accumulator + value.manaCost, 0) === useCampaignSaveStore().currentMana ? 'text-red-500' : 'text-black'">
                        {{battleGuiStore.selectedFriends.reduce((accumulator, value) => accumulator + value.manaCost,
                            0)}}/{{ useCampaignSaveStore().currentMana }} <span class="uppercase pixfont">Mana</span> |||
                        {{ battleGuiStore.selectedFriends.length }}/{{ useCampaignSaveStore().friendSlots }} <span
                            class="uppercase pixfont">Slots</span></p>
                </div>
                <div class="h-1 rounded-full w-full bg-black mt-2"></div>
                <div class="carousel pt-2 min-h-full mt-2 w-full flex-col gap-3">
                    <battles-selected-ability v-if="battleGuiStore.selectedFriends.length"
                        v-for="friend in battleGuiStore.selectedFriends" :friend="friend"></battles-selected-ability>
                    <transition v-else name="fade" appear>
                        <battles-nothing-here :selected="true"></battles-nothing-here>
                    </transition>
                </div>
                <button class="absolute bottom-10 w-[90%] rounded-lg text-2xl hover:bg-slate-800 active:bg-slate-900 transition-all duration-300 ease-in-out left-[5%] h-[10%] pixfont bg-slate-700 shadow-md hover:shadow-lg active:shadow-none
                hover:-translate-y-1 active:translate-y-0.5" @click="handleClick">CONFIRM!</button>
                <transition name="fade" appear>
                    <div class="flex fixed bottom-[16%] left-[30%] bg-red-900/70 border-red-900 rounded-lg pixfont px-4 py-2 border-2" v-if="showSingleError">
                        Select a target for all single-target abilities.
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const battleGuiStore = useBattleGuiStore()
const currentBattleStore = useCurrentBattleStore()
const showSingleError = ref<boolean>(false)
const emit = defineEmits(['close', 'confirm'])
onMounted(() => {
    battleGuiStore.initialize()
})

function checkAbilitySelections(): boolean {
    let passesTest = true
    battleGuiStore.selectedFriends.forEach((friend: Friend) => {
        if (friend.targetType === 'Single') {
            if (!currentBattleStore.currentEnemies.find((enemy: Enemy) => enemy.targetOf.includes(friend))) {
                passesTest = false
            }
        }
    })
    return passesTest
}

function handleClick() {
    if (checkAbilitySelections()) {
        clickSFX();
        emit('confirm', battleGuiStore.selectedFriends)
    } else {
        errorSFX();
        showSingleError.value = true
        setTimeout(() => {
            showSingleError.value = false
        }, 3000)
    }
}

function unselectAll() {
    battleGuiStore.selectedFriends.forEach((friend:Friend) => {
        battleGuiStore.move(friend)
    })
}
</script>

<style scoped>
.fade-leave-active,
.fade-enter-active {
    transition: all ease-in-out 1s
}

.fade-enter-to {
    opacity: 1;
    scale: 1.05;
    rotate: -3deg
}

.fade-leave-from {
    opacity: 1
}

.fade-leave-to,
.fade-enter-from {
    opacity: 0
}
</style>