<template>
  <div class="basket">
    <form class="basket__form">
      <div class="basket__item">
        <img :src="`images/content/${ image }`" class="basket__img" />
        <div class="basket__item-box">
          <h4 class="basket__title">{{ name }}</h4>
          <p class="basket__descr">{{ descr }}</p>
          <span>Арт.{{ article }}</span>
        </div>
        <div class="basket__item-box">
          <span class="basket__price">{{ price }}</span>
        </div>
        <div class="basket__item-box">
          <input type="number" value="1" min="0"/>
        </div>
        <div class="basket__item-box">
          <button type="button"></button>
        </div>
      </div>
      <div class="basket__total">
        <div class="basket__total-box">
          <label>
            <input class="basket__form-check" type="checkbox" />
            Проверить мой заказ
          </label>
          <span
            >* Менеджер еще раз проверит соответствие товаров друг другу и
            уточнит условия доставки</span
          >
        </div>
        <p class="basket__form-check">Всего {{}}</p>
        <button class="basket__form-btn btn" type="submit">оформить</button>
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
}

&__item {
  border: 1px solid $additional;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  min-height: 160px;
}
}
</style>
