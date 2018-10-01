<template>
    <div>
        <div id="layout">
            <div id="header">
                <div class="logo">
                    <a href="/"></a>
                </div>
                <SecondaryMenu/>
                <ul class="navigation-phone">
                    <li class="phone">
                        <span class="ya-phone">{{ phone }}</span>
                    </li>
                    <nuxt-link to="callme" tag="li" exact-active-class="selected">
                        <div v-if="$route.path=='/callme'">
                            <div class="angle"></div><strong>Позвоните мне</strong></div>
                        <a v-else>Позвоните мне</a>
                    </nuxt-link>
                </ul>
                <PrimaryMenu/>
            </div>
            <div id="content">
                <nuxt/>
            </div>
            <div id="imprint">
                <hr>
                <div class="copyrights">
                    <p>©&nbsp;2016—2018
                        <br> ООО&nbsp;«КЛС Групп»
                    </p>

                </div>
                <div class="address">
                    <p>Москва,  адрес: 123112, г. Москва, Пресненская набережная, дом 6, строение 2, этаж 50, помещение 5014, телефон: +7(495)908-7346<br>
                        <nuxt-link to="/contacts">Контактная информация</nuxt-link>
                    </p>
                </div>
<!--                <form action="search/" class="search" method="get">
                    <input class="keywords" type="text" name="query" value="поиск"
                           onclick="if (this.value == 'поиск') {this.value = '';}"
                           onblur="if (this.value == '') {this.value = 'поиск';}"/>
                    <input class="go" type="image" value="Искать!" src="/css/i/search.gif"/>
                </form>-->
            </div>
        </div>


        <!--nuxt/-->
    </div>
</template>
<script>
    /* eslint-disable indent */
    import SecondaryMenu from '~/components/SecondaryMenu'
    import PrimaryMenu from "../components/PrimaryMenu";

    export default {
        components: {
            PrimaryMenu,
            SecondaryMenu
        },
        pagePhone: '+7 (495) 698-97-97',
        computed: {
            phone () {
                return this.$route.matched.map((r) => {
                    return (r.components.default.options ? r.components.default.options.pagePhone : r.components.default.pagePhone)
                })[0]
            }
        }
    }
</script>
