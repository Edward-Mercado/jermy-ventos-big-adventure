export const useShopStore = defineStore('shopStore', {
    state: () => ({
        noureShop: {
            sellerURL: "/images/noure.png",
            shopName: "Tee Parloure",
            shopDesc: "Get some nice shirts and boost your stats!",
            storeItems: [
                {
                    name: "This is my Devlin Shirt, the Shirt",
                    img: "/images/shirt-devlin.png",
                    stats: {
                        attack: 5,
                        defense: 3
                    }
                },{
                    name: "I have Feelings You Know, the Shirt",
                    img: "/images/shirt-ihavefeelings.png",
                    stats: {
                        attack: 0,
                        defense: 7
                    }
                },{
                    name: "Okay Wise Guy, the Shirt",
                    img: "/images/shirt-okaywiseguy.png",
                    stats: {
                        attack: 10,
                        defense: 0
                    }
                },
            ]
        },

        kortneeShop: {
            sellerURL: "/images/kortnee.png",
            shopName: "Featured Creatures",
            shopDesc: "Adopt a pet! Please.",
            storeItems: [
                {
                    name: "Pet Dragon",
                    img: "/images/pet-dragon.png",
                    stats: {
                        attack: 11,
                        defense: 1
                    }
                },{
                    name: "Pet Allicorn",
                    img: "/images/pet-allicorn.png",
                    stats: {
                        attack: 4,
                        defense: 9
                    }
                },{
                    name: "Pet Cerberus",
                    img: "/images/pet-cerberus.png",
                    stats: {
                        attack: 7,
                        defense: 6
                    }
                },
            ]
        },

        gavinShop: {
            sellerURL: "/images/gavin.png",
            shopName: "Spell",
            shopDesc: "Get an ability!",
            storeItems: [
                {
                    name: "RT Game",
                    img: "/images/rtgame.png",
                    abilityName: "Drifting"
                },{
                    name: "Lemon Alien",
                    img: "/images/lemonalien.png",
                    abilityName: "Lemon Rebirth"
                },{
                    name: "Waldo",
                    img: "/images/waldo.png",
                    abilityName: "Hide"
                },
            ]
        },
    }),
})