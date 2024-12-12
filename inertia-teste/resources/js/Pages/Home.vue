<template>
    <h1 class="text-4xl font-bold">Home</h1>
    <Nav/>
</template>

<script>
import Nav from '../Shared/Nav.vue';

export default {
    components: {
        Nav
    }
};
</script>

<style>
h1 {
    color: #42b983;
    font-family: Arial, sans-serif;
    text-align: center;
}
</style>
