<template>
    <div class="min-w-[50%]">
            <div class="relative w-full border-2 bg-slate-900 h-10 transition-all duration-200 ease-out overflow-hidden"
    :class="[borderClass, (prop.isEXP || prop.isMana) ? 'rounded-md' : '']"
>
        <div class="absolute h-full max-w-full dialogue-font py-2" :class="HPColor, (prop.isEXP || prop.isMana) ? 'rounded-sm' : ''" :style="{width: (displayedHP / maxHP)*100 + `%`}">
            
        </div>
        <p class="absolute w-full h-full flex p-1.5 font-extrabold dialogue-font text-lg transition-colors duration-200 ease-in-out" :class="textClass">{{ prop.isEXP ? `To LV. ${prop.nextLevel}:  ` : '' }} {{ displayedHP }} / {{ maxHP }}</p>
    </div>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    maxHP: number,
    currentHP: number,
    isEXP?: boolean,
    isMana?: boolean,
    nextLevel?: number,
}>()

const borderClass = ref<'border-red-200' | 'border-emerald-200' | 'border-white'>('border-white')
const textClass = ref<'text-red-200' | 'text-emerald-200' | 'text-white'>('text-white')

// this is what actually gets displayed/used for the bar width
const displayedHP = ref(prop.currentHP)

let tickInterval: ReturnType<typeof setInterval> | null = null

const HPPercentage = computed(() => {
    return (displayedHP.value / prop.maxHP) * 100
})

const HPColor = computed(() => {
    if(!prop.isEXP && !prop.isMana) {
    if (HPPercentage.value >= 80) return 'bg-emerald-700'
    else if (HPPercentage.value >= 50) return 'bg-amber-600'
    else if (HPPercentage.value >= 15) return 'bg-orange-600'
    else return 'bg-red-700'
    }
    else if(prop.isEXP) return 'bg-emerald-700'
    else if(prop.isMana) return 'bg-sky-500'
})

watch(() => prop.currentHP, async (newVal, oldVal) => {
    if (tickInterval) clearInterval(tickInterval)
        borderClass.value = newVal > oldVal ? 'border-emerald-200' : 'border-red-200'
        textClass.value = newVal > oldVal ? 'text-emerald-200' : 'text-red-200'
    setTimeout(() => {
        borderClass.value = 'border-white'
        textClass.value = 'text-white'
    }, 800)

    const direction = newVal > oldVal ? 1 : -1

    tickInterval = setInterval(() => {
        displayedHP.value += direction

        if (displayedHP.value === newVal) {
            clearInterval(tickInterval!)
            tickInterval = null
        }
    }, 5)
})

onUnmounted(() => {
    if (tickInterval) clearInterval(tickInterval)
})
</script>

<style scoped>

</style>