<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="讲师名称">
        <el-input v-model="teacher.name"/>
      </el-form-item>
      <el-form-item label="讲师排序">
        <el-input-number v-model="teacher.sort" controls-position="right" min="0"/>
      </el-form-item>
      <el-form-item label="讲师头衔">
        <el-select v-model="teacher.level" clearable placeholder="请选择">
          <!--
            数据类型一定要和取出的json中的一致，否则没法回填
            因此，这里value使用动态绑定的值，保证其数据类型是number
          -->
          <el-option :value="1" label="高级讲师"/>
          <el-option :value="2" label="首席讲师"/>
        </el-select>
      </el-form-item>
      <el-form-item label="讲师资历">
        <el-input v-model="teacher.career"/>
      </el-form-item>
      <el-form-item label="讲师简介">
        <el-input v-model="teacher.intro" :rows="10" type="textarea"/>
      </el-form-item>

      <!-- 讲师头像：TODO -->

      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 引入teacher.js
import teacherApi from '@/api/edu/teacher'

export default {

    // 编写核心代码
    data(){ // 定义变量和初始值
        return {
            saveBtnDisabled: false, // 保存按钮是否禁用，防止重复提交
            teacher: {} // 参数teacher对象
        }
        
    },
    created(){ // 在页面渲染之前执行，一般调用methods中的方法
      this.init()
    },
    // 监听路由
    watch:{
      $route(to,from){ // 路由变化方式，路由发生改变，方法就会执行
        console.log('watch $route')
        this.init()
      }
    },
    methods:{ // 创建具体的方法，调用teacher.js返回数据
        init(){
          console.log("created");
          // 路由中路径有id，则回显数据
          if (this.$route.params && this.$route.params.id) {
            // 从路径中获取id
            const id = this.$route.params.id
            this.getTeacherInfoById(id)
          } else{
            // 点击添加讲师清空表单，多次路由跳转到同一页面,只会执行一次，后面再进行跳转不会执行，使用路由监听
            this.teacher = {}
          }
        },
        // 保存方法
        saveOrUpdate(){
          // 根据teacher对象是否有id进行判断保存还是修改
          if(!this.teacher.id){
            this.teacher = {}
            // 添加
            this.saveTeacher()
          }else{
            // 修改
            this.updateTeacher();
          }
          
        },
        // 添加
        saveTeacher(){
          teacherApi.addTeacher(this.teacher)
          .then(res => {
            this.$message({
                type: 'success',
                message: '添加成功!'
            })
            // 回到列表页面 路由跳转
            this.$router.push({ path: '/teacher/list' })
          })
        },
        // 回显数据
        getTeacherInfoById(id){
          teacherApi.getTeacherInfoById(id)
          .then(res =>{
            this.teacher = res.data.teacher
          })
        },
        // 修改讲师info
        updateTeacher(){
          teacherApi.updateTeacher(this.teacher)
          .then(res => {
            this.$message({
                type: 'success',
                message: '修改成功!'
            })
            // 回到列表页面 路由跳转
            this.$router.push({ path: '/teacher/list' })
          })
        }
    }
    
}
</script>