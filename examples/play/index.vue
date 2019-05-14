<template>
  <div style="margin: 20px;">
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: new Date()
      };
    },
    methods: {
    }
  };

</script>
