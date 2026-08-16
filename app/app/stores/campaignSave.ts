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
            1: { attack: 12, defense: 0, maxHP: 70, maxMana: 60, expRequirement: 0 },
            2: { attack: 18, defense: 5, maxHP: 90, maxMana: 90, expRequirement: 120 },
            3: { attack: 25, defense: 8, maxHP: 110, maxMana: 100, expRequirement: 250 },
            4: { attack: 30, defense: 10, maxHP: 120, maxMana: 130, expRequirement: 400 },
            5: { attack: 40, defense: 13, maxHP: 130, maxMana: 150, expRequirement: 600 },
            6: { attack: 42, defense: 16, maxHP: 137, maxMana: 160, expRequirement: 800 },
            7: { attack: 44, defense: 18, maxHP: 143, maxMana: 169, expRequirement: 1020 },
            8: { attack: 45, defense: 20, maxHP: 149, maxMana: 177, expRequirement: 1260 },
            9: { attack: 47, defense: 23, maxHP: 155, maxMana: 185, expRequirement: 1520 },
            10: { attack: 49, defense: 25, maxHP: 160, maxMana: 193, expRequirement: 1800 },
            11: { attack: 50, defense: 27, maxHP: 165, maxMana: 200, expRequirement: 2100 },
            12: { attack: 51, defense: 28, maxHP: 170, maxMana: 207, expRequirement: 2420 },
            13: { attack: 53, defense: 30, maxHP: 174, maxMana: 213, expRequirement: 2760 },
            14: { attack: 54, defense: 32, maxHP: 178, maxMana: 219, expRequirement: 3120 },
            15: { attack: 55, defense: 33, maxHP: 182, maxMana: 224, expRequirement: 3500 },
            16: { attack: 56, defense: 34, maxHP: 185, maxMana: 229, expRequirement: 3900 },
            17: { attack: 57, defense: 35, maxHP: 188, maxMana: 233, expRequirement: 4320 },
            18: { attack: 57, defense: 36, maxHP: 191, maxMana: 237, expRequirement: 4760 },
            19: { attack: 58, defense: 37, maxHP: 193, maxMana: 240, expRequirement: 5220 },
            20: { attack: 59, defense: 38, maxHP: 195, maxMana: 243, expRequirement: 5700 },
            21: { attack: 59, defense: 39, maxHP: 197, maxMana: 245, expRequirement: 6200 },
            22: { attack: 59, defense: 39, maxHP: 198, maxMana: 247, expRequirement: 6720 },
            23: { attack: 60, defense: 40, maxHP: 199, maxMana: 249, expRequirement: 7260 },
            24: { attack: 60, defense: 40, maxHP: 200, maxMana: 250, expRequirement: 7820 },
            25: { attack: 60, defense: 40, maxHP: 200, maxMana: 250, expRequirement: 8400 },
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
            this.maxMana = Number(localStorage.getItem("maxMana") || this.playerLevelData[this.playerLevel]!.maxMana)
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
                if (this.playerLevel >= 25) {
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
            friendsList.forEach((friend: string) => {
                //@ts-ignore
                if (!this.friendsData.find((person) => person.name === friend)) this.friendsData.push(friendsStore[friend])
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