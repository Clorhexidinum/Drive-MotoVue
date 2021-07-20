<template>
  <ul class="pickup__list">
    <li class="pickup__item pickup__item-title">
      <div class="pickup__address">Адрес</div>
      <div class="pickup__workhours">Режим работы</div>
      <div class="pickup__avialable">Доступно</div>
      <div class="pickup__num">Количество</div>
      <div class="pickup__btn btn"></div>
    </li>
    <li v-for="item in items" class="pickup__item" :key="item">
      <div class="pickup__address" v-html="item.address"></div>
      <div class="pickup__workhours">
        <div class="pickup__workhours-columns">
          <span>пн-сб: </span><span>08:00-19:00</span>
        </div>
        <div class="pickup__workhours-columns">
          <span>вс: </span><span>09:00-17:00</span>
        </div>
      </div>
      <div class="pickup__avialable">{{ item.avialable ? 'В наличии' : 'Нет в наличии' }}</div>
      <div class="pickup__num">{{ item.avialable }}</div>
      <div class="pickup__btn btn">
        <button :class="item.avialable ? 'btn' : 'disable'" class="pickup__button btn" type="submit">купить</button>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "PickupBox",
        data: function() {
return {
            items: [{
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
            }],
        };
},
    };
</script>

<style lang="scss">
.pickup {
  &__item {
    padding: 20px 0;
    border-bottom: 1px solid rgba(47,48,51,0.1);
    display: flex;
    align-items: baseline;
    font-size: $fs-small;
    line-height: $lh-small;
    color: rgba(47, 48, 53, .7);
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

  &__workhours {
    width: 157px;
    margin-right: 96px;
  }

  &__workhours-columns {
    display: flex;
    justify-content: space-between;
  }

  &__avialable {
    width: 140px;
    margin-right: 60px;
  }

  &__num {
    width: 104px;
  }

  &__btn {
    margin-left: auto;
  }

  &__button {
    font-size: $fs-smaller;
    line-height: $lh-extra-small;
    letter-spacing: 0.12em;
    padding: 9px 40px;
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
