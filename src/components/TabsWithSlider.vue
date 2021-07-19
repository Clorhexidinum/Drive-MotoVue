<template>
    <tabs :tabs="tabs" @clicked="onTabChange">
        <div :style="{ display: 'flex' }">
            <slot ></slot>
        </div>
    </tabs>
</template>

<script>
import Tabs from './Tabs';

export default {
    name: 'TabsWithSLider',
    components: {
        Tabs,
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
        onTabChange(index) {
            this.count = index;
        },
    },
    sortGoods(arr, category) {
        return arr.filter(item => item.category == category);
    }
};
</script>

<style lang="scss">
    
</style>