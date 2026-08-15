export const useCampaignSaveStore = defineStore('campaign', {
    state: () => ({
        playerName: "Joey",
        playerLevel: 1,
        gameState: 0,
        friends: [] as string[],
        friendsData: [] as Friend[],
        sprite: "/public/images/joey.png" as string,
        currentStatus: null as Status | null,

        isBlocking: false,

        attack: 120 as number,
        defense: 0 as number,
        currentHP: 80 as number,
        maxHP: 80 as number,
        friendSlots: 1 as number,
        expGained: 0 as number,
        maxMana: 60 as number,
        currentMana: 60 as number,
        shrinkCount: 0 as number,
        consecutiveBlocks: 0 as number,

        playerLevelData: {
            1: { attack: 120, defense: 0, maxHP: 80, maxMana: 60, expRequirement: 0 },
            2: { attack: 180, defense: 5, maxHP: 120, maxMana: 90, expRequirement: 100 },
            3: { attack: 250, defense: 17, maxHP: 160, maxMana: 120, expRequirement: 220 },
            4: { attack: 300, defense: 20, maxHP: 160, maxMana: 160, expRequirement: 340 },
            5: { attack: 400, defense: 30, maxHP: 220, maxMana: 200, expRequirement: 500 },
        } as Record<number, LevelStats>,
    }),
    actions: {
        loadFromLocalStorage() {
            if (typeof window === "undefined") return
            this.playerName = localStorage.getItem("name") || "Joey"
            this.playerLevel = Number(localStorage.getItem("playerLevel")) || 1
            this.gameState = Number(localStorage.getItem("gameState")) || 0
            //@ts-ignore
            this.friends = [...new Set(JSON.parse(localStorage.getItem("friends") || "[]"))]
            this.currentStatus = JSON.parse(localStorage.getItem("status") || "null") || null
            this.maxHP = this.playerLevelData[this.playerLevel]!.maxHP
            this.maxMana  = Number(localStorage.getItem("maxMana") || this.playerLevelData[this.playerLevel]!.maxMana)
            this.currentHP = this.maxHP
            this.currentMana = this.maxMana
            this.attack = this.playerLevelData[this.playerLevel]!.attack
            this.defense = this.playerLevelData[this.playerLevel]!.defense
            this.friendSlots = this.playerLevel
            this.expGained = Number(localStorage.getItem("expGained")) || this.playerLevelData[this.playerLevel]!.expRequirement
            this.shrinkCount = Number(localStorage.getItem("shrinkCount") || 0)
            this.loadFriends()
        },
        listenLevelUp() {
            let potentialLevelUp = true
            while (potentialLevelUp) {
                if (this.playerLevel >= 5) {
                    potentialLevelUp = false
                    break
                }
                const nextLevel = this.playerLevel + 1
                if (this.expGained > this.playerLevelData[nextLevel]!.expRequirement) {
                    this.playerLevel++
                    this.changeStats()
                    this.saveGame()
                } else {
                    potentialLevelUp = false
                }
            }
        },
        loadFriends() {
            const friendsList = this.friends
            const friendsStore = useFriendsStore()
            friendsList.forEach((friend:string) => {
                //@ts-ignore
                if(!this.friendsData.find((person) => person.name === friend)) this.friendsData.push(friendsStore[friend])
            })
        },
        saveGame() {
            localStorage.setItem("playerLevel", this.playerLevel.toString())
            localStorage.setItem("name", this.playerName);
            localStorage.setItem("level", (this.playerLevel).toString())
            localStorage.setItem("gameState", (this.gameState).toString())
            localStorage.setItem("friends", JSON.stringify(this.friends))
            localStorage.setItem("currentHP", (this.maxHP).toString())
            localStorage.setItem("maxHP", (this.maxHP).toString())
            localStorage.setItem("maxMana", (this.maxMana).toString())
            localStorage.setItem("currentMana", (this.maxMana).toString())
            localStorage.setItem("attack", (this.attack).toString())
            localStorage.setItem("defense", (this.defense).toString())
            localStorage.setItem("expGained", (this.expGained).toString())
            localStorage.setItem("shrinkCount", this.shrinkCount.toString())
        },
        changeStats() {
            if (this.playerLevel > 5) {
                this.playerLevel = 5
            }

            this.attack = this.playerLevelData[this.playerLevel]!.attack
            this.defense = this.playerLevelData[this.playerLevel]!.defense
            this.maxMana = this.playerLevelData[this.playerLevel]!.maxMana
            this.currentMana = this.playerLevelData[this.playerLevel]!.maxMana
            this.currentHP = this.playerLevelData[this.playerLevel]!.maxHP
            this.maxHP = this.currentHP
        },
    }
})