<template>
    <h4 class="product__title">{{}}</h4>
</template>

<script>
    export default {
        name: "title",
        data: {
            сategories: ["Популярные товары", "С этим товаром покупают"],
        },
    };
</script>

<style lang="scss">
    .product__title {
        @extend %barlow-bold;
        font-size: $fs-big;
        line-height: $lh-big;
        margin-bottom: 25px;
    }
</style>
