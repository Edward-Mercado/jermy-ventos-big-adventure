export const useCutsceneStore = defineStore('cutscene', {
    state: () => ({
        cutsceneOrder: ["opening"] as string[],
        cutscenes: {
            "opening": [{
                speaker: "Noure   (narrator)",
                imgURL: "/public/images/noure.png",
                dialogue: "It was a bright summer day...",
                speed: 45,
                align: "left"
            }, {
                speaker: "Joey",
                dialogue: "Wow guys, I am finally almost 16!",
                imgURL: "/public/images/joey.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Edward",
                dialogue: "Still 15, you haven't completed your birthday challenge yet! But I, am 16.",
                imgURL: "/public/images/edward.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Joey",
                dialogue: "Dude, what the hell.",
                imgURL: "/public/images/joey.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Gab",
                dialogue: "Don't you mean, 'what the smell?'",
                imgURL: "/public/images/gab.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Kortnee",
                dialogue: "GUYS! THERE'S SOMETHING COMING THIS WAY! WHO IS THAT?",
                imgURL: "/public/images/kortnee.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "I AM JOEVIL! I AM HERE TO... uhh...",
                imgURL: "/public/images/joevil.png",
                speed: 45,
                align: "right"
            }, {
                speaker: "Pierce",
                dialogue: "Kill us? Yeah, like that's gonna happen",
                imgURL: "/public/images/pierce.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "YES. TO KILL YOU. BECAUSE. I AM EVIL. JOEVIL.",
                imgURL: "/public/images/joevil.png",
                speed: 45,
                align: "right"
            }, {
                speaker: "Mrs. Paula Vento",
                dialogue: "Well, that's not very nice.",
                imgURL: "/public/images/mrspaulavento.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Kellan",
                dialogue: "Yeah dude, I'm gonna ball all over you.",
                imgURL: "/public/images/kellan.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "Nuh uh.",
                imgURL: "/public/images/joevil.png",
                speed: 70,
                align: "right"
            }, {
                speaker: "Kellan",
                dialogue: "Yuh uh.",
                imgURL: "/public/images/kellan.png",
                speed: 100,
                align: "left"
            }, {
                speaker: "Gil",
                dialogue: "Ladies, pack it up.",
                imgURL: "/public/images/gil.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Columbo",
                dialogue: "Guys... I think we need to get to the bottom of why he's so evil! I think.",
                imgURL: "/public/images/columbo.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "I am evil. Don't look into it.",
                imgURL: "/public/images/joevil.png",
                speed: 45,
                align: "right"
            }, {
                speaker: "Columbo",
                dialogue: "I guess that solves it.",
                imgURL: "/public/images/columbo.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Matteo",
                dialogue: "I think we need to take the Royal Crown off this evil... EVIL... man.",
                imgURL: "/public/images/matteo.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Lucia",
                dialogue: "Yeah, he's a !$%#*@",
                imgURL: "/public/images/lucia.png",
                speed: 75,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "Dude, I'm evil, not monstrous. Also, I'm not even gay :(",
                imgURL: "/public/images/joevil.png",
                speed: 45,
                align: "right"
            }, {
                speaker: "Humd",
                dialogue: "hiii :)",
                imgURL: "/public/images/humd.png",
                speed: 60,
                align: "left"
            }, {
                speaker: "Edward",
                dialogue: "HII!!!!! mwahmwahmwah oh shit what is tha-",
                imgURL: "/public/images/edward.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "EVIL BEAM GO!",
                imgURL: "/public/images/joevil.png",
                speed: 5,
                align: "right"
            }, {
                speaker: "Edward",
                dialogue: "OW! That hurts...",
                imgURL: "/public/images/edward.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Edward (now evil)",
                dialogue: "I... AM NOW EVIL EDWARD! HERE'S YOUR BIRTHDAY GIFT ON TIME, SUCKERS! EVIL BEAM GO!!!",
                imgURL: "/public/images/edward-evil.png",
                speed: 30,
                align: "right"
            }, {
                speaker: "All",
                dialogue: "NOOOOOO!!!!!!",
                imgURL: "/public/images/crowd.png",
                speed: 250,
                align: "left"
            }, {
                speaker: "Noure (narrator)",
                dialogue: "One by one, they all got hit by Joevil's evil beams. They were defenseless, and the day was swiftly lost.",
                imgURL: "/public/images/noure.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Gavin (evil)",
                dialogue: "DON'T THINK I FORGOT ABOUT YOU! i love you bb mwah",
                imgURL: "/public/images/gavin-evil.png",
                speed: 45,
                align: "right"
            }, {
                speaker: "Noure (narrator)",
                dialogue: "OW!",
                imgURL: "/public/images/noure.png",
                speed: 45,
                align: "left"
            }, {
                speaker: "Omnipotent Narrator",
                dialogue: "Now, it is all down to you.",
                imgURL: null,
                speed: 60,
                align: "left"
            }] as DialogueLine[],
            "firstEncounter": [
                {
                    speaker: "",
                    dialogue: "",
                    imgURL: "",
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[]
        } as Record<string, DialogueLine[]>
    })
})