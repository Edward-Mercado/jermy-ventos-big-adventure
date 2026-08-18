export const useEndlessStore = defineStore('endless', {
    state: () => ({
        gameState: 0 as number,
        difficultyMultiplier: 0.4 as number,
        friendsAccquired: [] as string[],
    }),
    actions: {
        loadFromLocalStorage() {
            this.gameState = Number(localStorage.getItem('endlessState') || "0")
            this.friendsAccquired = JSON.parse(localStorage.getItem("endlessFriends") || "[]")
            this.difficultyMultiplier = (this.gameState/10) + .4

            const friendsList = this.friendsAccquired
            const friendsStore = useFriendsStore()
            friendsList.forEach((friend: string) => {
                //@ts-ignore
                if (!this.friendsData.find((person) => person.name === friend)) this.friendsData.push(friendsStore[friend])
            })
        },
        saveGame() {
            localStorage.setItem("endlessState", this.gameState.toString())
            localStorage.setItem('endlessFriends', JSON.stringify(this.friendsAccquired))
        }
    }
})