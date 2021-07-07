<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list mobile-overflow">
      <li class="breadcrumbs__item" v-for="item in items" :key="item">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  data() {
    return {
      items: [
        "Главная",
        "Гидроциклы",
        "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
      ],
    };
  },
};
</script>

<style lang="scss">
.breadcrumbs {
  margin-bottom: 40px;

  &__item {
    display: inline-block;
    padding-right: 16px;
    margin-right: 10px;
    position: relative;
    font-size: $fs-smaller;
    line-height: $lh-extra-small;
    color: $additional;
  }

  &__item::after {
    content: "";
    position: absolute;
    right: 0;
    // background-image: url("../images/link-arrow.svg");
    width: 5px;
    height: 9px;
    bottom: 4px;
  }

  &__item:last-child::after {
    display: none;
  }
}

@media (max-width: 968px) {
  .breadcrumbs__inner {
    overflow-x: scroll;
    overflow-y: hidden;
  }
}
</style>
