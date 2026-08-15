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

let bgClass = ref<'bg-sky-200' | 'bg-white/50'>('bg-white/50')
onMounted(() => {
    bgClass.value = prop.enemy.targetOf.find((friend:Friend) => friend.name === prop.friend.name) ? 'bg-sky-200' : 'bg-white/50'
})
watch(() => prop.enemy.targetOf, () => {
    bgClass.value = prop.enemy.targetOf.find((friend:Friend) => friend.name === prop.friend.name) ? 'bg-sky-200' : 'bg-white/50'
})

function handleClick() {
    clickSFX()
    useCurrentBattleStore().currentEnemies.forEach((enemy: Enemy) => {
        if (enemy.targetOf?.find((friend:Friend) => friend.name === prop.friend.name)) {
            enemy.targetOf = enemy.targetOf.filter((friend:Friend) => friend.name !== prop.friend.name)
        }
    })
    useCurrentBattleStore().currentEnemies.forEach((enemy: Enemy) => {
        if (enemy.name === prop.enemy.name) enemy.targetOf.push(prop.friend); prop.enemy.targetOf.push(prop.friend)
        enemy.targetOf = [... new Set(enemy.targetOf)]
        prop.enemy.targetOf = [... new Set(prop.enemy.targetOf)]
    }) 
}
</script>

<style scoped>

</style>