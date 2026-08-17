import { Howl } from 'howler';
export function clickSFX() {
    var click = new Howl({
        src: ['/sounds/click.mp3']
    })
    click.play()
}

export function errorSFX() {
    var error = new Howl({
        src: ['/sounds/error.mp3']
    })
    error.play()
}

export function calculateBlock(user: any): boolean {
    const successfulBlock = Math.random() < (1 / 2) ** user.consecutiveBlocks
    if (successfulBlock) {
        user.consecutiveBlocks++
        user.isBlocking = true
    } else user.consecutiveBlocks = 0
    return successfulBlock
}

// placeholder functions for linter
export function blockAttacks() { }

export function isEnemy(entity: any): boolean {
    return "targetOf" in entity
}

export function modifyDefense(propDefense: number): number {
    let result = propDefense

    useCampaignSaveStore().items.forEach((i:storeItem) => result += i.stats.defense)
    if (useCampaignSaveStore().currentStatus?.name === 'Buffed') result *= 1.25
    return Math.floor(propDefense)
}

export function modifyAttack(propAttack: number): number {
    let result = propAttack
    useCampaignSaveStore().items.forEach((i:storeItem) => result += i.stats.attack)
    if (useCampaignSaveStore().currentStatus?.name === 'Confusion' && Math.random() < 0.2) {
        let indexInsert = useCurrentBattleStore().thisTurnEvents.findIndex((e: BattleEvent) => e.user === 'Joey' && e.action === attack)
        if (indexInsert === -1) {
            useCurrentBattleStore().thisTurnEvents.push({
                user: "Joey",
                action: null,
                spriteURL: '/images/joey.png',
                sound: '/sounds/joey.m4a',
                flavorText: "You were confused and unable to attack!",
                actionPerformed: false
            })
        } else {
            useCurrentBattleStore().thisTurnEvents.splice(indexInsert + 1, 0, {
                user: "Joey",
                action: null,
                spriteURL: '/images/joey.png',
                sound: '/sounds/joey.m4a',
                flavorText: "You were confused and unable to attack!",
                actionPerformed: false
            })
        }
        return 0
    }
    if (useCampaignSaveStore().currentStatus?.name === 'Buffed') result *= 1.2
    if(useCampaignSaveStore().slayerActive) result *=1.4

    result *= (Math.random() * .15 + .925)
    return Math.floor(result)
}

export function attack(args: any[]) {
    if (!args) return
    let attacker = args[0]
    let defender = args[1]

    let attackMulti: number = 1
    if (args.length === 3) {
        attackMulti = args[2]
    }

    if (typeof attacker === 'string') {
        attacker = useCampaignSaveStore().$state
        defender = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === defender.name)
    } else {
        attacker = useCurrentBattleStore().currentEnemies.find((e: Enemy) => e.name === attacker.name)
        defender = useCampaignSaveStore()
    }

    if (isEnemy(attacker)) {
        if (!defender.isBlocking) {
            let practicalDefense = modifyDefense(defender.defense)
            let baseDamage = Math.max(1 - (practicalDefense / 100), 0) * attacker.attack
            let finalDamage = Math.round(baseDamage * attackMulti)

            if (defender.status?.name === "Confusion" && Math.random() < 0.4) {
                let indexInsert = useCurrentBattleStore().thisTurnEvents.findIndex((e: BattleEvent) => e.user === defender.name)
                if (indexInsert === -1) {
                    useCurrentBattleStore().thisTurnEvents.push({
                        user: defender.name,
                        action: null,
                        spriteURL: defender.img,
                        sound: defender.sound,
                        flavorText: `${defender} was unable to attack in their confusion!`,
                        actionPerformed: false
                    })
                } else {
                    useCurrentBattleStore().thisTurnEvents.splice(indexInsert + 1, 0, {
                        user: defender.name,
                        action: null,
                        spriteURL: defender.img,
                        sound: defender.sound,
                        flavorText: `${defender} was unable to attack in their confusion!`,
                        actionPerformed: false
                    })
                }
                return
            }

            defender.currentHP = Math.max(defender.currentHP - finalDamage, 0)
        }
    } else if (isEnemy(defender)) {
        if (!defender.isBlocking) {
            let practicalAttack = modifyAttack(attacker.attack)
            let baseHpChange = Math.round(Math.floor(Math.max(1 - (defender.defense / 100), 0) * practicalAttack))
            let finalHpChange = baseHpChange * attackMulti

            defender.currentHP -= finalHpChange
            defender.currentHP = Math.max(Math.round(defender.currentHP), 0)
        }
    }
}