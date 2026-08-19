// Full list of images under /public/images, used to warm the browser cache
// ahead of time so they're already loaded by the time a component needs them.

export const imageManifest: string[] = [
    '/images/alastor-minion.png',
    '/images/alastor.png',
    '/images/american-flag.png',
    '/images/bicep.png',
    '/images/birthday_wand.png',
    '/images/birthday-cake.png',
    '/images/brain-static.png',
    '/images/brain.png',
    '/images/circle.png',
    '/images/clock.gif',
    '/images/columbo.png',
    '/images/crossword.png',
    '/images/crowd.png',
    '/images/deadsmoke.png',
    '/images/eagle.png',
    '/images/edward.png',
    '/images/edwardevil.png',
    '/images/elementary.png',
    '/images/fakes.png',
    '/images/fight-cloud.png',
    '/images/gab.png',
    '/images/gavin.png',
    '/images/gavinevil.png',
    '/images/gil.png',
    '/images/gohstangools.png',
    '/images/grassman.png',
    '/images/greengas.png',
    '/images/gs.png',
    '/images/humd.png',
    '/images/joebiden.png',
    '/images/joevil-enraged.png',
    '/images/joevil.png',
    '/images/joevildead.png',
    '/images/joevilsaved.png',
    '/images/joey-multihit.png',
    '/images/joey.png',
    '/images/jogood.png',
    '/images/kellan.png',
    '/images/kortnee.png',
    '/images/lemon.png',
    '/images/lemonalien.png',
    '/images/littleguys.png',
    '/images/lucia.png',
    '/images/magnifying-glass.png',
    '/images/maiden-o-luck.webp',
    '/images/mango1.png',
    '/images/mango2.png',
    '/images/mango3.png',
    '/images/mango4.png',
    '/images/matteo.png',
    '/images/mini-crossword.png',
    '/images/moon-cutter.png',
    '/images/mrspaulavento.png',
    '/images/multihit-arm.png',
    '/images/noure-multihit.png',
    '/images/noure.png',
    '/images/omnipotentnarrator.png',
    '/images/pencil.png',
    '/images/pet-allicorn.png',
    '/images/pet-cerberus.png',
    '/images/pierce.png',
    '/images/question-mark.png',
    '/images/rtgame-yootooz.png',
    '/images/rtgame.png',
    '/images/sailor-moon-wand.png',
    '/images/sailorjoey.png',
    '/images/sailorkortnee.png',
    '/images/sandman.png',
    '/images/scottthewoz.png',
    '/images/shield.png',
    '/images/shirt-devlin.png',
    '/images/shirt-ihavefeelings.png',
    '/images/shirt-okaywiseguy.png',
    '/images/superblockyball.png',
    '/images/thira.png',
    '/images/ufo.png',
    '/images/ventos.png',
    '/images/waldo.png',
    '/images/water-drop.png',
    '/images/whitehouse.png',
    '/images/sheetmusicfx.png',
    '/images/wii-callofduty.jpeg',
    '/images/wii-fling-smash.png',
    '/images/wii-mario-kart.jpeg',
    '/images/wii-wiisports.png',
    '/images/x.webp',
    '/backgrounds/matteo-domain-expansion.png',
    '/backgrounds/evil.png',
    '/backgrounds/summer.png',
    '/backgrounds/greengas.png'
]

// Images the player sees within the first few seconds of any session
// (title/menu, Joey's base sprite). These get preloaded immediately.
export const criticalImages: string[] = [
    '/images/joey.png',
    '/images/ventos.png',
]

let warmed = false

function loadOne(src: string): Promise<void> {
    return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = () => resolve() // don't let one bad path stall the batch
        img.src = src
    })
}

async function loadInBatches(paths: string[], batchSize = 6) {
    for (let i = 0; i < paths.length; i += batchSize) {
        const batch = paths.slice(i, i + batchSize)
        await Promise.all(batch.map(loadOne))
    }
}

function whenIdle(callback: () => void) {
    if ('requestIdleCallback' in window) {
        ;(window as any).requestIdleCallback(callback, { timeout: 2000 })
    } else {
        setTimeout(callback, 500)
    }
}

// Warms the browser's image cache for every image in the manifest.
// Critical images load right away; everything else loads in small batches
// during idle time so it never competes with active rendering/network work.
export function preloadAllImages() {
    if (warmed || typeof window === 'undefined') return
    warmed = true

    criticalImages.forEach(loadOne)

    const rest = imageManifest.filter((p) => !criticalImages.includes(p))
    whenIdle(() => loadInBatches(rest))
}

// Warms the cache for a specific set of paths right away — call this before
// a cutscene/battle that's about to use images not already guaranteed to be cached.
export function preloadImages(paths: string[]) {
    if (typeof window === 'undefined') return
    paths.forEach(loadOne)
}