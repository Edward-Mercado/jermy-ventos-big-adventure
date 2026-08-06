<template>
  <div class="bg-white/10 h-[80%] w-[90%] top-[10%] absolute border-4 border-slate-800 shadow-xl overflow-hidden">
    <img
      :key="currentLine.backgroundURL"
      :src="currentLine.backgroundURL"
      :class="opacityClass"
      class="transition-opacity min-w-full min-h-full duration-200 ease-in-out"
    />

    <Transition :name="currentLine.animation?.transform" appear>
      <div 
        v-if="currentLine.animation?.animationType === 'div'"
        :key="currentLine.animation?.classes || 'div-anim'"
        :class="['absolute top-0 h-full', currentLine.animation.classes]"
      ></div>

      <img 
        v-else-if="currentLine.animation?.animationType === 'img'"
        :key="currentLine.animation?.src"
        :src="currentLine.animation.src"
        :class="['absolute top-0 h-full', currentLine.animation.classes]"
      />
    </Transition>
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

const animationSpeed = computed(() => {
    return `${props.currentLine.speed * 5}ms`
})
</script>

<style scoped>
/* Evil Beam Animation */
.evil-beam-enter-from,
.evil-beam-leave-to {
  width: 0vw;
  left: 100vw;
}

.evil-beam-enter-to,
.evil-beam-leave-from {
  width: 80vw;
  left: 20vw;
}

.evil-beam-enter-active,
.evil-beam-leave-active {
  transition: all v-bind(animationSpeed) ease;
}
</style>