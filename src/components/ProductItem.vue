<template>
  <div class="product-item__wrapper">
    <button class="product-item__favorite"></button>
    <button class="product-item__compare"></button>
    <button v-if="this.availability > 0" class="product-item__basket">
      <img src="" alt="" />
    </button>

    <a class="product-item" href="#">
      <p class="product-item__hover-text">посмотреть товар</p>
      <img class="product-item__img" :src="`images/content/${img}`" alt="" />
      <h4 class="product-item__title">{{ title }}</h4>
      <p v-if="this.availability > 0" class="product-item__price-old">
        {{ price }}
      </p>
      <p v-if="this.availability > 0" class="product-item__price price">
        {{ newPrice }}
      </p>
      <p v-if="this.availability == 0" class="product-item__notify-text">
        нет в наличии
      </p>
      <a v-if="this.availability == 0" class="product-item__notify-link"
        >Сообщить о поступлении</a
      >
    </a>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  data: function () {
    return {
      title: "BRP SeaDoo GTI 155hp SE Long Blue Metallic",
      img: "gidrotsikl-1.png",
      price: 1100475,
      sale: 5,
      rate: 0,
      availability: 0,
      country: "Канада",
      numberOfPlaces: 3,
      power: 155,
      motor: "Бензиновый",
      release: 2018,
      length: 2790,
      width: 1180,
      weigth: 186,
      fuelTank: 30,
    };
  },

  computed: {
    newPrice() {
      return Math.floor((this.price / 100) * (100 - this.sale));
    },
  },
};
</script>

<style lang="scss">
.product-item {
  border: 1px solid $additional;
  border-radius: 3px;
  text-align: center;
  padding: 52px 20px 31px;
  transition: all 0.3s;
  min-height: 400px;
  width: 100%;
  height: 100%;

  &__notify-link {
    display: block;
    margin: 15px auto;
    color: $active;
    font-size: $fs-small;
    line-height: $lh-small;
    text-align: center;
    border-bottom: 1px solid $active;
    cursor: pointer;
  }

  &__wrapper {
    position: relative;
    width: 271px;
    transition: all 0.3s;
    margin: 0 auto;

    &.product-item__not-available .product-item__title {
      padding-bottom: 13px;
    }

    &.product-item__not-available .product-item__notify-text {
      display: block;
      font-weight: 700;
      font-size: $fs-medium;
      line-height: $lh-smaller;
    }
  }

  &__wrapper.product-item__wrapper--list {
    width: 100%;
  }

  &__title {
    font-weight: $regular;
    padding: 14px 0 25px;
    font-size: $fs-medium;
    line-height: $lh-smaller;
  }

  &__favorite {
    position: absolute;
    top: 16px;
    right: 19px;
    width: 24px;
    height: 22px;
    background-color: transparent;
    border: none;
    outline: none;
    z-index: 50;
    cursor: pointer;
  }

  &__favorite::before {
    content: "";
    position: absolute;
    width: 24px;
    height: 22px;
    top: 0;
    left: 0;
    background-image: url("/images/favorite.svg");
  }

  &__favorite--active::before {
    background-image: url("/images/favorite-active.svg");
  }

  &__compare {
    position: absolute;
    top: 16px;
    right: 19px;
    width: 24px;
    height: 22px;
    background-color: transparent;
    border: none;
    outline: none;
    z-index: 50;
    cursor: pointer;
  }

  &__compare::before {
    content: "";
    position: absolute;
    width: 24px;
    height: 22px;
    top: 0;
    left: 30px;
    background-image: url("/images/favorite.svg");
  }

  &__compare--active::before {
    background-image: url("/images/favorite-active.svg");
  }

  &__basket {
    position: absolute;
    width: 60px;
    height: 40px;
    background: $active !important;
    border-radius: 10px 0px 0px 0px;
    border: none;
    bottom: 0;
    right: 0;
    outline: none;
    padding-top: 7px;
    cursor: pointer;
    z-index: 10;
  }

  &__price {
    font-weight: $bold;
    font-size: $fs-extra-big;
    line-height: 36px;
  }

  &__price-old {
    font-size: $fs-bigger;
    line-height: 35px;
    opacity: 0.6;
    display: inline-block;
    background-image: url("/images/old-line.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &__hover-text {
    padding: 18px 21px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    z-index: 10;
    position: absolute;
    display: inline-block;
    top: 30%;
    opacity: 0;
    transition: all 0.3s;
  }

  &__img {
    max-width: 100%;
  }

  &--sale::before {
    content: "SALE";
    padding: 8px 15px;
    background-color: $active;
    color: $base;
    position: absolute;
    text-transform: uppercase;
    font-size: $fs-extra-small;
    line-height: $lh-extra-smaller;
    letter-spacing: 0.07em;
    top: 0;
    left: 0;
  }

  &:hover {
    position: relative;
    box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25) !important;
    border-radius: 3px;
    color: $active;
    z-index: 10;
    border: 1px;

    & .product-item__hover-text {
      opacity: 1;
      color: $main-text;
    }

    .product-item__notify-text {
      color: $main-text;
    }

    & .product-item__price-old {
      color: $main-text;
    }
  }
}
</style>
