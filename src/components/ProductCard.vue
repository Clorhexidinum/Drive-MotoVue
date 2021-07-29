<template>
  <div class="product-card__inner">
    <div class="product-card__img-box">
      <span
        v-if="item.availability > 0 && item.sale > 0"
        class="product-item__sale"
        >sale</span
      >
      <img
        class="product-card__img"
        :src="`images/content/${item.img}`"
        alt=""
      />
      <p
        v-if="item.availability > 0 && item.sale > 0"
        class="product-card__price-old"
      >
        {{ item.price.toLocaleString() }} ₽
      </p>
      <p v-if="item.availability > 0" class="product-card__price-new">
        {{ item.sale > 0 ? newPrice : item.price.toLocaleString() }} ₽
      </p>
      <p v-if="item.availability == 0" class="product-card__notify-text">
        нет в наличии
      </p>
      <a v-if="item.availability == 0" class="product-card__notify-link"
        >Сообщить о поступлении</a
      >
      <a class="product-card__link" href="#">Нашли дешевле? Снизим цену!</a>
    </div>
    <div class="product-card__content">
      <h1 class="product-card__title">Гидроцикл {{ item.title }}</h1>
      <p class="product-card__code">Код товара: {{ item.article }}</p>
      <div class="product-card__buttons">
        <button
          class="product-card__favorite"
          @click="isFavotite = !isFavotite"
        >
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
        <button class="product-card__compare" @click="isСompare = !isСompare">
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
        <star-rating v-model:rating="rating" :show-rating="false" :star-size="30" :active-color="'#1c62cd'" :increment="0.5"></star-rating>
      </div>
      <tabs :tabs="['характеристики', 'наличие']" @clicked="activeProductTab">
        <characteristics-list
          v-if="activeContent === 'характеристики'"
        ></characteristics-list>
        <availability-card
          v-if="activeContent === 'наличие'"
        ></availability-card>
      </tabs>
    </div>
    <div class="product-card__btn-box">
      <button
        class="product-card__btn btn"
        :class="{ disable: item.availability < 1 }"
      >
        купить
      </button>
    </div>
  </div>
</template>

<script>
import CharacteristicsList from "./CharacteristicsList.vue";
import AvailabilityCard from "./AvailabilityCard.vue";
import StarRating from 'vue-star-rating';
import Tabs from "./Tabs.vue";

export default {
  name: "ProductCard",
  components: {
    CharacteristicsList,
    AvailabilityCard,
    Tabs,
    StarRating,
  },

  data: function () {
    return {
      item: {
        article: "366666-1",
        title: "BRP SeaDoo GTI 155hp SE Long Blue Metallic",
        img: "gidrotsikl-1.png",
        price: 1100475,
        sale: 10,
        availability: 1,
      },
      isFavotite: false,
      isСompare: false,
      activeTab: 0,
      activeContent: "характеристики",
    };
    },


  methods: {
    activeProductTab({ index, tab }) {
      this.activeTab = index;
      this.activeContent = tab;
    },
  },

  computed: {
    newPrice() {
      return Math.floor(
        (this.item.price / 100) * (100 - this.item.sale)
      ).toLocaleString();
    },
  },
};
</script>

<style lang="scss">
.product-card {
  &__inner {
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
  }

  &__img-box {
    width: 500px;
    padding-top: 64px;
    margin-right: 20px;
    text-align: center;
    @extend %barlow-regular;
    display: flex;
    flex-direction: column;
  }

  &__img-box::before {
    font-size: $fs-smaller;
    line-height: $lh-small;
    letter-spacing: 0.12em;
    padding: 13px 25px;
    border-radius: 3px;
  }

  &__img {
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }

  &__price-old {
    font-size: $fs-extra-big;
    line-height: 44px;
    opacity: 0.6;
    display: inline-block;
    background-image: url("/images/old-line.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  &__price-new {
    font-weight: $bold;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 17px;
  }

  &__sale {
    font-size: $fs-smaller;
    line-height: $lh-small;
    letter-spacing: 0.12em;
    padding: 13px 25px;
    border-radius: 3px;
    background-color: $active;
    color: $base;
    position: absolute;
    text-transform: uppercase;
    top: 1px;
    left: 1px;
  }

  &__link {
    font-size: $fs-smaller;
    line-height: $lh-extra-small;
    color: $active;
    margin: 0 auto;
  }

  &__title {
    @extend %sf-bold;
    font-size: $fs-extra-big;
    line-height: 36px;
    margin-bottom: 10px;
    max-width: 420px;
  }

  &__code {
    font-size: $fs-smaller;
    line-height: $lh-small;
    color: $main-text;
    opacity: 0.6;
    margin-bottom: 22px;
  }

  &__buttons {
    margin-bottom: 15px;
    display: flex;
  }

  &__favorite,
  &__compare {
    background-color: transparent;
    border: none;
    outline: none;
    z-index: 50;
    cursor: pointer;
    padding: 0;
    margin-right: 15px;

    &:hover svg {
      fill: $active;
    }

    & svg {
      fill: $main-text;
    }
  }

  &__compare > .active {
      fill: $active;
    }

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

  &__btn-box {
    width: 100%;
  }

  &__btn {
    font-size: $fs-smaller;
    line-height: $lh-extra-small;
    letter-spacing: 0.12em;
    padding: 16px 56px;
    margin: 0 auto;
    display: block;
  }

  & > .tabs {
    min-height: 375px;
  }
}

@media (max-width: 970px) {
  .product-card {
    &__content {
      width: 100%;
    }

    &__content > .tabs {
      display: none;
    }

    &__title {
      max-width: 100%;
    }

    &__btn-box {
      display: flex;
      margin-top: 40px;
      width: 100%;
    }

    &__btn {
      margin: 0 auto;
    }
  }
}

@media (max-width: 968px) {
  .product-card {
    &__content {
      order: -1;
    }

    &__btn-mobile {
      display: block;
      margin-top: 40px;
    }

    &__inner {
      flex-wrap: wrap;
    }

    &__tabs {
      display: none;
    }

    &__img-box {
      width: 100%;
    }
  }
}

@media (max-width: 540px) {
  .product-card {
    &__title {
      font-size: $fs-bigger;
      line-height: $lh-medium;
      margin-left: 0;
    }

    &__img {
      width: 100%;
    }

    &__button a+a {
      margin-left: 0;
    }
  }
}
</style>
