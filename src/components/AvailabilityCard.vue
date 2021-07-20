<template>
  <ul class="availability-card__list">
    <li class="availability-card__item availability-card__item-title">
      <div class="availability-card__address">Адрес</div>
      <div class="availability-card__avialable">Доступно</div>
      <div class="availability-card__btn btn"></div>
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
.availability-card
 {
  &__item {
    padding: 15px 0 6px;;
    border-bottom: 1px solid rgba(47, 48, 51, 0.1);
    display: flex;
    align-items: baseline;
    font-size: $fs-small;
    line-height: $lh-small;
    color: rgba(47, 48, 53, 0.7);
  }

  &__item-title {
    font-size: $fs-bigger;
    line-height: $lh-medium;
    color: rgba(47, 48, 53, 1);
  }

  &__address {
    width: 220px;
    margin-right: 80px;
  }

  &__avialable {
    width: 140px;
    margin-right: 60px;
  }
}

@media (max-width: 940px) {
  .pickup {
    display: flex;
    overflow-x: scroll;

    &__item {
      display: block;
    }

    &__item div {
      margin-bottom: 15px;
    }

    &__item-title {
      display: none;
    }
  }
}
</style>
