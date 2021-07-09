<template>
    <p class="topdrop-title" @="">{{ title }}</p>
</template>

<script>
    export default {
        name: "TopdropTitleggggg",
        titles: ["Информация", "Интернет-магазин"],
    };
</script>

<style lang="scss">
    //   .topdrop-title {
    //       @extend %sf-bold;
    //       font-size: $fs-smaller;
    //       line-height: $lh-extra-small;
    //       color: $main-text;
    //   }

    //   @media (max-width: 540px) {
    // .topdrop-title {
    //     font-weight: 500;
    //     font-size: $fs-smaller;
    //     line-height: $lh-small;
    //     color: #7f7f7f;
    //     padding: 15px 0;

    //   &__topdrop {
    //     position: relative;
    //     pointer-events: auto;
    //   }

    //   &__topdrop::after {
    //     position: absolute;
    //     content: "";
    //     background-image: url("/images/arrow-down.svg");
    //     right: 0;
    //     top: 21px;
    //     width: 12px;
    //     height: 8px;
    //   }

    //   &__topdrop--active::after {
    //     transform: rotate(180deg);
    //   }

    //   &__topdrop--active ~ .footer-menu__list {
    //     display: block;
    //   }
    // }
</style>
