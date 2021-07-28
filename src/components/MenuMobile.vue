<template>
  <div class="menu-mobile__box">
    <button class="menu-mobile__btn" @click="menuActive = !menuActive">
      <span
        class="menu-mobile__btn-line"
        :class="{ active: menuActive }"
      ></span>
    </button>
    <ul class="menu-mobile" v-if="menuActive">
      <li
        class="menu-mobile__item"
        v-for="item in сategories"
        :key="item.category"
      >
        <a class="menu-mobile__link" href="#">{{ item.category }}</a>
        <img
          v-if="property !== ''"
          class="menu-mobile__img"
          :src="`images/${item.image}`"
          alt=""
        />
      </li>
      <li class="menu-mobile__item">
        <a class="menu-mobile__link" href="#">Москва,<br />ул. Науки 25</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuMobile",
  data() {
    return {
      сategories: [
        {
          category: "Войти",
          image: "user.svg",
        },
        {
          category: "Регистрация",
          image: "heart.svg",
        },
        {
          category: "Избранное",
          image: "heart.svg",
        },
        {
          category: "Корзина",
          image: "basket.svg",
        },
        {
          category: "Магазины",
          image: "house.svg",
        },
        {
          category: "Акции",
          image: "percent.svg",
        },
        {
          category: "Доставка и оплата",
          image: "box.svg",
        },
        {
          category: "Квадроциклы",
          image: "",
        },
        {
          category: "Катера",
          image: "",
        },
        {
          category: "Гидроциклы",
          image: "",
        },
        {
          category: "Лодки",
          image: "",
        },
        {
          category: "Вездеходы",
          image: "",
        },
        {
          category: "Снегоходы",
          image: "",
        },
        {
          category: "Двигатели",
          image: "",
        },
        {
          category: "Запчасти",
          image: "",
        },
      ],
      menuActive: false,
    };
  },

  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },

  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      if (window.innerWidth > 968) {
        this.menuActive = false;
      }
    },
  },
};
</script>

<style lang="scss">
.menu-mobile {
  width: 243px;
  position: absolute;
  left: 0;
  top: 123px;
  z-index: 10;
  background-color: $base;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);

  &__item {
    position: relative;
  }

  &__item:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__item:last-child {
    padding-bottom: 30px;
  }

  &__link {
    display: block;
    padding-left: 53px;
    padding-top: 36px;
    padding-bottom: 5px;
  }

  &__img {
    position: absolute;
    left: 11px;
    bottom: 10px;
  }

  &__box {
    display: none;
  }
}

@media (max-width: 968px) {
  .menu-mobile {
    &__box {
      display: block;
    }
    
    &__btn {
      border: none;
      background-color: transparent;
      cursor: pointer;
      position: relative;
      width: 46px;
      height: 43px;
    }

    &__btn-line {
      display: block;
      background-color: #2f3035;
      border-radius: 3px;
      height: 3px;
      width: 34px;
      position: absolute;
      left: 6px;
      top: 20px;
      transition: all 0.3s;
    }

    &__btn-line:before {
      content: "";
      position: absolute;
      background-color: #2f3035;
      height: 3px;
      width: 34px;
      left: 0;
      top: -14px;
    }

    &__btn-line:after {
      content: "";
      position: absolute;
      background-color: #2f3035;
      height: 3px;
      width: 34px;
      left: 0;
      top: 14px;
    }

    &__btn-line.active{
      transform: rotate(45deg);
    }

    &__btn-line.active:before{
      transform: rotate(90deg);
    top: 0px;
    }

    &__btn-line.active:after{
      display: none;
    }
  }
}
</style>
