export interface Friend {
    name: string,
    eachTurnCheck: null | Function,
    abilityName: string,
    abilityDesc: string,
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
    spriteURL: string
}

export interface LevelStats {
    attack: number
    defense: number
    maxHP: number
    expRequirement: number
}

export interface DialogueLine {
    speaker: string,
    dialogue: string
}

export interface stateKey {
    name: string,
    type: ("cutscene" | "battle")
}