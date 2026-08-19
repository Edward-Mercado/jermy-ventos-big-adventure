export const useChoicesStore = defineStore('choices', {
    state: () => ({
        'HumdNoure': {
            question: "Which girlfriend are you saving first, Humd or Noure? You will have the opportunity to save the other later.",
            choiceA: {
                img: "/images/humd.png",
                imgClasses: 'w-full xl:mb-[-60%] mb-[-40%] mt-[5%]',
                desc: "Save Humd First",
                func: () => {
                    const choices = useStateKeys().choicesMade
                    choices.HumdNoureBattle1 = "battleHumd"
                    choices.HumdNoureSave1 = "saveHumd"
                    choices.HumdNoureBattle2 = "battleNoure"
                    choices.HumdNoureSave2 = "saveNoure"
                    useStateKeys().saveChoices()
                    useStateKeys().loadChoices()
                },
            },
            choiceB: {
                img: "/images/noure.png",
                imgClasses: 'min-w-[140%] ml-[-20%] mb-[-10%] ',
                desc: "Save Noure First",
                func: () => {
                    const choices = useStateKeys().choicesMade
                    choices.HumdNoureBattle1 = "battleNoure"
                    choices.HumdNoureSave1 = "saveNoure"
                    choices.HumdNoureBattle2 = "battleHumd"
                    choices.HumdNoureSave2 = "saveHumd"
                    useStateKeys().saveChoices()
                    useStateKeys().loadChoices()
                },
            }
        },
        'GsVentos': {
            question: "Do you want to save some white boys, or your own family first?",
            choiceA: {
                img: "/images/gs.png",
                imgClasses: 'min-w-full translate-y-[25%]',
                desc: "Save Gil and Gavin First",
                func: () => {
                    const choices = useStateKeys().choicesMade
                    choices.GilGabBattle1 = "battleGil"
                    choices.GilGabSave1 = "saveGil"
                    choices.GilGabBattle2 = "battleGab"
                    choices.GilGabSave2 = "saveGab"

                    choices.GavMomBattle1 = "battleGav"
                    choices.GavMomSave1 = "saveGav"
                    choices.GavMomBattle2 = "battleMom"
                    choices.GavMomSave2 = "saveMom"
                    useStateKeys().saveChoices()
                    useStateKeys().loadChoices()
                },
            },
            choiceB: {
                img: "/images/ventos.png",
                desc: "Save Your Family First",
                imgClasses: 'min-w-[115%] ml-[-15%]',
                func: () => {
                    const choices = useStateKeys().choicesMade
                    choices.GilGabBattle1 = "battleGab"
                    choices.GilGabSave1 = "saveGab"
                    choices.GilGabBattle2 = "battleGil"
                    choices.GilGabSave2 = "saveGil"

                    choices.GavMomBattle1 = "battleMom"
                    choices.GavMomSave1 = "saveMom"
                    choices.GavMomBattle2 = "battleGav"
                    choices.GavMomSave2 = "saveGav"
                    useStateKeys().saveChoices()
                    useStateKeys().loadChoices()
                },
            }
        },
        'ElementariesFakes': {
            question: "Do you want to save your elementary school pals, or fake people first?",
            choiceA: {
                img: "/images/elementary.png",
                desc: "Save Lucia, Thira, and Matteo First",
                imgClasses: 'translate-y-[10%]',
                func: () => {
                    const choices = useStateKeys().choicesMade
                    choices.LuciaColumboBattle1 = "battleLucia"
                    choices.LuciaColumboSave1 = "saveLucia"
                    choices.LuciaColumboBattle2 = "battleColumbo"
                    choices.LuciaColumboSave2 = "saveColumbo"

                    choices.ThiraPierceBattle1 = "battleThira"
                    choices.ThiraPierceSave1 = "saveThira"
                    choices.ThiraPierceBattle2 = "battlePierce"
                    choices.ThiraPierceSave2 = "savePierce"

                    choices.MatteoWozBattle1 = "battleMatteo"
                    choices.MatteoWozSave1 = "saveMatteo"
                    choices.MatteoWozBattle2 = "battleWoz"
                    choices.MatteoWozSave2 = "saveWoz"

                    useStateKeys().saveChoices()
                    useStateKeys().loadChoices()
                },
            },
            choiceB: {
                img: "/images/fakes.png",
                desc: "Save Columbo, Pierce, and Scott the Woz First",
                imgClasses: 'translate-y-[25%] translate-x-[15%]',
                func: () => {
                    const choices = useStateKeys().choicesMade
                    choices.LuciaColumboBattle1 = "battleColumbo"
                    choices.LuciaColumboSave1 = "saveColumbo"
                    choices.LuciaColumboBattle2 = "battleLucia"
                    choices.LuciaColumboSave2 = "saveLucia"

                    choices.ThiraPierceBattle1 = "battlePierce"
                    choices.ThiraPierceSave1 = "savePierce"
                    choices.ThiraPierceBattle2 = "battleThira"
                    choices.ThiraPierceSave2 = "saveThira"

                    choices.MatteoWozBattle1 = "battleWoz"
                    choices.MatteoWozSave1 = "saveWoz"
                    choices.MatteoWozBattle2 = "battleMatteo"
                    choices.MatteoWozSave2 = "saveMatteo"
                    useStateKeys().saveChoices()
                    useStateKeys().loadChoices()
                },
            }
        },
        'EndingChoice': {
            question: "Decide Joevil's fate.",
            choiceA: {
                img: "/images/joevilsaved.png",
                desc: "Spare Joevil",
                imgClasses: 'translate-y-[10%] w-[70%] ml-[15%]',
                func: () => {
                    const choices = useStateKeys().choicesMade
                    choices.ending = "spareJoevil"

                    useStateKeys().saveChoices()
                    useStateKeys().loadChoices()
                },
            },
            choiceB: {
                img: "/images/joevildead.png",
                desc: "Kill Joevil",
                imgClasses: 'translate-y-[10%] w-[70%] ml-[15%]',
                func: () => {
                    const choices = useStateKeys().choicesMade
                    choices.ending = "killJoevil"

                    useStateKeys().saveChoices()
                    useStateKeys().loadChoices()
                },
            }
        },
    })
})