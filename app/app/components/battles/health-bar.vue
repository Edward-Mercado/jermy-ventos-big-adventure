<template>
    <div class="relative w-full border-2 border-white bg-slate-900 h-[30%]">
        <div class="absolute h-full max-w-full dialogue-font py-2 transition-all duration-300 ease-in-out" :class="HPColor" :style="{width: HPPercentage + `%`}">
            
        </div>
        <p class="absolute w-full h-full flex p-2 font-extrabold dialogue-font">{{ currentHP}} / {{ maxHP }}</p>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    maxHP: number,
    currentHP: number
}>()


const HPPercentage = computed(() => {
    return (prop.currentHP/prop.maxHP)*100
})

const HPColor = computed(() => {
    if(HPPercentage.value >= 80) return 'bg-emerald-700'
    else if(HPPercentage.value >= 50) return 'bg-amber-600'
    else if (HPPercentage.value >= 15) return 'bg-orange-600'
    else return 'bg-red-700'
})

watch(() => prop.currentHP, () => {
    console.log(prop.currentHP)
})

</script>

<style scoped>

</style>