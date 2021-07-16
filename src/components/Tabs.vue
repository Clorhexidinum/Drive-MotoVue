<template>
  <div class="tabs">
    <div class="tabs__list">
      <a
        class="tabs__item"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ activeTab: selectedTab === index }"
        @click.prevent="click(index, tab)"
        >{{ tab }}</a
      >
      <slot></slot>
    </div>
    
  </div>
</template>

<script>
import goods from "../goods.json";

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

  methods: {
    click(index, tab) {
      this.selectedTab = index;
      this.$emit("clicked", index, tab);
    },
  },

  sortGoods() {
    return goods.filter((item) => item.category == this.selectedCategory);
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
