import { Howl } from 'howler'

// One Howl instance per unique sound file, created once and reused everywhere.
// preload: true forces Howler to start fetching/decoding immediately on creation,
// instead of waiting for the first .play() call.

const baselowM4a = new Howl({ src: ['/sounds/baselow.m4a'], volume: 0.8, preload: true })
const basehigh = new Howl({ src: ['/sounds/basehigh.m4a'], volume: 0.8, preload: true })
const kellan = new Howl({ src: ['/sounds/kellan.m4a'], volume: 0.8, preload: true })
const blockyball = new Howl({ src: ['/sounds/blockyball.m4a'], volume: 1.0, preload: true })
const noure = new Howl({ src: ['/sounds/noure.m4a'], volume: 0.8, preload: true })
const humd = new Howl({ src: ['/sounds/humd.m4a'], volume: 1.0, preload: true })
const lemonalien = new Howl({ src: ['/sounds/lemonalien.m4a'], volume: 0.8, preload: true })
const kortnee = new Howl({ src: ['/sounds/kortnee.m4a'], volume: 1.2, preload: true })
const crossword = new Howl({ src: ['/sounds/crossword.m4a'], volume: 0.8, preload: true })
const gil = new Howl({ src: ['/sounds/gil.m4a'], volume: 0.8, preload: true })
const gavin = new Howl({ src: ['/sounds/gavin.m4a'], volume: 0.8, preload: true })
const alastor = new Howl({ src: ['/sounds/alastor.m4a'], volume: 2.3, preload: true })
const gab = new Howl({ src: ['/sounds/gab.m4a'], volume: 0.8, preload: true })
const joeymom = new Howl({ src: ['/sounds/joeymom.m4a'], volume: 0.8, preload: true })
const rtgame = new Howl({ src: ['/sounds/rtgame.m4a'], volume: 2.0, preload: true })
const edward = new Howl({ src: ['/sounds/edward.m4a'], volume: 0.8, preload: true })
const waldo = new Howl({ src: ['/sounds/waldo.m4a'], volume: 0.8, preload: true })
const lucia = new Howl({ src: ['/sounds/lucia.m4a'], volume: 0.8, preload: true })
const thira = new Howl({ src: ['/sounds/thira.m4a'], volume: 0.8, preload: true })
const matteo = new Howl({ src: ['/sounds/matteo.m4a'], volume: 0.8, preload: true })
const maidenoluck = new Howl({ src: ['/sounds/maidenoluck.m4a'], volume: 0.8, preload: true })
const columbo = new Howl({ src: ['/sounds/columbo.m4a'], volume: 0.64, preload: true })
const pierce = new Howl({ src: ['/sounds/pierce.m4a'], volume: 1.1, preload: true })
const scottthewoz = new Howl({ src: ['/sounds/scottthewoz.m4a'], volume: 0.8, preload: true })
const joebiden = new Howl({ src: ['/sounds/joebiden.m4a'], volume: 0.8, preload: true })
const joey = new Howl({ src: ['/sounds/joey.m4a'], volume: 0.8, preload: true })

export const sounds = {
    baselowM4a,
    basehigh,
    kellan,
    blockyball,
    noure,
    humd,
    lemonalien,
    kortnee,
    crossword,
    gil,
    gavin,
    alastor,
    gab,
    joeymom,
    rtgame,
    edward,
    waldo,
    lucia,
    thira,
    matteo,
    maidenoluck,
    columbo,
    pierce,
    scottthewoz,
    joebiden,
    joey,
}

// Look up a Howl by its /sounds/... path, e.g. getSound('/sounds/joey.m4a')
// Falls back to basehigh if the path isn't recognized.
export function getSound(path: string): Howl {
    const key = Object.keys(soundPaths).find((k) => soundPaths[k] === path)
    return key ? sounds[key as keyof typeof sounds] : basehigh
}

const soundPaths: Record<string, string> = {
    baselowM4a: '/sounds/baselow.m4a',
    basehigh: '/sounds/basehigh.m4a',
    kellan: '/sounds/kellan.m4a',
    blockyball: '/sounds/blockyball.m4a',
    noure: '/sounds/noure.m4a',
    humd: '/sounds/humd.m4a',
    lemonalien: '/sounds/lemonalien.m4a',
    kortnee: '/sounds/kortnee.m4a',
    crossword: '/sounds/crossword.m4a',
    gil: '/sounds/gil.m4a',
    gavin: '/sounds/gavin.m4a',
    alastor: '/sounds/alastor.m4a',
    gab: '/sounds/gab.m4a',
    joeymom: '/sounds/joeymom.m4a',
    rtgame: '/sounds/rtgame.m4a',
    edward: '/sounds/edward.m4a',
    waldo: '/sounds/waldo.m4a',
    lucia: '/sounds/lucia.m4a',
    thira: '/sounds/thira.m4a',
    matteo: '/sounds/matteo.m4a',
    maidenoluck: '/sounds/maidenoluck.m4a',
    columbo: '/sounds/columbo.m4a',
    pierce: '/sounds/pierce.m4a',
    scottthewoz: '/sounds/scottthewoz.m4a',
    joebiden: '/sounds/joebiden.m4a',
    joey: '/sounds/joey.m4a',
}