export const useCutsceneStore = defineStore('cutscene', {
    state: () => ({
        cutsceneOrder: ["opening"] as string[],
        cutscenes: {
            "opening": [{
            speaker: "Joey",
            dialogue: "Wow guys, I am finally almost 16!"
            }, {
            speaker: "Edward",
            dialogue: "Still 15, you haven't completed your birthday challenge yet!"
            },{
            speaker: "Joey",
            dialogue: "Dude, what the hell."
            },{
            speaker: "Gab",
            dialogue: "Don't you mean, 'what the smell?'"
            }] as DialogueLine[]
        }
    })
})