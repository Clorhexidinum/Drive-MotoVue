<template>
    <a class="banner-promo" href="#">
        ]<picture>
            <source
                media="(max-width: 320px)"
                srcset="images/content/banner-mobile.jpg"
            />
            <img src="images/content/banner.jpg" alt="" />
        </picture>
    </a>
</template>

<script>
    export default {
        name: "MainBanner",
    };
</script>

<style lang="scss">
    .banner-promo {
        margin-bottom: 80px;
    }

    @media (max-width: 1200px) {
        .banner-promo img {
            width: 100%;
            object-fit: cover;
        }
    }
</style>
