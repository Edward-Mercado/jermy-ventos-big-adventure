<template>
    <div class="h-screen w-screen fixed z-18">
        <animations-multiwielding v-if="animationName='multiwielding'" :done-by-enemy="doneByEnemy"></animations-multiwielding>
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