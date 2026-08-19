export const useBattleGuiStore = defineStore('battlegui', {
    state: () => ({
        fullFriendsList: [] as Friend[],
        selectedFriends: [] as Friend[],
        notSelectedFriends: [] as Friend[],
    }),
    actions: {
        initialize() {
            this.fullFriendsList = useCampaignSaveStore().friendsData
            this.notSelectedFriends = this.fullFriendsList
        },
        move(friend: Friend) {
            if (this.notSelectedFriends.find(person => person.name === friend.name)) {
                this.selectedFriends.unshift(friend)
                this.notSelectedFriends.splice(this.notSelectedFriends.indexOf(friend), 1)
            } else {
                this.notSelectedFriends.unshift(friend)
                this.selectedFriends.splice(this.selectedFriends.indexOf(friend), 1)
                const currentBattleStore = useCurrentBattleStore()
                currentBattleStore.currentEnemies.forEach((enemy: Enemy) => {
                    if (enemy.targetOf?.find((targetFriend: Friend) => targetFriend.name === friend.name)) {
                        enemy.targetOf = enemy.targetOf.filter((targetFriend: Friend) => targetFriend.name !== friend.name)
                    }
                })
            }
        }
    }
})