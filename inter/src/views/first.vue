<template>
    <div>
        <div class="swiper-container" ref="wrapper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    1
                </div>
                 <div class="swiper-slide">
                    2
                </div>
                 <div class="swiper-slide">
                    3
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper';

    export default {
        mounted(){
            console.log(this.$refs.wrapper);
            new Swiper(this.$refs.wrapper,{
                loop:true
            })
        }
    }
</script>

<style lang="scss" scoped>
    .swiper-wrapper,.swiper-container,.swiper-slide{
        width: 100%;
        height: 200px;
    }
    .swiper-slide{
        background: lightgreen;
        color:#fff;
        text-align: center;
        line-height: 200px;
        font-size: 30px;
        font-weight: bold;
    }
</style>