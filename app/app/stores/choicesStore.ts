export const useChoicesStore = defineStore('choices', {
    state: () => ({
        'HumdNoure': {
            question: "Which girlfriend are you saving first, Humd or Noure? You will have the opportunity to save the other later.",
            choiceA: {
                img: "/images/humd.png",
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
        }
    })
})