<template>
    <div class="absolute w-full h-[97.9%] bg-red-600/10 z-10 overflow-hidden">
        <!--pet-->
        <img v-if="pet" class="absolute left-2 lg:left-8 -bottom-25 lg:-bottom-33 w-80" :src="pet.img" :alt="pet.name">
        <!--shirt-->
        <img v-if="shirt" class="absolute left-2 lg:left-8 -bottom-25 lg:-bottom-33 w-80" :src="shirt.img" :alt="shirt.name">
    </div>
</template>

<script setup lang="ts">
const shirt = computed(() => {
    return useCampaignSaveStore().items.find((i:storeItem) => i.name.includes("the Shirt"))
})

const pet = computed(() => {
    return useCampaignSaveStore().items.find((i:storeItem) => i.name.includes("Pet"))
})
console.log(shirt.value)
</script>

<style scoped>

</style>