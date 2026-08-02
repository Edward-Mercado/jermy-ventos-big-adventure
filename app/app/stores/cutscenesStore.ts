export const useCutsceneStore = defineStore('cutscene', {
    state: () => ({
        cutsceneOrder: ["opening"] as string[],
        cutscenes: {
            "opening": [{
            speaker: "Noure   (narrator)",
            dialogue: "It was a bright summer day...",
            speed: 45,
            align: "left"
            },{
            speaker: "Joey",
            dialogue: "Wow guys, I am finally almost 16!",
            speed: 45,
            align: "left"
            }, {
            speaker: "Edward",
            dialogue: "Still 15, you haven't completed your birthday challenge yet! But I, am 16.",
            speed: 45,
            align: "left"
            },{
            speaker: "Joey",
            dialogue: "Dude, what the hell.",
            speed: 45,
            align: "left"
            },{
            speaker: "Gab",
            dialogue: "Don't you mean, 'what the smell?'",
            speed: 45,
            align: "left"
            },{
            speaker: "Kortnee",
            dialogue: "GUYS! THERE'S SOMETHING COMING THIS WAY! WHO IS THAT?",
            speed: 45,
            align: "left"
            },{
            speaker: "Joevil",
            dialogue: "I AM JOEVIL! I AM HERE TO... uhh...",
            speed: 45,
            align: "right"
            },{
            speaker: "Pierce",
            dialogue: "Kill us? Yeah, like that's gonna happen",
            speed: 45,
            align: "left"
            },{
            speaker: "Joevil",
            dialogue: "YES. TO KILL YOU. BECAUSE. I AM EVIL. JOEVIL.",
            speed: 45,
            align: "right"
            },{
            speaker: "Mrs. Paula Vento",
            dialogue: "Well, that's not very nice.",
            speed: 45,
            align: "left"
            },{
            speaker: "Kellan",
            dialogue: "Yeah dude, I'm gonna ball all over you.",
            speed: 45,
            align: "left"
            },{
            speaker: "Joevil",
            dialogue: "Nuh uh.",
            speed: 70,
            align: "right"
            },{
            speaker: "Kellan",
            dialogue: "Yuh uh.",
            speed: 100,
            align: "left"
            },{
            speaker: "Gil",
            dialogue: "Ladies, pack it up.",
            speed: 45,
            align: "left"
            },{
            speaker: "Columbo",
            dialogue: "Guys... I think we need to get to the bottom of why he's so evil! I think.",
            speed: 45,
            align: "left"
            },{
            speaker: "Joevil",
            dialogue: "I am evil. Don't look into it.",
            speed: 45,
            align: "right"
            },{
            speaker: "Columbo",
            dialogue: "I guess that solves it.",
            speed: 45,
            align: "left"
            },{
            speaker: "Matteo",
            dialogue: "I think we need to take the Royal Crown off this evil... EVIL... man.",
            speed: 45,
            align: "left"
            },{
            speaker: "Lucia",
            dialogue: "Yeah, he's a !$%#*@",
            speed: 75,
            align: "left"
            },{
            speaker: "Joevil",
            dialogue: "Dude, I'm evil, not monstrous. Also, I'm not even gay :(",
            speed: 45,
            align: "right"
            },{
            speaker: "Humd",
            dialogue: "hiii :)",
            speed: 60,
            align: "left"
            },{
            speaker: "Edward",
            dialogue: "HII!!!!! mwahmwahmwah oh shit what is tha-",
            speed: 45,
            align: "left"
            },{
            speaker: "Joevil",
            dialogue: "EVIL BEAM GO!",
            speed: 5,
            align: "right"
            },{
            speaker: "Edward",
            dialogue: "OW! That hurts...",
            speed: 45,
            align: "left"
            },{
            speaker: "Edward (now evil)",
            dialogue: "I... AM NOW EVIL EDWARD! HERE'S YOUR BIRTHDAY GIFT ON TIME, SUCKERS! EVIL BEAM GO!!!",
            speed: 30,
            align: "right"
            },{
            speaker: "All",
            dialogue: "NOOOOOO!!!!!!",
            speed: 250,
            align: "left"
            },{
            speaker: "Noure (narrator)",
            dialogue: "One by one, they all got hit by Joevil's evil beams. They were defenseless, and the day was swiftly lost.",
            speed: 45,
            align: "left"
            },{
            speaker: "Gavin (evil)",
            dialogue: "DON'T THINK I FORGOT ABOUT YOU! i love you bb mwah",
            speed: 45,
            align: "right"
            },{
            speaker: "Noure (narrator)",
            dialogue: "OW!",
            speed: 45,
            align: "left"
            },{
            speaker: "Omnipotent Narrator",
            dialogue: "Now, it is all down to you.",
            speed: 60,
            align: "left"
            }] as DialogueLine[]
        }
    })
})