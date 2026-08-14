import {Howl} from 'howler';
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

export function calculateBlock(user:any):boolean {
    const successfulBlock = Math.random() < (1/2)**user.consecutiveBlocks
    if(successfulBlock) {
        user.consecutiveBlocks++
        user.isBlocking = true
    } else user.consecutiveBlocks = 0
    return successfulBlock
}

// placeholder functions for linter
export function blockAttacks() {
    
}

export function isEnemy(entity:any):boolean {
    return "targetOf" in entity
}

export function modifyDefense(defense:number) {
    return defense
}

export function modifyAttack(attack:number) {
    return attack
}

export function attack(args:any[]) {
    let attacker = args[0]
    let defender = args[1]

    if(typeof attacker === 'string') {
        attacker = useCampaignSaveStore()
        defender = useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.name === defender.name)
    } else {
        attacker = useCurrentBattleStore().currentEnemies.find((e:Enemy) => e.name === attacker.name)
        defender = useCampaignSaveStore()
    }

    if(isEnemy(attacker)) {
        if(!defender.isBlocking) {
            let practicalDefense = modifyDefense(defender.defense)
            defender.currentHP -= Math.round(Math.floor(Math.max(1-(practicalDefense/100), 0)*attacker.attack))
            defender.currentHP = Math.max(defender.currentHP, 0)
        }
    } else if (isEnemy(defender)) {
        if(!defender.isBlocking) {
            let practicalAttack = modifyAttack(attacker.attack)
            console.log(attacker)
            defender.currentHP -= Math.round(Math.floor(Math.max(1-(defender.defense/100), 0)*practicalAttack))
            defender.currentHP = Math.max(defender.currentHP, 0)
        }
    }
}