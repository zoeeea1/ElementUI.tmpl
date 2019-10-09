<template>
    <Container>
        <div>左边菜单区域</div>
        <router-view v-cloak></router-view>
    </Container>
</template>
<script>
import http from "./utils/http";
import { Container } from "@/components";
export default {
    components: {
        Container
    },
    mounted() {
        // let $self = this;
        // http.interceptors.response.use(
        //   data => data,
        //   errors => {
        //     if (!errors.response)
        //       $self.$message({ type: "warning", message: "服务未启动!" });
        //     return errors;
        //   }
        // );
    }
};
</script>
<style lang="less">
@import url("./styles/index");
</style>