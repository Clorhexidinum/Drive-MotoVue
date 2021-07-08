<template>
    <button class="menu-btn">
        <span class="menu-btn__line"></span>
        <span class="menu-btn__line"></span>
        <span class="menu-btn__line"></span>
    </button>
</template>

<script>
    export default {
        name: "MobileMenuBtn",
    };
</script>

<style lang="scss">
    .menu-btn {
        display: none;
    }

    @media (max-width: 968px) {
        .menu-btn {
            display: block;
            border: none;
            background-color: transparent;
            cursor: pointer;

            &__line {
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
