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
            <li class="banner_icon">
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

            <li class="banner_icon">
              <div class="banner_ctiy">
                <div>港澳台 国内</div>
                <div class="em">
                  <em>北京</em>
                  <em>上海</em>
                  <em>广州</em>
                  <em>西南</em>
                  <em>东北</em>
                </div>
              </div>
            </li>

            <li>
              <div class="banner_ctiy">
                <div>日本 韩国</div>
                <div class="em">
                  <em>北京</em>
                  <em>上海</em>
                  <em>广州</em>
                  <em>西南</em>
                  <em>东北</em>
                </div>
              </div>
            </li>

            <li>
              <div class="banner_ctiy">
                <div>东南亚 南亚</div>
                <div class="em">
                  <em>北京</em>
                  <em>上海</em>
                  <em>广州</em>
                  <em>西南</em>
                  <em>东北</em>
                </div>
              </div>
            </li>

            <li>
              <div class="banner_ctiy">
                <div>欧洲 美洲</div>
                <div class="em">
                  <em>北京</em>
                  <em>上海</em>
                  <em>广州</em>
                  <em>西南</em>
                  <em>东北</em>
                </div>
              </div>
            </li>

            <li>
              <div class="banner_ctiy">
                <div>澳新</div>
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
    /* background: salmon; */
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
    height: 65.7px;
    margin-left: 52px;
    box-sizing: border-box;
  }
  .banner_ctiy>div:first-child{
    padding: 8px 0 3px 0;
  }
  .em>em{
    padding-right: 4px;
  }
    .banner_ctiy .em{
    font-size: 14px;
  }

  /* 二级菜单图标 */
  .banner_list>ul>li{
    position: relative;
  }
  .banner_ctiy::before{
    content:"";
    display: block;
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -12.3px;
    width:22px;
    height:21px;
     background: url(../../public/images/icons.png)  -29px -399px no-repeat;
  }
  /* .banner_list>ul>li:first-child::before, .banner_list>ul>li:nth-child(2)::before{
    content:"";
    display: inline-block;
    position: absolute;
    top: 9%;
    left: 15px;
    margin-top: -14px;
    background: url(../../public/images/icons.png) -29px -399px no-repeat;
    width:22px;
    height:18px;
    
  } */
  .banner_list>ul>li:nth-child(2)>div::before{
    background-position: -28px -305px;
  }
  .banner_list>ul>li:nth-child(3)>div::before{
    background-position: -28px -348px;
  }
   .banner_list>ul>li:nth-child(4)>div::before{
    background-position: -28px -217px;
  }
   .banner_list>ul>li:nth-child(5)>div::before{
    background-position: -28px -171px;
  }
   .banner_list>ul>li:nth-child(6)>div::before{
    background-position: -28px -261px;
  }
  /* 鼠标移入样式 */
    .banner_list>ul>li:hover{
    background:red;
  }


</style>