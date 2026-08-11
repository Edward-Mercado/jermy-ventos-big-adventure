<template>
    <div class="w-[35%] flex flex-col justify-between relative overflow-hidden"> <!-- JOEY CONTAINER-->
        <div
            class="border-2 h-[30%] bg-slate-600/70 border-black shadow-lg p-2 gap-2 flex flex-col justify-between m-2 rounded-lg">
            <h4 class="pixfont text-2xl -mb-2">Joey</h4>
            <battles-health-bar :currentHP="campaignStore.currentHP" :maxHP="campaignStore.maxHP"></battles-health-bar>
            <button class="bg-slate-900 flex items-center justify-center w-full h-[30%] p-2 pixfont border-2 hover:bg-slate-600 
                    active:bg-slate-200 active:text-black transition-all duration-300 ease-in-out shadow-md 
                    hover:shadow-xl active:shadow-none hover:-translate-y-1 active:translate-y-0.5"
                @click="clickSFX(); checking = true">Check</button>
        </div>
        <img src="/images/joey.png" alt="Joey"
            class="border-b-6 border-black rounded-2xl absolute bottom-0 left-0 max-w-full max-h-[60%] m-2 mx-2">
        <div
            class="w-[35%] absolute bottom-2 right-2 bg-slate-600/70 rounded-lg h-[65%] border-2 border-black shadow-md shadow-slate-900/20 p-2 flex flex-col gap-2">
            <h2 class="pixfont text-white text-xl">Actions:</h2>
            <div class="relative mt-1">
                <div class="relative mt-1">
                    <div class="flex justify-between">
                        <p class="pixfont text-lg transition-colors ease-in-out duration-200 z-4 text-center w-[50%]"
                            :class="selectedMove === 'attack' ? 'text-slate-800' : 'text-white'"
                            @click="clickSFX(); selectedMove = 'attack'">Attack</p>
                        <p class="pixfont text-lg transition-colors ease-in-out duration-200 z-4 text-center w-[50%]"
                            :class="selectedMove === 'block' ? 'text-slate-800' : 'text-white'"
                            @click="clickSFX(); selectedMove = 'block'">Block</p>
                    </div>
                    <div class="bg-white h-full absolute w-[50%] rounded-md top-0 transition-all duration-300 ease-in-out"
                        :class="selectedMoveClass">

                    </div>
                </div>
            </div>
            <div class="h-1 rounded-full w-full bg-white mt-2"></div>
            <h2 class="pixfont text-white text-xl">Actions:</h2>
            <button class="w-full text-black bg-white rounded-md pixfont text-[0.92rem]
            transition-all duration-300 ease-in-out hover:bg-slate-100 active:bg-slate-300 shadow-md hover:shadow-lg active:shadow-none
            hover:-translate-y-0.5 active:translate-y-px" @click="clickSFX(); viewAbilities = true">Abilities</button>
            <div class="bg-slate-900 max-h-[50%] min-h-[30%] w-full rounded-md mt-2 shadow-lg flex flex-wrap p-1">
                <div v-for="friend in selectedFriends" :key="friend.name"
                    class="w-10 h-10 aspect-square! overflow-hidden rounded-full border border-white bg-sky-200">
                    <img :src="friend.spriteURL" :alt="friend.name" class="bottom-0 w-full h-full object-cover">
                </div>
            </div>
            <button class="w-full text-black bg-white rounded-md pixfont text-[0.92rem]
            transition-all duration-300 ease-in-out hover:bg-slate-100 active:bg-slate-300 shadow-md hover:shadow-lg active:shadow-none
            hover:-translate-y-0.5 active:translate-y-px" @click="clickSFX()">Confirm</button>
        </div>
        <transition name="modal">
            <battles-joey-checker v-if="checking" @close="checking = false"></battles-joey-checker>
        </transition>
        <transition name="modal">
            <battles-abilities-modal v-if="viewAbilities" @close="viewAbilities = false"
                @confirm="(chosenFriends: Friend[]) => updateSelectedFriends(chosenFriends)"></battles-abilities-modal>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { Shield2 } from 'reicon-vue';
import { Fire } from 'reicon-vue';
const selectedFriends = ref<Friend[]>([])
const campaignStore = useCampaignSaveStore()
const checking = ref<boolean>(false)
const viewAbilities = ref<boolean>(false)

const selectedMove = ref<null | "attack" | 'block'>(null)
const selectedMoveClass = computed(() => {
    if (selectedMove.value === null) return 'opacity-0'
    else if (selectedMove.value === 'attack') return 'translate-x-0'
    else if (selectedMove.value === 'block') return 'translate-x-full'
})

function updateSelectedFriends(chosenFriends: Friend[]) {
    viewAbilities.value = false
    selectedFriends.value = chosenFriends
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
</style>