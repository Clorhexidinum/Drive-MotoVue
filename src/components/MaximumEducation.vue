<template>
  <div class="container">
  <form class="form">
    <h2 class="form__title">Форма подачи заявки в отдел сервиса и качества</h2>
    <div class="form__wrapper" action="">
      <fieldset class="form__item">
        <legend class="form__subtitle">Ваш филиал<span>*</span></legend>
        <select :disabled="isOnline" class="form__select" name="branch" id="" >
          <option selected>Выберите город</option>
        </select>
        <label class="form__label form__check">
          <input type="checkbox" class="visually-hidden" @change="isOnline = !isOnline"/>
          <span>Онлайн</span>
        </label>
      </fieldset>
      <fieldset class="form__item">
        <legend class="form__subtitle">Тема обращения<span>*</span></legend>
        <label
          v-for="(theme, idx) in themes"
          :key="`radio${idx}`"
          class="form__label form__radio"
          ><input
            type="radio"
            name="theme"
            :id="`radio${idx}`"
            :value="`radio${idx}`"
            class="visually-hidden"
          /><span>{{ theme }}</span></label
        >
        <input type="text" name="themeTxt" placeholder="Другое" />
        <label for="themeTxt" class="visually-hidden"></label>
      </fieldset>
      <fieldset class="form__item">
        <legend class="form__subtitle">Описание проблемы<span v-if="required">*</span></legend>
        <textarea
          class="form__text"
          placeholder="Введите текст"
          rows="6"
          name="descr"
        ></textarea>
      </fieldset>
      <fieldset class="form__item">
        <legend class="form__subtitle">Загрузка документов</legend>
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
  </div>
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
      isOnline: false,
    };
  },
};
</script>

<style lang="scss">
$outline: #e1e1e1;
$active: #ff9767;

.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
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
  &__upload-btn,
  &__select {
    cursor: pointer;
  }

  &__label span {
    padding-left: 25px;
  }

  &__check span::before,
  &__radio span::before {
    position: absolute;
    content: "";
    width: 25px;
    height: 25px;
    padding: 5px;
    border: 1px solid black;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }

  &__check span::before {
    border-radius: 2px;
  }

  &__radio span::before {
    border-radius: 50%;
  }

  &__check input:checked + span::after {
    position: absolute;
    content: "";
    top: 5px;
    left: 4px;
    width: 17px;
    height: 17px;
    background-image: url('/images/checked-icon-black.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }


  &__radio input:checked + span:before {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 40%,
      rgba(249, 249, 249, 1) 50%
    );
  }

  &__radio:hover span::before,
  &__radio input:focus + span::before,
  &__check:hover span::before,
  &__check input:focus + span::before {
    border: 2px solid #000;
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
