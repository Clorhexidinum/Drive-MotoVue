<template>
    <button class="menu__btn">
        <span class="menu__btn-line"></span>
        <span class="menu__btn-line"></span>
        <span class="menu__btn-line"></span>
    </button>
</template>

<script></script>

<style lang="scss">
    @media (max-width: 968px) {
        .menu {
            &__btn {
                display: block;
                border: none;
                background-color: transparent;
                cursor: pointer;
            }

            &__btn-line {
                display: block;
                background-color: #2f3035;
                border-radius: 3px;
                height: 3px;
                width: 34px;
                margin: 8px 0;
            }
        }
    }
</style>
