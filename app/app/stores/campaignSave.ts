export const useCampaignSaveStore = defineStore('campaign', {
    state: () => ({
        playerName: "Joey",
        playerLevel: 1,
        gameState: 0,
        friends: ['Noure'] as string[],
        friendsData: [] as Friend[],
        sprite: "/public/images/joey.png" as string,
        currentStatus: null as Status | null,

        attack: 15 as number,
        defense: 0 as number,
        currentHP: 80 as number,
        maxHP: 80 as number,
        friendSlots: 1 as number,
        expGained: 0 as number,
        maxMana: 60 as number,
        currentMana: 60 as number,

        playerLevelData: {
            1: { attack: 10, defense: 0, maxHP: 80, maxMana: 60, expRequirement: 0 },
            2: { attack: 16, defense: 5, maxHP: 120, maxMana: 90, expRequirement: 100 },
            3: { attack: 25, defense: 17, maxHP: 160, maxMana: 120, expRequirement: 220 },
            4: { attack: 30, defense: 20, maxHP: 160, maxMana: 160, expRequirement: 340 },
            5: { attack: 40, defense: 30, maxHP: 220, maxMana: 200, expRequirement: 500 },
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
            this.currentHP = Number(localStorage.getItem("currentHP")) || this.playerLevelData[this.playerLevel]!.maxHP
            this.attack = this.playerLevelData[this.playerLevel]!.attack
            this.defense = this.playerLevelData[this.playerLevel]!.defense
            this.friendSlots = this.playerLevel
            this.expGained = Number(localStorage.getItem("expGained")) || this.playerLevelData[this.playerLevel]!.expRequirement
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
            localStorage.setItem("name", this.playerName);
            localStorage.setItem("level", (this.playerLevel).toString())
            localStorage.setItem("gameState", (this.gameState).toString())
            localStorage.setItem("friends", JSON.stringify(this.friends))
            localStorage.setItem("currentHP", (this.currentHP).toString())
            localStorage.setItem("maxHP", (this.currentHP).toString())
            localStorage.setItem("attack", (this.attack).toString())
            localStorage.setItem("defense", (this.defense).toString())
            localStorage.setItem("expGained", (this.expGained).toString())
        },
        changeStats() {
            if (this.playerLevel > 5) {
                this.playerLevel = 5
            }
            const currentHPPercent: number = this.currentHP / this.maxHP;
            const currentManaPercent: number = this.currentMana / this.maxMana;

            [this.attack, this.defense, this.maxHP, this.currentHP, this.friendSlots, this.maxMana, this.currentMana] = [this.playerLevelData[this.playerLevel]!.attack,
            this.playerLevelData[this.playerLevel]!.defense,
            this.playerLevelData[this.playerLevel]!.maxHP,
            Math.floor(this.playerLevelData[this.playerLevel]!.maxHP * currentHPPercent),
            this.playerLevel,
            this.playerLevelData[this.playerLevel]!.maxMana,
            Math.floor(this.playerLevelData[this.playerLevel]!.maxMana * currentManaPercent)
            ]
        },
    }
})