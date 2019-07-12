<template>
    <div class="home">
        <div class="main">
         <router-view></router-view>
        </div>
        <myFooter/>
    </div>
</template>

<script>
import myFooter from '../components/footer';
    export default {
        components:{
            myFooter
        }
    }
</script>

<style lang="scss" scoped>

</style>