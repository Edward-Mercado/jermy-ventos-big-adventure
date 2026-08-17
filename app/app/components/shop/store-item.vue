<template>
    <div class="w-full h-[20%] rounded-2xl my-4 justify-between
    transition-all duration-300 ease-in-out flex gap-2 p-2 hover:-translate-y-1 active:translate-y-0.5"
    :class="selected ? 'bg-white hover:bg-sky-100 active:bg-sky-200' : 'bg-slate-900 hover:bg-slate-800 active:bg-sky-700'">
    <img :src="item.img" :alt="item.name">
    <div class="h-full flex flex-col justify-between">
        <p class="text-2xl pixfont uppercase text-sky-200 text-right" :class="selected ? 'text-sky-900' : 'text-sky-200'">{{ item.name }}</p>
        <p v-if="item.stats" class="text-3xl dialogue-font uppercase text-right" :class="selected ? 'text-sky-900' : 'text-sky-200'">+{{ item.stats.attack }}Atk, +{{ item.stats.defense }}Def</p>
        <p v-if="item.abilityName" class="text-3xl dialogue-font uppercase text-right" :class="selected ? 'text-sky-900' : 'text-sky-200'">{{ item.abilityName }}</p>
    </div>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    item: storeItem,
    selected: boolean
}>()
</script>

<style scoped>

</style>