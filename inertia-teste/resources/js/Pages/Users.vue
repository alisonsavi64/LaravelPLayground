<template>
        <h1>Users</h1>
        <Nav/>

        <div style="margin-top: 800px;">
            <p>The current time is {{ time }}.</p>
            <Link href="/users" preserve-scroll class="text-blue-500">Refresh</Link>
        </div>
</template>

<script>
import Nav from '../Shared/Nav.vue';
import { Link } from '@inertiajs/vue3';
export default {

    components: { Nav, Link },
    props: {
        time: String
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
