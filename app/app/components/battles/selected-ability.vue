<template>
    <transition name="fade-in" appear>
        <div class="h-24 w-full rounded-lg bg-slate-700 py-1 px-2 gap-5 flex flex-row items-center justify-between relative">
            <button class="uppercase rounded-lg h-[95%] hover:translate-x-2 active:-translate-x-1 aspect-square bg-white hover:bg-red-200 active:bg-red-400 ease-in-out transition-all
        duration-300 pixfont text-slate-900 text-3xl shadow-md hover:shadow-lg active:shadow-none"
                @click="clickSFX(); battleGuiStore.move(friend)">Do not</button>
            <button v-if="friend.targetType === 'Single'" class="uppercase rounded-lg p-1 h-[95%] hover:-translate-y-2 active:translate-y-1 aspect-square bg-white hover:bg-sky-200 active:bg-sky-400 ease-in-out transition-all
        duration-300 pixfont text-slate-900 text-3xl shadow-md hover:shadow-lg active:shadow-none"
                @click="clickSFX(); viewTargetWindow = !viewTargetWindow">{{ targetText }}</button>
            <div class="flex flex-col w-[50%] items-center justify-center">
                <div class="w-full flex flex-row items-center gap-px text-center justify-center">
                    <h5 class="pixfont text-sky-200 uppercase xl:text-2xl text-lg">{{ friend.name }}⋅</h5>
                    <p class="dialogue-font text-white italic uppercase xl:text-xl text-md">{{ friend.manaCost }} Mana
                    </p>
                </div>
                <p class="pixfont text-[1.3rem] text-white w-full text-center uppercase">{{ friend.abilityName }}</p>
            </div>
            <div class="h-[90%] aspect-square bg-sky-200 rounded-full overflow-hidden flex items-center justify-center">
                <img :src="friend.spriteURL" :alt="friend.name" class="bottom-0 w-full h-full object-cover">
            </div>
            <transition name="fade-down" appear mode="out-in">
                <div v-if="viewTargetWindow"
                    class="z-7 carousel bg-slate-700 w-full h-24 rounded-lg shadow-md p-1 gap-[2%] absolute top-[110%] left-0">
                    <battles-target-card v-for="enemy in currentBattleStore.currentEnemies" 
                    :enemy="enemy" :friend="friend" @close="(enemyName:string) => {viewTargetWindow = false; target=enemyName}"></battles-target-card>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script setup lang="ts">
const target = ref<string | null>(null)
const viewTargetWindow = ref<boolean>(false)
const battleGuiStore = useBattleGuiStore()
const currentBattleStore = useCurrentBattleStore()
const prop = defineProps<{
    friend: Friend
}>()
const targetText = computed(() => {
    const targeting = currentBattleStore.currentEnemies.find((enemy: Enemy) => enemy.targetOf === prop.friend)
    if (targeting) {
        target.value = targeting.name
    } else {
        target.value = null
    }

    if (target.value) return 'Target picked'
    else if (viewTargetWindow.value) return 'Do not'
    else return 'Pick Target'
})
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

.fade-down-enter-from,
.fade-down-leave-to {
    opacity: 0;
    transform: translateY(-110%)
}

.fade-down-enter-to,
.fade-down-leave-from {
    opacity: 1;
    transform: translateY(0%)
}

.fade-down-enter-active,
.fade-down-leave-active {
    transition: ease-out 0.5s all
}
</style>