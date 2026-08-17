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
        playerUser.currentMana -= useFriendsStore().$state['Noure'].manaCost
        let target = useCurrentBattleStore().singleTargetPairs.find((p: (Enemy | Friend)[]) => p[1]!.name === 'Noure')![0]

        if (!target) target = useCurrentBattleStore().currentEnemies[0]

        console.log(target)
        setTimeout(() => { attack(['user', target, 1]) }, 300)
        setTimeout(() => { attack(['user', target, 0.6]) }, 1300)
        setTimeout(() => { attack(['user', target, 0.3]) }, 2300)    
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
            let healFactor = Math.round(0.4 * (playerUser.maxHP))
            playerUser.currentHP = Math.min(playerUser.currentHP + healFactor, playerUser.maxHP)
        }
    }
}

export function moonPrincessHalation(user?: Enemy[]) {
    let enemyUser = null
    if (user) {
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

        let damageMultis: number[] = [1.6, 1.4, 1.15, 1]
        let length = useCurrentBattleStore().currentEnemies.length < 5 ? useCurrentBattleStore().currentEnemies.length : 4
        let damageMulti: number = damageMultis[length - 1]!

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

export function grassCut(user: Enemy[]) {
    let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)!
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'grassCut'
    useCurrentBattleStore().animation.doneByEnemy = true
    enemyUser.currentMana -= enemyUser.manaCost
    setTimeout(() => {
        attack([enemyUser, 'user', 1.2])
    }, 900)
}

export function miniCrossword(user: Enemy[]) {
    let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)!
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'miniCrossword'
    useCurrentBattleStore().animation.doneByEnemy = true
    enemyUser.currentMana -= enemyUser.manaCost
    setTimeout(() => {
        if (!useCampaignSaveStore().isBlocking) {
            attack([enemyUser, 'user', 0.6])
            useCampaignSaveStore().currentStatus = {
                name: "Confusion",
                type: "Inhibit",
                action: null,
                afflictedName: 'user',
                length: 3
            }
        }
    }, 4200)
}

export function circleSmash(user: Enemy[]) {
    let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)!
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'circleSmash'
    useCurrentBattleStore().animation.doneByEnemy = true
    enemyUser.currentMana -= enemyUser.manaCost
    setTimeout(() => {
        attack([enemyUser, 'user', 1.3])
    }, 900)
}

export function buffLie(user?: Enemy[]) {
    let enemyUser = null
    if (user) {
        enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user![0]!.name)
    }
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'buffLie'
    if (enemyUser) {
        useCurrentBattleStore().animation.doneByEnemy = true
        enemyUser.currentMana -= enemyUser.manaCost
        setTimeout(() => {
            if (Math.random() < 0.5) {
                enemyUser.attack = Math.floor(enemyUser.attack * 1.3)
                enemyUser.defense = Math.floor(enemyUser.defense * 1.05)
                enemyUser.maxMana = Math.floor(enemyUser.maxMana * 1.2)
            }
        }, 1800)
    } else {
        useCurrentBattleStore().animation.doneByEnemy = false
        let friendFound: Friend = useBattleGuiStore().notSelectedFriends.find((f: Friend) => f.abilityName === 'Moon Princess Halation')!
        if (friendFound) {
            useCampaignSaveStore().currentMana -= friendFound.manaCost
        }

        setTimeout(() => {
            useCurrentBattleStore().currentEnemies.forEach((e: Enemy) => {
                if (Math.random() < 0.3) {
                    useCampaignSaveStore().currentStatus = {
                        name: 'Buff Truth',
                        type: 'Inhibit',
                        afflictedName: "Joey",
                        action: null,
                        length: 3
                    }
                }
            })
        }, 1800)
    }
}


