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
    'Confusion': 'bg-purple-600 border-purple-700'
}
</script>

<style scoped>
</style>