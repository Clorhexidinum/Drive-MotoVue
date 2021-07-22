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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &__label-search {
    font-size: $fs-medium;
    line-height: $lh-smaller;
    color: rgba(47, 48, 53, 0.7);
    display: flex;
    align-items: center;
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
    color: rgba(47, 48, 53, 0.7);
  }
}

@media (max-width: 1050px) {
  .pickup-form {
    &__top-line {
      justify-content: space-between;
}
      &__label-pickup {
        margin: 0 15px 10px 0;
      }

      &__label-search {
        margin-bottom: 10px;
      }

      &__input-search {
      margin: 0 15px;
    }
  }
}

@media (max-width: 968px) {
  .pickup-form {
    
  }
}
</style>
