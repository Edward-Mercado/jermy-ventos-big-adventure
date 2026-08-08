<template>
  <div class="bg-white/10 h-[80%] w-[90%] top-[10%] absolute border-4 border-slate-800 shadow-xl overflow-hidden">
    <img
      :key="currentLine.backgroundURL"
      :src="currentLine.backgroundURL"
      :class="opacityClass"
      class="transition-opacity min-w-full min-h-full duration-200 ease-in-out select-none bottom-0 absolute"
    />

    <Transition :name="currentLine.animation?.transform" appear>
      <div @animationend=""
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
if(props.currentLine.animation?.animationType === 'img') {
    console.log(props.currentLine.animation.src)
}

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

.birthday-beam-enter-from,
.birthday-beam-leave-to {
  width: 0vw;
  right: 100vw;
}

.birthday-beam-enter-to,
.birthday-beam-leave-from {
  width: 80vw;
  right: 20vw;
}

.birthday-beam-enter-active,
.birthday-beam-leave-active {
  transition: all v-bind(animationSpeed) ease;
}

.stink-enter-from,
.stink-leave-to {
  opacity: 1;
  translate: 0 100%;
}

.stink-enter-to,
.stink-leave-from {
  opacity: 0.5;
  translate: 0 0
}

.stink-enter-active,
.stink-leave-active {
  transition: all v-bind(animationSpeed) ease;
}

.killJoevil-enter-from,
.killJoevil-leave-to {
  opacity: 0;
  width: 0;
  height: 0;
}

.killJoevil-leave-from,
.killJoevil-enter-to {
  opacity: 1;
  width: 20vw;
  height: 20vw;
}

.killJoevil-enter-active {
  transition: all ease-in-out 1000ms
}

.flashbang-enter-from,
.flashbang-leave-to {
  opacity: 0;
}

.flashbang-leave-from,
.flashbang-enter-to {
  opacity: 1;
}

.flashbang-enter-active {
  transition: all ease-in-out 2s
}
</style>