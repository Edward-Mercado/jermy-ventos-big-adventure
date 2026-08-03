export const useFriendsStore = defineStore('friends', {
    state: () => ({
        "Gab": {
            name: "Gab",
            eachTurnCheck: null,
            abilityName: "Magically Touch Nose With Tongue",
            abilityDesc: "Touch your nose with your tongue. Magically. Confuse the target.",
            abilityTiming: "With Attack",
            targetType: "Single",
            spriteURL: "/public/images/gab.png",
            ability: () => {
                
            },
            manaCost: (enemy:Enemy) => {
                return enemy.currentHP
            }
        } as Friend,
        "Gavin": {
            name: "Gavin",
            eachTurnCheck: null,
            abilityName: "Make it Wild",
            abilityDesc: "Randomize enemy health, defense, and attack.",
            abilityTiming: "With Attack",
            targetType: "AOE",
            spriteURL: "/public/images/gavin.png",
            ability: () => {
                
            },
            manaCost: 15
        } as Friend,
        "Noure": {
            name: "Noure",
            eachTurnCheck: null,
            abilityName: "MultiWielding",
            abilityDesc: "Hit three more times, with decreasing power.",
            abilityTiming: "With Attack",
            targetType: "Single",
            spriteURL: "/public/images/noure.png",
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
            spriteURL: "/public/images/kortnee.png",
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
            spriteURL: "/public/images/matteo.png",
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
            spriteURL: "/public/images/mrspaulavento.png",
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
            spriteURL: "/public/images/pierce.png",
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
            spriteURL: "/public/images/scottthewoz.png",
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
            spriteURL: "/public/images/gil.png",
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
            spriteURL: "/public/images/kellan.png",
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
            spriteURL: "/public/images/columbo.png",
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
            spriteURL: "/public/images/thira.png",
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
            spriteURL: "/public/images/lucia.png",
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
            spriteURL: "/public/images/humd.png",
            ability: () => {
                
            },
            manaCost: 20
        } as Friend
    })
})