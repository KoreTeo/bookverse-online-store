<script setup>
import HeaderDiv from './components/HeaderDiv.vue';
import FooterDiv from './components/FooterDiv.vue';
</script>

<template>
    <HeaderDiv/>
    <main>
        <RouterView />
    </main>
    <FooterDiv />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100dvb;
    font-family: 'Rubik', sans-serif;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    margin-bottom: 140px;
    margin-top: 140px;
}
</style>
