
<template>
  <div id="from">
    <div class="nav">
      <div class="leftLogo">
        <i class="el-icon-s-fold"></i>
      </div>
      <div class="rightLogo">
        <i class="el-icon-bell"></i>
        <div class="user">
          <i class="el-icon-picture-outline-round"></i>
          <p>用户名</p>
        </div>
      </div>
    </div>
    <div class="Breadcrumb">
      <el-breadcrumb separator="/" class="rex">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>任务中心</el-breadcrumb-item>
        <el-breadcrumb-item>任务详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="navLi">
        <h2>任务详情</h2>
      </div>
    </div>
    <div class="conent">
      <div class="head">
        <div class="left">
          <el-button> 返回 </el-button>
        </div>
        <div class="right">
          <el-button>结束任务</el-button>
          <el-button type="primary">修改任务</el-button>
        </div>
      </div>
      <div class="rask">
        <h2>任务名称：{{ this.obj.post_name }}</h2>
        <div class="ul">
          <div class="li">任务ID：{{ this.obj.id }}</div>
          <div class="li">
            任务类型：{{ this.obj.task_type == 1 ? "指派任务" : "无" }}
          </div>
          <div class="li">结算周期：灵活运算</div>
          <div class="li">
            指定筑创星数：{{ this.obj.task_risk_control_amount_small }}
          </div>
          <div class="li">已报名数{{ this.obj.current_number }}</div>
          <div class="li">
            任务佣金（单位）{{ this.obj.risk_control_amount }}
          </div>
        </div>
      </div>
      <p class="p">创建时间:{{ this.obj.create_time }}</p>
      <p class="p">发布时间:{{ this.obj.audit_time }}</p>
      <div class="lood">
        <p class="p">任务说明：</p>
        <div class="box">
          {{ this.obj.position_instructions }}
        </div>
      </div>
      <el-container class="list">
        <el-header class="Header">
          <h1 class="title">报名详情</h1>
          <div class="btn3">
            <div class="first">
              <el-button>全部</el-button>
              <el-button>已报名</el-button>
              <el-button>待报名</el-button>
            </div>
            <div class="sce">
              <el-button>已移除</el-button>
            </div>

            <div class="input">
              <el-input
                class="input-R"
                placeholder="请输入筑创星/注册手机号"
                v-model="Usertel"
              >
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="scech(Usertel)"
                ></el-button>
              </el-input>
            </div>
          </div>
        </el-header>
        <el-main class="Main">
          <div class="table">
            <el-table
              :data="tableData"
              stripe
              style="width: 100%"
              class="table"
            >
              <el-table-column prop="sname" label="筑星号"></el-table-column>
              <el-table-column prop="name" label="姓名"> </el-table-column>
              <el-table-column prop="tel" label="手机号"> </el-table-column>
              <el-table-column prop="numsate" label="账号状态">
              </el-table-column>
              <el-table-column prop="sate" label="报名状态"> </el-table-column>
              <el-table-column prop="time" label="报名时间"> </el-table-column>
            </el-table>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Usertel: "",
      obj: {},
      tableData: [
        {
          sname: "",
          name: "",
          tel: "",
          numsate: "",
          sate: "",
          time: "",
        },
      ],
    };
  },
  methods: {
    scech(value) {
        var opt = "";
      if (typeof (value * 1) == "number") {
         opt =
          "social_credit_code=91410100317580074M&id=1365&page=1&page_number=10&tel=" +
          value;
      } else {
         opt =
          "social_credit_code=91410100317580074M&id=1365&page=1&page_number=10&=username" +
          value;
      }
      const url =
        "http://prebin.zhushang.net/zhu_pro_zb/public/index.php/api/fetchBUserTaskEmplyeeAction ";

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: opt,
      })
        .then((response) => response.json())
        .then((res) => {
          this.tableData[0].sname = res.data[0].id_card_number;
          this.tableData[0].name = res.data[0].username;
          this.tableData[0].numsate = res.data[0].business_license;
          this.tableData[0].tel = res.data[0].tel;
          this.tableData[0].sate = res.data[0].certification_status;
          this.tableData[0].time = res.data[0].apply_check_time;
          console.log(this.tableData);
        });
    },
  },
  created() {
    const opts =
      "social_credit_code=91410100317580074M&id=1365&page=1&page_number=10&taskStatus=all";
    const url =
      "http://prebin.zhushang.net/zhu_pro_zb/public/index.php/api/fetchAllBUserPostedTaskAction";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: opts,
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data[0]);
        this.obj = res.data[0];
      });
  },
};
</script>

<style lang="scss">
.p {
  font-weight: 600;
}
#from {
  height: 100%;
  float: left;
  background-color: #eee;
  flex: 1;
  .nav {
    width: 100%;
    height: 64px;
    background-color: #fff;
    .leftLogo {
      float: left;
      width: 68px;
      height: 68px;
      text-align: center;
      line-height: 68px;
      .el-icon-s-fold {
        font-size: 30px;
      }
    }
    .rightLogo {
      float: right;
      display: flex;
      align-items: center;
      width: 160px;
      height: 68px;
      .el-icon-bell {
        flex: 0;
        margin-right: 20px;
        font-size: 20px;
      }
      .user {
        flex: 1;
        display: flex;
        align-items: center;
      }
      .el-icon-picture-outline-round {
        flex: 1;
        font-size: 30px;
      }
      p {
        flex: 1;
      }
    }
  }
  .Breadcrumb {
    padding: 10px 65px;
    box-sizing: border-box;
    width: 100%;
    height: 98px;
    background-color: #fff;
    position: relative;
    border: 1px solid #eee;
    .navLi {
      position: absolute;
      bottom: 30px;
      left: 65px;
    }
  }
  .conent {
    padding: 10px 20px;
    width: 95%;
    height: 750px;
    margin: 20px auto;
    background-color: #fff;
    box-sizing: border-box;
    .head {
      overflow: hidden;
      width: 100%;
      .left {
        float: left;
      }
      .right {
        float: right;
      }
    }
    .rask {
      margin: 20px 0;
      width: 100%;
      .ul {
        margin-top: 10px;
        width: 100%;
        height: 70px;
        .li {
          float: left;
          width: 30%;
          height: 20px;
          text-align: left;
          margin: 10px 0;
          font-weight: 600;
        }
      }
    }
    .lood {
      width: 100%;
      height: 125px;
      border-bottom: 1px solid #eee;
      padding: 20px 0;
      margin-bottom: 20px;
      p {
        float: left;
      }
      .box {
        width: 80%;
        height: 100px;
        float: left;
        border: 2px solid #eee;
      }
    }
    .list {
      .Header {
        display: flex;
        .title {
          flex: 1;
        }
        .btn3 {
          flex: 2;
          display: flex;
          .first {
            flex: 1.5;
          }
          .sce {
            flex: 0;
          }
          .input {
            flex: 3;
            margin-left: 20px;
            .input-R {
              width: 90%;
              float: left;
            }
          }
        }
      }
      .Main {
        .table {
          text-align: center;
        }
      }
    }
  }
}
</style>
