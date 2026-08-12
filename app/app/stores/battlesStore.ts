export const useBattleStore = defineStore('battle', {
    state: () => ({
        'littleGuys1': {
            enemies: [{
                name: "Little Guy 1",
                attack: 10,
                defense: 3,
                abilityType: "defense",
                ability: () => {},
                manaCost: 20,
                currentHP: 20,
                maxHP: 20,
                currentMana: 50,
                maxMana: 50,
                img: '/images/littleguys.png',
                expDrop: 20,
                desc: "A guy so little he's hard to find.",
                level: 1,
                title: "Smallish Person"
            }, {
                name: "Little Guy 2",
                attack: 10,
                defense: 3,
                abilityType: "defense",
                ability: () => {},
                manaCost: 20,
                currentHP: 20,
                maxHP: 20,
                currentMana: 50,
                maxMana: 50,
                img: '/images/littleguys.png',
                expDrop: 20,
                desc: "A guy so little he's hard to find.",
                level: 1,
                title: "Smallish Person"
            }]
        }
    } as Record<string, EnemyGroup>),
    actions: {

    }
})