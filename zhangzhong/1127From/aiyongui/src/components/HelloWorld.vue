<template>
  <div class="hello">
    <el-row class="tac">
      <el-col :span="12">
        <div class="box">
          <div class="img"></div>
          <img src="logo" alt="" />
        </div>

        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          text-color="#fff"
        >
          <el-submenu index="1" class="list">
            <template slot="title">
           <i class="el-icon-tickets"></i>
              <span>任务中心</span>
            </template>
          </el-submenu>
          <el-menu-item index="2" class="list">
            <i class="el-icon-menu"></i>
            <span slot="title">结算中心</span>
          </el-menu-item>
          <el-menu-item index="3" class="list">
            <i class="el-icon-printer"></i>
            <span slot="title">开票管理</span>
          </el-menu-item>
          <el-menu-item index="4"  class="list">
            <i class="el-icon-s-custom"></i>
            <span slot="title">筑创星管理</span>
          </el-menu-item>
           <el-menu-item index="5"  class="list">
            <i class="el-icon-user"></i>
            <span slot="title">用户中心</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>


<style scoped lang="scss">
.hello {
 flex: 0 0 auto;
  width: 256px;
  height: 100%;
  background-color: #001529;
  overflow: hidden;
}
.box{
  width: 256px;
  height: 64px;
  background-color: #001529;
  padding: 10px 20px;
  box-sizing: border-box;
     
  }
  .img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #fff;
     }
.el-menu-vertical-demo{
 box-sizing: border-box;
 margin-top:1px;
 width: 256px;
 overflow: hidden;
  }
.list{
 display: block;
 width: 256px;
 height: 60px;
 background-color: #001529;
 color: #fff;
 line-height: 60px;
}


</style>
