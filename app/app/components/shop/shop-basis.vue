<template>
    <div v-if="currentStateKey" class="flex justify-between gap-2 h-[80%] items-center w-full">
        <img @mouseover="dialogueUp = true" @mouseleave="dialogueUp = false" :src="currentStateKey.sellerURL" alt="noure seller" class="w-[30%] h-full object-cover border-4 border-black bg-linear-to-tr from-sky-300 to-sky-200">
        <transition name="fade-up">
            <div v-if="dialogueUp" class="rounded-bl-none dialogue-font flex items-center justify-center text-center absolute bg-linear-to-tr from-sky-100 to-white border-2 border-black  left-[20%] w-[40%] h-[20%] rounded-2xl p-4 text-3xl text-black top-[10%]">
                Welcome to the {{ currentStateKey.shopName }}! {{ currentStateKey.shopDesc }}
            </div>
        </transition>
        <div class="border-black border-4 w-full h-full bg-slate-600/70 p-3 overflow-y-scroll">
            <h3 class="text-4xl pixfont text-white text-center">SELECT AN ITEM!</h3>
            <div class="w-full rounded-full bg-black h-2 my-2"></div>
            <shop-store-item v-for="item in currentStateKey.storeItems" :item="item" :selected="choiceMade === item" @click="choiceMade = item"
            ></shop-store-item>
        </div>
    </div>
    <button class="bg-slate-600/70 w-[90vw] h-[10%] fixed bottom-5 left-[5vw] border-black border-4 hover:bg-slate-800 active:bg-slate-950 shadow-md hover:shadow-lg 
    active:shadow-none transition-all duration-300 ease-in-out hover:translate-y-[-0.4vw] active:translate-y-[0.2vw] pixfont font-bold text-[3rem]"
    @click="clickSFX(); confirmChoice()"> {{ buttonText }} </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['continue'])
const campaignSaveStore = useCampaignSaveStore()
const shopStore = useShopStore()
const stateKeys = useStateKeys()
const dialogueUp = ref<boolean>(false)

const choiceMade = ref<storeItem | null>(null)
const buttonText = ref<string>("CONFIRM CHOICE")

watch(() => choiceMade.value, () => {
    buttonText.value = "CONFIRM CHOICE"
})

const currentStateKey = computed(() => {
    const key = stateKeys.keys[campaignSaveStore.gameState]?.name
    if (!key) return null

    return shopStore.$state[key as keyof typeof shopStore.$state] ?? null
})

function confirmChoice() {
    if (!choiceMade.value) {
        buttonText.value = "PICK AN OPTION BEFORE PROCEEDING"
        return
    } 
    useCampaignSaveStore().items.push(choiceMade.value)
    emit('continue')
}
</script>

<style scoped>
.fade-up-enter-from,
.fade-up-leave-to {
    opacity: 0;
    transform: translateY(70%) translateX(-10%)
}

.fade-up-enter-to,
.fade-up-leave-from {
    opacity: 1;
    transform: translateY(0%)
}

.fade-up-enter-active,
.fade-up-leave-active {
    transition: ease-out 0.5s all
}
</style>