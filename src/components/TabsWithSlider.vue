<template>
    <tabs :tabs="tabs" @clicked="onTabChange">
        <div :style="{ display: 'flex' }">
            <product-item v-bind="good" v-for="(good, idx) in goods.slice(0, 5)" :key="idx" />
        </div>
    </tabs>
</template>

<script>
import Tabs from './Tabs';
import ProductItem from './ProductItem';
import goods from '../goods.json';

export default {
    name: 'TabsWithSLider',
    components: {
        Tabs,
        ProductItem,
    },
    props: {
        tabs: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            count: 0,
            goods,
        };
    },

    methods: {
        onTabChange(index) {
            this.count = index;
        },
    },
    created() {
        console.log(goods);
    }
};
</script>

<style lang="scss">
    
</style>