export const useEndlessStore = defineStore('endless', {
    state: () => ({
        gameState: 0 as number,
        difficultyMultiplier: 0.4 as number,
        friendsAccquired: [] as string[],
        friendsData: [] as Friend[],
        highScore: 0 as number,
        endlessExp: 0 as number
    }),
    actions: {
        loadFromLocalStorage() {
            this.gameState = Number(localStorage.getItem('endlessState') || "0")
            this.friendsAccquired = JSON.parse(localStorage.getItem("endlessFriends") || "[]")
            this.difficultyMultiplier = (this.gameState/10) + .4
            this.highScore = Number(localStorage.getItem("highScore") || "0")
            this.endlessExp = Number(localStorage.getItem('endlessExp') || "0")

            const friendsList = this.friendsAccquired
            const friendsStore = useFriendsStore()
            friendsList.forEach((friend: string) => {
                //@ts-ignore
                if (!this.friendsData.find((person) => person.name === friend)) this.friendsData.push(friendsStore[friend])
            })
        },
        
        saveGame() {
            localStorage.setItem("endlessExp", this.endlessExp.toString())
            localStorage.setItem("endlessState", this.gameState.toString())
            localStorage.setItem("highScore", this.highScore.toString())
            localStorage.setItem('endlessFriends', JSON.stringify(this.friendsAccquired))
        },

        loadFriends() {
            const friendsList = this.friendsAccquired
            const friendsStore = useFriendsStore()
            friendsList.forEach((friend: string) => {
                //@ts-ignore
                if (!this.friendsData.find((person) => person.name === friend)) this.friendsData.push(friendsStore[friend])
            })
        },
    }
})