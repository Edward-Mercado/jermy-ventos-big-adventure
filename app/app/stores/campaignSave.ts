export const useCampaignSaveStore = defineStore('savefile', {
    state: () => ({
        playerName: localStorage.getItem("name") || "Joey",
        playerLevel: Number(localStorage.getItem("playerLevel")) || 1,
        gameState: Number(localStorage.getItem("gameState")) || 1, // what level or cutscene the player is on
        friends: JSON.parse(localStorage.getItem("friends") || "[]"), // list of friend names
        friendsData: [] as Friend[],
        sprite: "/public/images/joey.png" as string,
        currentStatus: localStorage.getItem("status") || null,

        // based on level
        attack: 15 as number, // base damage
        defense: 0 as number, // & damage neg
        currentHP: 100 as number,
        maxHP: 100 as number,
        friendSlots: 1 as number, // level
        expGained: 0 as number,

        playerLevelData: {
            1: { attack: 10, defense: 0, maxHP: 80, expRequirement: 0 },
            2: { attack: 16, defense: 5, maxHP: 120, expRequirement: 100 },
            3: { attack: 25, defense: 17, maxHP: 160, expRequirement: 220 },
            4: { attack: 30, defense: 20, maxHP: 160, expRequirement: 340 },
            5: { attack: 40, defense: 30, maxHP: 220, expRequirement: 500 },
        } as Record<number, LevelStats>,
    }),
    actions: {
        changeStats() {
            if (this.playerLevel > 5) {
                this.playerLevel = 5
            }
            const currentHPPercent: number = this.currentHP / this.maxHP;

            [this.attack, this.defense, this.maxHP, this.currentHP, this.friendSlots] =
                [this.playerLevelData[this.playerLevel]!.attack,
                this.playerLevelData[this.playerLevel]!.defense,
                this.playerLevelData[this.playerLevel]!.maxHP,
                Math.floor(this.playerLevelData[this.playerLevel]!.maxHP * currentHPPercent),
                this.playerLevel]
        },
        listenLevelUp() {
            if (this.playerLevel !== 5) {
                const nextLevel = (this.playerLevel + 1)
                //@ts-ignore
                if (this.expGained > this.playerLevelData![nextLevel].expRequirement) {
                    this.playerLevel += 1
                    this.changeStats()
                }
            }
        },
        loadFriends() { // lowers the burden on localStorage
            const friendsList = JSON.parse(localStorage.getItem("friends") || "[]")
            const friendsStore = useFriendsStore()
            friendsList.forEach((friend: string) => {
                //@ts-ignore
                this.friendsData.push(friendsStore.friend)
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