export function makeItWild(user?: Enemy[]) {
    let enemyUser = null
    if (user) {
        enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user![0]!.name)
    }
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'makeItWild'
    if (enemyUser) {
        useCurrentBattleStore().animation.doneByEnemy = true
        enemyUser.currentMana -= enemyUser.manaCost
        setTimeout(() => {
            enemyUser.attack = Math.floor(Math.random() * enemyUser.attack * 2)
            enemyUser.defense = Math.floor(Math.random() * enemyUser.defense * 2)
            enemyUser.maxHP = enemyUser.maxHP + Math.floor(Math.random() * enemyUser.maxHP)
            enemyUser.currentHP = Math.min(Math.floor((enemyUser.currentHP * 0.5) + Math.random() * enemyUser.currentHP), enemyUser.maxHP)
            enemyUser.maxMana = Math.floor(Math.random() * enemyUser.maxMana * 2)

            const ucss = useCampaignSaveStore()
            if (!ucss.isBlocking) {
                ucss.attack = Math.floor(Math.floor(Math.random() * ucss.attack * 2))
                ucss.defense = Math.floor(Math.floor(Math.random() * ucss.defense * 2))
                ucss.maxHP = Math.floor(Math.floor(Math.random() * ucss.maxHP * 2))
                ucss.currentHP = Math.min(Math.floor(Math.floor(Math.random() * ucss.currentHP * 2)), ucss.maxHP)
                ucss.maxMana = Math.floor(Math.floor(Math.random() * ucss.maxMana * 2))
            }
        }, 3900)
    } else {
        useCurrentBattleStore().animation.doneByEnemy = false
        let friendFound: Friend = useBattleGuiStore().notSelectedFriends.find((f: Friend) => f.abilityName === 'Moon Princess Halation')!
        if (friendFound) {
            useCampaignSaveStore().currentMana -= friendFound.manaCost
        }

        setTimeout(() => {
            useCurrentBattleStore().currentEnemies.forEach((e: Enemy) => {
                const ucss = useCampaignSaveStore()

                ucss.attack = Math.floor(Math.floor(Math.random() * ucss.attack * 2))
                ucss.defense = Math.floor(Math.floor(Math.random() * ucss.defense * 2))
                ucss.maxHP = Math.floor(Math.floor(Math.random() * ucss.maxHP * 2))
                ucss.currentHP = Math.min(Math.floor(Math.floor(Math.random() * ucss.currentHP * 2)), ucss.maxHP)
                ucss.maxMana = Math.floor(Math.floor(Math.random() * ucss.maxMana * 2))
                ucss.currentMana = Math.floor(Math.max(Math.random() * ucss.currentMana * 2, 0))

                useCurrentBattleStore().currentEnemies.forEach((enemyUser: Enemy) => {
                    enemyUser.attack = Math.floor(Math.random() * enemyUser.attack * 2)
                    enemyUser.defense = Math.floor(Math.random() * enemyUser.defense * 2)
                    enemyUser.maxHP = Math.floor(Math.random() * enemyUser.maxHP * 2)
                    enemyUser.currentHP = Math.min(Math.floor(Math.random() * enemyUser.currentHP * 2), enemyUser.maxHP)
                    enemyUser.maxMana = Math.floor(Math.random() * enemyUser.maxMana * 2)
                })
            })
        }, 3900)
    }
}

export function minionSummon(user: Enemy[]) {
    let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)!
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.doneByEnemy = true
    enemyUser.currentMana -= enemyUser.manaCost
    setTimeout(() => {
        let rolledAlastor = Math.random() < 0.04
        if (useCurrentBattleStore().currentEnemies.length < 4 && !rolledAlastor) {
            useCurrentBattleStore().animation.name = 'minionSummon'
            let randomNumber = Math.floor(Math.random() * 998 + 1)
            useCurrentBattleStore().currentEnemies.push({
                name: `Minion ${randomNumber}`,
                attack: Math.ceil(enemyUser.attack / 4),
                defense: Math.ceil(enemyUser.defense / 4),
                abilityType: "offense",
                ability: () => { },
                abilityName: 'nothing',
                maxHP: Math.ceil(enemyUser.maxHP / 2),
                currentHP: Math.max(Math.ceil(enemyUser.currentHP / 4), Math.ceil(enemyUser.maxHP / 2)),
                currentMana: 10,
                manaCost: 30000,
                maxMana: 10,
                img: '/images/alastor-minion.png',
                expDrop: 0,
                desc: 'A shadow minion summoned by Alastor',
                level: 1,
                title: 'Shadow Creature',
                sound: '/sounds/basehigh.m4a',
                nextMove: "Attack",
                targetOf: [],
                status: null,
                shrinkCount: 0,
                consecutiveBlocks: 0,
                isBlocking: false,
                attackThisEvent: false,
            })
        } else if (useCurrentBattleStore().currentEnemies.length < 4) {
            useCurrentBattleStore().animation.name = 'alastorSummon'
            useCurrentBattleStore().currentEnemies.push(enemyUser)
        }
    }, 900)
}

