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


// placeholder functions for linter
export function blockAttacks() {
    
}

export function attack() {

}