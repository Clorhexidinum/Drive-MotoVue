<template>
    <ul class="menu-mobile">
        <li
            class="menu-mobile__item"
            v-for="item in сategories"
            :key="item.category"
        >
            <a class="menu-mobile__link" href="#">{{ item.category }}</a>
            <img
                v-if="property !== ''"
                class="menu-mobile__img"
                :src="`images/${item.image}`"
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
        data() {
            return {
                сategories: [
                    {
                        category: "Войти",
                        image: "user.svg",
                    },
                    {
                        category: "Регистрация",
                        image: "heart.svg",
                    },
                    {
                        category: "Избранное",
                        image: "heart.svg",
                    },
                    {
                        category: "Корзина",
                        image: "basket.svg",
                    },
                    {
                        category: "Магазины",
                        image: "house.svg",
                    },
                    {
                        category: "Акции",
                        image: "percent.svg",
                    },
                    {
                        category: "Доставка и оплата",
                        image: "box.svg",
                    },
                    {
                        category: "Квадроциклы",
                        image: "",
                    },
                    {
                        category: "Катера",
                        image: "",
                    },
                    {
                        category: "Гидроциклы",
                        image: "",
                    },
                    {
                        category: "Лодки",
                        image: "",
                    },
                    {
                        category: "Вездеходы",
                        image: "",
                    },
                    {
                        category: "Снегоходы",
                        image: "",
                    },
                    {
                        category: "Двигатели",
                        image: "",
                    },
                    {
                        category: "Запчасти",
                        image: "",
                    },
                ],
            };
        },
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

    .menu-mobile.active {
        transform: translateX(0);
    }

    @media (max-width: 968px) {
        .menu-mobile {
            &__line-wrapper {
                display: block;
            }
        }
    }
</style>
