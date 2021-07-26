<template>
  <div class="banner-slider">
    <button class="banner-slider__btn banner-slider__btn--prev">
      <img src="images/arrow-left.svg" alt="" />
    </button>
    <button class="banner-slider__btn banner-slider__btn--next">
      <img src="images/arrow-right.svg" alt="" />
    </button>
    <div class="banner-slider__inner">
      <div
        v-for="(slide, idx) in slides"
        :key="idx"
        class="banner-slider__slide"
      >
        <img
          :src="`images/content/${slide}`"
          class="banner-slider__img"
          alt=""
        />
      </div>
    </div>

    <ul class="banner-slider__dots">
      <li v-for="(slide, idx) in slides" :key="idx">
        <button type="button"></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BannerSlider",

  data: function () {
    return {
      offset: 0,
      slideIndex: 1,
    };
  },

  props: {
    slides: Array,
  },

  computed: {
    width() {
      
    }
  },
  methods: {},
};
</script>

<style lang="scss">
.banner-slider {
  max-width: 870px;
  position: relative;
  margin-right: 15px;
  max-height: 400px;

  &__inner {
    display: flex;
    transition: 0.5s, all;
    overflow: hidden;
  }

  &__img {
    object-fit: cover;
    min-height: 400px;
    width: 100%;
    height: 100%;
  }

  &__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    z-index: 5;

    &--prev {
      left: 20px;
    }

    &--next {
      right: 20px;
    }
  }

  &__dots {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    text-align: center;
  }

  &__dots li {
    display: inline-block;
    padding: 0 5px;
  }

  &__dots button {
    padding: 0;
    margin: 0;
    font-size: 0;
    width: 11px;
    height: 11px;
    border: 1px solid $base;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    background-color: $transparent;
  }
}

@media (max-width: 1200px) {
  .banner-slider__img {
    height: 400px;
    max-width: 100%;
  }
}

@media (max-width: 968px) {
  .banner-slider {
    max-width: 100%;
    margin: 0 0 20px;

    &__item {
      text-align: center;
    }

    &__img {
      max-width: 100%;
      margin-bottom: 25px;
    }
  }
}

@media (max-width: 640px) {
  .banner-slider {
    min-height: 230px;
    width: 100%;

    .container {
      padding: 0;
    }

    &__img {
      min-height: 200px;
      height: 230px;
    }
  }
}
</style>
