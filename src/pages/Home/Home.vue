<template>
    <section class="home">
      <!--首页头部-->
      <HeaderTop title="甜腻九年">
        <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="header_login" slot="right">
          <span class="header_login_text">登录|注册</span>
        </span>
      </HeaderTop>
      <!--首页导航-->
      <nav class="home_nav border-1px">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
            </div>    
            <div class="swiper-slide">
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
              <a href="javascript:" class="link_to_food" >
                <div class="food_container">
                  <img src="./img/nav/1.jpg">
                </div>
                <span>甜品</span>
              </a>
           
            </div>          
          </div>
          <!-- 分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--首页附近商家-->
      <div class="home_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-gengduo"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList/>
      </div>
    </section>
  </template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper.min.css'

import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';
import ShopList from '../../components/ShopList/ShopList.vue';

export default {
components:{
    HeaderTop,
    ShopList
},
mounted(){
    //创建一个Swiper实例对象 来实现轮播
    new Swiper('.swiper-container',{
    // direction: 'vertical',//垂直切换选项
    loop:true,  //可以循环播放
    //分页器
    pagination:{
      el:'swiper-pagination'
     }
    })
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'  //引入
  .home  //首页
    width 100%
    .home_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .home_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>