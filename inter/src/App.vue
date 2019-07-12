<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html,body,#app,.home{
    width: 100%;
    height: 100%;
  }

  .home{
    display: flex;
    flex-direction: column;
  }
  
  .main{
    flex:1;
    background: #eee;
  }

  .footer{
    width: 100%;
    height: 44px;
    border-top:1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items:center;
  }

</style>
