<template>
    <div class="sale-item">
        <div class="sale-item__top">
            <p class="sale-item__info">акция</p>
            <div class="sale-item__price">
                <div class="price price__new">190 000</div>
                <div class="price price__old">225 000</div>
            </div>
        </div>
        <img class="sale-item__img" src="" alt="" />
        <h5 class="sale-item__title">Лодочный мотор Suzuki DF9.9BRS</h5>
        <p class="sale-item__footer">
            Акция действует до <span>31.08.2020</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "SaleItem",
    };
</script>

<style lang="scss">
    .sale-item {
        max-width: 265px;
        text-align: center;
        border: 1px solid $additional;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-height: 400px;

        &__top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        &__info {
            color: $base;
            background-color: $active;
            padding: 8px 20px;
            text-transform: uppercase;
            font-size: $fs-extra-small;
            line-height: $lh-extra-smaller;
            letter-spacing: 0.1em;
        }

        &__price {
            text-align: right;
        }

        &__img {
            object-fit: contain;
        }

        &__title {
            @extend %sf-bold;
            font-size: $fs-medium;
            line-height: $lh-smaller;
            margin-bottom: 7px;
        }

        &__footer {
            background-color: $base;
            padding: 25px 20px;
            font-size: $fs-medium;
            line-height: $lh-smaller;
        }

        &__footer span {
            @extend %barlow-bold;
            color: $active;
            display: block;
        }
    }

    @media (max-width: 968px) {
        .sale-item {
            max-height: 380px;
        }
    }
</style>
