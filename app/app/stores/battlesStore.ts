export const useBattleStore = defineStore('battle', {
    state: () => ({
        'littleGuys1': {
            enemies: [{
                name: "Little Guy 1",
                attack: 10,
                defense: 3,
                abilityType: "defense",
                abilityName: "Shrink",
                ability: shrink,
                manaCost: 20,
                currentHP: 20,
                maxHP: 20,
                currentMana: 50,
                maxMana: 50,
                img: '/images/littleguys.png',
                expDrop: 20,
                desc: "A guy so little he's hard to find.",
                level: 1,
                title: "Smallish Person",
                sound: '/sounds/basehigh.m4a',
            }, {
                name: "Little Guy 2",
                attack: 10,
                defense: 0,
                abilityType: "defense",
                abilityName: "Shrink",
                ability: shrink,
                manaCost: 20,
                currentHP: 20,
                maxHP: 20,
                currentMana: 50,
                maxMana: 50,
                img: '/images/littleguys.png',
                expDrop: 20,
                desc: "A guy so little he's hard to find.",
                level: 1,
                title: "Smallish Person",
                sound: '/sounds/basehigh.m4a',
            }]
        },
        'battleKellan': {
            enemies: [{
                name: "Kellan (evil)",
                attack: 10,
                defense: 15,
                abilityType: "offense",
                abilityName: "Shrink",
                ability: shrink,
                manaCost: 20,
                currentHP: 40,
                maxHP: 40,
                currentMana: 100,
                maxMana: 100,
                img: '/images/kellan.png',
                expDrop: 35,
                desc: "Math, Basketball, Girls, he's got them... 2/3rds of them. Half of them.",
                level: 2,
                title: "JV Tryout Demon",
                sound: '/sounds/kellan.m4a',
            }]
        },

        'blockyBall1': {
            enemies: [{
                name: "Super Blocky Ball",
                attack: 15,
                defense: 7,
                abilityType: "offense",
                abilityName: "Ball Ram",
                ability: shrink,
                manaCost: 25,
                currentHP: 40,
                maxHP: 40,
                currentMana: 50,
                maxMana: 50,
                img: '/images/superblockyball.png',
                expDrop: 35,
                desc: "Has a really good time on McManor and Tomb Ruins (Remastered).",
                level: 1,
                title: "Racer",
                sound: '/sounds/basehigh.m4a',
            }]
        }





    } as Record<string, EnemyGroup>),
    actions: {

    }
})