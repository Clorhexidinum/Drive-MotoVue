<template>
    <ul class="menu-categories">
        <li
            class="menu-categories__item"
            v-for="category in сategories"
            :key="category"
        >
            <a class="menu-categories__link" href="#">{{ category }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "MenuCategories",
        data: function () {
            return {
                сategories: [
                    "Квадроциклы",
                    "Катера",
                    "Гидроциклы",
                    "Вездеходы",
                    "Снегоходы",
                    "Двигатели",
                    "Запчасти",
                ],
            };
        },
    };
</script>

<style lang="scss">
    .menu-categories {
        background-color: $base;
        display: flex;
        justify-content: space-around;
        font-weight: 400;
        min-height: 53px;
        align-items: center;

        &__link {
            position: relative;
            transition: all 0.3s;
            font-weight: 400;
            padding: 15px 0 14px;
        }

        &__link::before {
            content: "";
            position: absolute;
            width: 0;
            right: 0;
            left: auto;
            background-color: $active;
            height: 3px;
            bottom: -2px;
            transition: all 0.3s;
        }

        &__link:hover {
            color: $main-text;
            text-shadow: 0 0 0.65px $main-text, 0 0 0.65px $main-text;
        }

        &__link:hover::before {
            width: 100%;
            left: 0;
            right: auto;
        }
    }

    @media (max-width: 968px) {
        .menu-categories {
            display: none;
        }
    }
</style>
