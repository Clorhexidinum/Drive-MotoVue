<template>
    <p
        class="topdrop-title"
        :class="{ rotate: isOpened }"
        @click="isOpened = !isOpened"
    >
        {{ title }}
    </p>
    <div v-if="isOpened" class="topdrop-title__content">
        <slot> </slot>
    </div>
</template>

<script>
    export default {
        name: "TopdropTitle",
        data() {
            return {
                isOpened: false,
            };
        },

        props: ["title"],
    };
</script>

<style lang="scss">
    .topdrop-title {
        @extend %sf-semibold;
        font-size: $fs-small;
        line-height: $lh-small;
        padding-left: 26px;
        position: relative;
        cursor: pointer;

        &::before {
            content: "";
            position: absolute;
            background-image: url("/images/arrow-down.svg");
            left: 0;
            bottom: 5px;
            width: 12px;
            height: 8px;
            transform: rotate(0deg);
        }

        &__content {
            flex-wrap: wrap;
            margin-top: 10px;
        }
    }

    .rotate::before {
        transform: rotate(180deg);
    }
</style>
