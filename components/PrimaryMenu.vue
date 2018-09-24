<template>
    <ul class="navigation-primary">
        <li v-for="item in pages">
            <img src="css/engraving-25-accounting.gif" alt=""/>
            <nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link>
        </li>
    </ul>
</template>
<script>
    export default {
        methods: {
            slugToUrl(slug) {
                return `/${slug}`
            }
        },
        props: ['pages']
    }
</script>
