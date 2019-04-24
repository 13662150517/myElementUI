<template>
  <div style="margin: 20px;">
    {{color1}}
    <el-color-picker v-model="color1"></el-color-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF'
      };
    }
  };
</script>
