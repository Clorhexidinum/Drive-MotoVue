<template>
    <nav class="main-menu">
        <slot>
            {{ item }}
        </slot>
        <ul class="main-menu__list">
            <li
                class="main-menu__item"
                v-for="category in сategories"
                :key="category"
            >
                <a class="main-menu__link" href="#">{{ category }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "MainMenu",
        data: function () {
            return {
                сategories: ["Магазины", "Акции", "Доставка и оплата"],
            };
        },
        props: ["item"],
    };
</script>

<style lang="scss">
    .main-menu {
        display: flex;
        align-items: center;
        color: $main-text;

        &__btn {
            display: none;
            padding: 0;
        }

        &__list {
            display: flex;
            align-items: center;
        }

        &__item:hover {
            color: $active;
        }

        &__item:not(:last-child) {
            padding-right: 50px;
        }
    }

    @media (max-width: 1100px) {
        .main-menu__item + .main-menu__item {
            padding-left: 20px;
        }
    }

    @media (max-width: 968px) {
        .menu-mobile-line .main-menu {
            margin: 0 auto;
        }

        .main-menu__list {
            display: none;
        }

        .menu-mobile-line .main-menu__list {
            display: inline-flex;
            padding: 14px;
        }
    }
</style>
