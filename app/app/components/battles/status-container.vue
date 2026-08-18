<template>
    <div class="absolute top-4 right-[5%] rounded-2xl dialogue-font text-black uppercase w-[40%] h-10 flex items-center transition-all ease-in-out justify-center border-4" :class="colors[status.name]">
        <p class="text-white dialogue-font font-black">{{ status.name }}: {{ status.length }}</p>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    status: Status
}>()

let colors: Record<string, string> = {
    'Confusion': 'bg-purple-600 border-purple-700',
    'Buff Truth': 'bg-sky-300 border-blue-500',
    'Drifting': 'bg-red-500 border-red-700',
    "Will Revive": "bg-green-400 border-emerald-600",
    "Sleep": 'bg-yellow-500 border-amber-600',
}
</script>

<style scoped>
</style>