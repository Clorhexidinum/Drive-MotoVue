<template>
    <div class="footer__top-item footer-form-box">
        <!--Тут был footerTitle-->
        <!--Тут был footerForm-->
    </div>
</template>

<script>
    export default {
        name: "footerFormBox",
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
