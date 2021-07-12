<template>
  <ul class="characteristics-list">
    <li v-for="item in items" :key="item" class="characteristics-list__item">
      <div class="characteristics-list__item-left">{{ item.key }}</div>
      <div class="characteristics-list__item-right">{{ item.value }}</div>
    </li>
  </ul>
  <a class="characteristics-list__more" href="#">Показать еще</a>
</template>

<script>
export default {
  name: "CharacteristicsList",
  data: function () {
    return {
        items: [
          {
              key: "Производитель",
              value: "Канада",
          },
          {
              key: "Количество мест, шт",
              value: "3",
          },
          {
              key: "Мощность, л.с.",
              value: "155",
          },
          {
              key: "Тип двигателя",
              value: "Бензиновый",
          },
          {
              key: "Год выпуска",
              value: "2018",
          },
        ],
    };
  },
};
</script>

<style lang="scss">
.characteristics-list {
  max-width: 445px;
  margin-bottom: 20px;

  &__item {
    padding: 15px 0 6px;
    border-bottom: 1px solid rgba(47, 48, 51, 0.1);
    display: flex;
    justify-content: space-between;
  }

  &__item-left {
    padding-right: 15px;
  }

  &__item-right {
    width: 125px;
  }

  &__more {
    font-size: $fs-smaller;
    line-height: $lh-extra-small;
    color: $active;
    border-bottom: 1px solid $active;
    margin-bottom: 40px;
  }
}
</style>
