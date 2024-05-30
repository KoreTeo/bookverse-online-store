<script setup>
import HeaderDiv from './components/HeaderDiv.vue';
import FooterDiv from './components/FooterDiv.vue';
</script>

<template>
    <HeaderDiv />
    <main>
        <RouterView />
    </main>
    <FooterDiv />
</template>

<style>
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100dvb;

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