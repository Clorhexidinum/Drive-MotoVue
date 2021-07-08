<template>
    <div class="menu-mobile-line">
        <slot>
            {{ item }}
        </slot>
    </div>
</template>

<script>
    export default {
        name: "MenuMobileLine",
        props: ["item"],
    };
</script>

<style lang="scss">
    .menu-mobile-line {
        @extend %sf-bold;
        display: none;
        font-size: $fs-bigger;
        line-height: $lh-medium;
        background-color: $base;
        overflow-x: scroll;
    }

    @media (max-width: 968px) {
        .menu-mobile-line {
            display: flex;
        }
    }
</style>
