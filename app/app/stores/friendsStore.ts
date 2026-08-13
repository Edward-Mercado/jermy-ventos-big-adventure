export const useFriendsStore = defineStore('friends', {
    state: () => ({
        "Gab": {
            name: "Gab",
            eachTurnCheck: null,
            abilityName: "Magically Touch Nose With Tongue",
            abilityDesc: "Touch your nose with your tongue. Magically. Confuse the target.",
            abilityTiming: "With Attack",
            targetType: "Single",
            spriteURL: "/images/gab.png",
            sound: "/sounds/gab.m4a",
            ability: () => {
                
            },
            manaCost: 60
        } as Friend,
        "Gavin": {
            name: "Gavin",
            eachTurnCheck: null,
            abilityName: "Make it Wild",
            abilityDesc: "Randomize enemy health, defense, and attack.",
            abilityTiming: "With Attack",
            targetType: "AOE",
            spriteURL: "/images/gavin.png",
            sound: "/sounds/gavin.m4a",
            ability: () => {
                
            },
            manaCost: 15
        } as Friend,
        "Noure": {
            name: "Noure",
            eachTurnCheck: null,
            abilityName: "MultiWielding",
            abilityDesc: "Hit four times, with decreasing power.",
            abilityTiming: "With Attack",
            targetType: "Single",
            spriteURL: "/images/noure.png",
            sound: "/sounds/noure.caf",
            ability: () => {
                
            },
            manaCost: 25
        } as Friend,
        "Kortnee": {
            name: "Kortnee",
            eachTurnCheck: null,
            abilityName: "Moon Princess Halation",
            abilityDesc: "Hit enemies with a massive AOE beam of light.",
            abilityTiming: "With Attack",
            targetType: "AOE",
            spriteURL: "/images/kortnee.png",
            sound: "/sounds/kortnee.m4a",
            ability: () => {
                
            },
            manaCost: 60
        } as Friend,
        "Matteo": {
            name: "Matteo",
            eachTurnCheck: null,
            abilityName: "You Tell Me",
            abilityDesc: "Counter with an exact copy of enemy attacks.",
            abilityTiming: "Follows Enemy",
            targetType: "AOE",
            spriteURL: "/images/matteo.png",
            sound: "/sounds/baselow.caf",
            ability: () => {
                
            },
            manaCost: 30
        } as Friend,
        "Mrs. Paula Vento": {
            name: "Mrs. Paula Vento",
            eachTurnCheck: null,
            abilityName: "Mind Clear",
            abilityDesc: "Heals statuses, health, and temporarily increases defense.",
            abilityTiming: "With Attack",
            targetType: "Self",
            spriteURL: "/images/mrspaulavento.png",
            sound: "/sounds/basehigh.m4a",
            ability: () => {
                
            },
            manaCost: 40
        } as Friend,
        "Pierce": {
            name: "Pierce",
            eachTurnCheck: null,
            abilityName: "Meta Narrative",
            abilityDesc: "Copies everything that has happened in the battle already.",
            abilityTiming: "After Turn",
            targetType: "Special",
            spriteURL: "/images/pierce.png",
            sound: "/sounds/baselow.caf",
            ability: () => {
                
            },
            manaCost: 50
        } as Friend,
        "Scott the Woz": {
            name: "Scott the Woz",
            eachTurnCheck: null,
            abilityName: "Blue Border",
            abilityDesc: "Puts up a shield that blocks one hit. Negates damage with a small chance to reflect.",
            abilityTiming: "Before Turn",
            targetType: "Self",
            spriteURL: "/images/scottthewoz.png",
            sound: "/sounds/scottthewoz.m4a",
            ability: () => {
                
            },
            manaCost: 40
        } as Friend,
        "Gil": {
            name: "Gil",
            eachTurnCheck: null,
            abilityName: "Buff Lie",
            abilityDesc: "20% chance to give a random stat boost.",
            abilityTiming: "With Attack",
            targetType: "Self",
            spriteURL: "/images/gil.png",
            sound: "/sounds/gil.m4a",
            ability: () => {
                
            },
            manaCost: 35
        } as Friend,
        "Kellan": {
            name: "Kellan",
            eachTurnCheck: null,
            abilityName: "Shrink",
            abilityDesc: "shrink",
            abilityTiming: "With Attack",
            targetType: "Self",
            spriteURL: "/images/kellan.png",
            sound: "/sounds/kellan.m4a",
            ability: () => {
                
            },
            manaCost: 100
        } as Friend,
        "Columbo": {
            name: "Columbo",
            eachTurnCheck: null,
            abilityName: "Scan",
            abilityDesc: "See what the target will do prematurely.",
            abilityTiming: "After Turn",
            targetType: "Single",
            spriteURL: "/images/columbo.png",
            sound: "/sounds/columbo.m4a",
            ability: () => {
                
            },
            manaCost: 100
        } as Friend,
        "Thira": {
            name: "Thira",
            eachTurnCheck: null,
            abilityName: "Flashback",
            abilityDesc: "Turn back one turn",
            abilityTiming: "After Turn",
            targetType: "Special",
            spriteURL: "/images/thira.png",
            sound: "/sounds/thira.m4a",
            ability: () => {
                
            },
            manaCost: 100
        } as Friend,
        "Lucia": {
            name: "Lucia",
            eachTurnCheck: null,
            abilityName: "Scan",
            abilityDesc: "See what the target will do prematurely.",
            abilityTiming: "With Attack",
            targetType: "Single",
            spriteURL: "/images/lucia.png",
            sound: "/sounds/lucia.m4a",
            ability: () => {
                
            },
            manaCost: 100
        } as Friend,
        "Humd": {
            name: "Humd",
            eachTurnCheck: null,
            abilityName: "Mango Consumption",
            abilityDesc: "Eat a mango. Heal.",
            abilityTiming: "With Attack",
            targetType: "Self",
            spriteURL: "/images/humd.png",
            sound: "/sounds/humd.m4a",
            ability: () => {
                
            },
            manaCost: 20
        } as Friend
    })
})