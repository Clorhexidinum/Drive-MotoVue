<template>
    <div class="categories">
        <a
            v-for="item in сategories"
            :key="item.title"
            class="categories__item"
            href="#"
        >
            <div class="categories__item-info">
                <h4 class="categories__item-title">
                    {{ item.title }}
                </h4>
                <p class="categories__item-text">Подробее</p>
            </div>
            <div class="categories__item-img">
                <img :src="`images/${item.image}`" alt="" />
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "Categories",
        data() {
            return {
                сategories: [
                    {
                        title: "Квадроциклы",
                        image: "categories-1.png",
                    },
                    {
                        title: "Гидроциклы",
                        image: "categories-2.png",
                    },
                    {
                        title: "Катера",
                        image: "categories-3.png",
                    },
                    {
                        title: "Снегоходы",
                        image: "categories-4.png",
                    },
                    {
                        title: "Вездеходы",
                        image: "categories-5.png",
                    },
                    {
                        title: "Двигатели",
                        image: "categories-6.png",
                    },
                ],
            };
        },
    };
</script>

<style lang="scss">
    .categories {
        display: flex;
            justify-content: space-around;
            flex-wrap: wrap;

        &__item {
            margin-bottom: 30px;
            border: 1px solid $additional;
            border-radius: 3px;
            width: 370px;
            display: flex;
            padding: 20px 20px 16px;
            justify-content: space-between;
            transition: all 0.3s;
        }

        &__item:hover {
            box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
        }

        &__item-title {
            @extend %barlow-bold;
            font-size: $fs-big;
            line-height: $lh-bigger;
            transition: all 0.3s;
        }

        &__item:hover &__item-title {
            color: $active;
        }

        &__item-text {
            font-size: $fs-smaller;
            line-height: $lh-extra-small;
            color: $additional;
        }

        &__item-text::after {
            content: url("/images/link-arrow.svg");
            padding-left: 2px;
        }

        &__item-info {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        &__item-img {
            text-align: center;
            width: 50%;
        }

        &__item-img img {
            max-width: 100%;
        }
    }

    @media (max-width: 1200px) {
        .categories {
            &__inner {
                justify-content: space-around;
            }
        }
    }

    @media (max-width: 440px) {
        .categories {
            &__item {
                padding: 20px 10px 16px;
                width: 100%;
            }
        }
    }
</style>
