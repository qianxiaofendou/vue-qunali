<template>
    <div id="app">
        <!-- exclude 是设置不缓存的组件 -->
        <keep-alive exclude="Detail,City">
            <router-view/>
        </keep-alive>
        <!-- <router-view v-if="!$route.meta.keepAlive"/> -->
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style></style>
