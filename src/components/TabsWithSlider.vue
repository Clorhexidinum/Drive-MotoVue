<template>
    <tabs :tabs="tabs" @clicked="onTabChange">
        <div :style="{ display: 'flex' }">
   
        </div>
    </tabs>
</template>

<script>
import Tabs from './Tabs';
// import ProductItem from './ProductItem';
// import goods from '../goods.json';

export default {
    name: 'TabsWithSLider',
    components: {
        Tabs,
        // ProductItem,
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
            // goods,
        };
    },

    methods: {
        onTabChange(index, tab) {
            this.count = index;
            this.$emit("clicked", index, tab);
            console.log(tab);
        },
    },
};
</script>

<style lang="scss">
    
</style>