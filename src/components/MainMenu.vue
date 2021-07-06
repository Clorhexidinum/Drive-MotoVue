<template>
<nav class="mainMenu">
  <!--Тут был mobileMenuBtn-->
  <ul class="mainMenu__list">
    <li class="mainMenu__iten" v-for="category in сategories" :key="category">
      <a class="mainMenu__link" href="#">{{ category }}</a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: "MainMenu",
  data: function() {
return {
    сategories: ["Магазины", "Акции", "Доставка и оплата"],
  };
},
};
</script>

<style lang="scss">
.mainMenu {
  &__btn {
    display: none;
    padding: 0;
  }

  &__list {
    display: flex;
    align-items: center;
  }

  &__item:hover {
    color: $active;
  }

  &__item:not(:last-child) {
    padding-right: 50px;
  }
}

@media (max-width: 1100px) {
  .mainMenu__item+.mainMenu__item {
    padding: 20px;
  }
}

@media (max-width: 968px) {
  .mainMenu__list {
    display: none;
  }
}
</style>
