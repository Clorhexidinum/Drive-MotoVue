<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item pagination__item--active">
        <a href="#">1</a>
      </li>
      <li class="pagination__item pagination__item--dots">
        <span>...</span>
      </li>
      <li class="pagination__item"><a href="#">11</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
};
</script>

<style lang="scss">
.pagination {
  width: 100%;
  margin-top: 70px;

  &__list {
    display: flex;
    justify-content: center;
  }

  &__item {
    padding: 6px 12px;
    border: 2px solid $transparent;
    margin: 0 4px;
    font-size: $fs-medium;
    line-height: $lh-smaller;
    color: $additional;
  }

  &__item.pagination__item--active {
    border: 2px solid $active;
    color: $active;
  }

  &__item a {
    display: block;
  }
}
@media (max-width: 440px) {
  .pagination__item {
    margin: 0;
  }
}
</style>
