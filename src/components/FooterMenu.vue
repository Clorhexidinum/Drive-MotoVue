<template>
    <ul class="footer-menu__list">
        <li v-for="category in сategories">
            <a href="#">{{ category }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "FooterMenu",
        data: function() {
return {
            сategories: ["О компании", "Контакты", "Акции", "Магазины"],
            сategories2: [
                "Доставка и самовывоз",
                "Оплата",
                "Возврат-обмен",
                "Новости",
            ],
        };
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

    @media (max-width: 540px) {
        .footer-menu__list {
            display: none;
        }
    }
</style>
