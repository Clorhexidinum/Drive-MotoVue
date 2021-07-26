<template>
  <div class="sale-item">
    <div class="sale-item__top">
      <p class="sale-item__info">акция</p>
      <div class="sale-item__price">
        <div class="sale-item__price-new">{{ newPrice }}</div>
        <div class="sale-item__price-old">{{ price }}</div>
      </div>
    </div>
    <img class="sale-item__img" :src="`images/content/${img}`" alt="" />
    <h5 class="sale-item__title">{{ title }}</h5>
    <p class="sale-item__footer">
      Акция действует до <span>{{ ending }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "SaleItem",
  data: function () {
    return {
      title: "Лодочный мотор Suzuki DF9.9BRS",
      ending: "31.08.2020",
      price: 225000,
      sale: 15,
      img: "sale-1.png",
    };
  },

  computed: {
    newPrice() {
      return Math.floor(
        (this.price / 100) * (100 - this.sale)
      ).toLocaleString();
    },
  },
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
    position: relative;
    top: -1px;
  }

  &__price {
    text-align: right;
    @extend %barlow-regular;
  }

  &__price-new {
    font-weight: $bold;
    font-size: 27px;
    line-height: $lh-extra-big;
    color: $active;
    margin-right: 6px;
    padding-right: 20px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background-image: url("/images/icon-price.svg");
      background-repeat: no-repeat;
      right: 0;
      top: 8px;
      width: 16px;
      height: 18px;
    }
  }
  &__price-old {
    display: inline-block;
    font-weight: $regular;
    font-size: $fs-smaller;
    line-height: $lh-extra-small;
    color: $additional;
    margin-right: 15px;
    background-image: url("/images/old-line.svg");
    padding: 2px 5px;
    background-repeat: no-repeat;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background-image: url("/images/icon-price-old.svg");
      background-repeat: no-repeat;
      right: -6px;
      top: 7px;
      width: 8px;
      height: 10px;
    }
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
    margin: 0 auto;
  }
}
</style>
