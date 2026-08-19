export const useEndStore = defineStore("ending", {
    state: () => ({
        deaths: 0,
        timeStart: 0,
        timeEnd: 0
    }),
    actions: {
        load() {
            if(localStorage.getItem('timeEnd')) this.timeEnd = Number(localStorage.getItem('timeEnd'))
            if(localStorage.getItem('timeStart')) this.timeStart = Number(localStorage.getItem('timeStart'))
            if(localStorage.getItem('deaths')) this.deaths = parseInt(localStorage.getItem('deaths') || '0')
        },
        die() { 
            this.deaths++
            localStorage.setItem('deaths', JSON.stringify(this.deaths))
        },
        getStartTime() {
            this.timeStart = Date.now()
            localStorage.setItem("timeStart", Date.now().toString())
        },
        getEndTime() {
            this.timeEnd = Date.now()
            localStorage.setItem('timeEnd', Date.now().toString())
        }
    }
})