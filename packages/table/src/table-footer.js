import LayoutObserver from './layout-observer';

export default {
  name: 'ElTableFooter',

  mixins: [LayoutObserver],

  render(h) {
    let sums = [];
    let columns = this.columns;
    if (this.summaryMethod) {
      sums = this.summaryMethod({ columns: columns, data: this.store.states.data });
    } else {
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = this.sumText;
          return;
        }
        const values = this.store.states.data.map(item => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach(value => {
          if (!isNaN(value)) {
            notNumber = false;
            let decimal = ('' + value).split('.')[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = '';
        }
      });
    }

    let sumList = [];
    for (let i = 0; i < columns.length; i++) {
      let sum = sums[i];
      if (sum === undefined) {
        continue;
      }
      let column = columns[i];
      let span = column.colSpan;
      let align = column.headerAlign;
      let sumObj = [];
      if (typeof sum === 'object') {
        let value;
        if (sum === null) {
          value = '';
        } else {
          span = sum.span ? sum.span : span;
          align = sum.align ? 'is-' + sum.align : align;
          value = sum.value;
        }
        sumObj = {
          span,
          column,
          align,
          value: value
        };
      } else {
        sumObj = {
          span,
          column,
          align,
          value: sum
        };
      }
      sumList.push(sumObj);
    }

    return (
      <table
        class="el-table__footer"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <colgroup>
          {
            this._l(this.columns, column => <col name={ column.id } />)
          }
          {
            this.hasGutter ? <col name="gutter" /> : ''
          }
        </colgroup>
        <tbody class={ [{ 'has-gutter': this.hasGutter }] }>
          <tr>
            {
              this._l(sumList, (sum, cellIndex) => {
                let span = sum.span;
                if (!span || span < 1) {
                  return '';
                }
                let column = sum.column;
                return (
                  <td
                    colspan= { span }
                    class={ [column.id, sum.align, column.className || '', this.isCellHidden(cellIndex, this.columns, column) ? 'is-hidden' : '', !column.children ? 'is-leaf' : '', column.labelClassName] }>
                    <div class={ ['cell', column.labelClassName] }>
                      { sum.value }
                    </div>
                  </td>
                );
              })
            }
            {
              this.hasGutter ? <th class="gutter"></th> : ''
            }
          </tr>
        </tbody>
      </table>
    );
  },

  props: {
    fixed: String,
    store: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  computed: {
    table() {
      return this.$parent;
    },

    isAllSelected() {
      return this.store.states.isAllSelected;
    },

    columnsCount() {
      return this.store.states.columns.length;
    },

    leftFixedCount() {
      return this.store.states.fixedColumns.length;
    },

    rightFixedCount() {
      return this.store.states.rightFixedColumns.length;
    },

    columns() {
      return this.store.states.columns;
    },

    hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    }
  },

  methods: {
    isCellHidden(index, columns) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedCount;
      } else if (this.fixed === 'right') {
        let before = 0;
        for (let i = 0; i < index; i++) {
          before += columns[i].colSpan;
        }
        return before < this.columnsCount - this.rightFixedCount;
      } else {
        return (index < this.leftFixedCount) || (index >= this.columnsCount - this.rightFixedCount);
      }
    }
  }
};
