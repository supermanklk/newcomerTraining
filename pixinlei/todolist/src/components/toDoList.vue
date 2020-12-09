<!--
  auther: 皮新雷
  day: 2020-12-8
  description: 这是一个todolist
 -->
<template>
  <div class="page">
    <div class="title">
      <h1>ToDoList</h1>
    </div>
    <div class="content">
      <div class="list" v-for="(item, index) in myList" :key="index"
           :style="{ 'background-color':  item.checkbox ? 'rgb(223,241,219)' : 'white'}">
        <div class="myitem">
          <van-checkbox v-model="item.checkbox" shape="square"
                        :style="{ 'background-color':  item.checkbox ? 'rgb(223,241,219)' : 'white'}">
            <span v-if="!item.checkbox">{{ item.value }}</span>
            <span v-else><del>{{ item.value }}</del></span>
          </van-checkbox>
        </div>
      </div>
      <div class="calculate">
        {{ finishedTask }}已完成 / {{ myList.length }}总数
      </div>
    </div>
    <div class="line"></div>
    <div class="bottom">
      <div class="task">
        <div class="taskTitle"><B>Task</B></div>
        <div class="myinput">
          <van-field
            v-model="addval"
            label=""
            placeholder="你想做点什么"
          />
        </div>
      </div>
      <button @click="addToList()">Save task</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      myList: [// todolist列表中复选框和内容的值
        {checkbox: false,value: '吃饭'},
        {checkbox: false,value: '睡觉'},
        {checkbox: false,value: '打豆豆'}
      ],
      checkboxGroup: [],
      addval: ''// input框中的值
    }
  },
  computed: {
    finishedTask: function(){  //计算列表中已完成的任务个数
      let sum = 0
      this.myList.forEach(item => {
        if (item.checkbox){
          sum++
        }
      })
      return sum
    }
  },
  methods: {
    addToList(){      // 点击按钮，将input的value添加到myList中
      if (this.addval.trim()){
        this.myList.push(
          {checkbox: false,value: this.addval}
        )
        this.addval = ""
      }
    }
  }
}
</script>


<style scoped>
.page {
  background-color: rgb(246, 246, 246);
}

.title {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  width: 90vw;
  position: relative;
  left: 5vw;
}

span {
  margin-left: 2vw;
}

.list {
  border: 1px solid rgb(246, 246, 246);
  line-height: 5vh;
  height: 5vh;
  display: flex;
  background-color: #fff;
  align-items: center;
}

.calculate {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 3vh;
  background-color: #fff;
  border: 1px solid rgb(229, 229, 229);
}

.line {
  border-top: 1px solid rgb(229, 229, 229);
  margin-top: 1vw;
  margin-bottom: 1vw;
  width: 90vw;
  margin-left: 5vw;
}

.task {
  width: 90vw;
  margin-left: 5vw;
  display: flex;
}

.taskTitle {
  margin: 2vw;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.myitem {
  margin-left: 1vw;
  background-color: #fff;
}

.bottom {
  background-color: rgb(246, 246, 246);
}

button {
  margin-top: 2vh;
  border-radius: 20%;
  overflow: hidden;
  width: 7vw;
  height: 4vh;
  position: relative;
  left: 88vw;
  font-size: 10px;
  background-color: rgb(54, 120, 180);
  color: #ffffff;
}

.myinput {
  /*line-height: 15px;*/
  position: relative;
  top: 1vh;
  height: 4vh;
  overflow: hidden;
  left: 2vw;
  width: 80vw;
}
</style>
