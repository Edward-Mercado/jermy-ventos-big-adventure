<template>
    <img :src="prop.currentLine.backgroundURL" class="absolute bg-white h-[80%] w-[90%] top-[10%] border-4 border-slate-800 shadow-xl">
        
    </img>
</template>

<script setup lang="ts">
const prop = defineProps<{
    currentLine: DialogueLine
}>()
</script>

<style scoped>

</style>