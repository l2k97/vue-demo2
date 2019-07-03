<template>
    <div id="appContent">
        <mt-header fixed title="我的商城网站"></mt-header>

        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">消息</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">通讯录</span>
            </a>
            <a class="mui-tab-item" >
                <router-link to="/account">
                    <span class="mui-icon mui-icon-gear"></span>
                    <span class="mui-tab-label">设置</span>
                </router-link>
            </a>
        </nav>
        <div class="mui-content">
            <div id="tabbar" class="mui-control-content mui-active">
                <div class="title">这是div模式选项卡中的第1个子页面.</div>
                <div class="title">何谓div模式的选项卡？
                    其实就是通过DIV模拟一个独立页面，通过DIV的显示、隐藏模拟不同页面的切换，典型的SPA模式；</div>
                <div class="title">
                    这种模式适合简单业务系统，因为每个选项卡内容要写在一个DIV中，
                    若逻辑复杂，会导致当前页面DOM结构繁杂，造成webview响应缓慢，甚至崩溃；
                    因此若系统较复杂，需要下拉刷新等操作，推荐使用webview模式的选项卡；</div>
            </div>
            <div id="tabbar-with-chat" class="mui-control-content">
                <div class="title">这是div模式选项卡中的第2个子页面，该页面展示一个消息列表</div>

                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 1</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 2</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 3</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 4</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 5</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 6</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 7</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 8</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 9</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 10</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 11</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 12</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 13</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 14</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 15</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 16</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 17</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 18</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 19</a></li>
                    <li class="mui-table-view-cell"><a href="" class="mui-navigate-right">Item 20</a></li>
                </ul>
            </div>


        </div>




        <router-view></router-view>
    </div>


</template>

<script>
    // Indicator.open();
    import {Indicator} from 'mint-ui';

    export default {
        name: "app",
        data() {
            return {}
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