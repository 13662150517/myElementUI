基于element-ui扩展了下列功能

## autocomplete
1.新增`change`事件，当input框或者选中建议，引起输入框内容改变时触发，回调参数 `(value:string)`。

2.新增`clearSuggestions`方法，用于清除建议。

## checkbox
1.选中状态会根据checked属性的改变而改变。

## input-number
1.新增`is-decimal-zero`属性，默认值`false`，为`true`时，在保留小数后，会去除小数最后面的0。

## table
1.`height`属性添加`parent`值录入，表格高度随父级节点的改变而改变。

2.新增`hide-column-keys`属性(string类型数组)，默认值为`null`，用于隐藏对应的列，根据每列设置的`column-key`值和该数组里的元素来隐藏相应的列(需要隐藏的列必需设置`column-key`)。

## table-item
1.新增`auto-width`属性，默认值`false`，为`true`时，该列宽度根据该列的内容进行自适应，最小宽度为 min-width 配置。

2.新增`hidden`属性，默认值`false`，通过该属性来判断是否显示该列(`true`不显示该列，`false`显示该列)。
