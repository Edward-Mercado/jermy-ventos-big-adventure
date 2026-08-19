<template>
    <div class="bg-slate-200 rounded-2xl w-full h-[90%] overflow-y-scroll flex flex-col items-center justify-stat gap-6 p-4">
        <endless-friend-item v-for="friend in friends" :friend="friend"></endless-friend-item>
    </div>
</template>

<script setup lang="ts">
const friends = computed(() => {
    return useEndlessStore().friendsAccquired
})
</script>

<style scoped>

</style>