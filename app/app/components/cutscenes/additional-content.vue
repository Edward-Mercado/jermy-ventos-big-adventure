<template>
    <div class="bg-white/10 h-[80%] w-[90%] top-[10%] absolute border-4 border-slate-800 shadow-xl overflow-hidden"> <!--bg img-->
        <img
            :key="props.currentLine.backgroundURL"
            :src="props.currentLine.backgroundURL"
            :class="opacityClass"
            class="transition-opacity min-w-full min-h-full duration-200 ease-in-out"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    currentLine: DialogueLine
}>()

const opacityClass = ref<string>('opacity-0')

async function fadeIn() {
    opacityClass.value = 'opacity-0'
    await nextTick()
    opacityClass.value = 'opacity-100'
}

onMounted(fadeIn)

watch(() => props.currentLine.backgroundURL, fadeIn)
</script>

<style scoped></style>