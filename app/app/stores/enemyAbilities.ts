export function shrink(user?: Enemy[]) {
    if (user) {
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)
        enemyUser!.currentMana -= enemyUser!.manaCost
        enemyUser!.shrinkCount++
    } else {
        let playerUser = useCampaignSaveStore()

        //@ts-ignore
        let friendFound: Friend = useBattleGuiStore().notSelectedFriends.find((f: Friend) => f.abilityName === 'Shrink')
        if (friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound.name].manaCost
            playerUser.shrinkCount++
        }
    }
}

export function multiWielding(user?: Enemy[]) {
    useCurrentBattleStore().animation.name = 'multiwielding'
    useCurrentBattleStore().animation.playing = true

    if (user) {
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)
        enemyUser!.currentMana -= enemyUser!.manaCost
        useCurrentBattleStore().animation.doneByEnemy = true
        if (enemyUser) {
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
        }

    } else {
        let playerUser = useCampaignSaveStore()
        useCurrentBattleStore().animation.doneByEnemy = false

        //@ts-ignore
        let friendFound: Friend = useBattleGuiStore().fullFriendsList.find((f: Friend) => f.abilityName === "MultiWielding")

        if (friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound.name].manaCost
            const target = useCurrentBattleStore().singleTargetPairs.find((p: (Enemy | Friend)[]) => p[1]!.name === friendFound.name)![0]
            if (!target) return

            console.log(target)

            setTimeout(() => { attack(['user', target, 0.8]) }, 300)
            setTimeout(() => { attack(['user', target, 0.5]) }, 1300)
            setTimeout(() => { attack(['user', target, 0.2]) }, 2300)
        }
    }
}

export function ballRam(user: Enemy[]) {
    let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)!
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'ballRam'
    useCurrentBattleStore().animation.doneByEnemy = true
    enemyUser.currentMana -= enemyUser.manaCost
    setTimeout(() => {
        attack([enemyUser, 'user', 1.15])
    }, 400)
}

export function mangoConsumption(user?: Enemy[]) {
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'mangoConsumption'
    if (user) {
        useCurrentBattleStore().animation.doneByEnemy = true
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)
        enemyUser!.currentMana -= enemyUser!.manaCost
        if (enemyUser) {
            enemyUser.currentHP = Math.round(Math.min(enemyUser.currentHP + .4 * enemyUser.maxHP, enemyUser.maxHP))
        }
    } else {
        let playerUser = useCampaignSaveStore()
        useCurrentBattleStore().animation.doneByEnemy = false

        //@ts-ignore
        let friendFound: Friend = useBattleGuiStore().notSelectedFriends.find((f: Friend) => f.abilityName === 'Shrink')
        if (friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound.name].manaCost
            let healFactor = Math.round(0.4*(playerUser.maxHP))
            playerUser.currentHP = Math.min(playerUser.currentHP + healFactor, playerUser.maxHP)
        }
    }
}

export function moonPrincessHalation(user?: Enemy[]) {
    let enemyUser = null
    if(user) {
        enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user![0]!.name)
    }
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'moonPrincessHalation'
    if (enemyUser) {
        useCurrentBattleStore().animation.doneByEnemy = true
        enemyUser.currentMana -= enemyUser.manaCost
        setTimeout(() => {
            attack([enemyUser, 'user', 1.2])
        }, 1800)
    } else {
        useCurrentBattleStore().animation.doneByEnemy = false
        let friendFound: Friend = useBattleGuiStore().notSelectedFriends.find((f: Friend) => f.abilityName === 'Moon Princess Halation')!
        if (friendFound) {
            useCampaignSaveStore().currentMana -= friendFound.manaCost
        }

        let damageMultis: number[] = [1.8, 1.5, 1.2, 1]
        let length = useCurrentBattleStore().currentEnemies.length < 5 ? useCurrentBattleStore().currentEnemies.length : 4
        let damageMulti: number = damageMultis[length-1]!

        setTimeout(() => {
            useCurrentBattleStore().currentEnemies.forEach((e: Enemy) => {
                attack(['user', e, damageMulti])
            })
        }, 1800)
    }
}

export function lemonRebirth(user: Enemy[]) {
    let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)!
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'lemonRebirth'
    useCurrentBattleStore().animation.doneByEnemy = true
    if (enemyUser) {
        enemyUser.maxHP = Math.floor(enemyUser.maxHP * 1.1)
        enemyUser.defense = Math.floor(enemyUser.defense * 1.1)
        enemyUser.attack = Math.floor(enemyUser.attack * 1.1)
        enemyUser.maxMana = Math.floor(enemyUser.maxMana * 1.1)
    }
}

export function grassCut(user:Enemy[]) {
    let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)!
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'ballRam'
    useCurrentBattleStore().animation.doneByEnemy = true
    enemyUser.currentMana -= enemyUser.manaCost
    setTimeout(() => {
        attack([enemyUser, 'user', 0.9])
    }, 400)
    setTimeout(() => {
        attack([enemyUser, 'user', 0.9])
    }, 400)
}