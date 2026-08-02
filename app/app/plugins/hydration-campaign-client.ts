export default defineNuxtPlugin(() => {
    const campaignStore = useCampaignSaveStore()
    campaignStore.loadFromLocalStorage()
})