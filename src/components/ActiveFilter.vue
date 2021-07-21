<template>
  <div class="active-filter mobile-overflow">
    <button v-for="(item, idx) in activeFilter" :key="item" @click.prevent="removeItem(idx)" class="active-filter__btn">{{ item }}</button>
  </div>
</template>

<script>
export default {
  name: "ActiveFilter",
  data: function () {
    return {};
  },

  props: {
    activeFilter: Array,
  },

  methods: {
    removeItem(idx) {
      this.$emit("removeActiveFilter", idx);
    }
  }
};
</script>

<style lang="scss">
  .active-filter__btn {
    font-size: $fs-smaller;
    line-height: $lh-extra-small;
    opacity: 0.7;
    border: none;
    background: $base;
    border-radius: 3px;
    padding: 5px 22px;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      background: $active;
      color: $base;
      opacity: 1;
    }
  }
</style>
