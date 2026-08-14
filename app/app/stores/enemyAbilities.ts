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
    if(user) {
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.name===user[0]!.name)
        enemyUser!.currentMana -= enemyUser!.manaCost

        setTimeout(() => {
                attack([enemyUser!, 'user',
                0.6
            ])
            }, 0)
            setTimeout(() => {
                attack([enemyUser!, 'user',
                0.4
            ])
            }, 1000)
            setTimeout(() => {
                attack([enemyUser!, 'user',
                0.2
            ])
            }, 1500)

    } else {
        let playerUser = useCampaignSaveStore()

        //@ts-ignore
        let friendFound:Friend = useBattleGuiStore().notSelectedFriends.find((f:Friend) => f.abilityName === 'MultiWielding')

        if(friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound].manaCost
            setTimeout(() => {
                attack(['user', 
                useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.targetOf.find((target:Friend) => target.abilityName === 'MultiWielding'))!,
                1.2
            ])
            }, 500)
            setTimeout(() => {
                attack(['user', 
                useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.targetOf.find((target:Friend) => target.abilityName === 'MultiWielding'))!,
                0.6
            ])
            }, 1000)
            setTimeout(() => {
                attack(['user', 
                useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.targetOf.find((target:Friend) => target.abilityName === 'MultiWielding'))!,
                0.3
            ])
            }, 1500)
        }
    }
}