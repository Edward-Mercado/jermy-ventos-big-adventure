export const useCurrentBattleStore = defineStore('currentbattle', {
    state: () => ({
        currentEnemies: [] as Enemy[],
        columboActive: false as boolean,
        usedAbilities: [] as Friend[],
        usedMove: null as (null | 'Attack' | 'Block')
    }),
    actions: {
        initialize(currentStateKey:string) {
            const battlesStore = useBattleStore()
            battlesStore[currentStateKey]?.enemies.forEach((enemy:EnemyData) => {
                let enemyConstructor:any = enemy
                enemyConstructor.nextMove = null
                enemyConstructor.targetOf = [] as Friend[]
                this.currentEnemies.push(enemyConstructor as Enemy)
            })
        },

        enemyChooseMove(enemy:Enemy) {
            const playerStore = useCampaignSaveStore()
            if(enemy.abilityType === 'offense') {
                    if(Math.random() < 0.85) enemy.nextMove = 'Attack' // 85% chance attack
                    else enemy.nextMove = 'Block' // 15% chance defense
                    if(enemy.currentHP / enemy.maxHP < 0.2) enemy.nextMove = 'Block' // always block if HP less than 20%
                    if(playerStore.currentHP / playerStore.maxHP < 0.2) enemy.nextMove = 'Attack' // always attack if player HP is less than 20%
                } else {
                    if(Math.random() < 0.85) enemy.nextMove = 'Block' // 85% chance attack
                    else enemy.nextMove = 'Attack' // 15% chance defense
                    if(playerStore.currentHP / playerStore.maxHP < 0.2) enemy.nextMove = 'Attack' // always attack if player HP is less than 20%
                    if(enemy.currentHP / enemy.maxHP < 0.2) enemy.nextMove = 'Block' // always block if HP less than 20%
                }
            if(enemy.currentMana > enemy.manaCost) {
                if(enemy.manaCost) {
                    let abilityChance = Math.min(((enemy.manaCost / enemy.currentMana) + .2), 1) // higher chance the more mana the enemy has
                    if(Math.random() < abilityChance) enemy.nextMove = 'Use Ability'
                } else enemy.nextMove = 'Use Ability'
            }
        },

        populateUserChoices(abilities:Friend[], move:("Attack" | "Block")) {
            this.usedAbilities = abilities
            this.usedMove = move
        },

        compileTurnData() {
            const resultingActions = [] as BattleEvent[]
            if(this.usedMove === "Block") resultingActions.push({
                user: "Joey",
                spriteURL: "/images/joey.png",
                flavorText: "You got ready to block incoming attacks!",
                action: blockAttacks
            })
            this.usedAbilities.filter((possibleAbility:Friend) => possibleAbility.abilityTiming==='Before Turn')
            .forEach((friend:Friend) => {
                resultingActions.push({
                    user: friend.name,
                    spriteURL: friend.spriteURL,
                    flavorText: `I cast ${friend.abilityName}!`,
                    action: friend.ability
                })
            })
            this.currentEnemies.forEach((enemy:Enemy) => {
                if(enemy.nextMove === "Attack") resultingActions.push({
                    user: enemy.name,
                    spriteURL: enemy.img,
                    flavorText: `I'm going to attack you!`,
                    action: attack
                })
            })
        },


    }
})