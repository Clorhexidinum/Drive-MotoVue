<template>
    <div class="more-btn">
        <a class="more-btn__link btn" href="">Показать еще</a>
    </div>
</template>

<script>
    export default {
        name: "MoreBtn",
    };
</script>

<style lang="scss">
    .more-btn {
        text-align: center;
        margin: 35px 0 0;

        &__link {
            display: inline-block;
            font-size: $fs-smaller;
            line-height: $lh-small;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: $main-text;
            padding: 16px 43px;
            background: $base;
        }
    }
</style>
