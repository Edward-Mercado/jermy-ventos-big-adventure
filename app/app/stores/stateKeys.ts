const DEFAULT_CHOICES = {
    HumdNoureBattle1: 'battleNoure',
    HumdNoureSave1: 'saveNoure',
    HumdNoureBattle2: 'battleHumd',
    HumdNoureSave2: 'saveHumd',

    GilGabBattle1: 'battleGab',
    GilGabSave1: 'saveGab',
    GilGabBattle2: 'battleGil',
    GilGabSave2: 'saveGil',

    GavMomBattle1: 'battleMom',
    GavMomSave1: 'saveMom',
    GavMomBattle2: 'battleGav',
    GavMomSave2: 'saveGav',

    LuciaColumboBattle1: 'battleColumbo',
    LuciaColumboSave1: 'saveColumbo',
    LuciaColumboBattle2: 'battleLucia',
    LuciaColumboSave2: 'saveLucia',

    ThiraPierceBattle1: 'battlePierce',
    ThiraPierceSave1: 'savePierce',
    ThiraPierceBattle2: 'battleThira',
    ThiraPierceSave2: 'saveThira',

    MatteoWozBattle1: 'battleWoz',
    MatteoWozSave1: 'saveWoz',
    MatteoWozBattle2: 'battleMatteo',
    MatteoWozSave2: 'saveMatteo',

    ending: "killJoevil"
} as const

// 3. Automatically generate the type for choicesMade based on the object above
type ChoiceKey = keyof typeof DEFAULT_CHOICES
type ChoicesMade = Record<ChoiceKey, string | null>

export const useStateKeys = defineStore('stateKeys', {
    state: () => {
        // Automatically initialize all choices to null so we don't have to type them manually
        const initialChoices = Object.keys(DEFAULT_CHOICES).reduce((acc, key) => {
            acc[key as ChoiceKey] = null
            return acc
        }, {} as ChoicesMade)

        return {
            keys: [
                { type: 'cutscene', name: 'opening' },
                { type: 'cutscene', name: 'firstEncounter' },
                { type: 'battle', name: 'littleGuys1' },
                { type: 'battle', name: 'battleKellan' },
                { type: 'cutscene', name: 'saveKellan' },
                { type: 'choice', name: 'HumdNoure'}, 
                { type: 'battle', name: 'blockyBall1' },
                { type: 'battle', dynamic: 'HumdNoureBattle1', name: 'battleNoure' },
                { type: 'cutscene', dynamic: 'HumdNoureSave1', name: 'saveNoure' },
                { type: 'battle', name: 'grassMan1' },
                { type: 'battle', dynamic: 'HumdNoureBattle2', name: 'battleHumd' },
                { type: 'cutscene', dynamic: 'HumdNoureSave2', name: 'saveHumd' },
                { type: 'battle', name: 'lemonAlien1' },
                { type: 'battle', name: 'battleKortnee' },
                { type: 'cutscene', name: 'saveKortnee' },
                { type: 'battle', name: 'littleGuys2' },
                { type: 'choice', name: 'GsVentos' },
                { type: 'battle', name: 'miniCrossword1' },
                { type: 'battle', dynamic: 'GilGabBattle1', name: 'battleGab' },
                { type: 'cutscene', dynamic: 'GilGabSave1', name: 'saveGab' },
                { type: 'battle', dynamic: 'GavMomBattle1', name: 'battleMom' },
                { type: 'cutscene', dynamic: 'GavMomSave1', name: 'saveMom' },
                { type: 'battle', name: 'alastor1' },
                { type: 'battle', dynamic: 'GilGabBattle2', name: 'battleGil' },
                { type: 'cutscene', dynamic: 'GilGabSave2', name: 'saveGil' },
                { type: 'battle', dynamic: 'GavMomBattle1', name: 'battleGav' },
                { type: 'cutscene', dynamic: 'GavMomSave2', name: 'saveGav' },
                { type: 'battle', name: 'circle1' },
                { type: 'cutscene', name: 'approachingEdward' },
                { type: 'cutscene', name: 'edwardDefeat' },
                { type: 'choice', name: 'ElementariesFakes' },
                { type: 'cutscene', dynamic: 'LuciaColumboSave1', name: 'saveColumbo' },
                { type: 'cutscene', dynamic: 'ThiraPierceSave1', name: 'savePierce' },
                { type: 'cutscene', dynamic: 'MatteoWozSave1', name: 'saveWoz' },
                { type: 'cutscene', dynamic: 'LuciaColumboSave2', name: 'saveLucia' },
                { type: 'cutscene', dynamic: 'ThiraPierceSave2', name: 'saveThira' },
                { type: 'cutscene', dynamic: 'MatteoWozSave2', name: 'saveMatteo' },
                { type: 'cutscene', name: 'allSaved' },
                { type: 'cutscene', name: 'saveEdward' },
                { type: 'cutscene', name: 'joevilsPlea' },
                { type: 'choice', name: 'EndingChoice' },
                { type: 'cutscene', dynamic: 'ending', name: 'killJoevil' },
                { type: 'end', name: 'end' },
            ] as StateKey[],
            choicesMade: initialChoices
        }
    },
    actions: {
        loadChoices() {
            for (const keyObj of this.keys) {
                const dynamicKey = keyObj.dynamic as ChoiceKey | undefined;
                
                if (dynamicKey && dynamicKey in DEFAULT_CHOICES) {
                    const stored = localStorage.getItem(dynamicKey)
                    const choice = stored ?? DEFAULT_CHOICES[dynamicKey]
                    
                    keyObj.name = choice
                    this.choicesMade[dynamicKey] = choice
                }
            }
        },
        
        saveChoices() {
            for (const [key, value] of Object.entries(this.choicesMade)) {
                if (value !== null) {
                    localStorage.setItem(key, value as string)
                }
            }
        }
    }
})

export const abilityGainKeys:Record<string, string>[] = [
    {battleGab: "Gab"},
    {battleGav: "Gavin"},
    {battleNoure: "Noure"},
    {battleKortnee: "Kortnee"},
    {battleMatteo: "Matteo"},
    {battleMom: "Mrs. Paula Vento"},
    {battlePierce: "Pierce"},
    {battleWoz: "Scott the Woz"},
    {battleGil: "Gil"},
    {battleKellan: "Kellan"},
    {battleColumbo: "Columbo"},
    {battleThira: "Thira"},
    {battleLucia: "Lucia"},
    {battleHumd: "Humd"},
]