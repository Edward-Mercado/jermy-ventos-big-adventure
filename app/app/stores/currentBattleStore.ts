export const useCurrentBattleStore = defineStore('currentbattle', {
    state: () => ({
        beforeTurnState: {
            playerStats: {
                attack: 0,
                defense: 0,
                currentMana: 0,
                maxMana: 0,
                maxHP: 0,
                currentHP: 0,
            },
            enemies: [] as Enemy[],
        },
        currentEnemies: [] as Enemy[],
        columboActive: false as boolean,
        usedAbilities: [] as Friend[],
        usedMove: null as (null | 'Attack' | 'Block'),
        battleEventsDone: [] as BattleEvent[],
        thisTurnEvents: [] as BattleEvent[],
        thisTurnIndex: -1 as number,
        animation: {
            name: null as string | null,
            playing: false as boolean,
            doneByEnemy: false as boolean
        },
        joeyURL: '/images/joey.png',
        singleTargetPairs: [] as (Enemy | Friend)[][]
    }),
    actions: {
        animReset() {
            this.animation.name = null
            this.animation.playing = false
            this.animation.doneByEnemy = false
        },

        initialize(currentStateKey: string) {
            const battlesStore = useBattleStore()
            this.currentEnemies.length = 0
            battlesStore[currentStateKey]?.enemies.forEach((enemy: EnemyData) => {
                let enemyConstructor: any = enemy
                enemyConstructor.currentHP = enemyConstructor.maxHP
                enemyConstructor.nextMove = null;
                enemyConstructor.targetOf = [] as Friend[];
                enemyConstructor.status = null;
                enemyConstructor.shrinkCount = 0;
                enemyConstructor.consecutiveBlocks = 0;
                enemyConstructor.isBlocking = false;
                enemyConstructor.attackThisEvent = false;
                let finishedEnemy: Enemy = enemyConstructor
                this.enemyChooseMove(enemyConstructor)
                this.currentEnemies.push(finishedEnemy)
            })
        },

        enemyChooseMove(enemy: Enemy) {
            const playerStore = useCampaignSaveStore()
            if (enemy.abilityType === 'offense') {
                if (Math.random() < 0.85) enemy.nextMove = 'Attack'
                else enemy.nextMove = 'Block'
                if (enemy.currentHP / enemy.maxHP < 0.1) enemy.nextMove = 'Block'
                if (playerStore.currentHP / playerStore.maxHP < 0.1) enemy.nextMove = 'Attack'
            } else {
                if (Math.random() < 0.5) enemy.nextMove = 'Block'
                else enemy.nextMove = 'Attack'
                if (playerStore.currentHP / playerStore.maxHP < 0.1) enemy.nextMove = 'Attack'
                if (enemy.currentHP / enemy.maxHP < 0.1) enemy.nextMove = 'Block'
            }

            const canAffordAbility = enemy.manaCost === 0 || enemy.currentMana >= enemy.manaCost

            if (canAffordAbility) {
                if (enemy.manaCost) {
                    let abilityChance = Math.min((enemy.manaCost / enemy.currentMana) + 0.2, 1)
                    if (Math.random() < abilityChance) enemy.nextMove = 'Use Ability'
                } else {
                    enemy.nextMove = 'Use Ability'
                }
            }
        },

        populateUserChoices(abilities: Friend[], move: ("Attack" | "Block")) {
            this.usedAbilities = abilities
            this.usedMove = move
        },

        compileTurnData(attackTarget: Enemy | null) {
            // before main turn flow
            const resultingActions = [] as BattleEvent[];
            const followEnemyPairs = [] as Friend[];

            this.currentEnemies.forEach((enemy: Enemy) => { // blocks
                if (enemy.nextMove === "Block") {
                    if (calculateBlock(enemy)) {
                        resultingActions.push({
                            user: enemy.name,
                            spriteURL: enemy.img,
                            flavorText: `I'm ready to block your attacks birthday boy!`,
                            action: blockAttacks,
                            sound: enemy.sound,
                            actionPerformed: false,
                        })
                        let hpRegen:number = enemy.maxHP * 0.05
                        enemy.currentHP = Math.round(Math.min(enemy.currentHP + hpRegen, enemy.maxHP))
                        enemy.currentMana = Math.min(enemy.maxMana, (enemy.currentMana + enemy.level * 3))
                    }
                    else {
                        resultingActions.push({
                            user: enemy.name,
                            spriteURL: enemy.img,
                            flavorText: `Oh no! My block failed!`,
                            action: () => { },
                            sound: enemy.sound,
                            actionPerformed: false,
                        })
                    }
                }
            })
            if (this.usedMove === "Block") {
                if (calculateBlock(useCampaignSaveStore().$state)) {
                    resultingActions.push({
                        user: "Joey",
                        spriteURL: "/images/joey.png",
                        flavorText: `You get ready to block their attacks!`,
                        action: blockAttacks,
                        sound: "/sounds/joey.m4a",
                        actionPerformed: false,
                    })
                    const store = useCampaignSaveStore()

                    const hpGain = Math.round((store.maxHP ?? 0) / 5)
                    store.currentHP = Math.min(store.maxHP ?? 0, (store.currentHP ?? 0) + hpGain)

                    const manaGain = (store.playerLevel ?? 1) * 5
                    store.currentMana = Math.min(store.maxMana ?? 0, (store.currentMana ?? 0) + manaGain)
                }
                else {
                    resultingActions.push({
                        user: "Joey",
                        spriteURL: "/images/joey.png",
                        flavorText: `You tried to block, but it failed!`,
                        action: () => { },
                        sound: "/sounds/joey.m4a",
                        actionPerformed: false,
                    })
                }
            }
            this.usedAbilities.filter((possibleAbility: Friend) => possibleAbility.abilityTiming === 'Before Turn')
                .forEach((friend: Friend) => { // bt abilities
                    resultingActions.push({
                        user: friend.name,
                        spriteURL: friend.spriteURL,
                        flavorText: `I cast ${friend.abilityName}!`,
                        action: friend.ability,
                        sound: friend.sound,
                        actionPerformed: false,
                    })
                })

            // main turn flow
            this.currentEnemies.forEach((enemy: Enemy) => { // enemy attacks, enemy abilities
                if (enemy.nextMove === "Attack") {
                    resultingActions.push({
                        user: enemy.name,
                        spriteURL: enemy.img,
                        flavorText: `I'm gonna get you Joey! BAM!`,
                        action: attack,
                        actionArgs: [enemy, 'user'],
                        sound: enemy.sound,
                        actionPerformed: false,
                    })
                    if (useCampaignSaveStore().isBlocking) {
                        resultingActions.push({
                            user: "Joey",
                            spriteURL: "/images/joey.png",
                            flavorText: `Nobody's gonna be in those pews, ${enemy.name}!`,
                            action: () => { },
                            sound: "/sounds/joey.m4a",
                            actionPerformed: false,
                        })
                    }
                }
                if (enemy.nextMove === "Use Ability") {
                    if(enemy.abilityName !== "Time Reversal" && enemy.ability !== timeReversal && enemy.ability !== metaNarrative) {
                        resultingActions.push({
                        user: enemy.name,
                        spriteURL: enemy.img,
                        flavorText: `I cast ${enemy.abilityName}!`,
                        action: enemy.ability,
                        actionArgs: [enemy],
                        sound: enemy.sound,
                        actionPerformed: false,
                    })

                    if (enemy.abilityType === "offense" && useCampaignSaveStore().isBlocking) {
                        resultingActions.push({
                            user: "Joey",
                            spriteURL: "/images/joey.png",
                            flavorText: `Nobody's gonna be in those pews, ${enemy.name}!`,
                            action: () => { },
                            sound: "/sounds/joey.m4a",
                            actionPerformed: false,
                        })
                    }
                    }
                }

                if (enemy.targetOf.filter((friend: Friend) => friend.abilityTiming === 'Follows Enemy')) { // FE counters
                    enemy.targetOf.filter((friend: Friend) => friend.abilityTiming === 'Follows Enemy').forEach((friend: Friend) => {
                        resultingActions.push({
                            user: friend.name,
                            spriteURL: friend.spriteURL,
                            flavorText: `I cast ${friend.abilityName}!`,
                            action: friend.ability,
                            sound: friend.sound,
                            actionPerformed: false,
                        })
                        followEnemyPairs.push(friend)

                    })
                }
            });

            if (this.usedMove === "Attack" && attackTarget) {
                resultingActions.push({ // attacks
                    user: "Joey",
                    spriteURL: "/images/joey.png",
                    flavorText: `I am gonna get you ${attackTarget.name}!`,
                    action: attack,
                    actionArgs: ['user', attackTarget],
                    sound: "/sounds/joey.m4a",
                    actionPerformed: false,
                })
                if (attackTarget.isBlocking) {
                    resultingActions.push({
                        user: attackTarget.name,
                        spriteURL: attackTarget.img,
                        flavorText: "Zonk off birthday boy! I blocked your attack!",
                        action: blockAttacks,
                        sound: attackTarget.sound,
                        actionPerformed: false,
                    })
                }
            }

            this.usedAbilities.filter((possibleAbility: Friend) => possibleAbility.abilityTiming === 'With Attack') // wa abilities
                .forEach((friend: Friend) => {
                    if (friend.targetType !== 'Single') {

                        resultingActions.push({
                            user: friend.name,
                            spriteURL: friend.spriteURL,
                            flavorText: `I cast ${friend.abilityName}!`,
                            action: friend.ability,
                            sound: friend.sound,
                            actionPerformed: false,
                        });
                        if (friend.targetType === "AOE") {
                            let blockingEnemies: string[] = []
                            this.currentEnemies.filter((e: Enemy) => e.isBlocking).forEach((enemy) => {
                                blockingEnemies.push(enemy.name)
                            })
                            let text: string = ""

                            if (blockingEnemies.length == 1) {
                                text += blockingEnemies[0]
                            } else if (blockingEnemies.length == 2) {
                                text += blockingEnemies[0] + " and " + blockingEnemies[1]
                            } else if (blockingEnemies.length > 2) {
                                for (let i = 0; i < blockingEnemies.length; i++) {
                                    if (i < blockingEnemies.length - 2) {
                                        text += blockingEnemies[i] + ", "
                                    } else if (i === blockingEnemies.length - 2) {
                                        text += blockingEnemies[i] + ", and "
                                    } else {
                                        text += blockingEnemies[i]
                                    }
                                }
                            }

                            let fullText: string = friend.name + ", " + text + " blocked your attack!"
                            if (blockingEnemies.length) {
                                resultingActions.push({
                                    user: "Joey",
                                    spriteURL: "/images/joey.png",
                                    flavorText: fullText,
                                    action: () => { },
                                    sound: "/sounds/joey.m4a",
                                    actionPerformed: false,
                                })
                                resultingActions.push({
                                    user: friend.name,
                                    spriteURL: friend.spriteURL,
                                    flavorText: "Dammit! They blocked me!",
                                    action: () => { },
                                    sound: friend.sound,
                                    actionPerformed: false,
                                })
                            }
                        }
                    } else {
                        resultingActions.push({
                            user: friend.name,
                            spriteURL: friend.spriteURL,
                            flavorText: `I cast ${friend.abilityName} on ${this.currentEnemies.find((enemy: Enemy) =>
                                enemy.targetOf.find((targeter: Friend) => targeter.name === friend.name)
                            )!.name ?? this.currentEnemies[0]!.name
                                }!`,
                            action: friend.ability,
                            sound: friend.sound,
                            actionPerformed: false,
                        });

                        let potentialEnemy: Enemy | undefined = this.currentEnemies.find((e: Enemy) =>
                            e.targetOf.find((targeter: Friend) => targeter.name === friend.name))

                        if (potentialEnemy?.isBlocking) {
                            resultingActions.push({
                                user: potentialEnemy.name,
                                spriteURL: potentialEnemy.img,
                                flavorText: "Zonk off birthday boy! I blocked your attack!",
                                action: attack,
                                sound: potentialEnemy.sound,
                                actionPerformed: false,
                            })
                        }

                    }

                })
            this.usedAbilities.filter((possibleAbility: Friend) => possibleAbility.abilityTiming === 'Follows Enemy' && !followEnemyPairs.find((pair) => pair === possibleAbility))
                .forEach((friend: Friend) => { // failed counter abilities
                    resultingActions.push({
                        user: friend.name,
                        spriteURL: friend.spriteURL,
                        flavorText: `My ${friend.abilityName} failed! The enemy didn't attack!`,
                        action: friend.ability,
                        sound: friend.sound,
                        actionPerformed: false,
                    });
                })

            // after turn flow
            this.usedAbilities.filter((possibleAbility: Friend) => possibleAbility.abilityTiming === 'After Turn') // at abilities
                .forEach((friend: Friend) => {
                    if(friend.ability === timeReversal) {
                        const ucss = useCampaignSaveStore()
                        this.beforeTurnState.playerStats.attack = ucss.attack
                        this.beforeTurnState.playerStats.defense = ucss.defense
                        this.beforeTurnState.playerStats.currentHP = ucss.currentHP
                        this.beforeTurnState.playerStats.maxHP = ucss.maxHP
                        this.beforeTurnState.playerStats.currentMana = ucss.currentMana
                        this.beforeTurnState.playerStats.maxMana = ucss.maxMana

                        this.beforeTurnState.enemies = this.currentEnemies
                    }
                    resultingActions.push({
                        user: friend.name,
                        spriteURL: friend.spriteURL,
                        flavorText: `I cast ${friend.abilityName}!`,
                        action: friend.ability,
                        sound: friend.sound,
                        actionPerformed: false,
                    });

                })  // at abilities

            this.currentEnemies.filter((enemy: Enemy) => enemy.status).forEach((enemy: Enemy) => {
                let status: Status = enemy.status!
                if (status.type === "DOT") {
                    resultingActions.push({
                        user: enemy.name,
                        spriteURL: enemy.img,
                        flavorText: `Ouch.. The ${status.name}... It's affecting me...`,
                        action: status.action,
                        sound: enemy.sound,
                        actionPerformed: false,
                    });
                } else if (status.type === 'Double Attack') {
                    resultingActions.push({
                        user: enemy.name,
                        spriteURL: enemy.img,
                        flavorText: `I can attack again!`,
                        action: attack,
                        actionArgs: [enemy, 'user', 0.6],
                        sound: enemy.sound,
                        actionPerformed: false,
                    });
                }


            }) // enemy statuses

            if (useCampaignSaveStore().currentStatus) {
                let status: Status = useCampaignSaveStore().currentStatus!
                if (status.type === "DOT") {
                    resultingActions.push({
                        user: "Joey",
                        spriteURL: "/images/joey.png",
                        flavorText: `Dammit.. I'm being affected by the ${status.name}...`,
                        action: status.action,
                        sound: "/sounds/joey.m4a",
                        actionPerformed: false,
                    });
                }
            } // user statuses

            this.currentEnemies.forEach((e:Enemy) => {
                e.targetOf.forEach((f:Friend) => {
                    if(f.targetType === 'Single') {
                        this.singleTargetPairs.push([e, f])
                    }
                })
            })

            this.currentEnemies.forEach((e:Enemy) => {
                console.log(e.ability === timeReversal)
                if(e.ability === timeReversal) {
                    const ucss = useCampaignSaveStore()

                    this.beforeTurnState.playerStats.attack = ucss.attack
                    this.beforeTurnState.playerStats.defense = ucss.defense
                    this.beforeTurnState.playerStats.currentHP = ucss.currentHP
                    this.beforeTurnState.playerStats.maxHP = ucss.maxHP
                    this.beforeTurnState.playerStats.currentMana = ucss.currentMana
                    this.beforeTurnState.playerStats.maxMana = ucss.maxMana


                    this.currentEnemies.forEach((e:Enemy) => this.beforeTurnState.enemies.push(JSON.parse(JSON.stringify(e))))
                    
                    resultingActions.push({
                        user: e.name,
                        spriteURL: e.img,
                        flavorText: `I cast ${e.abilityName}!`,
                        action: e.ability,
                        actionArgs: [e],
                        sound: e.sound,
                        actionPerformed: false,
                    })
                }
            })

            return resultingActions;
        },


    }
})