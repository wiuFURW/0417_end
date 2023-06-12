<template>
  <section class="person">
    <HeaderTop title="我的"/>
    <section class="person-number ">
      <router-link to="/login">
        <div class="person_image">
          <i class="iconfont icon-wode"></i>
        </div>
      <div class="user-info">
        <p class="user-info-top">登录/注册</p>
        <p>
          <span class="user-icon">
              <i class="iconfont icon-shouji1 "></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
        </p>
      </div>
      <span class="arrow">
          <i class="iconfont icon-xiangyoujiantou"></i>
      </span>
      </router-link>

    </section>

     <section class="person_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
     <section class="person_my_order border-1px">
      <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont icon-dingdan1"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <i class="iconfont icon-xiangyoujiantou"></i>
          </span>
        </div>
      </a>
      <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont icon-icon"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <i class="iconfont icon-xiangyoujiantou"></i>
          </span>
        </div>
      </a>

      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-huiyuan"></i>
        </span>
        <div class="my_order_div">
          <span>外卖会员卡</span>
          <span class="my_order_icon">
            <i class="iconfont icon-xiangyoujiantou"></i>
          </span>
        </div>
      </a>
    </section>
       <section class="person_my_order border-1px">
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-_fuwu"></i>
        </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
            <i class="iconfont icon-xiangyoujiantou"></i>
          </span>
        </div>
      </a>
    </section>
  </section>
</template>
<!-- <template>
  <div>
    person
  </div>
</template> -->

<script>
//  import {mapState} from 'vuex'
// import Cookies from 'js-cookie'
// import {MessageBox} from 'mint-ui'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  // computed: {
  //   ...mapState(['userInfo'])
  // },
  // methods: {
  //   logout () {
  //     MessageBox.confirm('确定退出登陆吗?').then(action => {
  //       this.$store.dispatch('logout')
  //     });
  //   }
  // },

  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.person 
  width 100%
  overflow hidden
  .person-number
    border-top 1.5px solid #f4f2f2
    height 100px
    margin-top 45.5px
    background #f4bdd4
    
    .person-link
      clearFix()
      position relative
      display block
      background #f4bdd4
      padding 20px 10px
    .person_image
        
        float left
        width 60px
        height 60px
        margin-top 15px
        margin-left 5px
        border-radius 60%
        overflow hidden
        vertical-align top
      .icon-wode
        background #f0f1f1
        font-size 62px
      .user-info
        float left
        margin-top 8px
        margin-left 15px
        p
          margin-top 10px
          font-size 18px
          color #fff
          &.user-info-top
            padding-bottom 8px
          .user-icon
            display inline-block
            margin-left -8px
            width 15px
            height 15px
            .icon-shouji1
              font-size 20px
              vertical-align text-top
          .icon-mobile-number
            font-size 14px
            color #fff
      .arrow
        position absolute
        width 12px
        height 12px
        right 15px
        margin-top -180px
        top 40%
        .icon-xiangyoujiantou
          color #fff
          font-size 5px
  .person_info_data
    bottom-border-1px(#e4e4e4)
    width 100%
    background #fff
    overflow hidden
    .info_data_list
      clearFix()
      .info_data_link
        float left
        width 33%
        text-align center
        border-right 1px solid #f1f1f1
        .info_data_top
          display block
          width 100%
          font-size 14px
          color #333
          padding 15px 5px 10px
          span
            display inline-block
            font-size 30px
            color #f90
            font-weight 700
            line-height 30px
        .info_data_bottom
          display inline-block
          font-size 14px
          color #666
          font-weight 400
          padding-bottom 10px
      .info_data_link:nth-of-type(2)
        .info_data_top
          span
            color #ff5f3e
      .info_data_link:nth-of-type(3)
        border 0
        .info_data_top
          span
            color #6ac20b
  .person_my_order
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .my_order
      display flex
      align-items center
      padding-left 15px
      >span
        display flex
        align-items center
        width 20px
        height 20px
        >.iconfont
          margin-left -10px
          font-size 20px
        .icon-dingdan1
          color #eaab98
        .icon-icon
          color #ff5f3e
        .icon-huiyuan
         color #f90
        .icon-_fuwu
          color #706ede
      .my_order_div
        width 100%
        border-bottom 1px solid #f1f1f1
        padding 18px 10px 18px 0
        font-size 16px
        color #333
        display flex
        justify-content space-between
        span
          display inline-block
        .my_order_icon
          float right
          width 10px
          height 10px
          .icon-xiangyoujiantou
            color #bbb
            font-size 10px
    .logout
      width 100%
</style>
