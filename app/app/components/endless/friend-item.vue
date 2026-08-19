<template>
    <div v-if="friendObject" class="bg-slate-800 h-24 w-full rounded-xl flex gap-2 items-center justify-start p-2">
        <div class="bg-sky-100 rounded-full h-full aspect-square overflow-hidden">
            <img :src="friendObject.spriteURL" :alt="friendObject.name" class="w-full h-full object-cover">
        </div>
        <div class="flex h-full w-[10%] flex-col justify-center">
            <p class="pixfont text-[1.5rem] text-sky-200 uppercase">{{ friendObject.name }}</p>
        </div>
        <div class="flex flex-col justify-between w-[30%] items-baseline">
            <p class="uppercase pixfont text-[1.5rem] text-sky-200">{{ friendObject.abilityName }} - <span class="dialogue-font text-sky-400">{{ friendObject.manaCost }} </span> Mana </p>
            <p class="uppercase pixfont text-[0.75rem]">{{ friendObject.abilityDesc }}</p>
        </div>
        <div class="flex flex-col justify-between w-[30%] items-baseline">
            <p class="uppercase pixfont text-[0.8rem] text-sky-200"> More Ability Details </p>
            <p class="uppercase pixfont text-[1.2rem]">Happens {{ friendObject.abilityTiming }}, Has {{ friendObject.targetType }} Targeting</p>
        </div>
        <button class="bg-white hover:bg-sky-200 active:bg-sky-400 h-full aspect-2/1 rounded-2xl
        transition-all ease-in-out duration-300 hover:-translate-y-0.5 active:translate-y-px text-slate-900 pixfont text-2xl
        " @click="clickSFX(); playTargetSound()">
        {{ soundPlaying ? "Stop" : "Play Talking Sound" }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { Howl } from 'howler';
const prop = defineProps<{
    friend: string
}>()

const friendObject = computed(() => {
    //@ts-ignore
    return useFriendsStore().$state[prop.friend] || null
})

let interval:number = 0
var dialogueBeep = new Howl({
    src: [friendObject.value.sound as string | '/sounds/basehigh.m4a'],
    volume: 0.8
})

const soundPlaying = ref<boolean>(false)

function playTargetSound() {
    if(friendObject.value.sound) {
        if(!soundPlaying.value) {
            soundPlaying.value = true
            setTimeout(()=> {
                interval = setInterval(() => {
                    dialogueBeep.play()
                }, 60)
            }, 200)
        } else {
            soundPlaying.value = false
            clearInterval(interval)
        }
    }
}

onUnmounted(() => {clearInterval(interval); soundPlaying.value = false})

</script>

<style scoped>

</style>