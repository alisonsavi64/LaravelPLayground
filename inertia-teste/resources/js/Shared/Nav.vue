<template>
    <nav class="mt-6">
        <ul class="list-disc">
            <li>
                <NavLink href="/"  :active="$page.url === '/'">Home</NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.url.startsWith('/users')">Users</NavLink>
            </li>
            <li>
                <NavLink href="/settings" :active="$page.url.startsWith('/settings')">Settings</NavLink>
            </li>
            <li>
                <NavLink href="/logout" method="post" as="button"  :active="$page.url.startsWith('/logout')">Logout</NavLink>
            </li>

        </ul>
    </nav>
</template>

<script>
import  NavLink  from './NavLink.vue';
export default {components: {NavLink}}
</script>
