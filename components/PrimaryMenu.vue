<template>
    <ul class="navigation-primary">
        <nuxt-link to="/" tag="li" exact-active-class="selected">
            <div v-if="$route.path=='/'">
                <div class="angle"></div>
                <strong><img src="css/engraving-25-locomotive.gif" alt=""/>КЛС Групп</strong></div>
            <a v-else><img src="css/engraving-25-locomotive.gif" alt=""/>КЛС Групп</a>
        </nuxt-link>
        <nuxt-link to="/trade" tag="li" exact-active-class="selected">
            <div v-if="$route.path=='/trade'">
                <div class="angle"></div>
                <strong><img src="css/engraving-25-consulting.gif" alt=""/>КЛС Трейд</strong>
            </div>
            <a v-else><img src="css/engraving-25-consulting.gif" alt=""/>КЛС Трейд</a>
        </nuxt-link>
        <nuxt-link to="/finance" tag="li" exact-active-class="selected">
            <div v-if="$route.path=='/finance'">
                <div class="angle"></div>
                <strong><img src="css/engraving-25-small-coin.gif" alt=""/>КЛС Финанс</strong></div>

            <a v-else><img src="css/engraving-25-small-coin.gif" alt=""/>КЛС Финанс</a>
        </nuxt-link>

        <nuxt-link to="/contacts" tag="li" exact-active-class="selected">
            <div v-if="$route.path=='/contacts'">
                <div class="angle"></div>
                <strong><img src="css/engraving-25-legal.gif" alt=""/>Контакты</strong>
            </div>
            <a v-else><img src="css/engraving-25-legal.gif" alt=""/>Контакты</a>
        </nuxt-link>
    </ul>
</template>
<script>
    export default {}
</script>
