export function shrink(user:Enemy[]) {
    if(isEnemy(user[0]!)) {
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.name===user[0]!.name)
        enemyUser!.shrinkCount++
    } else {
        let playerUser = useCampaignSaveStore()
        playerUser.shrinkCount++
    }
}