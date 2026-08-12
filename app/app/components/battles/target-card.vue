<template>
    <div class="w-[24%] h-full rounded-md flex gap-2 shadow-md
    transition-all duration-300 ease-in-out hover:bg-sky-100 active:bg-sky-200 hover:shadow-lg active:shadow-none
    hover:-translate-y-0.5 active:translate-y-px" :class="bgClass"
    @click="handleClick">
        <img :src="enemy.img" :alt="enemy.name" class="max-h-full object-cover max-w-[20%] border-r-black border-r-2">
        <div class="h-full w-[80%] flex flex-col text-black pixfont uppercase text-lg wrap-break-word">
            {{enemy.name}}
        </div>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    enemy: Enemy,
    friend: Friend
}>()

const emit = defineEmits(['close'])

let bgClass = ref<'bg-white/70' | 'bg-white'>('bg-white/70')
onMounted(() => {
    bgClass.value = prop.enemy.targetOf?.name === prop.friend.name ? 'bg-white' : 'bg-white/70'
})

function handleClick() {
    clickSFX()
    useCurrentBattleStore().currentEnemies.forEach((enemy: Enemy) => {
        if (enemy.targetOf?.name === prop.friend.name) {
            enemy.targetOf = null
        }
    })
    prop.enemy.targetOf = prop.friend
    console.log(JSON.parse(JSON.stringify(useCurrentBattleStore().currentEnemies)))
    emit('close', prop.enemy.name)
}
</script>

<style scoped>

</style>