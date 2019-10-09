<template>
    <div class="bs-view">
        内容区域
    </div>
</template>
<script> 
export default {
    data() {
        return {
            formInline: {},
            filters: {
                Page: 1,
                size: 10
            }
        };
    },
    mounted() {
        this.list();
    },
    methods: {
        async list() {
            try {
                let rs = await this.$api.prod.getList(this.filters);
            } catch (error) {

            }
        }
    }
};
</script>
