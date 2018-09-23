<template>
    <div>
        <primary-menu :pages="pages"/>
    </div>
</template>
<script>
    import PrimaryMenu from "~/components/PrimaryMenu"

    export default {
        components: {PrimaryMenu},
        props: ['pages']
    }
</script>

<style>
</style>
