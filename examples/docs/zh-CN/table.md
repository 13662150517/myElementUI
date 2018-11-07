<script>
  export default {
    data() {
      return {
        tableIndex: 0,
        orderList1: [{"id":null,"orderId":"SC2018102500167","orderCount":1,"color":null,"duanChu":0,"userName":null,"factoryId":"292822","customer":"","customerId":"292822","customerOrderId":"292822","machining":null,"rowIndex":null,"jiaoDate":1531584000000,"feedCount":null,"detail":null,"chiCun":" ","quanImg":" ","tuiImg":null,"sort":31,"company":null,"deptId":"363","companyOrderId":"18-0022","status":0,"xiaDanDate":1531584000000,"keKuanHao":null,"dutyStatus":1,"deptDayCapacity":0,"productionCycle":0,"outCount":0,"restType":0,"putOutStatus":0,"wpcbList":[],"purchaseStatus":0,"inStatus":0,"orderMaterialList":null,"showOrderId":"18-0022","putOutStatusStr":"无外协","purchaseStatusHtml":"<span style=\"color:#f56c6c\">否</span>","inStatusHtml":"<span style=\"color:#f56c6c\">否</span>","wpcb":{}},{"id":null,"orderId":"SC2018102700080","orderCount":0,"color":null,"duanChu":0,"userName":null,"factoryId":"20181027","customer":"","customerId":"20181027","customerOrderId":"20181027","machining":null,"rowIndex":null,"jiaoDate":1540569600000,"feedCount":null,"detail":null,"chiCun":"","quanImg":" ","tuiImg":null,"sort":32,"company":null,"deptId":"363","companyOrderId":"","status":0,"xiaDanDate":1540569600000,"keKuanHao":null,"dutyStatus":0,"deptDayCapacity":0,"productionCycle":0,"outCount":0,"restType":0,"putOutStatus":0,"wpcbList":[],"purchaseStatus":0,"inStatus":0,"orderMaterialList":null,"showOrderId":"SC2018102700080","putOutStatusStr":"无外协","purchaseStatusHtml":"<span style=\"color:#f56c6c\">否</span>","inStatusHtml":"<span style=\"color:#f56c6c\">否</span>","wpcb":{}},{"id":null,"orderId":"SC2018102700173","orderCount":0,"color":null,"duanChu":0,"userName":null,"factoryId":"20181028","customer":"","customerId":"20181028","customerOrderId":"20181028","machining":null,"rowIndex":null,"jiaoDate":1540569600000,"feedCount":null,"detail":null,"chiCun":"","quanImg":" ","tuiImg":null,"sort":33,"company":null,"deptId":"362","companyOrderId":"","status":0,"xiaDanDate":1540569600000,"keKuanHao":null,"dutyStatus":0,"deptDayCapacity":0,"productionCycle":0,"outCount":0,"restType":0,"putOutStatus":0,"wpcbList":[],"purchaseStatus":0,"inStatus":0,"orderMaterialList":null,"showOrderId":"SC2018102700173","putOutStatusStr":"无外协","purchaseStatusHtml":"<span style=\"color:#f56c6c\">否</span>","inStatusHtml":"<span style=\"color:#f56c6c\">否</span>","wpcb":{}},{"id":null,"orderId":"SC2018102900654","orderCount":1,"color":null,"duanChu":0,"userName":null,"factoryId":"20181031","customer":"","customerId":"20181031","customerOrderId":"20181031","machining":null,"rowIndex":null,"jiaoDate":1540742400000,"feedCount":null,"detail":null,"chiCun":" ","quanImg":" ","tuiImg":null,"sort":36,"company":null,"deptId":"363","companyOrderId":"18-6666","status":0,"xiaDanDate":1540742400000,"keKuanHao":null,"dutyStatus":1,"deptDayCapacity":0,"productionCycle":0,"outCount":0,"restType":0,"putOutStatus":0,"wpcbList":[],"purchaseStatus":1,"inStatus":1,"orderMaterialList":null,"showOrderId":"18-6666","putOutStatusStr":"无外协","purchaseStatusHtml":"<span style=\"color:#5daf34\">是</span>","inStatusHtml":"<span style=\"color:#5daf34\">是</span>","wpcb":{}},{"id":null,"orderId":"SC2018102900095","orderCount":1,"color":null,"duanChu":0,"userName":null,"factoryId":"223","customer":"","customerId":"20022","customerOrderId":"20022","machining":null,"rowIndex":null,"jiaoDate":1540742400000,"feedCount":null,"detail":null,"chiCun":" ","quanImg":" ","tuiImg":null,"sort":34,"company":null,"deptId":"363","companyOrderId":"18-9999","status":0,"xiaDanDate":1540742400000,"keKuanHao":null,"dutyStatus":1,"deptDayCapacity":0,"productionCycle":0,"outCount":0,"restType":0,"putOutStatus":0,"wpcbList":[],"purchaseStatus":1,"inStatus":1,"orderMaterialList":null,"showOrderId":"18-9999","putOutStatusStr":"无外协","purchaseStatusHtml":"<span style=\"color:#5daf34\">是</span>","inStatusHtml":"<span style=\"color:#5daf34\">是</span>","wpcb":{}},{"id":null,"orderId":"SC2018102900110","orderCount":1,"color":null,"duanChu":0,"userName":null,"factoryId":"223","customer":"","customerId":"20033","customerOrderId":"20022","machining":null,"rowIndex":null,"jiaoDate":1540742400000,"feedCount":null,"detail":null,"chiCun":" ","quanImg":" ","tuiImg":null,"sort":35,"company":null,"deptId":"363","companyOrderId":"18-8888","status":0,"xiaDanDate":1540742400000,"keKuanHao":null,"dutyStatus":1,"deptDayCapacity":0,"productionCycle":0,"outCount":0,"restType":0,"putOutStatus":0,"wpcbList":[],"purchaseStatus":1,"inStatus":1,"orderMaterialList":null,"showOrderId":"18-8888","putOutStatusStr":"无外协","purchaseStatusHtml":"<span style=\"color:#5daf34\">是</span>","inStatusHtml":"<span style=\"color:#5daf34\">是</span>","wpcb":{}},{"id":null,"orderId":"SC2018103100329","orderCount":1,"color":null,"duanChu":0,"userName":null,"factoryId":"201810300","customer":"","customerId":"201810300","customerOrderId":"201810300","machining":null,"rowIndex":null,"jiaoDate":1540828800000,"feedCount":null,"detail":null,"chiCun":"","quanImg":" ","tuiImg":null,"sort":38,"company":null,"deptId":"363","companyOrderId":"","status":0,"xiaDanDate":1540828800000,"keKuanHao":null,"dutyStatus":0,"deptDayCapacity":0,"productionCycle":0,"outCount":0,"restType":0,"putOutStatus":0,"wpcbList":[],"purchaseStatus":0,"inStatus":0,"orderMaterialList":null,"showOrderId":"SC2018103100329","putOutStatusStr":"无外协","purchaseStatusHtml":"<span style=\"color:#f56c6c\">否</span>","inStatusHtml":"<span style=\"color:#f56c6c\">否</span>","wpcb":{}},{"id":null,"orderId":"SC2018103000819","orderCount":1,"color":null,"duanChu":0,"userName":null,"factoryId":"201810300","customer":"","customerId":"201810300","customerOrderId":"201810300","machining":null,"rowIndex":null,"jiaoDate":1540828800000,"feedCount":null,"detail":null,"chiCun":"","quanImg":" ","tuiImg":null,"sort":37,"company":null,"deptId":"363","companyOrderId":"","status":0,"xiaDanDate":1540828800000,"keKuanHao":null,"dutyStatus":1,"deptDayCapacity":0,"productionCycle":0,"outCount":0,"restType":0,"putOutStatus":0,"wpcbList":[],"purchaseStatus":2,"inStatus":0,"orderMaterialList":null,"showOrderId":"SC2018103000819","putOutStatusStr":"无外协","purchaseStatusHtml":"<span style=\"color:#cf9236\">部分</span>","inStatusHtml":"<span style=\"color:#f56c6c\">否</span>","wpcb":{}},{"id":null,"orderId":"SC2018110100012","orderCount":1,"color":null,"duanChu":0,"userName":null,"factoryId":"20181101","customer":"","customerId":"20181101","customerOrderId":"20181101","machining":null,"rowIndex":null,"jiaoDate":1541001600000,"feedCount":null,"detail":null,"chiCun":"","quanImg":" ","tuiImg":null,"sort":39,"company":null,"deptId":"363","companyOrderId":"","status":0,"xiaDanDate":1541001600000,"keKuanHao":null,"dutyStatus":0,"deptDayCapacity":0,"productionCycle":0,"outCount":0,"restType":0,"putOutStatus":0,"wpcbList":[],"purchaseStatus":0,"inStatus":0,"orderMaterialList":null,"showOrderId":"SC2018110100012","putOutStatusStr":"无外协","purchaseStatusHtml":"<span style=\"color:#f56c6c\">否</span>","inStatusHtml":"<span style=\"color:#f56c6c\">否</span>","wpcb":{}},{"id":null,"orderId":"SC2018110100355","orderCount":0,"color":null,"duanChu":0,"userName":null,"factoryId":"201811010001","customer":"","customerId":"201811010001","customerOrderId":"201811010001","machining":null,"rowIndex":null,"jiaoDate":1541001600000,"feedCount":null,"detail":null,"chiCun":"","quanImg":" ","tuiImg":null,"sort":42,"company":null,"deptId":"363","companyOrderId":"","status":0,"xiaDanDate":1541001600000,"keKuanHao":null,"dutyStatus":0,"deptDayCapacity":0,"productionCycle":0,"outCount":0,"restType":0,"putOutStatus":0,"wpcbList":[],"purchaseStatus":2,"inStatus":2,"orderMaterialList":null,"showOrderId":"SC2018110100355","putOutStatusStr":"无外协","purchaseStatusHtml":"<span style=\"color:#cf9236\">部分</span>","inStatusHtml":"<span style=\"color:#cf9236\">部分</span>","wpcb":{}}],
        tableData1: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '公司'
        }],
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          $info: true
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          $positive: true
        }],
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }],
        tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
        tableData6: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        tableData7: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
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
        }],
        currentRow: null,
        multipleSelection: [],
        search: '',
        showTable: []
      };
    },

    methods: {
      change() {
        // let tableIndex = this.tableIndex;
        // tableIndex++;
        // tableIndex = tableIndex % 3;
        // this.tableIndex = tableIndex;
        // let showTable = this['tableData' + tableIndex];
        // this.showTable = showTable;
        let orderList = this.orderList;
        for (let i = 0; i < orderList.length; i++) {
          let order = orderList[i];
          order.companyOrderId = 'SC2018071300';
        }
      },
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },

      handleClick(row) {
        console.log(row);
      },

      handleEdit(index, row) {
        console.log(index, row);
      },

      handleDelete(index, row) {
        console.log(index, row);
      },

      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      handleCurrentChange(val) {
        this.currentRow = val;
      },

      formatter(row, column) {
        return row.address;
      },

      filterTag(value, row) {
        return row.tag === value;
      },

      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },

      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },

      deleteRow(index, rows) {
        rows.splice(index, 1);
      },

      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },

      indexMethod(index) {
        return index * 2;
      }
    },

    watch: {
      multipleSelection(val) {
        console.log('selection: ', val);
      }
    }
  };
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .demo-table .name-wrapper {
    display: inline-block;
  }

  .demo-table .demo-table-expand {
    label {
      width: 90px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
</style>

## Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础表格

基础的表格展示用法。

:::demo 当`el-table`元素中注入`data`对象数组后，在`el-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
```html
  <el-button @click="change">dsf</el-button>
  <template>
    <div style="width:1326px;">
    <el-table class="querry-order-table" fit border :data="orderList1" style="width: 100%" 
          height="526px">
          <el-table-column :resizable="false" prop="orderId" label="订单编号" :auto-width="true" min-width="80px" fixed="left"
            key="showOrderId">
            <template slot-scope="scope">
              <div class="table-btn">
                {{scope.row.showOrderId}}
              </div>
            </template>
          </el-table-column>
          <el-table-column :resizable="false" prop="factoryId" label="工厂型号" :auto-width="true" min-width="80px" fixed="left"
            key="factoryId">
            <template slot-scope="scope">
              <div class="table-btn">
                {{scope.row.factoryId}}
              </div>
            </template>
          </el-table-column>
          <el-table-column :resizable="false" prop="customerId" label="客户型号" :auto-width="true" min-width="80px"
            fixed="left" key="customerId"></el-table-column>
          <el-table-column :resizable="false" prop="customerOrderId"
            label="客户订单号" :auto-width="true" min-width="90px" key="customerOrderId"></el-table-column>
          <el-table-column  :resizable="false" prop="customer" label="客户"
            :auto-width="true" min-width="60px" key="customer"></el-table-column>
          <el-table-column :resizable="false" prop="chiCun" label="尺寸"
            :auto-width="true" min-width="80px" key="chiCun"></el-table-column>
          <el-table-column  :resizable="false" label="下单日期" min-width="90px"
            align="center" key="xiaDanDate">
            <template slot-scope="scope">
            </template>
          </el-table-column>
          <el-table-column :resizable="false" prop="jiaoDate" label="交货日期" min-width="90px" align="center" key="jiaoDate">
          </el-table-column>
          <el-table-column :resizable="false" prop="orderCount" label="订单总数"
            min-width="80px" align="center" key="orderCount">
            <template slot-scope="scope">
              <div class="table-btn">
                {{scope.row.orderCount}}
              </div>
            </template>
          </el-table-column>
          <el-table-column :resizable="false" label="采购" min-width="50px" align="center" key="purchaseStatus">
            <template slot-scope="scope">
              <div v-html="scope.row.purchaseStatusHtml"></div>
            </template>
          </el-table-column>
          <el-table-column :resizable="false" label="入库" min-width="50px" align="center" key="inStatus">
            <template slot-scope="scope">
              <div v-html="scope.row.inStatusHtml"></div>
            </template>
          </el-table-column>
          <el-table-column :resizable="false" label="外协" min-width="55px" align="center" key="putOutStatus">
            <template slot-scope="scope">
              <div class="table-btn">
                {{scope.row.putOutStatusStr}}
              </div>
            </template>
          </el-table-column>
        </el-table>
        </div>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
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
      }
    }
  </script>
```
:::


