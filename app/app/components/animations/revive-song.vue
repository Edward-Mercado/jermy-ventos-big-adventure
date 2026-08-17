<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center" :class="doneByEnemy ? 'scale-x-[-1]' : ''">
        
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
onMounted(() => mounted.value = true)

setTimeout(() => {
    mounted.value = false
}, 1700)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 2000)
</script>

<style scoped>

</style>