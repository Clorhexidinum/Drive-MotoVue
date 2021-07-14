<template>
  <p :class="[titleClass, { rotate: isOpened }]" @click="isOpened = !isOpened">
    {{ title }}
  </p>
  <div v-if="isOpened" class="topdrop-title__content">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "TopdropTitle",
  data() {
    return {
      isOpened: false,
    };
  },

  props: ["title", "titleClass"],

  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },

  unmounted() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      this.isOpened = window.innerWidth > 540;
    },
  },
};
</script>

<style lang="scss">
.footer-title {
  @extend %sf-bold;
  font-size: $fs-smaller;
  line-height: $lh-extra-small;
  color: $main-text;
  position: relative;
}

.filter-title {
  @extend %sf-semibold;
  font-size: $fs-small;
  line-height: $lh-small;
  padding-left: 26px;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    background-image: url("/images/arrow-down.svg");
    left: 0;
    bottom: 5px;
    width: 12px;
    height: 8px;
    transform: rotate(0deg);
  }
}

.topdrop-title__content {
  flex-wrap: wrap;
  margin-top: 10px;
}

.rotate::before {
  transform: rotate(180deg);
}

@media (max-width: 540px) {
  .footer-title {
    font-weight: 500;
    font-size: $fs-smaller;
    line-height: $lh-small;
    color: #7f7f7f;
    padding: 15px 0;

    &::after {
      position: absolute;
      content: "";
      background-image: url("/images/arrow-down.svg");
      right: 0;
      top: 21px;
      width: 12px;
      height: 8px;
    }
  }

  .rotate::after {
    transform: rotate(180deg);
  }
}
</style>
