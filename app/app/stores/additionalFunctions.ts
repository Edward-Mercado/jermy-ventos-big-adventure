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

export function attack(attacker:Enemy, defender:Enemy, defenderIsBlocking:boolean) {
    
}