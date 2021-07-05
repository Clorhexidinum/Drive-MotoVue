<template>
    <div class="pagination">
        <ul class="pagination__list">
            <li class="pagination__item pagination__item--active">
                <a href="#">1</a>
            </li>
            <li class="pagination__item pagination__item--dots">
                <span>...</span>
            </li>
            <li class="pagination__item"><a href="#">11</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
    };
</script>

<style lang="scss">
    @media (max-width: 440px) {
        .pagination__item {
            margin: 0;
        }
    }
</style>
