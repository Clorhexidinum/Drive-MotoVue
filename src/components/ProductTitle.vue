<template>
    <h4 class="product-title">{{}}</h4>
</template>

<script>
    export default {
        name: "ProductTitle",
        data: function() {
return {
            сategories: ["Популярные товары", "С этим товаром покупают"],
        };
},
    };
</script>

<style lang="scss">
    .product-title {
        @extend %barlow-bold;
        font-size: $fs-big;
        line-height: $lh-big;
        margin-bottom: 25px;
    }
</style>
