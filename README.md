基于[element-ui](https://element.eleme.cn)扩展了下列功能

## autocomplete
1.新增`change`事件，当input框或者选中建议，引起输入框内容改变时触发，回调参数 `(value:string)`改变之后的value值。

2.新增`clearSuggestions`方法，用于清除建议。

3.新增`show-overflow-tooltip`属性，数据类型`boolean`，默认值`false`，为`true`时，下拉选择项的内容过长被隐藏时显示 tooltip。

## checkbox
1.选中状态会根据checked属性的改变而改变。

## input-number
1.新增`is-decimal-zero`属性，数据类型`boolean`，默认值`false`，为`true`时，在保留小数后，会去除小数最后面的0。

2.新增`after-change-format-value`属性，数据类型`function`，在input内容改变、点击计数器改变数值时，调用该方法改变input内容，方法参数值<br>
(1) newVal:number 改变之后的数值<br>
(2) type:string 改变数值的操作<br>
`input`输入框change事件 `increase`点击增加按钮 `decrease`点击减少按钮

方法返回值类型说明<br>
(1) boolean `true`改变为新的数值 `false` 还原为原来的数值<br>
(2) number 数值改为返回的`number`类型数据

## select
1.新增`empty-filter-text`属性，在`filterable=true`时有效，如果为`true`时，输入框内有值，重新打开下拉框时会清空输入框的值，并且输入框input的placeholder属性变为之前选中的值，如为`false`，输入框内容不会清空，并且里面的所有内容为选中状态

## table
1.`height`属性添加`parent`值录入，表格高度随父级节点的改变而改变。

2.新增`hide-column-keys`属性(string类型数组)，默认值为`null`，用于隐藏对应的列，根据每列设置的`column-key`值和该数组里的元素来隐藏相应的列(需要隐藏的列必需设置`column-key`)。

### table-item
1.新增`auto-width`属性，数据类型`boolean`，默认值`false`，为`true`时，该列宽度根据该列的内容进行自适应，最小宽度为 min-width 配置。

2.新增`hidden`属性，数据类型`boolean`，默认值`false`，通过该属性来判断是否显示该列(`true`不显示该列，`false`显示该列)。
