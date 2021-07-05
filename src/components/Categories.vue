<template>
    <ul class="categories__inner">
        <li v-for="(value, property) in сategories">
            <a class="categories__item" href="#">
                <div class="categories__item-info">
                    <h4 class="categories__item-title">
                    {{ property }}
                     </h4>
                    <p class="categories__item-text">
                        Подробее
                    </p>
                </div>
                <div class="categories__item-img">
                    <img src="images/{{ value }}" alt="" />
                </div>
            </a>
        </li>
    <ul>
</template>

<script>
    export default {
        name: "categories",
        data: {
           сategories: [
               Квадроциклы: "categories-1.png",
               Гидроциклы: "categories-2.png",
               Катера: "categories-3.png",
               Снегоходы: "categories-4.png",
               Вездеходы: "categories-5.png",
               Двигатели: "categories-6.png",
           ],
       },
    };
</script>

<style lang="scss">
    .categories {
        &__inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        &__item {
          margin-bottom: 30px;
          border: 1px solid $additional;
          border-radius: 3px;
          width: 370px;
          display: flex;
          padding: 20px 20px 16px;
          justify-content: space-between;
          transition: all 0.3s;
        }

        &__item:hover {
          box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
        }

        &__item-title {
          @extend %barlow-bold;
          font-size: $fs-big;
          line-height: $lh-bigger;
          transition: all 0.3s;
        }

        &__item:hover &__item-title {
          color: $active;
        }

  &__item-text {
    font-size: $fs-smaller;
    line-height: $lh-extra-small;
    color: $additional;
  }

  &__item-text::after {
    content: url("../images/link-arrow.svg");
    padding-left: 2px;
  }

  &__item-info {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__item-img {
    text-align: center;
    width: 50%;
  }

  &__item-img img {
    max-width: 100%;
  }
}

@media (max-width: 1200px) {
  .categories {
    &__inner {
      justify-content: space-around;
    }
  }
}

@media (max-width: 440px) {
  .categories {
    &__item {
      padding: 20px 10px 16px;
    }
  }
}

</style>
