<template>
    <h6 class="footer-title footer__topdrop">{{ title }}</h6>
</template>

<script>
    export default {
        name: "footerTitle",
        titles: [
            "Подпишитесь на нашу рассылку и узнавайте о акциях быстрее",
            "Информация",
            "Интернет-магазин",
        ],
    };
</script>

<style lang="scss">
      .footer-title {
          @extend %sf-bold;
          font-size: $fs-smaller;
          line-height: $lh-extra-small;
          color: $main-text;
      }

      @media (max-width: 540px) {
    .footer-title {
        font-weight: 500;
        font-size: $fs-smaller;
        line-height: $lh-small;
        color: #7f7f7f;
        padding: 15px 0;


      &__topdrop {
        position: relative;
        pointer-events: auto;
      }

      &__topdrop::after {
        position: absolute;
        content: "";
        background-image: url("images/arrow-down.svg");
        right: 0;
        top: 21px;
        width: 12px;
        height: 8px;
      }

      &__topdrop--active::after {
        transform: rotate(180deg);
      }

      &__topdrop--active ~ .footer-menu__list {
        display: block;
      }
    }
</style>
