<template>
    <ul class="menu-mobile">
        <li class="menu-mobile__item" v-for="(value, property) in сategories" :key="value">
            <a class="menu-mobile__link" href="#">{{ value }}</a>
            <img
                v-if="property !== ''"
                class="menu-mobile__img"
                src=""
                alt=""
            />
        </li>
        <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="#">Москва,<br />ул. Науки 25</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "MenuMobile",
        // data() {
        //     return {
        //         сategories: {
        //         // Войти: "user.svg",
        //         // Регистрация: "heart.svg",
        //         // Избранное: "heart.svg",
        //         // Корзина: "basket.svg",
        //         // Магазины: "house.svg",
        //         // Акции: "percent.svg",
        //         // "Доставка и оплата": "box.svg",
        //         // Квадроциклы: "",
        //         // Катера: "",
        //         // Гидроциклы: "",
        //         // Лодки: "",
        //         // Вездеходы: "",
        //         // Снегоходы: "",
        //         // Двигатели: "",
        //         // Запчасти: "",
        //         },
        //     };
        // },
    };
</script>

<style lang="scss">
    .menu-mobile {
        width: 243px;
        transition: all 0.3s;
        position: absolute;
        z-index: 10;
        background-color: $base;
        transform: translateX(-100%);
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);

        &--active {
            transform: translateX(0);
        }

        &__item {
            position: relative;
        }

        &__item:not(:last-child) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        &__item:last-child {
            padding-bottom: 30px;
        }

        &__link {
            display: block;
            padding-left: 53px;
            padding-top: 36px;
            padding-bottom: 5px;
        }

        &__img {
            position: absolute;
            left: 11px;
            bottom: 10px;
        }
    }

    @media (max-width: 968px) {
        .menu-mobile {
            &__line-wrapper {
                display: block;
            }
        }
    }
</style>
