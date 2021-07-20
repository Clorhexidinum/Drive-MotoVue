<template>
  <form action="#">
    <div class="pickup-form__top-line">
      <label class="pickup-form__label-search"
        >Магазин
        <input class="pickup-form__input-search" type="text" />
      </label>
      <label class="pickup-form__label-pickup">
        <input class="filter-style" type="radio" name="pickup" />
        Забрать сегодня
      </label>
      <label class="pickup-form__label-pickup">
        <input class="filter-style" type="radio" name="pickup" checked />
        Забрать в течение недели
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: "PickupForm",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">

.pickup-form {
  &__top-line {
    margin-bottom: 10px;
  }

  &__label-search {
    font-size: $fs-medium;
    line-height: $lh-smaller;
    color: rgba(47, 48, 53, .7);
  }

  &__input-search {
    background: $base;
    border-radius: 3px;
    margin-left: 17px;
    margin-right: 100px;
    padding: 9px 37px 9px 17px;
    border: none;
  }

  &__label-pickup {
    margin-left: 54px;
    font-size: $fs-small;
    line-height: $lh-smaller;
    color: rgba(47, 48, 53, .7);
  }
}
</style>
