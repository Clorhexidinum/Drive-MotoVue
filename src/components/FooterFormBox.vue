<template>
    <div class="footer__top-item footer-form-box">
        <h6 class="footer-title footer__topdrop">
            Подпишитесь на нашу рассылку и узнавайте о акциях быстрее
        </h6>
        <!--Тут был footerForm-->
    </div>
</template>

<script>
    export default {
        name: "FooterFormBox",
    };
</script>

<style lang="scss">
    .footer-form-box {
        width: 295px;
        margin-right: 50px;
    }

    @media (max-width: 540px) {
        .footer-form-box {
            margin: 0 auto;
            width: 290px;
            text-align: center;
        }
    }
</style>
