<template>
  <div class="search-tabs">
    <div class="search-tabs__wrapper">
      <div class="search-tabs__list">
        <a
          class="search-tabs__item"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ activeTabSearch: selectedTab === index }"
          @click.prevent="selectedTab = index"
          >{{ tab }}</a
        >
      </div>
    </div>
    <div
      class="search-tabs__content"
      v-for="(content, index) in contents"
      v-show="selectedTab === index"
      :key="index"
    >
      <form class="search-tabs__content-form">
        <input
          class="search-tabs__content-input"
          type="text"
          :placeholder="content"
        />
        <button class="search-tabs__content-btn btn" type="submit">
          искать
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchTabs",

  data: function () {
    return {
      selectedTab: 0,
      tabs: ["Поиск по номеру", "Поиск по марке", "Поиск по названию товара"],
      contents: ["Введите номер", "Введите марку", "Введите название товара"],
    };
  },
};
</script>

<style lang="scss">
.search-tabs {
  &__wrapper {
    overflow-x: auto;
  }

  &__list {
    margin-bottom: 25px;
    width: 740px;
  }

  &__item {
    padding: 11px 26px 12px;
    cursor: pointer;

    &.activeTabSearch {
      background: $base;
      border-radius: 5px;
      @extend %sf-bold;
    }
  }

  &__content-form {
    display: flex;
  }

  &__content-input {
    background: $base;
    border-radius: 3px;
    border: none;
    padding: 5px 20px;
    font-size: $fs-small;
    line-height: $lh-small;
    width: 100%;
  }

  &__content-input::placeholder {
    color: #656464;
  }

  &__content-btn {
    @extend %sf-bold;
    font-weight: bold;
    font-size: $fs-smaller;
    line-height: $lh-extra-small;
    letter-spacing: 0.12em;
    padding: 17px 41px;
    margin-left: -3px;
  }
}

@media (max-width: 600px) {
.search-tabs__content-btn {
    padding: 17px 19px;
  }
}
</style>
