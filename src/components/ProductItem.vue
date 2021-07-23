<template>
  <div class="product-item__wrapper">
    <button class="product-item__favorite" @click="isFavotite = !isFavotite">
      <svg
        v-if="isFavotite === false"
        width="24"
        height="22"
        viewBox="0 0 24 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z"
        />
      </svg>
      <svg
        v-else
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3.43498C10.011 -1.96402 0 -1.16202 0 7.00298C0 11.071 3.06 16.484 12 22C20.94 16.484 24 11.071 24 7.00298C24 -1.11502 14 -1.99602 12 3.43498Z"
          fill="#1C62CD"
        />
      </svg>
    </button>
    <button class="product-item__compare" @click="isСompare = !isСompare">
      <svg
        :class="{ active: isСompare }"
        width="20"
        height="28"
        viewBox="0 0 20 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="16" y="15.7708" width="4" height="11.7255" rx="2" />
        <rect x="8" y="0.527588" width="4" height="26.9687" rx="2" />
        <rect y="9.90796" width="4" height="17.5883" rx="2" />
      </svg>
    </button>
    <button v-if="availability > 0" class="product-item__basket">
      <img src="/images/basket-white.svg" alt="" />
    </button>
    <span v-if="availability > 0 && sale > 0" class="product-item__sale"
      >sale</span
    >
    <a class="product-item" href="#">
      <p class="product-item__hover-text">посмотреть товар</p>
      <img
        class="product-item__img"
        :src="`images/content/${image}`"
        :class="{ notAvalible: availability == 0 }"
        alt=""
      />
      <div>
        <h4 class="product-item__title">{{ name }}</h4>
        <p v-if="availability > 0 && sale > 0" class="product-item__price-old">
          {{ price.toLocaleString() }} ₽
        </p>
        <p v-if="availability > 0" class="product-item__price">
          {{ sale > 0 ? newPrice : price.toLocaleString() }} ₽
        </p>
        <p v-if="availability == 0" class="product-item__notify-text">
          нет в наличии
        </p>
        <a v-if="availability == 0" class="product-item__notify-link"
          >Сообщить о поступлении</a
        >
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    name: {
      type: String,
      default: "BRP SeaDoo GTI 155hp SE Long Blue Metallic",
    },
    image: {
      type: String,
      default: "gidrotsikl-1.png",
    },
    price: {
      type: Number,
      default: 1100475,
    },
    sale: {
      type: Number,
      default: 10,
    },
    availability: {
      type: Number,
      default: 1,
    },
  },
  data: function () {
    return {
      isFavotite: false,
      isСompare: false,
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
.product-item {
  border: 1px solid $additional;
  border-radius: 3px;
  text-align: center;
  padding: 52px 20px 31px;
  transition: all 0.3s;
  min-height: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

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
    display: block;
    position: relative;
    width: 271px;
    transition: all 0.3s;
    margin: 0 10px 20px;
    height: 415px;

    // &:nth-child(3n) {
    //   margin-right: 0;
    // }
  }

  &__wrapper--line {
    width: 100%;
    height: 250px;
  }

  &__wrapper--line > a {
    min-height: auto;
    flex-direction: row;
    justify-content: space-around;
  }

  &__title {
    font-weight: $regular;
    padding: 14px 0 25px;
    font-size: $fs-medium;
    line-height: $lh-smaller;
  }

  &__favorite,
  &__compare {
    position: absolute;
    background-color: transparent;
    border: none;
    outline: none;
    z-index: 50;
    cursor: pointer;
    padding: 0;

    &:hover svg {
      fill: $active;
    }

    & svg {
      fill: $main-text;
    }
  }

  &__favorite {
    top: 16px;
    right: 19px;
    width: 24px;
    height: 22px;
  }

  &__compare {
    top: 12px;
    right: 50px;

    & > .active {
      fill: $active;
    }
  }

  &__basket {
    position: absolute;
    width: 60px;
    height: 40px;
    background: $active;
    border-radius: 10px 0px 0px 0px;
    border: none;
    bottom: 0;
    right: 1px;
    outline: none;
    padding-top: 7px;
    cursor: pointer;
    z-index: 10;
  }

  &__basket:active {
    background-color: $activePress;
  }

  &__price {
    font-weight: $bold;
    font-size: $fs-extra-big;
    line-height: 36px;
    position: relative;
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
    position: relative;
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
    left: 20px;
    right: 20px;
  }

  &__img {
    max-width: 100%;
  }

  &__sale {
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
    box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
    border-radius: 0 3px;
    color: $active;
    z-index: 10;
    border: 1px solid $additional;

    & .product-item__hover-text {
      opacity: 1;
      color: $main-text;
    }

    & .product-item__price-old {
      color: $main-text;
      opacity: 0.6;
    }

    & .notAvalible {
      filter: grayscale(0);
    }
  }

  & .notAvalible {
    filter: grayscale(1);
  }
}
</style>
