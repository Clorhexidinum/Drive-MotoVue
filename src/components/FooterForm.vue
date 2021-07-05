<template>
    <form class="footer-form">
        <input
            class="footer-form__input"
            type="text"
            placeholder="Введите ваш e-mail:"
        />
        <button class="footer-form__btn btn" type="submit">Отправить</button>
    </form>
</template>

<script>
    export default {
        name: "FooterForm",
    };
</script>

<style lang="scss">
    .footer-form {
        margin-top: 34px;
        display: flex;
        justify-content: space-between;

        &__input {
            background-color: $base;
            border: none;
            font-size: $fs-smaller;
            line-height: $lh-extra-small;
            padding: 0 12px;
        }

        &__input::placeholder {
            color: $additional;
        }

        &__btn {
            @extend %sf-semibold;
            padding: 10px 16px;
            font-size: $fs-extra-small;
            line-height: $lh-extra-smaller;
            letter-spacing: 0.12em;
        }

        &__lewsletter {
            width: 295px;
            margin-right: 50px;
        }
    }
</style>
