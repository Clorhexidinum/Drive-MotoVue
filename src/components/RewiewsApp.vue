<template>
  <div class="rewiews__box">
    <div class="rewiews__item">
      <div class="rewiews__item-top">
        <p class="rewiews__name">Иван</p>
        <star-rating
          v-model:rating="rating"
          :show-rating="false"
          :star-size="20"
          :read-only="true"
          :active-color="'#1c62cd'"
          :increment="0.5"
          :rating="4"
        ></star-rating>
      </div>
      <div class="rewiews__item-bottom">
        <p class="rewiews__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="rewiews__form">
      <form>
        <div class="rewiews__form-top">
          <label>
            Имя
            <input type="text" />
          </label>
          <label>
            Адрес электронной почты
            <input type="email" />
          </label>
          <label>
            Ваша оценка
            <star-rating
              v-model:rating="rating"
              :show-rating="false"
              :star-size="20"
              :active-color="'#1c62cd'"
              :increment="0.5"
              :rating="4"
            ></star-rating>
          </label>
        </div>
        <div class="rewiews__form-bottom">
          <label>
            Текст отзыва
            <textarea type="email" placeholder="Опишите ваши впечатления о товаре." rows="5"></textarea>
          </label>
        </div>
        <button class="rewiews__btn btn">Отправить отзыв</button>
      </form>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "RewiewsApp",
  components: {
    StarRating,
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">
.rewiews {
  width: 100%;

  &__item,
  &__form {
    border: 1px solid $additional;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  &__item-top {
    display: flex;
  }

  &__form form{
    width: 100%;
  }

  &__form-top {
    display: flex;
    margin-bottom: 15px;
    justify-content: space-between;
  }

  &__name {
    margin-right: 15px;
  }

  &__text {
    font-size: $fs-small;
  }

  &__form-top {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 15px;
  }

  &__form-top label {
    display: flex;
    margin-right: 15px;
    font-size: $fs-small;
    align-items: baseline;
  }

  &__form-top label input,
  &__form-top label .vue-star-rating {
    margin-left: 10px;
  }

  &__form-bottom label {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }

  &__form-bottom label {
    font-size: $fs-small;
  }

  &__form-bottom label textarea{
    width: 100%;
    margin-top: 10px;
    resize: none;
  }

&__btn {
  padding: 10px 20px;
}

}

@media (max-width: 1140px) {
  .rewiews {
    &__form-top {
      flex-wrap: wrap;
    }
  }
}

@media (max-width: 1000px) {
  .rewiews {
    &__form-top label {
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-right: 0;
    }
    
    &__form-top label input,
    &__form-top label .vue-star-rating {
      justify-content: space-between;
      
  }

  &__form-top label input {
    margin-bottom: 15px;
  }
  }
}

@media (max-width: 615px) {
  .rewiews {
    &__form-top label {
      flex-wrap: wrap;
    }
      &__form-top label input {
      margin: 0 0 15px;
      width: 100%;
  }

  &__btn {
    width: 100%;
  }
  }
}
</style>
