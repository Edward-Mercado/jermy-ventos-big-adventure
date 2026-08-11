<template>
    <transition name="fade-in" appear>
            <div class="h-24 w-full rounded-lg bg-slate-700 py-1 px-2 gap-5 flex flex-row items-center justify-between">
        <button class="rounded-lg h-[95%] hover:translate-x-2 active:-translate-x-1 aspect-square bg-white hover:bg-red-200 active:bg-red-400 ease-in-out transition-all
        duration-300 pixfont text-slate-900 text-3xl shadow-md hover:shadow-lg active:shadow-none"
            @click="clickSFX(); battleGuiStore.move(friend)">DONT</button>
        <div class="flex flex-col w-[50%] items-center justify-center">
            <div class="w-full flex flex-row items-center gap-px text-center justify-center">
                <h5 class="pixfont text-sky-200 uppercase xl:text-2xl text-lg">{{friend.name}}⋅</h5>
                <p class="dialogue-font text-white italic uppercase xl:text-xl text-md">{{friend.manaCost}} Mana</p>
            </div>
            <p class="pixfont text-[1.3rem] text-white w-full text-center uppercase">{{friend.abilityName}}</p>
        </div>
        <div class="h-[90%] aspect-square bg-sky-200 rounded-full overflow-hidden flex items-center justify-center">
                <img :src="friend.spriteURL" :alt="friend.name" class="bottom-0 w-full h-full object-cover">
        </div>
    </div>
    </transition>
</template>

<script setup lang="ts">
const battleGuiStore = useBattleGuiStore()
const prop = defineProps<{
    friend: Friend
}>()
</script>

<style scoped>
.fade-in-enter-from,
.fade-in-leave-to {
    opacity: 0;
    transform: translateX(-50%)
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
</style>