<template>
  <div class="tabs">
    <div class="tabs__list">
      <a
        class="tabs__item"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ activeTab: selectedTab === index }"
        @click.prevent="selectedTab = index"
        >{{ tab }}</a
      >
    </div>
    <div
      class="tabs__content"
      v-for="(content, index) in tabs"
      v-show="selectedTab === index"
      :key="index"
    >
    <slot>{{index}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",

  data: function () {
    return {
      selectedTab: 0,
    };
  },

  props: {
    tabs: Array,
  },
};
</script>

<style lang="scss">
.tabs {
  &__list {
    margin-bottom: 25px;
    display: flex;
    overflow-x: auto;
  }

  &__item + &__item {
    margin-left: 50px;
  }

  &__item {
    padding-bottom: 10px;
    cursor: pointer;
    white-space: nowrap;
  }
}

.activeTab {
  border-bottom: 2px solid $active;
}
</style>
