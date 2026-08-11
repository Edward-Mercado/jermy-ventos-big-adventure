import {Howl} from 'howler';
export function clickSFX() {
    var click = new Howl({
        src: ['/sounds/click.mp3']
    })
    click.play()
}

export function errorSFX() {
    console.log("ERROR SFX")
    var error = new Howl({
        src: ['/sounds/error.mp3']
    })
    error.play()
}