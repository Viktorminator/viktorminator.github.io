<template>
    <ul class="navigation-secondary">
            <nuxt-link to="about" tag="li" exact-active-class="selected">
                <div v-if="$route.path=='/about'"><div class="angle"></div><strong>О компании</strong></div>
                <a v-else>О компании</a>
            </nuxt-link>
    </ul>
</template>

