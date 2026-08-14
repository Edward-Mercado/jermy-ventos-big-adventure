<template>
    <div class="w-[35%] flex flex-col justify-between relative overflow-hidden"> <!-- JOEY CONTAINER-->
        <div
            class="border-2 h-[30%] bg-slate-600/70 border-black shadow-lg p-2 gap-2 flex flex-col justify-between m-2 rounded-lg">
            <h4 class="pixfont text-2xl -mb-2">Joey</h4>
            <battles-health-bar :currentHP="campaignStore.currentHP" :maxHP="campaignStore.maxHP"></battles-health-bar>
            <button v-if="pickingMove" class="bg-slate-900 flex items-center justify-center w-full h-[30%] p-2 pixfont border-2 hover:bg-slate-600 
                    active:bg-slate-200 active:text-black transition-all duration-300 ease-in-out shadow-md 
                    hover:shadow-xl active:shadow-none hover:-translate-y-1 active:translate-y-0.5"
                @click="clickSFX(); checking = true">Check</button>
            <battles-health-bar v-else :currentHP="campaignStore.currentMana" :maxHP="campaignStore.maxMana" :isMana="true"></battles-health-bar>
        </div>
        <transition name="fade">
            <img src="/images/joey.png" alt="Joey" v-if="campaignStore.currentHP > 0"
                class="border-b-6 border-black rounded-2xl absolute bottom-0 left-0 max-w-full max-h-[60%] m-2 mx-2 transition-all duration-300 ease-in-out"
                :style="{ transform: `scale(${1 * (0.66 ** campaignStore.shrinkCount)})` }">
        </transition>
        <transition name="fade"> 
            <img v-if="campaignStore.currentHP === 0"
            src="/images/deadsmoke.png" alt="deadsmoke" class="absolute bottom-0">
        </transition>
        <transition name="wandStrike">
            <img v-if="wandStriking" src="/images/birthday_wand.png" alt="birthday_wand"
            class="absolute bottom-0 h-[50%]">
        </transition>
        <transition name="fade">
            <img v-if="campaignStore.isBlocking" src="/images/shield.png" alt="shield"
            class="absolute bottom-0 left-[35%] h-[35%] opacity-80">
        </transition>
        <div v-if="pickingMove"
            class="w-[35%] absolute bottom-2 right-2 bg-slate-600/70 rounded-lg h-[65%] border-2 border-black shadow-md shadow-slate-900/20 p-2 flex flex-col gap-2">
            <h2 class="pixfont text-white text-xl">Actions:</h2>
            <div class="relative mt-1">
                <div class="relative mt-1">
                    <div class="flex justify-between">
                        <p class="pixfont text-lg transition-colors ease-in-out duration-200 z-4 text-center w-[50%]"
                            :class="selectedMove === 'Attack' ? 'text-slate-800' : 'text-white'"
                            @click="clickSFX(); selectedMove = 'Attack';
                            $emit('selectMove', 'Attack')
                            ">Attack</p>
                        <p class="pixfont text-lg transition-colors ease-in-out duration-200 z-4 text-center w-[50%]"
                            :class="selectedMove === 'Block' ? 'text-slate-800' : 'text-white'"
                            @click="clickSFX(); selectedMove = 'Block';
                            $emit('selectMove', 'Block')">Block</p>
                    </div>
                    <div class="bg-white hover:bg-slate-100 active:bg-slate-200 h-full absolute w-[50%] rounded-md top-0 transition-all duration-300 ease-in-out"
                        :class="selectedMoveClass">

                    </div>
                    <transition name="fade">
                        <div class="absolute right-full mr-2 w-full bg-white/70 flex items-center justify-center text-black pixfont py-1 px-2 rounded-sm border-white border-2" v-if="selectedMove === 'Attack' && !atkTarget?.name">
                            Select a target.
                        </div>
                    </transition>
                </div>
            </div>
            <div class="h-1 rounded-full w-full bg-white mt-2"></div>
            <h2 class="pixfont text-white text-xl">Actions:</h2>
            <button class="w-full text-black bg-white rounded-md pixfont text-[0.92rem]
            transition-all duration-300 ease-in-out hover:bg-slate-100 active:bg-slate-300 shadow-md hover:shadow-lg active:shadow-none
            hover:-translate-y-0.5 active:translate-y-px" @click="clickSFX(); viewAbilities = true">Abilities</button>
            <div
                class="bg-slate-900 max-h-[50%] min-h-[30%] w-full rounded-md mt-2 shadow-lg flex flex-wrap p-1 overflow-y-scroll gap-1.5">
                <div v-for="friend in selectedFriends" :key="friend.name"
                    class="w-10 h-10 aspect-square! overflow-hidden rounded-full border border-white bg-sky-200">
                    <img :src="friend.spriteURL" :alt="friend.name" class="bottom-0 w-full h-full object-cover">
                </div>
            </div>
            <button class="text-black bg-white rounded-md pixfont text-[1rem] absolute bottom-1 left-[2%] w-[96%]
            transition-all duration-300 ease-in-out hover:bg-slate-100 active:bg-slate-300 shadow-md hover:shadow-lg active:shadow-none
            hover:-translate-y-0.5 active:translate-y-px max-h-[30%] py-2 uppercase" @click="handleConfirm">Confirm</button>
        </div>
        <transition name="modal">
            <battles-joey-checker v-if="checking && pickingMove" @close="checking = false"></battles-joey-checker>
        </transition>
        <transition name="modal">
            <battles-abilities-modal v-if="viewAbilities && pickingMove" @close="viewAbilities = false"
                @confirm="(chosenFriends: Friend[]) => updateSelectedFriends(chosenFriends)"></battles-abilities-modal>
        </transition>
        <transition name="fade" appear>
            <div class="flex fixed bottom-[16%] left-[3%] bg-red-900/70 border-red-900 rounded-lg pixfont px-4 py-2 border-2"
                v-if="showSelectMoveError">
                Select either Attack or Block.
            </div>
        </transition>
        <transition name="fade" appear>
            <div class="flex fixed bottom-[16%] left-[3%] bg-red-900/70 border-red-900 rounded-lg pixfont px-4 py-2 border-2"
                v-if="showNoTargetError">
                Target your Attack at an enemy.
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    pickingMove: boolean,
    atkTarget: Enemy | null,
    wandStriking: boolean,
}>()
const emit = defineEmits(['finishSelection', 'selectMove'])

