<template>
    <div class="h-screen w-screen fixed z-18">
        <animations-multiwielding v-if="animationName==='multiwielding'" :done-by-enemy="doneByEnemy"></animations-multiwielding>
        <animations-ball-ram v-if="animationName==='ballRam'" :done-by-enemy="doneByEnemy"></animations-ball-ram>
        <animations-mango-consumption v-if="animationName==='mangoConsumption'" :done-by-enemy="doneByEnemy"></animations-mango-consumption>
        <animations-lemon-rebirth v-if="animationName==='lemonRebirth'" :done-by-enemy="doneByEnemy"></animations-lemon-rebirth>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    animationName?: string | null,
    doneByEnemy?: boolean
}>()
</script>

<style scoped>

</style>