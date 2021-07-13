<template>
    <div class="policy">
        <a class="policy__link" v-for="item in items" :key="item" href="#">{{
            item
        }}</a>
    </div>
</template>

<script>
    export default {
        name: "PolicyBox",
        data: function () {
            return {
                items: [
                    "Договор оферты",
                    "Политика обработки персональных данных",
                ],
            };
        },
    };
</script>

<style lang="scss">
    .policy {
        display: flex;
        justify-content: center;
        padding: 46px 0 22px;

        &__link {
            font-size: 10px;
            line-height: 12px;
            color: #48494d;
            margin: 0 40px;
        }
    }

    @media (max-width: 540px) {
        .policy {
            flex-direction: column;
            align-items: start;

            &__link {
                margin: 12px 0;
            }
        }
    }
</style>
