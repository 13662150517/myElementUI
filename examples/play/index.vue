<template>
  <div style="height:200px">
    <el-button @click="add">1</el-button>
    <el-table
      border
      fit
      :data="tableData1"
      style="width: 100%"
      height="parent">
      <el-table-column
        prop="date"
        label="日期"
        min-width="180px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="180px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="180px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="180px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="180px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="180px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="180px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="180px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="180px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="180px">
      </el-table-column>
      <el-table-column
      auto-width
        prop="address"
        label="地址"
        min-width="70px">
      </el-table-column>
      <el-table-column
      auto-width
        prop="address"
        label="地址"
        min-width="70px">
      </el-table-column>
      <el-table-column
      auto-width
        prop="address"
        label="地址"
        min-width="70px">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          tableData1:[],
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    },

    methods:{
      add(){
        this.tableData1 = this.tableData;
      }
    }
  }

</script>
