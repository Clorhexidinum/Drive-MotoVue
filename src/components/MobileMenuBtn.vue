<template>
    <button class="menu__btn">
        <span class="menu__btn-line"></span>
    </button>
</template>

<script>
    export default {
        name: "MobileMenuBtn",
    };
</script>

<style lang="scss">
    .menu__btn {
        display: none;
    }

    @media (max-width: 968px) {
        .menu {
            &__btn {
                display: block;
                border: none;
                background-color: transparent;
                cursor: pointer;
                position: relative;
                width: 46px;
                height: 43px;
            }

            &__btn-line {
                display: block;
                background-color: #2f3035;
                border-radius: 3px;
                height: 3px;
                width: 34px;
                position: absolute;
                left: 6px;
                top: 20px;
                transition: all 0.3s;
            }

            &__btn-line:before {
                content: "";
                position: absolute;
                background-color: #2f3035;
                height: 3px;
                width: 34px;
                left: 0;
                top: -14px;
            }

            &__btn-line:after {
                content: "";
                position: absolute;
                background-color: #2f3035;
                height: 3px;
                width: 34px;
                left: 0;
                top: 14px;
            }
        }

        .active .menu__btn-line {
            transform: rotate(45deg);
        }

        .active .menu__btn-line:before {
            transform: rotate(90deg);
            top: 0px;
        }

        .active .menu__btn-line::after {
            display: none;
        }
    }
</style>
