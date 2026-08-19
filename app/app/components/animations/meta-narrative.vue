<template>
    <div class="fixed w-screen h-screen z-20 top-0 flex items-center">
        <transition name="black-bg">
            <div class="w-screen h-screen absolute bottom-0 bg-black/50" v-if="mounted">
                
            </div>
        </transition>
        <transition name="split-up">
            <div v-if="papersActive" class="fixed top-[10vh] left-[35vw] w-[30vw] h-[40vh] bg-white border-b-white/50 border-b-[5vh] p-2 overflow-hidden text-center">
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10 text-right">----- --- --- -----</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">-- -- ------ --- - ---- --</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">----- --- ----- --- -- ----</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">--- -- ----- -- --- ---- --</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">----- ----- - -- ---- ----</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">-- ---- --- ----- --- ---- --</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">----- --- ----- --- -- ----</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">----- ----- --- --- -----</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">-- -- ------ --- - ---- --</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">----- --- ----- --- -- ----</h2>
            </div>
        </transition>
        <transition name="split-down">
            <div v-if="papersActive" class="fixed bottom-[10vh] left-[35vw] w-[30vw] h-[40vh] bg-white border-t-white/50 border-t-[5vh] overflow-y-hidden">
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10 text-right">--- ----- --- -- ----</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">--- -- ----- -- --- ---- --</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">----- ----- - -- ---- ----</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">-- ---- --- ----- --- ---- --</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">----- ----- --- --- -----</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">-- -- ------ --- - ---- --</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">----- --- ----- --- -- ----</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">--- -- ----- -- --- ---- --</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">----- ----- - -- ---- ----</h2>
                <h2 class="text-[3rem] text-black w-full overflow-hidden h-10">-- ---- --- ----- --- ---- --</h2>
            </div>
        </transition>
        <transition name="pencil">
            <img v-if="pencilActive" src="/images/pencil.png" alt="pencil" class="h-[30vh] top-[20vh] fixed right-[20vw]">
        </transition>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    doneByEnemy: boolean
}>()

const mounted = ref<boolean>(false)
const papersActive = ref<boolean>(false)
const pencilActive = ref<boolean>(false)

onMounted(() => {mounted.value = true; papersActive.value = true})

setTimeout(() => pencilActive.value = true, 500)

setTimeout(() => pencilActive.value = false, 1400)
setTimeout(() => papersActive.value = false, 2000)

setTimeout(() => {
    mounted.value = false
}, 2500)
setTimeout(() => {
    useCurrentBattleStore().animReset()
}, 2800)

</script>

<style scoped>
.pencil-enter-from {
    opacity: 0.8;
    transform: translateX(-40vw)
}

.pencil-enter-active,
.pencil-leave-active {
    transition: all ease-in-out 0.5s
}

.pencil-leave-to {
    opacity: 0.6;
    transform: translateX(20vw) translateY(-50vh)
}

.black-bg-enter-from,
.black-bg-leave-to {
    opacity: 0
}

.black-bg-enter-to,
.black-bg-leave-from {
    opacity: 0.5
}

.black-bg-enter-active,
.black-bg-leave-active {
    transition: opacity 0.3s ease-in-out
}

.split-down-enter-from,
.split-up-enter-from {
    opacity: 0
}
.split-down-enter-active,
.split-up-enter-active,
.split-down-leave-active,
.split-up-leave-active {
    transition: all ease-in-out .5s
}

.split-down-leave-to {
    opacity: 0;
    transform: translateY(50vh)
}
.split-up-leave-to {
    opacity: 0;
    transform: translateY(-50vh)
}
</style>