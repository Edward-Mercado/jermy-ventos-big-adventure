<template>
    <div class="h-screen w-screen fixed z-18">
        <animations-multiwielding v-if="animationName==='multiwielding'" :done-by-enemy="doneByEnemy"></animations-multiwielding>
        <animations-ball-ram v-if="animationName==='ballRam'" :done-by-enemy="doneByEnemy"></animations-ball-ram>
        <animations-mango-consumption v-if="animationName==='mangoConsumption'" :done-by-enemy="doneByEnemy"></animations-mango-consumption>
        <animations-grass-cut v-if="animationName==='grassCutting'" :done-by-enemy="doneByEnemy"></animations-grass-cut>
        <animations-lemon-rebirth v-if="animationName==='lemonRebirth'" :done-by-enemy="doneByEnemy"></animations-lemon-rebirth>
        <animations-mp-halation v-if="animationName==='moonPrincessHalation'" :done-by-enemy="doneByEnemy"></animations-mp-halation>
        <animations-mini-crossword v-if="animationName==='miniCrossword'" :done-by-enemy="doneByEnemy"></animations-mini-crossword>
        <animations-buff-lie v-if="animationName==='buffLie'" :done-by-enemy="doneByEnemy"></animations-buff-lie>
        <animations-make-it-wild v-if="animationName==='makeItWild'" :done-by-enemy="doneByEnemy"></animations-make-it-wild>
        <animations-minion-summon v-if="animationName==='minionSummon'" :done-by-enemy="doneByEnemy"></animations-minion-summon>
        <animations-alastor-summon v-if="animationName==='alastorSummon'" :done-by-enemy="doneByEnemy"></animations-alastor-summon>
        <animations-magic-ntt v-if="animationName==='magicNoseTongueTouch'" :done-by-enemy="doneByEnemy"></animations-magic-ntt>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    animationName?: string | null,
    doneByEnemy?: boolean
}>()
</script>

<style scoped>
@keyframes shaky {
    0%, 100% { transform: rotate(0deg) }
    16% {transform: rotate(5deg); }
    33% { scale: 0.9; transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
    67% { scale: 1.1; transform: rotate(-5deg);}
}



</style>