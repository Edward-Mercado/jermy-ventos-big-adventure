export const useCurrentBattleStore = defineStore('currentbattle', {
    state: () => ({
        currentEnemies: [] as Enemy[],
        columboActive: false as boolean,
        usedAbilities: [] as Friend[],
        usedMove: null as (null | 'Attack' | 'Block'),
    }),
    actions: {
        initialize(currentStateKey: string) {
            const battlesStore = useBattleStore()
            battlesStore[currentStateKey]?.enemies.forEach((enemy: EnemyData) => {
                let enemyConstructor: any = enemy
                enemyConstructor.nextMove = null;
                enemyConstructor.targetOf = [] as Friend[];
                enemyConstructor.status = null;
                enemyConstructor.shrinkCount = 0;
                enemyConstructor.consecutiveBlocks = 0;
                enemyConstructor.isBlocking = false;
                let finishedEnemy: Enemy = enemyConstructor
                this.enemyChooseMove(enemyConstructor)
                this.currentEnemies.push(finishedEnemy)
            })
        },

        enemyChooseMove(enemy: Enemy) {
            const playerStore = useCampaignSaveStore()
            if (enemy.abilityType === 'offense') {
                if (Math.random() < 0.85) enemy.nextMove = 'Attack' // 85% chance attack
                else enemy.nextMove = 'Block' // 15% chance defense
                if (enemy.currentHP / enemy.maxHP < 0.2) enemy.nextMove = 'Block' // always block if HP less than 20%
                if (playerStore.currentHP / playerStore.maxHP < 0.2) enemy.nextMove = 'Attack' // always attack if player HP is less than 20%
            } else {
                if (Math.random() < 0.85) enemy.nextMove = 'Block' // 85% chance attack
                else enemy.nextMove = 'Attack' // 15% chance defense
                if (playerStore.currentHP / playerStore.maxHP < 0.2) enemy.nextMove = 'Attack' // always attack if player HP is less than 20%
                if (enemy.currentHP / enemy.maxHP < 0.2) enemy.nextMove = 'Block' // always block if HP less than 20%
            }
            if (enemy.currentMana > enemy.manaCost) {
                if (enemy.manaCost) {
                    let abilityChance = Math.min(((enemy.manaCost / enemy.currentMana) + .2), 1) // higher chance the more mana the enemy has
                    if (Math.random() < abilityChance) enemy.nextMove = 'Use Ability'
                } else enemy.nextMove = 'Use Ability'
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
                            sound: enemy.sound
                        })
                    }
                    else {
                        resultingActions.push({
                            user: enemy.name,
                            spriteURL: enemy.img,
                            flavorText: `Oh no! My block failed!`,
                            action: () => { },
                            sound: enemy.sound
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
                        sound: "/sounds/joey.m4a"
                    })
                }
                else {
                    resultingActions.push({
                        user: "Joey",
                        spriteURL: "/images/joey.png",
                        flavorText: `You tried to block, but it failed!`,
                        action: () => { },
                        sound: "/sounds/joey.m4a"
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
                        sound: friend.sound
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
                        sound: enemy.sound
                    })
                    if (useCampaignSaveStore().isBlocking) {
                        resultingActions.push({
                            user: "Joey",
                            spriteURL: "/images/joey.png",
                            flavorText: `Nobody's gonna be in those pews, ${enemy.name}!`,
                            action: () => { },
                            sound: "/images/joey.m4a"
                        })
                    }
                }
                if (enemy.nextMove === "Use Ability") {
                    resultingActions.push({
                        user: enemy.name,
                        spriteURL: enemy.img,
                        flavorText: `I cast ${enemy.abilityName}!`,
                        action: enemy.ability,
                        sound: enemy.sound
                    })
                    if (enemy.abilityType === "offense" && useCampaignSaveStore().isBlocking) {
                        resultingActions.push({
                            user: "Joey",
                            spriteURL: "/images/joey.png",
                            flavorText: `Nobody's gonna be in those pews, ${enemy.name}!`,
                            action: () => { },
                            sound: "/images/joey.m4a"
                        })
                    }
                }

                if (enemy.targetOf.filter((friend: Friend) => friend.abilityTiming === 'Follows Enemy')) { // FE counters
                    enemy.targetOf.filter((friend: Friend) => friend.abilityTiming === 'Follows Enemy').forEach((friend: Friend) => {
                        resultingActions.push({
                            user: friend.name,
                            spriteURL: friend.spriteURL,
                            flavorText: `I cast ${friend.abilityName}!`,
                            action: friend.ability,
                            sound: friend.sound
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
                    sound: "/sounds/joey.m4a"
                })
                if (attackTarget.isBlocking) {
                    resultingActions.push({
                        user: attackTarget.name,
                        spriteURL: attackTarget.img,
                        flavorText: "Zonk off birthday boy! I blocked your attack!",
                        action: attack,
                        sound: attackTarget.sound,
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
                                    sound: "/sounds/joey.sound",
                                })
                                resultingActions.push({
                                    user: friend.name,
                                    spriteURL: friend.spriteURL,
                                    flavorText: "Dammit! They blocked me!",
                                    action: () => { },
                                    sound: friend.sound
                                })
                            }
                        }
                    } else {
                        resultingActions.push({
                            user: friend.name,
                            spriteURL: friend.spriteURL,
                            flavorText: `I cast ${friend.abilityName} on ${this.currentEnemies.find((enemy: Enemy) =>
                                enemy.targetOf.find((targeter: Friend) => targeter.name === friend.name)
                            )!.name
                                }!`,
                            action: friend.ability,
                            sound: friend.sound,
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
                    });
                })

            // after turn flow
            this.usedAbilities.filter((possibleAbility: Friend) => possibleAbility.abilityTiming === 'After Turn') // at abilities
                .forEach((friend: Friend) => {
                    resultingActions.push({
                        user: friend.name,
                        spriteURL: friend.spriteURL,
                        flavorText: `I cast ${friend.abilityName}!`,
                        action: friend.ability,
                        sound: friend.sound,
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
                        sound: enemy.sound
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
                    });
                }
            } // user statuses

            this.currentEnemies.forEach((enemy: Enemy) => this.enemyChooseMove(enemy));
            this.currentEnemies.forEach((enemy: Enemy) => enemy.targetOf.length = 0);

            return resultingActions;
        },


    }
})