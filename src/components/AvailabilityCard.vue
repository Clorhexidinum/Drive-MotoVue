<template>
  <ul class="availability-card__list">
    <li class="availability-card__item availability-card__item-title">
      <div class="availability-card__address">Адрес</div>
      <div class="availability-card__avialable">Доступность</div>
    </li>
    <li v-for="item in items" class="availability-card__item" :key="item">
      <div class="availability-card__address" v-html="item.address"></div>
      <div class="availability-card__avialable">
        {{ item.avialable ? "В наличии" : "Нет в наличии" }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AvailabilityCard",
  data: function () {
    return {
      items: [
        {
          address: "Москва, ул. Науки 25",
          avialable: 1,
        },
        {
          address: "Москва, ул. Южная 134",
          avialable: 2,
        },
        {
          address: "Санкт-Петербург,<br>ул. Красная 19",
          avialable: 0,
        },
        {
          address: "Киев, ул Шевченко 167",
          avialable: 0,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.availability-card {
  &__item {
    padding: 15px 0 6px;
    border-bottom: 1px solid rgba(47, 48, 51, 0.1);
    display: flex;
    align-items: baseline;
    font-size: $fs-small;
    line-height: $lh-small;
    color: rgba(47, 48, 53, 1);
  }

  &__item-title {
    font-size: $fs-bigger;
    line-height: $lh-medium;
    color: rgba(47, 48, 53, 1);
  }

  &__address {
    width: 220px;
  }

  &__avialable {
    width: 140px;
  }
}

@media (max-width: 940px) {
  .availability-card {
    &__item {
      justify-content: space-between;
    }

    &__address,
    &__avialable {
      width: auto;
      margin-right: 0;
    }

    &__avialable {
      min-width: 107px;
      text-align: right;
    }

    &__item div {
      margin-bottom: 15px;
    }
  }
}

@media (max-width: 640px) {
  .availability-card {
    &__item {
      font-size: $fs-smaller;
    }

    &__item-title {
      font-size: $fs-small;
      font-weight: bold;
    }
  }
}
</style>
