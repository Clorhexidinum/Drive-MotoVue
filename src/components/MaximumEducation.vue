<template>
  <form class="form">
    <h2 class="form__title">Форма подачи заявки в отдел сервиса и качества</h2>
    <div class="form__wrapper" action="">
      <fieldset class="form__item">
        <p class="form__subtitle">Ваш филиал<span>*</span></p>
        <select class="form__select" name="branch" id="">
          <option selected>Выберите город</option>
        </select>
        <label class="form__label form__check">
          <input type="checkbox" class="visually-hidden"/>
          <span>Онлайн</span>
        </label>
      </fieldset>
      <fieldset class="form__item">
        <p class="form__subtitle">Тема обращения<span>*</span></p>
        <label
          v-for="(theme, idx) in themes"
          :key="`radio${idx}`"
          class="form__label form__radio"
          ><input
            type="radio"
            name="theme"
            :id="`radio${idx}`"
            class="visually-hidden"
          /><span>{{ theme }}</span></label
        >
        <input type="text" name="themeTxt" placeholder="Другое" />
        <label for="themeTxt" class="visually-hidden"></label>
      </fieldset>
      <fieldset class="form__item">
        <p class="form__subtitle">Описание проблемы<span>*</span></p>
        <textarea class="form__text" placeholder="Введите текст" rows="6" name="descr"></textarea>
      </fieldset>
      <fieldset class="form__item">
        <p class="form__subtitle">Загрузка документов</p>
        <p class="form__upload-descr">
          Приложите, пожалуйста, полноэкранный скриншот. Это поможет быстрее
          решить проблему.
        </p>
        <label for="file" class="visually-hidden"></label>
          <input
            class="form__upload-btn"
            type="file"
            id="file"
            name="file"
            multiple
            placeholder="Выберете файл"
        />
      </fieldset>
      <div class="form__item">
        <button class="form__btn" type="submit">отправить</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "MaximumEducation",

  data() {
    return {
      themes: [
        "Недоволен качеством услуг",
        "Расторжение договора",
        "Не приходит письмо активации на почту",
        "Не работает личный кабинет",
      ],
    };
  },
};
</script>

<style lang="scss">
$outline: #e1e1e1;
$active: #FF9767;

.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

.form {
  &__wrapper {
    border: 1px solid $outline;
    border-radius: 2px;
    padding: 36px;
  }

  &__item {
    border: none;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
  }

  &__item label {
    display: block;
  }

  &__title {
    margin-bottom: 15px;
  }

  &__subtitle {
    margin-bottom: 15px;
  }

  &__subtitle span {
    color: red;
    padding-left: 2px;
  }

  &__select {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid $outline;
    max-width: 285px;
    width: 100%;
  }

  &__label {
    margin-bottom: 5px;
    position: relative;
  }

  &__check,
  &__radio,
  &__label span,
  &__btn,
  &__upload-btn {
    cursor: pointer;
  }

  &__label span {
    padding-left: 25px;
  }

  &__radio span::before {
    position: absolute;
    content: "";
    width: 25px;
    height: 25px;
    padding: 5px;
    border: 2px solid black;
    border-radius: 50%;
    top: 0;
    left: 0;
  }

  &__text {
    width: 100%;
    resize: none;
    padding: 10px;
  }

  &__upload-descr {
    max-width: 485px;
    margin-bottom: 10px;
  }

  &__btn {
    text-transform: uppercase;
    padding: 5px;
    background-color: $active;
    color: #fff;
    border: none;
  }
}
</style>
