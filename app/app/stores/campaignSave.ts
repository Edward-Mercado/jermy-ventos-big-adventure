export const useCampaignSaveStore = defineStore('savefile', {
    state: () => ({
        playerName: localStorage.getItem("name") || "Joey",
        playerLevel: Number(localStorage.getItem("playerLevel")) || 1,
        gameState: Number(localStorage.getItem("gameState")) || 1, // what level or cutscene the player is on
        friends: JSON.parse(localStorage.getItem("friends") || "[]"), // list of friend names
        sprite: "/public/images/joey.png",
        currentStatus: localStorage.getItem("status") || null
    }), 
    actions: {
        loadFriends() { // lowers the burden on localStorage
            const friendsList = JSON.parse(localStorage.getItem("friends") || "[]")
            friendsList.forEach((friend:string) => {
                
            })
        },
        saveGame() {
            localStorage.setItem("name", this.playerName);
            localStorage.setItem("level", (this.playerLevel).toString())
            localStorage.setItem("gameState", (this.gameState).toString())
            localStorage.setItem("friends", this.friends)
        },
    }
})