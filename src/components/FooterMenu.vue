<template>
    <ul class="footer-menu__list">
        <li v-for="category in categorys" :key="category">
            <a href="#">{{ category }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "FooterMenu",

        props: {
            categorys: Array,
        },
    };
</script>

<style lang="scss">
    .footer-menu {
        &__top-title {
            @extend %sf-bold;
            font-size: $fs-smaller;
            line-height: $lh-extra-small;
            color: $main-text;
        }

        &__list {
            font-size: $fs-smaller;
            line-height: $lh-smaller;
            color: $main-text;
        }
        &__topdrop {
            pointer-events: none;
        }
    }
</style>
