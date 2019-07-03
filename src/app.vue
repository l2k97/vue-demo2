<template>
    <div id="appContent">
        <mt-header fixed title="我的商城网站"></mt-header>

        <nav class="mui-bar mui-bar-tab">
            <router-link to="/home" class="mui-tab-item " >
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to="/member" class="mui-tab-item" >
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link to="/shopCart" class="mui-tab-item" >
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge" >{{shopum}}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link to="/search" class="mui-tab-item" >
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
        <div class="mui-content">
        <router-view></router-view>
    </div>
    </div>

</template>

<script>
    // Indicator.open();
    import {Indicator} from 'mint-ui';

    export default {
        name: "app",
        data() {
            return {
                shopum:0
            }
        },
        methods:
            {
                testClick() {
                    Indicator.open();
                    setTimeout(() => Indicator.close(), 2000)
                }
            }
    }
</script>

<style scoped>



</style>