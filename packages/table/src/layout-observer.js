import $ from 'jquery';
import {
  isEmptyObject
} from 'element-ui/src/utils/util';
import {
  isSameColumns
} from './util';

export default {
  data() {
    return {
      tableData: null,
      colWidthObj: {},
      tableColumns: null,
      oldTablWidth: null
    };
  },

  watch: {
    tableScrollX: function() {
      if (this.tableLayout.autoWidth) {
        this.onBodyColumnsChange(this.tableLayout, this.tableLayout.observers);
      }
    }
  },

  created() {
    this.tableLayout.addObserver(this);
  },

  destroyed() {
    this.tableLayout.removeObserver(this);
  },

  computed: {
    tableLayout() {
      let layout = this.layout;
      if (!layout && this.table) {
        layout = this.table.layout;
      }
      if (!layout) {
        throw new Error('Can not find table layout.');
      }
      return layout;
    },

    tableScrollX() {
      const tableLayout = this.tableLayout;
      return {
        scrollX: tableLayout.scrollX,
        scrollY: tableLayout.scrollY
      };
    }
  },

  mounted() {
    this.onColumnsChange(this.tableLayout, this.tableLayout.observers);
    this.onScrollableChange(this.tableLayout);
  },

  updated() {
    if (this.__updated__) return;
    this.tableData = null;
    this.onBodyColumnsChange(this.tableLayout, this.tableLayout.observers);
    this.onScrollableChange(this.tableLayout);
    this.__updated__ = true;
  },

  methods: {
    onColumnsChange() {
      const cols = this.$el.querySelectorAll('colgroup > col');
      if (!cols.length) return;
      const flattenColumns = this.tableLayout.getFlattenColumns();
      const columnsMap = {};
      flattenColumns.forEach((column) => {
        columnsMap[column.id] = column;
      });
      for (let i = 0, j = cols.length; i < j; i++) {
        const col = cols[i];
        const name = col.getAttribute('name');
        const column = columnsMap[name];
        if (column) {
          col.setAttribute('width', column.realWidth || column.width);
        }
      }
    },

    onBodyColumnsChange(vm, observers) {
      const flattenColumns = this.tableLayout.getFlattenColumns();
      if (!this.tableLayout.autoWidth) {
        this.onColumnsChange(vm);
        return;
      }

      if (!$(this.$el).hasClass('el-table__body')) {
        return;
      }

      if ($(this.$el).find('colgroup > col').length === 0) {
        return;
      }
      this.updateColumnWidth(flattenColumns);
      let colWidthObj = this.colWidthObj;
      this.calColumnWidth(flattenColumns, colWidthObj);
      this.tableLayout.colWidthObj = colWidthObj;

      const columnsMap = {};
      flattenColumns.forEach((column) => {
        columnsMap[column.id] = column;
      });

      for (let i = 0; i < observers.length; i++) {
        const observer = observers[i];
        const cols = observer.$el.querySelectorAll('colgroup > col');
        if (!cols.length) continue;
        const len = cols.length;
        for (let j = 0; j < len; j++) {
          const col = cols[j];
          const name = col.getAttribute('name');
          const column = columnsMap[name];
          let realWidth;
          if (column !== undefined) {
            realWidth = colWidthObj[column.id];
            if (realWidth === undefined) {
              realWidth = column.realWidth || column.width;
            }
          }
          if (column) {
            col.setAttribute('width', realWidth);
          }
        }
      }
      this.calScroll(flattenColumns, colWidthObj);
    },

    updateColumnWidth(flattenColumns) {
      let tableData = this.table.store.states.data;
      let width = this.table.resizeState.width;
      if (tableData === this.tableData && this.oldTablWidth === width && isSameColumns(this.tableColumns, flattenColumns)) {
        return false;
      }
      this.tableData = tableData;
      this.tableColumns = flattenColumns;
      this.oldTablWidth = width;
      let colWidthObj = {};
      flattenColumns.forEach(column => {
        if (!column.autoWidth) {
          return;
        }
        let rows = this.$el.querySelectorAll('.' + column.id + ' .cell');
        let maxWidth = 0;
        rows.forEach((row) => {
          let $row = $(row);
          if (!$row.parents('table').hasClass('el-table__body')) {
            return;
          }
          let rowWidth = $row.width();
          let textWidth = $row.find('.el-cell-text').width();
          let paddingWidth = $row.innerWidth() - rowWidth;
          let width = textWidth + paddingWidth;
          if (width > maxWidth) {
            maxWidth = width;
          }
        });
        if (maxWidth === 0) {
          return;
        }

        maxWidth = Math.ceil(maxWidth);
        let minWidth = column.minWidth !== undefined ? column.minWidth : 80;
        let colWidth = Math.max(maxWidth, minWidth);
        colWidthObj[column.id] = colWidth;
      });
      this.colWidthObj = colWidthObj;
      return true;
    },

    calColumnWidth(flattenColumns, colWidthObj) {
      let flexColumns = flattenColumns.filter((column) => typeof column.width !== 'number');
      if (flexColumns.length === 0) {
        return;
      }

      const bodyWidth = this.table.$el.clientWidth;
      let bodyMinWidth = 0;
      flattenColumns.forEach(column => {
        const width = this.getRealColumnWidth(colWidthObj, column);
        bodyMinWidth += width;
      });

      const tableLayout = this.tableLayout;
      const scrollYWidth = tableLayout.scrollY ? tableLayout.gutterWidth : 0;
      const totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth;
      if (totalFlexWidth <= 0) {
        return;
      }

      if (flexColumns.length === 1) {
        const width = this.getRealColumnWidth(colWidthObj, flexColumns[0]);
        colWidthObj[flexColumns[0].id] = width + totalFlexWidth;
      } else {
        const allColumnsWidth = flexColumns.reduce((prev, column) => {
          const width = this.getRealColumnWidth(colWidthObj, column);
          return prev + width;
        }, 0);
        const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
        let noneFirstWidth = 0;

        flexColumns.forEach((column, index) => {
          if (index === 0) return;
          const flexWidth = Math.floor(this.getRealColumnWidth(colWidthObj, column) * flexWidthPerPixel);
          noneFirstWidth += flexWidth;
          const width = this.getRealColumnWidth(colWidthObj, column);
          colWidthObj[column.id] = width + flexWidth;
        });

        colWidthObj[flexColumns[0].id] = this.getRealColumnWidth(colWidthObj, flexColumns[0]) + totalFlexWidth - noneFirstWidth;
      }
    },

    getRealColumnWidth(colWidthObj, column) {
      let width = colWidthObj[column.id];
      if (!width) {
        width = column.width || column.minWidth || 80;
      }
      return width;
    },

    calScroll(flattenColumns, colWidthObj) {
      if (isEmptyObject(colWidthObj)) {
        this.table.setTableBodyWidth(null);
        return;
      }
      let totalWidth = 0;
      flattenColumns.forEach((column) => {
        let realWidth = colWidthObj[column.id];
        if (realWidth === undefined) {
          realWidth = column.realWidth;
        }
        let width = realWidth || column.width;
        totalWidth += width;
      });
      this.table.setTableBodyWidth(totalWidth);
    },

    onScrollableChange(layout) {
      const cols = this.$el.querySelectorAll('colgroup > col[name=gutter]');
      for (let i = 0, j = cols.length; i < j; i++) {
        const col = cols[i];
        col.setAttribute('width', layout.scrollY ? layout.gutterWidth : '0');
      }
      const ths = this.$el.querySelectorAll('th.gutter');
      for (let i = 0, j = ths.length; i < j; i++) {
        const th = ths[i];
        th.style.width = layout.scrollY ? layout.gutterWidth + 'px' : '0';
        th.style.display = layout.scrollY ? '' : 'none';
      }
    }
  }
};
