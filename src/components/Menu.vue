<template>
    <nav class="menu">
        <!--Тут был mobileMenuBtn-->
        <ul class="menu__list">
            <li class="menu__iten" v-for="category in сategories">
                {{ category }}>
                <a class="menu__link" href="#">Магазины</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "menu",
        data: {
            сategories: ["Магазины", "Акции", "Доставка и оплата"],
        },
    };
</script>

<style lang="scss">
    .menu {
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
        .menu__item + .menu__item {
            padding: 20px;
        }
    }

    @media (max-width: 968px) {
    .menu {
        &__list {
          display: none;
        }
    }
</style>
