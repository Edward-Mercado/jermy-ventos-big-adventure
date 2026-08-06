export const useCutsceneStore = defineStore('cutscene', {
    state: () => ({
        cutscenes: {
            "opening": [{
                speaker: "Noure   (narrator)",
                imgURL: "/images/noure.png",
                dialogue: "It was a bright summer day...",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/noure.caf',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joey",
                dialogue: "Wow guys, I am finally almost 16!",
                imgURL: "/images/joey.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Edward",
                dialogue: "Still 15, you haven't completed your birthday challenge yet! But I, am 16.",
                imgURL: "/images/edward.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joey",
                dialogue: "Dude, what the hell.",
                imgURL: "/images/joey.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Gab",
                dialogue: "Don't you mean, 'what the smell?'",
                imgURL: "/images/gab.png",
                backgroundURL: '/backgrounds/greengas.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Kortnee",
                dialogue: "GUYS! THERE'S SOMETHING COMING THIS WAY! WHO IS THAT?",
                imgURL: "/images/kortnee.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "I AM JOEVIL! I AM HERE TO... uhh...",
                imgURL: "/images/joevil.png",
                backgroundURL: '/backgrounds/evil.png',
                speed: 45,
                align: "right"
            }, {
                speaker: "Pierce",
                dialogue: "Kill us? Yeah, like that's gonna happen...",
                imgURL: "/images/pierce.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "YES. TO KILL YOU. BECAUSE. I AM EVIL. JOEVIL.",
                imgURL: "/images/joevil.png",
                backgroundURL: '/backgrounds/evil.png',
                speed: 45,
                align: "right"
            }, {
                speaker: "Mrs. Paula Vento",
                dialogue: "Well, that's not very nice.",
                imgURL: "/images/mrspaulavento.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Kellan",
                dialogue: "Yeah dude, I'm gonna ball all over you.",
                imgURL: "/images/kellan.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "Nuh uh.",
                imgURL: "/images/joevil.png",
                backgroundURL: '/backgrounds/evil.png',
                speed: 70,
                align: "right"
            }, {
                speaker: "Kellan",
                dialogue: "Yuh uh.",
                imgURL: "/images/kellan.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 100,
                align: "left"
            }, {
                speaker: "Gil",
                dialogue: "Ladies, pack it up.",
                imgURL: "/images/gil.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Columbo",
                dialogue: "Guys... I think we need to get to the bottom of why he's so evil! I think.",
                imgURL: "/images/columbo.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "I am evil. Don't look into it.",
                imgURL: "/images/joevil.png",
                backgroundURL: '/backgrounds/evil.png',
                speed: 45,
                align: "right"
            }, {
                speaker: "Columbo",
                dialogue: "I guess that solves it.",
                imgURL: "/images/columbo.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Matteo",
                dialogue: "I think we need to take the Royal Crown off this evil... EVIL... stinky (x1000).",
                imgURL: "/images/matteo.png",
                backgroundURL: '/backgrounds/matteo-domain-expansion.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Lucia",
                dialogue: "Yeah, he's a !$%#*@",
                imgURL: "/images/lucia.png",
                backgroundURL: '/backgrounds/evil.png',
                speed: 75,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "Dude, I'm evil, not monstrous. Also, I'm not even gay :(",
                imgURL: "/images/joevil.png",
                backgroundURL: '/backgrounds/evil.png',
                speed: 45,
                align: "right"
            }, {
                speaker: "Humd",
                dialogue: "hiii :)",
                imgURL: "/images/humd.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 60,
                align: "left"
            }, {
                speaker: "Edward",
                dialogue: "HII!!!!! mwahmwahmwah oh shit what is tha-",
                imgURL: "/images/edward.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "EVIL BEAM GO!",
                imgURL: "/images/joevil.png",
                backgroundURL: '/backgrounds/evil.png',
                speed: 5,
                align: "right"
            }, {
                speaker: "Edward",
                dialogue: "OW! That hurts...",
                imgURL: "/images/edward.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 45,
                align: "left"
            }, {
                speaker: "Edward (now evil)",
                dialogue: "I... AM NOW EVIL EDWARD! HERE'S YOUR BIRTHDAY GIFT ON TIME, SUCKERS! EVIL BEAM GO!!!",
                imgURL: "/images/edwardevil.png",
                backgroundURL: '/backgrounds/evil.png',
                speed: 30,
                align: "right"
            }, {
                speaker: "All",
                dialogue: "NOOOOOO!!!!!!",
                imgURL: "/images/crowd.png",
                backgroundURL: '/backgrounds/summer.png',
                speed: 250,
                align: "left"
            }, {
                speaker: "Noure (narrator)",
                dialogue: "One by one, they all got hit by Joevil's evil beams. They were defenseless, and the day was swiftly lost.",
                imgURL: "/images/noure.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/noure.caf',
                speed: 45,
                align: "left"
            }, {
                speaker: "Gavin (evil)",
                dialogue: "DON'T THINK I FORGOT ABOUT YOU! i love you bb mwah",
                imgURL: "/images/gavinevil.png",
                sound: '/sounds/gavin.m4a',
                backgroundURL: '/backgrounds/evil.png',
                speed: 45,
                align: "right"
            }, {
                speaker: "Noure (narrator)",
                dialogue: "OW!",
                imgURL: "/images/noure.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/noure.caf',
                speed: 45,
                align: "left"
            }, {
                speaker: "Omnipotent Narrator",
                dialogue: "Now, it is all down to you.",
                backgroundURL: '/backgrounds/summer.png',
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