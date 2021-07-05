<template>
    <a
        target="_blank"
        class="header__adress"
        href="https://yandex.ru/maps/-/CBFIIMryLB"
        >Москва, ул. Науки 25
    </a>
</template>

<script>
    export default {
        name: "adress",
    };
</script>

<style lang="scss">
    .adress {
        margin-right: 60px;
        width: 265px;
        padding-left: 30px;
        position: relative;

        &__adress::before {
            content: "";
            position: absolute;
            background-image: url("../images/adress-icon.svg");
            background-repeat: no-repeat;
            width: 30px;
            height: 40px;
            left: 0;
            top: -10px;
        }

        &__adress:hover {
            color: $active;
        }
    }

    @media (max-width: 1100px) {
        .adress {
            margin-right: 20px;
        }
    }

    @media (max-width: 640px) {
        .adress {
            display: none;
        }
    }
</style>
