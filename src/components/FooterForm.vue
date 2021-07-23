<template>
    <div class="footer-form">
        <h6 class="footer-form__title">
            Подпишитесь на нашу рассылку и узнавайте о акциях быстрее
        </h6>
        <form class="footer-form__box">
            <input
                class="footer-form__input"
                type="text"
                placeholder="Введите ваш e-mail:"
            />
            <button class="footer-form__btn btn" type="submit">
                Отправить
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "FooterForm",
    };
</script>

<style lang="scss">
    .footer-form {
        width: 320px;

        &__box {
            margin-top: 34px;
            display: flex;
            justify-content: space-between;
        }

        &__title {
            @extend %sf-bold;
            font-size: $fs-smaller;
            line-height: $lh-extra-small;
            color: $main-text;
        }

        &__input {
            background-color: $background;
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
    }

    // @media (max-width: 720px) {
    //     .footer-form {
    //         width: 100%;
    //     }
    // }

    @media (max-width: 540px) {
        .footer-form {
            margin: 0 auto;
            width: 290px;
            text-align: center;

            &__title {
                font-weight: 500;
                font-size: $fs-smaller;
                line-height: $lh-small;
                color: #7f7f7f;
                padding: 15px 0;
            }

            &__input {
            width: 80%;
        }
        }
    }
</style>
