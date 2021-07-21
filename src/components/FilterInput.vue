<template>
  <div class="filter-input">
    <div v-for="label in labels" :key="label" class="filter-input__item">
      <label class="filter-input__label">
        <input
          class="filter-input__input visually-hidden"
          :class="type === 'checkbox' ? 'filter-input__checkbox' : '' "
          :name="name"
          :type="type"
        />
        <span>{{ label }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filterinput",
  data: function () {
    return {};
  },
  props: {
    labels: Array,
    name: String,
    type: String,
  },
};
</script>

<style lang="scss">
.filter-input {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  &__item {
    width: 50%;
    margin-bottom: 10px;
  }

  &__label {
    font-size: $fs-smaller;
    line-height: $lh-extra-small;
    cursor: pointer;
    position: relative;
  }

  &__label > span::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid $additional;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  &__label > .btn-checked__txt::before {
    width: 4em;
    height: 1.5em;
    position: absolute;
    z-index: -1;
    top: -3px;
    left: -4px;
  }

  &__label > input:not(:disabled):not(:checked) + span:hover::before {
    border-color: $active;
  }

  &__label > input:not(:disabled):active + span::before {
    background-color: $active;
    border-color: $active;
  }

  &__label > input:not(:disabled):active + span::before {
    background-color: $active;
    border-color: $active;
  }

  &__label > input:focus:not(:checked) + span::before {
    border-color: $active;
  }

  &__label > input:checked + span::before {
    border-color: $active;
    background-color: $active;
  }

  &__label > input:checked {
    color: $base;
  }

  &__label > .filter-input__checkbox:checked + span::before {
    background-image: url("/images/checked-icon.svg");
    background-size: contain;
  }

  &__label > input:disabled + span::before {
    background-color: $base;
  }
}
</style>
