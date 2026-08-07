export const useChoicesStore = defineStore('cutscene', {
    state: () => ({
        'HumdOrNoure': {
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
                },
            }
        }
    })
})