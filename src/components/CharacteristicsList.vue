<template>
  <div>
    <ul class="characteristics-list">
      <li
        v-for="item in openedList()"
        :key="item"
        class="characteristics-list__item"
      >
        <div class="characteristics-list__item-left">{{ item.key }}</div>
        <div class="characteristics-list__item-right">{{ item.value }}</div>
      </li>
    </ul>
    <a
      @click.prevent="listOpened = !listOpened"
      class="characteristics-list__more"
      href="#"
      >{{ listOpened ? "Скрыть" : "Показать все" }}</a
    >
  </div>
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
          key: "Длина",
          value: "2790",
        },
        {
          key: "Щирина",
          value: "1180",
        },
        {
          key: "Вес",
          value: "186",
        },
        {
          key: "Объем бака",
          value: "30",
        },
      ],
      listOpened: false,
    };
  },

  methods: {
    openedList() {
      if (this.listOpened) {
        return this.items;
      } else {
        return this.items.slice(0, 5);
      }
    },
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

@media (max-width: 940px) {
  .characteristics-list {
    max-width: 100%;

    &__item-right {
      text-align: right;
    }
  }
}

@media (max-width: 640px) {
  .characteristics-list__item {
    font-size: $fs-small;
  }
}
</style>
