## autocomplete
1.新增`change`事件，当input框或者选中建议，引起输入框内容改变时触发，回调参数 `(value:string)`。
2.新增`clearSuggestions`方法，用于清除建议。

## checkbox
1.选中状态会根据checked属性的改变而改变。

## input-number
1.新增`is-decimal-zero`属性，默认值`false`，为`true`时，在保留小数后，会去除小数最后面的0。

## table-item
1.新增`auto-width`属性，默认值`false`，为`true`时，该列宽度根据该列的内容进行自适应，最小宽度为 min-width 配置。
