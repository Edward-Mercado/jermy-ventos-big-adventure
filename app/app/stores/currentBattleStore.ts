export const useCurrentBattleStore = defineStore('current-battle', {
    state: () => ({
        currentEnemies: [] as Enemy[],
        columboActive: false as boolean,
    }),
    actions: {
        initialize(currentStateKey:string) {
            const battlesStore = useBattleStore()
            battlesStore[currentStateKey]?.enemies.forEach((enemy:EnemyData) => {
                let enemyConstructor:any = enemy
                enemyConstructor.nextMove = null
                enemyConstructor.targetOf = null
                this.currentEnemies.push(enemyConstructor as Enemy)
            })
        }
    }
})