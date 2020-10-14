<template>
<div>
  <!-- ******** banner开始 ******** -->
  <div class="banner">
    <!-- ～～～轮播图开始～～～ -->
    <img src="../../public/images/banner1.jpg" alt="">
    <!-- ～～～轮播图结束～～～ -->

    <!-- ～～～侧栏二级菜单开始～～～ -->
    <div class="banner_area">
        <div class="banner_list">
          <ul>
            <li>
              <table></table>
              <div class="banner_ctiy">
                <div>热门出发地</div>
                <div class="em">
                  <em>北京</em>
                  <em>上海</em>
                  <em>广州</em>
                  <em>西南</em>
                  <em>东北</em>
                </div>
              </div>
            </li>
          </ul>
      </div>
    </div>
    <!-- ～～～侧栏二级菜单结束～～～ -->
  </div>
  <!-- ******** banner结束 ******** -->
</div>
</template>
<style calss="banner">
  /* 版心 */
  .banner_area{
    width: 1152px;
    background: salmon;
    
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -576px;
  }

   /* <!-- banner --> */
  .banner{
    position: relative;
    height: 388px;
    background-color:salmon;
  }

  /* <!-- 轮播图 --> */
  .banner>img{
    width: 100%;
  }

  /* <!-- 侧栏二级菜单 --> */
  .banner_list{
    width: 296px;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 18px;
    color: #fff;
  }

  .banner_ctiy{
    height: 64.6px;
    margin-left: 52px;
    box-sizing: border-box;
  }
  .banner_ctiy>div{
    padding-top: 14px;
  }
  /* 二级菜单图标 */
  .banner_ctiy::before{
    content:"";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -14px;
    background: url(../../public/images/icons.png) -29px -399px no-repeat;
    width:22px;
    height:18px;
  }
  
   .banner_ctiy .em{
    font-size: 14px;
  }

</style>