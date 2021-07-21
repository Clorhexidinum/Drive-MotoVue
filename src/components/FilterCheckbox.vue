<template>
  <div class="filter__checkbox__content-box">
    <label class="filter__checkbox__content-label">
      <input
        class="filter__checkbox visually-hidden"
        name="availability"
        type="checkbox"
      />
      <span>В наличии</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "PickupBox",
  data: function () {
    return {};
  },
  props: {
    tabs: Array,
  },
};
</script>

<style lang="scss">
</style>
