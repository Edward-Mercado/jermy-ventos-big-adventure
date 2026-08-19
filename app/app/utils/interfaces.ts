export interface Friend {
    name: string,
    eachTurnCheck: null | Function,
    abilityName: string,
    abilityDesc: string,
    abilityTiming: ("With Attack" | "Before Turn" | "Follows Enemy" | "After Turn"),
    targetType: ("Single" | "AOE" | "Self" | "Special"),
    spriteURL: string,
    ability: Function,
    sound: string,
    manaCost: number,
}

export interface EnemyData {
    name: string,
    attack: number,
    defense: number,
    abilityType: ("offense" | "defense"),
    ability: Function,
    abilityName: string,
    currentHP: number,
    maxHP: number,
    currentMana: number,
    manaCost: number
    maxMana: number,
    img: string,
    expDrop: number,
    desc: string,
    level: number,
    title: string,
    sound: string,
}

export interface Enemy extends EnemyData {
    nextMove: ("Attack" | "Block" | "Use Ability" | null),
    targetOf: Friend[],
    status: Status | null,
    shrinkCount: number,
    consecutiveBlocks: number,
    isBlocking: boolean,
    attackThisEvent: boolean,
}

export interface EnemyGroup {
    enemies: EnemyData[]
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

export interface StateKey {
    name: string,
    dynamic?: string,
    type: ("cutscene" | "battle" | "choice" | "shop" | "end"),
}

export interface BattleEvent {
    user: string,
    spriteURL: string,
    flavorText: string,
    action: Function | null,
    actionArgs?: any[],
    sound: string,
    actionPerformed: boolean,
}

export interface Status {
    name: string,
    type: ("Inhibit" | "DOT" | "Double Attack" | "Revive"),
    action: Function | null,
    afflictedName: string,
    length: number,
}

export type ChoiceOption = { img: string; desc: string; func: () => void }

export interface storeItem {
    name: string,
    img: string,
    stats?: {
        attack: number,
        defense: number
    },
    abilityName?: string
}

export interface EndlessConstructor {
    name: string,
    img: string,
    desc: string,
    title: string,
    sound: string,
    baseAttack: number,
    baseDefense: number,
    baseMana: number,
    baseHP: number,
    abilityType: ("offense" | "defense"),
    abilityName: string,
    manaCost: number,
    ability: Function
}