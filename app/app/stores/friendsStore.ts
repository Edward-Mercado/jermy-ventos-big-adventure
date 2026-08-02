export const useFriendsStore = defineStore('friends', {
    state: () => ({
        "Gab": {
            name: "Gab",
            eachTurnCheck: null,
            abilityName: "Magically Touch Nose With Tongue",
            abilityDesc: "Touch your nose with your tongue. Magically. Confuse the target.",
            targetType: "Single",
            spriteURL: "/public/images/gabFriend.png",
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
            targetType: "AOE",
            spriteURL: "/public/images/gavinFriend.png",
            ability: () => {
                
            },
            manaCost: 15
        } as Friend,
        "Noure": {
            name: "Noure",
            eachTurnCheck: null,
            abilityName: "MultiWielding",
            abilityDesc: "Hit three more times, with decreasing power.",
            targetType: "Single",
            spriteURL: "/public/images/noureFriend.png",
            ability: () => {
                
            },
            manaCost: 25
        } as Friend,
        "Kortnee": {
            name: "Kortnee",
            eachTurnCheck: null,
            abilityName: "Moon Princess Halation",
            abilityDesc: "Hit enemies with a massive AOE beam of light.",
            targetType: "AOE",
            spriteURL: "/public/images/kortneeFriend.png",
            ability: () => {
                
            },
            manaCost: 60
        } as Friend,
        "Matteo": {
            name: "Matteo",
            eachTurnCheck: null,
            abilityName: "You Tell Me",
            abilityDesc: "Counter with an exact copy of enemy attacks.",
            targetType: "AOE",
            spriteURL: "/public/images/matteoFriend.png",
            ability: () => {
                
            },
            manaCost: 30
        } as Friend,
        "Mrs. Paula Vento": {
            name: "Mrs. Paula Vento",
            eachTurnCheck: null,
            abilityName: "Mind Clear",
            abilityDesc: "Heals statuses, health, and temporarily increases defense.",
            targetType: "Self",
            spriteURL: "/public/images/mrspaulaventoFriend.png",
            ability: () => {
                
            },
            manaCost: 40
        } as Friend,
        "Pierce": {
            name: "Pierce",
            eachTurnCheck: null,
            abilityName: "Meta Narrative",
            abilityDesc: "Copies everything that has happened in the battle already.",
            targetType: "Special",
            spriteURL: "/public/images/pierceFriend.png",
            ability: () => {
                
            },
            manaCost: 50
        } as Friend,
        "Scott the Woz": {
            name: "Scott the Woz",
            eachTurnCheck: null,
            abilityName: "Blue Border",
            abilityDesc: "Puts up a shield that blocks one hit. Negates damage with a small chance to reflect.",
            targetType: "Self",
            spriteURL: "/public/images/scottthewozFriend.png",
            ability: () => {
                
            },
            manaCost: 40
        } as Friend,
        "Gil": {
            name: "Gil",
            eachTurnCheck: null,
            abilityName: "Buff Lie",
            abilityDesc: "20% chance to give a random stat boost.",
            targetType: "Self",
            spriteURL: "/public/images/gilFriend.png",
            ability: () => {
                
            },
            manaCost: 35
        } as Friend,
        "Kellan": {
            name: "Kellan",
            eachTurnCheck: null,
            abilityName: "Shrink",
            abilityDesc: "shrink",
            targetType: "Self",
            spriteURL: "/public/images/kellanFriend.png",
            ability: () => {
                
            },
            manaCost: 100
        } as Friend,
        "Columbo": {
            name: "Columbo",
            eachTurnCheck: null,
            abilityName: "Scan",
            abilityDesc: "See what the target will do prematurely.",
            targetType: "Single",
            spriteURL: "/public/images/columboFriend.png",
            ability: () => {
                
            },
            manaCost: 100
        } as Friend,
        "Humd": {
            name: "Humd",
            eachTurnCheck: null,
            abilityName: "Mango Consumption",
            abilityDesc: "Eat a mango. Heal.",
            targetType: "Self",
            spriteURL: "/public/images/humdFriend.png",
            ability: () => {
                
            },
            manaCost: 20
        } as Friend
    })
})