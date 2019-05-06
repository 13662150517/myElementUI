<template>
  <div style="margin: 20px;">
    <el-form label-width="auto" size="small">
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item v-if="x">
        <div slot="label">
          这是一段 label <span v-if="y">水电费电话第三方第三方</span>
        </div>
        <el-button @click="y = !y">改变 label slot 内容</el-button>
      </el-form-item>
    </el-form>
    <el-button @click="x = !x">toggle</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: true,
      y: false,
      form: {
        date1: '',
        date2: '',
        delivery: false
      }
    };
  }
};
</script>