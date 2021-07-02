<template>
    <div class="menu-mobile-line">
        <ul class="menu-mobile-line__wrapper">
            <li v-for="category in сategories" class="menu-mobile-line__item">
                <a href="#">Магазины</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "menuMobile",
        data: {
            сategories: ["Магазины", "Акции", "Доставка и оплата"],
        },
    };
</script>

<style lang="scss">
    .menu-mobile-line {
        @extend %sf-bold;
        display: none;
        font-size: $fs-bigger;
        line-height: $lh-medium;
        background-color: $base;
        overflow-x: scroll;

        &__wrapper {
            display: flex;
            align-items: center;
            width: 420px;
            color: $main-text;
            padding: 14px 0 14px 15px;
            margin: 0 auto;
        }

        &__item:not(:last-child) {
            padding-right: 25px;
        }
    }
</style>
