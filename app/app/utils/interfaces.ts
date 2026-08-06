export interface Friend {
    name: string,
    eachTurnCheck: null | Function,
    abilityName: string,
    abilityDesc: string,
    abilityTiming: ("With Attack" | "Before Turn" | "Follows Enemy" | "After Turn"),
    targetType: ("Single" | "AOE" | "Self" | "Special"),
    spriteURL: string,
    ability: Function,
    manaCost: number | Function
}

export interface Enemy {
    name: string,
    attack: number,
    defense: number,
    ability: Function,
    currentHP: number,
    maxHP: number,
    currentMana: number,
    maxMana: number,
    spriteURL: string,
    expDrop: number,
}

export interface LevelStats {
    attack: number
    defense: number
    maxHP: number
    expRequirement: number
    maxMana: number
}

export interface DialogueLine {
    speaker: string,
    imgURL: string, // speaker
    backgroundURL: string,
    animation?: {
        animationType: ("div" | "img"),
        src?: string, // if animationType === 'img'
        classes: string,
        transform: string, // animation name
    },
    sound?: string,
    dialogue: string | null,
    speed: number,
    align: ("left" | "right"),
}

export interface stateKey {
    name: string,
    type: ("cutscene" | "battle")
}