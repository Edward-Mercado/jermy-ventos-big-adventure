<template>
    <transition name="fade-in" appear>
        <div class="h-24 w-full rounded-lg bg-slate-700 py-1 px-2 gap-5 flex flex-row items-center justify-between">
        <div class="h-[90%] aspect-square bg-sky-200 rounded-full overflow-hidden flex items-center justify-center">
            <img :src="friend.spriteURL" :alt="friend.name" class="w-full h-full bottom-0 object-cover">
        </div>
        <div class="flex flex-col w-[30%]">
            <div class="w-full flex flex-row items-center gap-px">
                <h5 class="pixfont text-sky-200 uppercase xl:text-xl text-md">{{friend.name}}⋅</h5>
                <p class="dialogue-font text-white italic uppercase xl:text-lg text-sm">{{friend.manaCost}} Mana</p>
            </div>
            <div>
                <p class="pixfont xl:text-[0.9rem] text-white">{{friend.abilityName}}</p>
            </div>
        </div>
        <div class="w-[35%] rounded-lg border border-white hover:bg-sky-50/10 transition-all duration-500 ease-in-out h-[90%] px-2 flex items-center justify-center" @mouseleave="showTiming=true"
            @mouseover="showTiming=false">
            <transition name="fade" appear v-if="!showTiming">
                <p class="dialogue-font text-[0.8rem] text-center" >{{friend.abilityDesc}}</p>
            </transition>
            <transition name="fade" appear v-else>
                <p class="dialogue-font xl:text-[0.9rem] text-[0.8rem] text-white text-center" >Timing: {{ friend.abilityTiming }}, Targets: {{ friend.targetType }}</p>  
            </transition>
        </div>
        <button class="rounded-lg h-[95%] hover:-translate-x-2 active:translate-x-1 aspect-square bg-white hover:bg-sky-200 active:bg-sky-400 ease-in-out transition-all
        duration-300 pixfont text-slate-900 text-3xl shadow-md hover:shadow-lg active:shadow-none"
        @click="handleClick">{{full ? "CAN'T" : "USE"}}</button>
    </div>
    </transition>
</template>

<script setup lang="ts">
const battleGuiStore = useBattleGuiStore();
const campaignStore = useCampaignSaveStore();
const showTiming = ref<boolean>(true);
const prop = defineProps<{
    friend: Friend,
    full: boolean
}>();

function handleClick() {
    const currentManaCost = battleGuiStore.selectedFriends.reduce((accumulator, value) => accumulator + value.manaCost, 0)
    if(!prop.full && campaignStore.currentMana >= (currentManaCost + prop.friend.manaCost)) {
        clickSFX(); battleGuiStore.move(prop.friend)
    } else {
        errorSFX();
    }
}
</script>

<style scoped>
.fade-in-enter-from,
.fade-in-leave-to {
    opacity: 0;
    transform: translateX(50%)
}

.fade-in-enter-to,
.fade-in-leave-from {
    opacity: 1;
    transform: translateX(0%)
}

.fade-in-enter-active,
.fade-in-leave-active {
    transition: ease-out 0.5s all
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: ease-out 0.5s all
}
</style>