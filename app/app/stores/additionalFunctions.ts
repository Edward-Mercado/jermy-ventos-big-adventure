import {Howl} from 'howler';
export function clickSFX() {
    var click = new Howl({
        src: ['/sounds/click.mp3']
    })
    click.play()
}