export function magicNoseTongueTouch(user?: Enemy[]) {
    let enemyUser = null
    if (user) {
        enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user![0]!.name)
    }
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'magicNoseTongueTouch'
    if (enemyUser) {
        useCurrentBattleStore().animation.doneByEnemy = true
        enemyUser.currentMana -= enemyUser.manaCost
        setTimeout(() => {
            const success: boolean = Math.random() < (useCampaignSaveStore().currentHP / 500)
            if (!useCampaignSaveStore().isBlocking && success) {
                useCampaignSaveStore().currentStatus = {
                    name: "Confusion",
                    type: "Inhibit",
                    action: null,
                    afflictedName: 'user',
                    length: 4
                }
            } else if (!success) {
                let indexInsert = useCurrentBattleStore().thisTurnEvents.findIndex((e: BattleEvent) => e.action === magicNoseTongueTouch)
                if (indexInsert === -1) {
                    useCurrentBattleStore().thisTurnEvents.push({
                        user: "Gab",
                        action: null,
                        spriteURL: '/images/gab.png',
                        sound: '/sounds/gab.m4a',
                        flavorText: "My ability failed!",
                        actionPerformed: false
                    })
                } else {
                    useCurrentBattleStore().thisTurnEvents.splice(indexInsert + 1, 0, {
                        user: "Gab",
                        action: null,
                        spriteURL: '/images/gab.png',
                        sound: '/sounds/gab.m4a',
                        flavorText: "My ability failed!",
                        actionPerformed: false
                    })
                }
            }
        }, 2000)
    } else {
        let playerUser = useCampaignSaveStore()
        useCurrentBattleStore().animation.doneByEnemy = false

        //@ts-ignore
        let friendFound: Friend = useBattleGuiStore().fullFriendsList.find((f: Friend) => f.ability === magicNoseTongueTouch)

        if (friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound.name].manaCost
            const target = useCurrentBattleStore().singleTargetPairs.find((p: (Enemy | Friend)[]) => p[1]!.name === friendFound.name)![0]
            if (!target) return

            console.log(target)

            setTimeout(() => {
                //@ts-ignore
                const success = Math.random() < (target.currentHP / target.maxHP)
                //@ts-ignore
                if (!target.isBlocking && success) {
                    //@ts-ignore
                    target.status = {
                        name: "Confusion",
                        type: "Inhibit",
                        action: null,
                        afflictedName: 'user',
                        length: 3
                    }
                } else if (!success) {
                    let indexInsert = useCurrentBattleStore().thisTurnEvents.findIndex((e: BattleEvent) => e.action === magicNoseTongueTouch)
                    if (indexInsert === -1) {
                        useCurrentBattleStore().thisTurnEvents.push({
                            user: "Joey",
                            action: null,
                            spriteURL: '/images/joey.png',
                            sound: '/sounds/joey.m4a',
                            flavorText: "Your attack failed!",
                            actionPerformed: false
                        })
                    } else {
                        useCurrentBattleStore().thisTurnEvents.splice(indexInsert + 1, 0, {
                            user: "Joey",
                            action: null,
                            spriteURL: '/images/joey.png',
                            sound: '/sounds/joey.m4a',
                            flavorText: "Your attack failed!",
                            actionPerformed: false
                        })
                    }
                }

            }, 2000)
        }
    }
}


export function mindClear(user?: Enemy[]) {
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'mindClear'
    if (user) {
        useCurrentBattleStore().animation.doneByEnemy = true
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)
        enemyUser!.currentMana -= enemyUser!.manaCost
        if (enemyUser) {
            enemyUser.currentHP = Math.round(Math.min(enemyUser.currentHP + .55 * enemyUser.maxHP, enemyUser.maxHP))
            enemyUser.defense -= 10
            enemyUser.status = null
        }
    } else {
        let playerUser = useCampaignSaveStore()
        useCurrentBattleStore().animation.doneByEnemy = false

        //@ts-ignore
        let friendFound: Friend = useBattleGuiStore().notSelectedFriends.find((f: Friend) => f.abilityName === 'Shrink')
        if (friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound.name].manaCost
            let healFactor = Math.round(0.50 * (playerUser.maxHP))
            playerUser.currentHP = Math.min(playerUser.currentHP + healFactor, playerUser.maxHP)
            playerUser.defense -= 5
            playerUser.currentStatus = null
        }
    }
}

