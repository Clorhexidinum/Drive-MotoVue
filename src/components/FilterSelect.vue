<template>
  <div class="filter-select">
    <p class="filter-select__title">{{ title }}</p>
    <select class="filter-select__select" :name="name">
      <option v-for="item in options" :key="item" :value="item">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterSelect",

  props: {
    options: Array,
    title: String,
    name: String,
  },
};
</script>

<style lang="scss">
.filter-select {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid $additional;
    padding-top: 34px;

  &__title {
    @extend %sf-semibold;
    font-size: $fs-small;
    line-height: $lh-small;
    padding-bottom: 14px;
    padding-left: 26px;
  }

    &__select {
    border: none;
    outline: none;
  }
}
</style>
