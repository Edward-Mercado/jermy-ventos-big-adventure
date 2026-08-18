export const useEndlessStore = defineStore('endless', {
    state: () => ({
        gameState: 0 as number,
        enemyWaves: []
    }),
    actions: {
        loadFromLocalStorage() {
            this.gameState = Number(localStorage.getItem('endlessState') || "0")
        }
    }
})