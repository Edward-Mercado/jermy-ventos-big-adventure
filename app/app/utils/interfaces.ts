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
    type: ("Inhibit" | "DOT" | "Double Attack"),
    action: Function | null,
    afflictedName: string,
    length: number,
}