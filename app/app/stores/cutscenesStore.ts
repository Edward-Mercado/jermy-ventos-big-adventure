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
                sound: '/sounds/joey.m4a',
                speed: 45,
                align: "left"
            }, {
                speaker: "Edward",
                dialogue: "Still 15, you haven't completed your birthday challenge yet! But I, am 16.",
                imgURL: "/images/edward.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/edward.caf',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joey",
                dialogue: "Dude, what the hell.",
                imgURL: "/images/joey.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/joey.m4a',
                speed: 45,
                align: "left"
            }, {
                speaker: "Gab",
                dialogue: "Don't you mean, 'what the smell?'",
                imgURL: "/images/gab.png",
                backgroundURL: '/backgrounds/summer.png',
                animation: {
                    animationType: 'img',
                    src: '/images/greengas.png',
                    classes: 'fixed z-0 left-[17vw] top-[16vh] max-w-[40vw] max-h-[40vh]',
                    transform: 'stink'
                },
                sound: '/sounds/gab.m4a',
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
                sound: '/sounds/joey.m4a',
                speed: 45,
                align: "right"
            }, {
                speaker: "Pierce",
                dialogue: "Kill us? Yeah, like that's gonna happen...",
                imgURL: "/images/pierce.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/baselow.caf',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "YES. TO KILL YOU. BECAUSE. I AM EVIL. JOEVIL.",
                imgURL: "/images/joevil.png",
                backgroundURL: '/backgrounds/evil.png',
                sound: '/sounds/joey.m4a',
                speed: 45,
                align: "right"
            }, {
                speaker: "Mrs. Paula Vento",
                dialogue: "Well, that's not very nice.",
                imgURL: "/images/mrspaulavento.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/basehigh.m4a',
                speed: 45,
                align: "left"
            }, {
                speaker: "Kellan",
                dialogue: "Yeah dude, I'm gonna ball all over you.",
                imgURL: "/images/kellan.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/baselow.caf',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "Nuh uh.",
                imgURL: "/images/joevil.png",
                backgroundURL: '/backgrounds/evil.png',
                sound: '/sounds/joey.m4a',
                speed: 70,
                align: "right"
            }, {
                speaker: "Kellan",
                dialogue: "Yuh uh.",
                imgURL: "/images/kellan.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/baselow.caf',
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
                sound: '/sounds/columbo.m4a',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "I am evil. Don't look into it.",
                imgURL: "/images/joevil.png",
                backgroundURL: '/backgrounds/evil.png',
                sound: '/sounds/joey.m4a',
                speed: 45,
                align: "right"
            }, {
                speaker: "Columbo",
                dialogue: "I guess that solves it.",
                imgURL: "/images/columbo.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/columbo.m4a',
                speed: 45,
                align: "left"
            }, {
                speaker: "Matteo",
                dialogue: "I think we need to take the Royal Crown off this evil... EVIL... stinky (x1000).",
                imgURL: "/images/matteo.png",
                backgroundURL: '/backgrounds/matteo-domain-expansion.png',
                sound: '/sounds/baselow.caf',
                speed: 45,
                align: "left"
            }, {
                speaker: "Lucia",
                dialogue: "Yeah, he's a !$%#*@",
                imgURL: "/images/lucia.png",
                backgroundURL: '/backgrounds/evil.png',
                sound: '/sounds/lucia.m4a',
                speed: 75,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "Dude, I'm evil, not monstrous. Also, I'm not even gay :(",
                imgURL: "/images/joevil.png",
                backgroundURL: '/backgrounds/evil.png',
                sound: '/sounds/joey.m4a',
                speed: 45,
                align: "right"
            }, {
                speaker: "Humd",
                dialogue: "hiii :)",
                imgURL: "/images/humd.png",
                sound: '/sounds/humd.m4a',
                backgroundURL: '/backgrounds/summer.png',
                speed: 60,
                align: "left"
            }, {
                speaker: "Edward",
                dialogue: "HII!!!!! mwahmwahmwah oh shit what is tha-",
                imgURL: "/images/edward.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/edward.caf',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "EVIL BEAM GO!",
                imgURL: "/images/joevil.png",
                backgroundURL: '/backgrounds/evil.png',
                sound: '/sounds/joey.m4a',
                speed: 5,
                align: "right"
            }, {
                speaker: "Edward",
                dialogue: "OW! That hurts...",
                imgURL: "/images/edward.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/edward.caf',
                animation: {
                    animationType: 'div',
                    classes: 'bg-linear-to-l to-red-500 from-red-950 z-3 w-[80vw] fixed top-[55vh] left-[20vw] rounded-l-full max-h-[20vh]',
                    transform: 'evil-beam'
                },
                speed: 45,
                align: "left"
            }, {
                speaker: "Edward (evil)",
                dialogue: "I... AM NOW EVIL EDWARD! HERE'S YOUR BIRTHDAY GIFT ON TIME, SUCKERS! EVIL BEAM GO!!!",
                imgURL: "/images/edwardevil.png",
                backgroundURL: '/backgrounds/evil.png',
                sound: '/sounds/edward.caf',
                speed: 30,
                align: "right"
            }, {
                speaker: "All",
                dialogue: "NOOOOOO!!!!!!",
                imgURL: "/images/crowd.png",
                backgroundURL: '/backgrounds/summer.png',
                animation: {
                    animationType: 'div',
                    classes: 'bg-linear-to-l to-red-500 from-red-950 z-3 w-[80vw] fixed top-[55vh] left-[20vw] rounded-l-full max-h-[20vh]',
                    transform: 'evil-beam'
                },
                sound: '/sounds/baselow.caf',
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
                animation: {
                    animationType: 'div',
                    classes: 'bg-linear-to-l to-red-500 from-red-950 z-3 w-[80vw] fixed top-[55vh] left-[20vw] rounded-l-full max-h-[20vh]',
                    transform: 'evil-beam'
                },
                speed: 45,
                align: "left"
            }, {
                speaker: "Omnipotent Narrator",
                dialogue: "Now, it is all down to you. To stop Joevil's reign. And to turn 16.",
                backgroundURL: '/backgrounds/evil.png',
                imgURL: null,
                sound: '/sounds/baselow.caf',
                speed: 60,
                align: "left"
            }] as DialogueLine[],
            "firstEncounter": [
                {
                    speaker: "Joey",
                    dialogue: "Damn. I must try to find my friends again. And save them from Joevil. All at 15 years old?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 60,
                    align: "left"
                },
                {
                    speaker: "Little Guy 1",
                    dialogue: "Prepare for a battle!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/littleguys.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Little Guy 2",
                    dialogue: "With both of us!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/basehigh.m4a',
                    imgURL: "/images/littleguys.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Little Guy 1",
                    dialogue: "Try to find a way to beat us little guys!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/littleguys.png",
                    speed: 45,
                    align: "right"
                },
            ] as DialogueLine[],
            "saveKellan": [
                {
                    speaker: "Kellan (evil)",
                    dialogue: "Damn it... I've been weakened. I can't even make a free throw...",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Kellan (evil)",
                    dialogue: "Not that... I could've made one anyway...",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joey",
                    dialogue: "BIRTHDAY BEAM!!! GO!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Kellan (evil)",
                    dialogue: "AUAGGHHH!!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/kellan.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joey",
                    dialogue: "Did... that work?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Kellan",
                    dialogue: "What? Where am I?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Kellan",
                    dialogue: "Where is Joevil? I'm so dizzy...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joey",
                    dialogue: "It worked! It's a birthday miracle!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Kellan",
                    dialogue: "Joey... I need to warn you... There's many of them out there...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Kellan",
                    dialogue: "I don't know if you can win this on your own.",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joey",
                    dialogue: "So can you join me?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Kellan",
                    dialogue: "I guess... It's almost your birthday after all.",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joey",
                    dialogue: "We have to save the others!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Kellan",
                    dialogue: "It's Humd and Noure ahead... a fork in the road... Who should we save first?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "saveKortnee": [
                {
                    speaker: "Kortnee (evil)",
                    dialogue: "WOAH!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/basehigh.m4a',
                    imgURL: "/images/kortnee.png",
                    speed: 60,
                    align: "right"
                },
                {
                    speaker: "Little Guy 1",
                    dialogue: "Prepare for a battle!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/littleguys.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Little Guy 2",
                    dialogue: "With both of us!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/basehigh.m4a',
                    imgURL: "/images/littleguys.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Little Guy 1",
                    dialogue: "Try to find a way to beat us little guys!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/littleguys.png",
                    speed: 45,
                    align: "right"
                },
            ] as DialogueLine[]
        } as Record<string, DialogueLine[]>
    })
})

/*

"template": [
                {
                    speaker: "Joey",
                    dialogue: "Damn. I must try to find my friends again. And save them from Joevil. All at 15 years old?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 60,
                    align: "left"
                },
                {
                    speaker: "Little Guy 1",
                    dialogue: "Prepare for a battle!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/littleguys.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Little Guy 2",
                    dialogue: "With both of us!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/basehigh.m4a',
                    imgURL: "/images/littleguys.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Little Guy 1",
                    dialogue: "Try to find a way to beat us little guys!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/littleguys.png",
                    speed: 45,
                    align: "right"
                },
            ] as DialogueLine[]

*/