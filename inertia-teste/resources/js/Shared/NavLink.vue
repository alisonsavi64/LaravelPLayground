<template>
    <Link :class="{'font-bold underline': active}"><slot></slot></Link>
</template>

<script>
export default {props: {active: Boolean, }}
</script>
