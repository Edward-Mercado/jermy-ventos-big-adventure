export function shrink(user?:Enemy[]) {
    if(user) {
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.name===user[0]!.name)
        enemyUser!.currentMana -= enemyUser!.manaCost
        enemyUser!.shrinkCount++
    } else {
        let playerUser = useCampaignSaveStore()

        //@ts-ignore
        let friendFound:Friend = useBattleGuiStore().notSelectedFriends.find((f:Friend) => f.abilityName === 'Shrink')
        if(friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound.name].manaCost
            playerUser.shrinkCount++
        }
    }
}

export function multiWielding(user?:Enemy[]) {
    useCurrentBattleStore().animation.name = 'multiwielding'
    useCurrentBattleStore().animation.playing = true

    if(user) {
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.name===user[0]!.name)
        enemyUser!.currentMana -= enemyUser!.manaCost
        useCurrentBattleStore().animation.doneByEnemy = true
        setTimeout(() => {
                attack([enemyUser!, 'user',
                0.6
            ])
            }, 300)
            setTimeout(() => {
                attack([enemyUser!, 'user',
                0.4
            ])
            }, 1300)
            setTimeout(() => {
                attack([enemyUser!, 'user',
                0.2
            ])
            }, 2300)

    } else {
        let playerUser = useCampaignSaveStore()
        useCurrentBattleStore().animation.doneByEnemy = false
        
        //@ts-ignore
        let friendFound:Friend = useBattleGuiStore().notSelectedFriends.find((f:Friend) => f.abilityName === 'MultiWielding')

        if(friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound].manaCost
            setTimeout(() => {
                attack(['user', 
                useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.targetOf.find((target:Friend) => target.abilityName === 'MultiWielding'))!,
                0.8
            ])
            }, 300)
            setTimeout(() => {
                attack(['user', 
                useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.targetOf.find((target:Friend) => target.abilityName === 'MultiWielding'))!,
                0.5
            ])
            }, 1300)
            setTimeout(() => {
                attack(['user', 
                useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.targetOf.find((target:Friend) => target.abilityName === 'MultiWielding'))!,
                0.2
            ])
            }, 2300)
        }
    }
}