<template>
    <p class="title-drop" @click="toggleContent">Наличие</p>
    <div v-if="isOpened" class="title-drop__content"></div>
</template>

<script>
    export default {
        name: "TitleDrop",
        isOpened: false,

        methods: {
            toggleContent() {
                isOpened = !isOpened;
            },
        },
    };
</script>

<style lang="scss">
    .title-drop {
        @extend %sf-semibold;
        font-size: $fs-small;
        line-height: $lh-small;
        padding-left: 26px;
        position: relative;
        cursor: pointer;

        &::before {
            content: "";
            position: absolute;
            background-image: url("images/arrow-down.svg");
            left: 0;
            bottom: 5px;
            width: 12px;
            height: 8px;
            transform: rotate(0deg);
        }

        &--active::before {
            transform: rotate(180deg);
        }

        &__content {
            display: none;
            flex-wrap: wrap;
            margin-top: 10px;
        }

        &__-active + .title-drop__content {
            display: flex;
        }
    }
</style>
