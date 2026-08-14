export function shrink(user?:Enemy[]) {
    if(user) {
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.name===user[0]!.name)
        enemyUser!.currentMana -= enemyUser!.manaCost
        enemyUser!.shrinkCount++
    } else {
        let playerUser = useCampaignSaveStore()

        //@ts-ignore
        let friendFound:Friend = useCampaignSaveStore().friends
        if(friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound].manaCost
        }
        playerUser.shrinkCount++
    }
}