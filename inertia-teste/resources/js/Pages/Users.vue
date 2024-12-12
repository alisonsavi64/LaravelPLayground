<template>
        <Head title="App - Users"></Head>
        <h1 class="text-4xl font-bold">Users</h1>

        <div style="margin-top: 800px;">
            <p>The current time is {{ time }}.</p>
            <Link href="/users" preserve-scroll class="text-blue-500">Refresh</Link>
        </div>
</template>

<script>
export default {
    props: {
        time: String
    },
};
</script>

<style>
h1 {
    color: #42b983;
    font-family: Arial, sans-serif;
    text-align: center;
}
</style>