const selectedFriends = ref<Friend[]>([])
const campaignStore = useCampaignSaveStore()
const checking = ref<boolean>(false)
const viewAbilities = ref<boolean>(false)

const selectedMove = ref<null | "Attack" | 'Block'>(null)

const showSelectMoveError = ref<boolean>(false)
const showNoTargetError = ref<boolean>(false)

const selectedMoveClass = computed(() => {
    if (selectedMove.value === null) return 'opacity-0'
    else if (selectedMove.value === 'Attack') return 'translate-x-0'
    else if (selectedMove.value === 'Block') return 'translate-x-full'
})

function updateSelectedFriends(chosenFriends: Friend[]) {
    viewAbilities.value = false
    selectedFriends.value = chosenFriends
}
async function handleConfirm() {
    if (selectedMove.value === 'Block' || (selectedMove.value === 'Attack' && prop.atkTarget)) { clickSFX(); useCurrentBattleStore().populateUserChoices(selectedFriends.value, selectedMove.value); emit('finishSelection') }
    else {
        errorSFX()
        if(!selectedMove.value) {
            showSelectMoveError.value = true
        } else {
            showNoTargetError.value = true
        }
        setTimeout(() => {
            showSelectMoveError.value = false
            showNoTargetError.value = false
        }, 3000)
    }
}
</script>

<style scoped>
.modal-enter-from,
.modal-leave-to {
    transform: translateY(50%);
    opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.modal-enter-active,
.modal-leave-active {
    transition: all 500ms ease;
    transform-origin: bottom;
}

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

.wandStrike-enter-from {
    rotate: 0;
    transform: translateX(0) translateY(0);
}
.wandStrike-enter-to {
    rotate: 50deg;
    transform: translateX(20%) translateY(33%)
}

.wandStrike-leave-from {
    rotate: 0deg;
    opacity: 1
}

.wandStrike-leave-to {
    rotate: 0deg;
    opacity: 0
}

.wandStrike-enter-active,
.wandStrike-leave-active {
    transition: all 300ms ease-in-out
}
</style>