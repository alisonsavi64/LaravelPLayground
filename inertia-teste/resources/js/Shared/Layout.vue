<template>
        <Head title="App"></Head>
    <section class="p-6 bg-gray-200">
        <header class="flex bg-gray-200 justify-between">
            <div class="flex items-center">
                <h1 class="font-bold text-lg">My App</h1>
                <p class="text-sm ml-4">Welcome Back, {{ $page.props.auth.user.username }}</p>
            </div>
            <Nav />
        </header>
    </section>
    <section class="p-6">
    <div class="max-w-3xl mx-auto">
        <slot></slot>
    </div>
    </section>
</template>

<script>
import Nav from './Nav.vue';
export default { components: { Nav } }
</script>