export function drifting(user: Enemy[]) {
    let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)!
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'drifting'
    useCurrentBattleStore().animation.doneByEnemy = true

    if (enemyUser) {
        enemyUser.status = {
            name: "Drifting",
            afflictedName: enemyUser.name,
            type: "Double Attack",
            action: null,
            length: 2
        }
        attack([enemyUser, 'user', 0.3])

        if ((useCurrentBattleStore().thisTurnEvents.filter((e: BattleEvent) => e.action === attack && e.user === enemyUser.name)).length > 1) return

        useCurrentBattleStore().thisTurnEvents.push({
            user: enemyUser.name,
            action: attack,
            actionArgs: [enemyUser, 'user', 1],
            flavorText: "I, the Drift King, can attack again!",
            spriteURL: enemyUser.img,
            sound: enemyUser.sound,
            actionPerformed: false
        })
    }
}

export function theSlayer(user?: Enemy[]) {
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'theSlayer'
    if (user) {

        useCurrentBattleStore().animation.doneByEnemy = true
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)
        enemyUser!.currentMana -= enemyUser!.manaCost

        console.log("THE SLAYER")
        if (enemyUser) {
            if (Math.random() < 0.5) {
                setTimeout(() => {
                    let healAmount: number = Math.round(0.2 * enemyUser.maxHP)
                    enemyUser.currentHP = Math.min(enemyUser.currentHP + healAmount, enemyUser.maxHP)
                }, 2200)
                console.log("HEAL")
            } else {
                setTimeout(() => {
                    enemyUser.attack = Math.floor(enemyUser.attack * 1.3)
                }, 2200)
                console.log("ATK BOOST")
            }
        }
    } else {
        let playerUser = useCampaignSaveStore()
        useCurrentBattleStore().animation.doneByEnemy = false

        //@ts-ignore
        let friendFound: Friend = useBattleGuiStore().notSelectedFriends.find((f: Friend) => f.abilityName === 'Shrink')
        if (friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound.name].manaCost

            playerUser.slayerActive = true
        }
    }
}

export function hide(user?: Enemy[]) {
    if (user) {
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)
        enemyUser!.currentMana -= enemyUser!.manaCost
        enemyUser!.shrinkCount += 3
    } else {
        let playerUser = useCampaignSaveStore()

        //@ts-ignore
        let friendFound: Friend = useBattleGuiStore().notSelectedFriends.find((f: Friend) => f.abilityName === 'Shrink')
        if (friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound.name].manaCost
            playerUser.shrinkCount += 3
        }
    }
}

function reviveTest(enemyUser:Enemy[]) {
    if(enemyUser[0]) {
        if(enemyUser[0].currentHP === 0) enemyUser[0].currentHP = Math.floor(.5* enemyUser[0].maxHP)
    }
}

export function reviveSong(user?: Enemy[]) {
    useCurrentBattleStore().animation.playing = true
    useCurrentBattleStore().animation.name = 'reviveSong'
    if (user) {
        let enemyUser = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === user[0]!.name)
        enemyUser!.currentMana -= enemyUser!.manaCost

        enemyUser!.status = {
            name: "Will Revive",
            type: "Revive",
            length: 1,
            action: null,
            afflictedName: 'Lucia'
        }

        useCurrentBattleStore().thisTurnEvents.push({
            user: enemyUser!.name,
            action: reviveTest,
            actionArgs: [enemyUser],
            flavorText: "REVIVE ENERGY AWAKEN!",
            spriteURL: enemyUser!.img,
            sound: enemyUser!.sound,
            actionPerformed: false
        })
        
    } else {
        let playerUser = useCampaignSaveStore()

        //@ts-ignore
        let friendFound: Friend = useBattleGuiStore().notSelectedFriends.find((f: Friend) => f.abilityName === 'Shrink')
        if (friendFound) {
            //@ts-ignore
            playerUser.currentMana -= useFriendsStore().$state[friendFound.name].manaCost
            playerUser.shrinkCount += 3
        }
    }
}