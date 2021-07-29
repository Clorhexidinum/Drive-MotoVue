<template>
  <div class="rewiews__box">
    <div class="rewiews__item">
      <div class="rewiews__item-top">
        <p class="rewiews">Иван</p>
        <star-rating
          v-model:rating="rating"
          :show-rating="false"
          :star-size="15"
          :read-only="true"
          :active-color="'#1c62cd'"
          :increment="0.5"
        ></star-rating>
      </div>
      <div class="rewiews__item-bottom">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
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
          </div>
          <div class="rewiews__form-bottom">
            <label>
              Текст отзыва
              <textarea type="email"></textarea>
            </label>
          </div>
          <button class="rewiews__btn btn">Отправить отзыв</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RewiewsApp",
  data: function () {
    return {};
  },
}
</script>

<style lang="scss">
</style>
