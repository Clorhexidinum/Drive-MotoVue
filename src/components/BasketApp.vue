<template>
  <div class="basket">
    <form class="basket__form">
      <div class="basket__item">
        <img :src="`images/content/${image}`" class="basket__img" />
        <div class="basket__item-box basket__item-descr">
          <h4 class="basket__title">{{ name }}</h4>
          <p class="basket__descr">{{ descr }}</p>
          <span>Арт.{{ article }}</span>
        </div>
        <div class="basket__item-box">
          <span class="basket__price">{{ price.toLocaleString() }} руб.</span>
        </div>
        <div class="basket__item-box">
          <input
            class="basket__item-quantity"
            type="number"
            value="1"
            min="0"
          />
        </div>
        <div class="basket__item-box">
          <button class="basket__remove-btn" type="button"></button>
        </div>
      </div>
      <div class="basket__total">
          <div class="basket__item-box basket__item-check">
            <label>
              <input class="basket__form-check" type="checkbox" />
              Проверить мой заказ
            </label>
            <span
              >Менеджер еще раз проверит соответствие товаров друг другу и
              уточнит условия доставки</span
            >
          </div>
          <div class="basket__item-box">
            <p class="basket__form-price">Всего: <span>{{ price.toLocaleString() }} руб.</span></p>
          </div>
          <div class="basket__item-box"><p class="basket__form-quantity">1 шт.</p></div>
          <div class="basket__item-box">
            <button class="basket__form-btn btn" type="submit">оформить</button>
          </div>

      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "BasketApp",
  data: function () {
    return {};
  },

  props: {
    name: {
      type: String,
      default: "BRP SeaDoo GTI 155hp SE Long Blue Metallic",
    },
    descr: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    article: {
      type: String,
      default: "366666-1",
    },
  },
};
</script>

<style lang="scss">
.basket {
  &__form {
    border: 1px solid $additional;
  }
  &__item,
  &__total {
    padding: 10px 20px;
    display: flex;
    align-items: center;
  }

  &__item {
    height: 160px;
    border-bottom: 1px solid $additional;
  }

  &__total {
    height: 100px;
  }

  &__img {
    height: 100%;
    margin-right: 15px;
  }

  &__item-descr {
    width: 400px;
    margin-right: auto;

    & > span {
      font-size: $fs-smaller;
      color: $additional;
    }
  }

  &__title {
    font-size: $fs-small;
    margin-bottom: 10px;
  }

  &__descr {
    font-size: $fs-small;
    margin-bottom: 10px;
  }

  &__price,
  &__form-price span {
    font-size: $fs-small;
    color: $active;
    font-weight: $bold;
    margin-right: 15px;
  }

  &__item-quantity {
    width: 70px;
  }

  &__remove-btn {
    width: 28px;
    height: 28px;
    border: none;
    background-color: $transparent;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
    margin-left: 112px;
  }

  &__remove-btn:before {
    content: "";
    position: absolute;
    background-color: #2f3035;
    height: 3px;
    width: 34px;
    left: -3px;
    top: 10px;
    transform: rotate(45deg);
  }

  &__remove-btn:after {
    content: "";
    position: absolute;
    background-color: #2f3035;
    height: 3px;
    width: 34px;
    left: -2px;
    top: 10px;
    transform: rotate(-45deg);
  }

  &__item-check {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 250px;
    margin-right: auto;
  }

  &__item-check > label {
    font-size: $fs-smaller;
    cursor: pointer;
  }

  &__item-check > span {
    font-size: 10px;
    line-height: 14px;
    color: $additional;
  }

  &__form-btn {
    padding: 10px 15px;
    font-size: $fs-smaller;
    margin-left: 29px;
  }

  &__form-quantity {
    display: block;
    width: 70px;
  }

  &__form-price span {
    margin-left: 10px;
  }
}
</style>
