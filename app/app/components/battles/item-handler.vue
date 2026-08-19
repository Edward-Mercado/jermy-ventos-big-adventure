<template>
    <div class="absolute w-full h-[97.9%] z-10 overflow-hidden">
        <!--pet-->
        <img v-if="pet" class="absolute left-0 bottom-[16%] w-[30%]" :class="pet.img==='/images/pet-dragon.png' ? 'scale-x-[-1] translate-y-[-20%] rotate-[-30deg]' : ''" :src="pet.img" :alt="pet.name">
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
</script>

<style scoped>

</style>