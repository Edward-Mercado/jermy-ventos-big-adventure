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
                dialogue: "Still 15, you haven't completed your birthday challenge yet! But I, whose birthday already passed, am 16.",
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
                speaker: "Scott the Woz",
                dialogue: "I just got off the phone with a fool and ya know what he said to me?",
                imgURL: "/images/scottthewoz.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/scottthewoz.m4a',
                speed: 45,
                align: "right"
            }, {
                speaker: "Thira",
                dialogue: "What did he say?",
                imgURL: "/images/thira.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/thira.m4a',
                speed: 45,
                align: "left"
            }, {
                speaker: "Scott the Woz",
                dialogue: "Something like...",
                imgURL: "/images/scottthewoz.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/scottthewoz.m4a',
                speed: 45,
                align: "right"
            }, {
                speaker: "Scott the Woz",
                dialogue: "He's obviously making a game. I doubt its a coding thing since I dont think he'd put that effort in for me.",
                imgURL: "/images/scottthewoz.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/scottthewoz.m4a',
                speed: 45,
                align: "right"
            }, {
                speaker: "Humd",
                dialogue: "What does that even mean...",
                imgURL: "/images/humd.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/humd.m4a',
                speed: 45,
                align: "left"
            }, {
                speaker: "Edward",
                dialogue: "Ignore it baby...",
                imgURL: "/images/edward.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/edward.caf',
                speed: 45,
                align: "left"
            }, {
                speaker: "Scott the Woz",
                dialogue: "I don't even know!",
                imgURL: "/images/scottthewoz.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/scottthewoz.m4a',
                speed: 45,
                align: "right"
            }, {
                speaker: "Kortnee",
                dialogue: "GUYS! THERE'S SOMETHING COMING THIS WAY! WHO IS THAT?",
                imgURL: "/images/kortnee.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: '/sounds/kortnee.m4a',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "BWAHAHAH! I AM JOEVIL! I AM HERE TO... uhh...",
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
                sound: '/sounds/pierce.m4a',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "IIINNNDEEED!!!. TO KILL YOU. BECAUSE. I AM EVIL. JOEVIL.",
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
                sound: '/sounds/kellan.m4a',
                speed: 45,
                align: "left"
            }, {
                speaker: "Joevil",
                dialogue: "Narrr bro.",
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
                sound: '/sounds/kellan.m4a',
                speed: 100,
                align: "left"
            }, {
                speaker: "Gil",
                dialogue: "Ladies, pack it up.",
                imgURL: "/images/gil.png",
                backgroundURL: '/backgrounds/summer.png',
                sound: "/sounds/gil.m4a",
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
                dialogue: "I am that evil. Don't look into it.",
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
                sound: '/sounds/matteo.m4a',
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
                dialogue: "Bro, uh.. I'm evil, not monstrous. Also, I'm not even gay :(",
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
                dialogue: "EDWARD! EVIL BEAM GO!",
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
            }, {
                speaker: "Omnipotent Narrator",
                dialogue: "The power rests in your birthday beams... Use them wisely...",
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
                    sound: '/sounds/kellan.m4a',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Kellan (evil)",
                    dialogue: "Not that... I could've made one anyway...",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/kellan.m4a',
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
                    sound: '/sounds/kellan.m4a',
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
                    sound: '/sounds/kellan.m4a',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Kellan",
                    dialogue: "Where is Joevil? I'm so dizzy...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/kellan.m4a',
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
                    sound: '/sounds/kellan.m4a',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Kellan",
                    dialogue: "I don't know if you can win this on your own.",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/kellan.m4a',
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
                    sound: '/sounds/kellan.m4a',
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
                    sound: '/sounds/kellan.m4a',
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
                    sound: '/sounds/kortnee.m4a',
                    imgURL: "/images/kortnee.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 60,
                    align: "right"
                }
            ] as DialogueLine[],

            "saveHumd": [
                {
                    speaker: "Humd (evil)",
                    dialogue: "WHEEEEWWW!!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/humd.m4a',
                    imgURL: "/images/humd.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "saveNoure": [
                {
                    speaker: "Noure (evil)",
                    dialogue: "WHOOOOOO!!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/noure.caf',
                    imgURL: "/images/noure.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "saveGil": [
                {
                    speaker: "Gil (evil)",
                    dialogue: "JOEY JOEY PLEASE IT HURTS",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/gil.m4a',
                    imgURL: "/images/gil.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "saveGav": [
                {
                    speaker: "Gavin (evil)",
                    dialogue: "oUW!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/gavin.m4a',
                    imgURL: "/images/gavinevil.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "saveGab": [
                {
                    speaker: "Gab (evil)",
                    dialogue: "uh.",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/gab.m4a',
                    imgURL: "/images/gab.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "saveMom": [
                {
                    speaker: "Mrs. Paula Vento (evil)",
                    dialogue: "OH!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/basehigh.m4a',
                    imgURL: "/images/mrspaulavento.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "approachingEdward": [
                {
                    speaker: "Joey",
                    dialogue: "Guys! I see evil Edward up ahead!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Humd",
                    dialogue: "WOW! heheheh",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/humd.m4a',
                    imgURL: "/images/humd.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Noure",
                    dialogue: "We must defeat him, this evil Deltarune fan...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/noure.caf',
                    imgURL: "/images/noure.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Kellan",
                    dialogue: "This, 5'5 Filipino boy... I can surely ball on him!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/kellan.m4a',
                    imgURL: "/images/kellan.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Kortnee",
                    dialogue: "This is for the cookies...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/kortnee.m4a',
                    imgURL: "/images/kortnee.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Gil",
                    dialogue: "I really... don't know this guy...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/gil.m4a',
                    imgURL: "/images/gil.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Edward (evil)",
                    dialogue: "I'll defeat all of you!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/edward.caf',
                    imgURL: "/images/edwardevil.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joevil",
                    dialogue: "I'm gonna burn you to the ground after he's done!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joevil.png",
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "edwardDefeat": [
                {
                    speaker: "Edward (evil)",
                    dialogue: "THIS ISN'T THE LAST YOU'LL SEE OF ME!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/edward.caf',
                    imgURL: "/images/edwardevil.png",
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Gil",
                    dialogue: "Yeah... sure buddy...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/gil.m4a',
                    imgURL: "/images/gil.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Kortnee",
                    dialogue: "Up ahead! I see a lot more people...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/kortnee.m4a',
                    imgURL: "/images/kortnee.png",
                    speed: 45,
                    align: "left"
                }
            ] as DialogueLine[],
            "saveLucia": [
                {
                    speaker: "Lucia (evil)",
                    dialogue: "You &$#@*&!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/lucia.m4a',
                    imgURL: "/images/lucia.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "saveColumbo": [
                {
                    speaker: "Columbo (evil)",
                    dialogue: "WOAH!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/columbo.m4a',
                    imgURL: "/images/columbo.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "saveThira": [
                {
                    speaker: "Thira (evil)",
                    dialogue: "WAH(tches)!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/thira.m4a',
                    imgURL: "/images/thira.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "savePierce": [
                {
                    speaker: "Pierce (evil)",
                    dialogue: "AHHHH!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/pierce.m4a',
                    imgURL: "/images/pierce.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "saveMatteo": [
                {
                    speaker: "Matteo (evil)",
                    dialogue: "STINKY (x1000)!",
                    backgroundURL: '/backgrounds/matteo-domain-expansion.png',
                    sound: '/sounds/matteo.m4a',
                    imgURL: "/images/matteo.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "saveWoz": [
                {
                    speaker: "Scott the Woz (evil)",
                    dialogue: "HEY AAAAHHHlll!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/scottthewoz.m4a',
                    imgURL: "/images/scottthewoz.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "allSaved": [
                {
                    speaker: "Joey",
                    dialogue: "I did it... I saved you all...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Humd",
                    dialogue: "Did you forget someone?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/humd.m4a',
                    imgURL: "/images/humd.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joey",
                    dialogue: "Nope.",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Gavin",
                    dialogue: "What about Edward?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/gavin.m4a',
                    imgURL: "/images/gavin.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Lucia",
                    dialogue: "Damn he is so cool. I should have never called him a ch-",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/lucia.m4a',
                    imgURL: "/images/lucia.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joey",
                    dialogue: "No swearing. Anyways, he's just up ahead.",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Edward (evil)",
                    dialogue: "SUP FUCKERS?",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/edward.caf',
                    imgURL: "/images/edwardevil.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Thira",
                    dialogue: "WELL... NOW YOU'RE OUT OF TIME! WE'RE GONNA STOP YOU!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/thira.m4a',
                    imgURL: "/images/thira.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Gab",
                    dialogue: "Don't you mean... 'Smell, you're out of time?'",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/gab.m4a',
                    imgURL: "/images/gab.png",
                    animation: {
                    animationType: 'img',
                    src: '/images/greengas.png',
                    classes: 'fixed z-0 left-[17vw] top-[16vh] max-w-[40vw] max-h-[40vh]',
                    transform: 'stink'
                },
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Noure",
                    dialogue: "No. Anyways, let's just kill this guy.",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/noure.caf',
                    imgURL: "/images/noure.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Edward (evil)",
                    dialogue: "I'D LIKE TO SEE YOU TRY!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/edward.caf',
                    imgURL: "/images/edwardevil.png",
                    speed: 45,
                    align: "right"
                }
            ] as DialogueLine[],
            "saveEdward": [
                {
                    speaker: "Edward (evil)",
                    dialogue: "NOOOOOO!!!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/edward.caf',
                    imgURL: "/images/edwardevil.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 60,
                    align: "right"
                },
                {
                    speaker: "Joey",
                    dialogue: "Hey all... How's it going?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "Edward",
                    dialogue: "I'm... alright... It's just...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/edward.caf',
                    imgURL: "/images/edward.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Edward",
                    dialogue: "Joevil is right up ahead... I don't know if we can beat him.",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/edward.caf',
                    imgURL: "/images/edward.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joey",
                    dialogue: "That's alright! We'll do this together! I've waited too damn long to turn 16 anyway.",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },
                {
                    speaker: "All",
                    dialogue: "We're all with you Joey!!! Let's all turn 16!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/basehigh.m4a',
                    imgURL: "/images/crowd.png",
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Joevil",
                    dialogue: "Let's see you try to stop me!",
                    backgroundURL: '/backgrounds/evil.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joevil.png",
                    speed: 45,
                    align: "right"
                },
            ] as DialogueLine[], 
            "joevilsPlea": [
                {
                    speaker: "Joevil",
                    dialogue: "Damn your... CURSE YOUR TOGETHERNESS!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joevil.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joevil",
                    dialogue: "Am I really attrocious to that degree?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joevil.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joevil",
                    dialogue: "Please... don't kill me...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joevil.png",
                    speed: 45,
                    align: "right"
                },
                {
                    speaker: "Joevil",
                    dialogue: "I humbly... beg of you...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joevil.png",
                    speed: 45,
                    align: "right"
                }
            ],
            "killJoevil": [
                {
                    speaker: "Joevil",
                    dialogue: "Is... that.. a knife?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joevil.png",
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Edward",
                    dialogue: "Sure is bud. I'm also gonna set your sprite to /images/birthday-cake.png",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/edward.caf',
                    imgURL: "/images/edward.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Joevil",
                    dialogue: "NOOOOOOOOOOO!!!!!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/birthday-cake.png",
                    speed: 100,
                    animation: {
                        animationType: 'img',
                        src: '/images/x.webp',
                        classes: 'right-[12vw] top-[32vh] h-[20vw] w-[20vw] aspect-square z-6 opacity-0',
                        transform: 'killJoevil'
                    },
                    align: "right"
                },{
                    speaker: "Edward",
                    dialogue: "NOOOOOOOOOOO!!!!!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/birthday-cake.png",
                    speed: 100,
                    animation: {
                        animationType: 'img',
                        src: '/images/x.webp',
                        classes: 'right-[12vw] top-[32vh] h-[20vw] w-[20vw] aspect-square z-6 opacity-0',
                        transform: 'killJoevil'
                    },
                    align: "right"
                }
            ],
            "spareJoevil": [
                {
                    speaker: "Joey",
                    dialogue: "This should be harmless...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joey.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Joevil",
                    dialogue: "AHHHHHH!!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joevil.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-linear-to-r to-sky-50 from-yellow-200 z-3 w-[80vw] fixed top-[55vh] right-[20vw] rounded-r-full max-h-[20vh]',
                        transform: 'birthday-beam'
                    },
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Joevil",
                    dialogue: "AHHHHHH!!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/joevil.png",
                    animation: {
                        animationType: 'div',
                        classes: 'bg-white w-[100vw] h-[100vw] z-1 left-0 top-0 opacity-1',
                        transform: 'flashbang'
                    },
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Jogood",
                    dialogue: "Woah... What happened to me?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/jogood.png",
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Edward",
                    dialogue: "Joey purified you! Now you're a good guy!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/edward.caf',
                    imgURL: "/images/edward.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Thira",
                    dialogue: "What does this even mean? Is Joey like.. Joneutral now?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/thira.m4a',
                    imgURL: "/images/thira.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Gab",
                    dialogue: "Do I have two brothers?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/gab.m4a',
                    imgURL: "/images/gab.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Gavin",
                    dialogue: "Do I have two cousins?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/gavin.m4a',
                    imgURL: "/images/gavin.png",
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Mrs. Paula Vento",
                    dialogue: "Do I have two sons?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/basehigh.m4a',
                    imgURL: "/images/mrspaulavento.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Scott the Woz",
                    dialogue: "Do I have two subscribers?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/scottthewoz.m4a',
                    imgURL: "/images/scottthewoz.png",
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Kortnee",
                    dialogue: "I guess... he's just not evil anymore?",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/kortnee.m4a',
                    imgURL: "/images/kortnee.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Jogood",
                    dialogue: "I guess... I'm good! I'm no longer gonna kill you all!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/jogood.png",
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Gavin",
                    dialogue: "Well... this... birthday boy... can just put you back in shape if that happens...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/gavin.m4a',
                    imgURL: "/images/gavin.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Columbo",
                    dialogue: "Oh, just one more thing... That Noure has...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/columbo.m4a',
                    imgURL: "/images/columbo.png",
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Noure",
                    dialogue: "Guys!!! I made us all a cake!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/noure.caf',
                    imgURL: "/images/noure.png",
                    animation: {
                        animationType: 'img',
                        src: '/images/birthday-cake.png',
                        classes: 'min-w-[50%] left-[25%] top-[0] absolute',
                        transform: 'cake-show'
                    },
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Humd",
                    dialogue: "WOW!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/humd.m4a',
                    imgURL: "/images/humd.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Mrs. Paula Vento",
                    dialogue: "Let's dig in!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/basehigh.m4a',
                    imgURL: "/images/mrspaulavento.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Scott the Woz",
                    dialogue: "This blows...",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/scottthewoz.m4a',
                    imgURL: "/images/scottthewoz.png",
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Scott the Woz",
                    dialogue: "Is what I would say if I was lying!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/scottthewoz.m4a',
                    imgURL: "/images/scottthewoz.png",
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Kortnee",
                    dialogue: "This is GREAT Noure!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/kortnee.m4a',
                    imgURL: "/images/kortnee.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "Pierce",
                    dialogue: "Maybe I'll write my next story on this!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/pierce.m4a',
                    imgURL: "/images/pierce.png",
                    speed: 45,
                    align: "right"
                },{
                    speaker: "Jogood",
                    dialogue: "Wow!!! Thanks for the cake guys!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/joey.m4a',
                    imgURL: "/images/jogood.png",
                    speed: 45,
                    align: "left"
                },{
                    speaker: "All",
                    dialogue: "Happy Birthday Joey!!!!",
                    backgroundURL: '/backgrounds/summer.png',
                    sound: '/sounds/baselow.caf',
                    imgURL: "/images/crowd.png",
                    speed: 70,
                    align: "right"
                }
            ],
    } as Record<string, DialogueLine[]>
    })
})