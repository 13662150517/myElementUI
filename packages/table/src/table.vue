<template>
  <div class="el-table"
    :class="[{
      'el-table--fit': fit,
      'el-table--striped': stripe,
      'el-table--border': border || isGroup,
      'el-table--hidden': isHidden,
      'el-table--group': isGroup,
      'el-table--fluid-height': maxHeight,
      'el-table--scrollable-x': getScrollX(true),
      'el-table--scrollable-y': layout.scrollY,
      'el-table--enable-row-hover': !store.states.isComplex,
      'el-table--enable-row-transition': (store.states.data || []).length !== 0 && (store.states.data || []).length < 100
    }, tableSize ? `el-table--${ tableSize }` : '']"
    @mouseleave="handleMouseLeave($event)">
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <div
      v-if="showHeader"
      v-mousewheel="handleHeaderFooterMousewheel"
      class="el-table__header-wrapper"
      ref="headerWrapper">
      <table-header
        ref="tableHeader"
        :store="store"
        :border="border"
        :default-sort="defaultSort"
        :style="{
          width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
        }">
      </table-header>
    </div>
    <div
      class="el-table__body-wrapper"
      ref="bodyWrapper"
      :class="[getScrollX() ? `is-scrolling-${scrollPosition}` : 'is-scrolling-none']"
      :style="[bodyHeight]">
      <table-body
        ref="tableBody"
        :context="context"
        :store="store"
        :stripe="stripe"
        :row-class-name="rowClassName"
        :row-style="rowStyle"
        :highlight="highlightCurrentRow"
        :style="{
           width: bodyWidth
        }">
      </table-body>
      <div
        v-if="!data || data.length === 0"
        class="el-table__empty-block"
        ref="emptyBlock"
        :style="{
          width: bodyWidth
        }">
        <span class="el-table__empty-text">
          <slot name="empty">{{ emptyText || t('el.table.emptyText') }}</slot>
        </span>
      </div>
      <div
        v-if="$slots.append"
        class="el-table__append-wrapper"
        ref="appendWrapper">
        <slot name="append"></slot>
      </div>
    </div>
    <div
      v-if="showSummary"
      v-show="data && data.length > 0"
      v-mousewheel="handleHeaderFooterMousewheel"
      class="el-table__footer-wrapper"
      ref="footerWrapper">
      <table-footer
        :store="store"
        :border="border"
        :sum-text="sumText || t('el.table.sumText')"
        :summary-method="summaryMethod"
        :default-sort="defaultSort"
        :style="{
          width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
        }">
      </table-footer>
    </div>
    <div
      v-if="fixedColumns.length > 0"
      v-mousewheel="handleFixedMousewheel"
      class="el-table__fixed"
      ref="fixedWrapper"
      :style="[{
        width: getFixedWidth('left')
      },
      fixedHeight]">
      <div
        v-if="showHeader"
        class="el-table__fixed-header-wrapper"
        ref="fixedHeaderWrapper" >
        <table-header
          ref="fixedTableHeader"
          fixed="left"
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth
          }"></table-header>
      </div>
      <div
        class="el-table__fixed-body-wrapper"
        ref="fixedBodyWrapper"
        :style="[{
          top: layout.headerHeight + 'px'
        },
        fixedBodyHeight]">
        <table-body
          fixed="left"
          :store="store"
          :stripe="stripe"
          :highlight="highlightCurrentRow"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :style="{
            width: bodyWidth
          }">
        </table-body>
        <div
          v-if="$slots.append"
          class="el-table__append-gutter"
          :style="{
            height: layout.appendHeight + 'px'
          }"></div>
      </div>
      <div
        v-if="showSummary"
        v-show="data && data.length > 0"
        class="el-table__fixed-footer-wrapper"
        ref="fixedFooterWrapper">
        <table-footer
          fixed="left"
          :border="border"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          :store="store"
          :style="{
            width: bodyWidth
          }"></table-footer>
      </div>
    </div>
    <div
      v-if="rightFixedColumns.length > 0"
      v-mousewheel="handleFixedMousewheel"
      class="el-table__fixed-right"
      ref="rightFixedWrapper"
      :style="[{
        width: getFixedWidth('right'),
        right: layout.scrollY ? (border ? layout.gutterWidth : (layout.gutterWidth || 0)) + 'px' : ''
      },
      fixedHeight]">
      <div v-if="showHeader"
        class="el-table__fixed-header-wrapper"
        ref="rightFixedHeaderWrapper">
        <table-header
          ref="rightFixedTableHeader"
          fixed="right"
          :border="border"
          :store="store"
          :style="{
            width: bodyWidth
          }"></table-header>
      </div>
      <div
        class="el-table__fixed-body-wrapper"
        ref="rightFixedBodyWrapper"
        :style="[{
          top: layout.headerHeight + 'px'
        },
        fixedBodyHeight]">
        <table-body
          fixed="right"
          :store="store"
          :stripe="stripe"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :highlight="highlightCurrentRow"
          :style="{
            width: bodyWidth
          }">
        </table-body>
      </div>
      <div
        v-if="showSummary"
        v-show="data && data.length > 0"
        class="el-table__fixed-footer-wrapper"
        ref="rightFixedFooterWrapper">
        <table-footer
          fixed="right"
          :border="border"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          :store="store"
          :style="{
            width: bodyWidth
          }"></table-footer>
      </div>
    </div>
    <div
      v-if="rightFixedColumns.length > 0"
      class="el-table__fixed-right-patch"
      ref="rightFixedPatch"
      :style="{
        width: layout.scrollY ? layout.gutterWidth + 'px' : '0',
        height: layout.headerHeight + 'px'
      }"></div>
    <div class="el-table__column-resize-proxy" ref="resizeProxy" v-show="resizeProxyVisible"></div>
  </div>
</template>

<script type="text/babel">
  import ElCheckbox from 'element-ui/packages/checkbox';
  import { debounce, throttle } from 'throttle-debounce';
  import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
  import Mousewheel from 'element-ui/src/directives/mousewheel';
  import Locale from 'element-ui/src/mixins/locale';
  import Migrating from 'element-ui/src/mixins/migrating';
  import { createStore, mapStates } from './store/helper';
  import TableLayout from './table-layout';
  import TableBody from './table-body';
  import TableHeader from './table-header';
  import TableFooter from './table-footer';
  import { parseHeight } from './util';

  let tableIdSeed = 1;

  export default {
    name: 'ElTable',

    mixins: [Locale, Migrating],

    directives: {
      Mousewheel
    },

    props: {
      data: {
        type: Array,
        default: function() {
          return [];
        }
      },

      size: String,

      width: [String, Number],

      height: [String, Number],

      maxHeight: [String, Number],

      fit: {
        type: Boolean,
        default: true
      },

      stripe: Boolean,

      border: Boolean,

      rowKey: [String, Function],

      context: {},

      showHeader: {
        type: Boolean,
        default: true
      },

      showSummary: Boolean,

      sumText: String,

      summaryMethod: Function,

      rowClassName: [String, Function],

      rowStyle: [Object, Function],

      cellClassName: [String, Function],

      cellStyle: [Object, Function],

      headerRowClassName: [String, Function],

      headerRowStyle: [Object, Function],

      headerCellClassName: [String, Function],

      headerCellStyle: [Object, Function],

      highlightCurrentRow: Boolean,

      currentRowKey: [String, Number],

      emptyText: String,

      expandRowKeys: Array,

      defaultExpandAll: Boolean,

      defaultSort: Object,

      tooltipEffect: String,

      spanMethod: Function,

      hideColumnKeys: Array,

      selectOnIndeterminate: {
        type: Boolean,
        default: true
      },

      indent: {
        type: Number,
        default: 16
      },

      treeProps: {
        type: Object,
        default() {
          return {
            hasChildren: 'hasChildren',
            children: 'children'
          };
        }
      },

      lazy: Boolean,

      load: Function
    },

    components: {
      TableHeader,
      TableFooter,
      TableBody,
      ElCheckbox
    },

    methods: {
      getMigratingConfig() {
        return {
          events: {
            expand: 'expand is renamed to expand-change'
          }
        };
      },

      setCurrentRow(row) {
        this.store.commit('setCurrentRow', row);
      },

      toggleRowSelection(row, selected) {
        this.store.toggleRowSelection(row, selected);
        this.store.updateAllSelected();
      },

      toggleRowExpansion(row, expanded) {
        this.store.toggleRowExpansionAdapter(row, expanded);
      },

      clearSelection() {
        this.store.clearSelection();
      },

      clearFilter(columnKeys) {
        this.store.clearFilter(columnKeys);
      },

      clearSort() {
        this.store.clearSort();
      },

      handleMouseLeave() {
        this.store.commit('setHoverRow', null);
        if (this.hoverState) this.hoverState = null;
      },

      updateScrollY() {
        this.layout.updateScrollY();
        this.layout.updateColumnsWidth();
      },

      handleFixedMousewheel(event, data) {
        const bodyWrapper = this.bodyWrapper;
        if (Math.abs(data.spinY) > 0) {
          const currentScrollTop = bodyWrapper.scrollTop;
          if (data.pixelY < 0 && currentScrollTop !== 0) {
            event.preventDefault();
          }
          if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
            event.preventDefault();
          }
          bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
        } else {
          bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
        }
      },

      handleHeaderFooterMousewheel(event, data) {
        const { pixelX, pixelY } = data;
        if (Math.abs(pixelX) >= Math.abs(pixelY)) {
          this.bodyWrapper.scrollLeft += data.pixelX / 5;
        }
      },

      // TODO 性能优化
      syncPostion: throttle(20, function() {
        const { scrollLeft, scrollTop, offsetWidth, scrollWidth } = this.bodyWrapper;
        const { headerWrapper, footerWrapper, fixedBodyWrapper, rightFixedBodyWrapper } = this.$refs;
        if (headerWrapper) headerWrapper.scrollLeft = scrollLeft;
        if (footerWrapper) footerWrapper.scrollLeft = scrollLeft;
        if (fixedBodyWrapper) fixedBodyWrapper.scrollTop = scrollTop;
        if (rightFixedBodyWrapper) rightFixedBodyWrapper.scrollTop = scrollTop;
        const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
        if (scrollLeft >= maxScrollLeftPosition) {
          this.scrollPosition = 'right';
        } else if (scrollLeft === 0) {
          this.scrollPosition = 'left';
        } else {
          this.scrollPosition = 'middle';
        }
      }),

      bindEvents() {
        this.bodyWrapper.addEventListener('scroll', this.syncPostion, { passive: true });
        if (this.height === 'parent') {
          addResizeListener(this.$el, this.resizeListener);
          addResizeListener(this.$el.parentNode, this.heightResizeListener);
        } else if (this.fit) {
          addResizeListener(this.$el, this.resizeListener);
        }
      },

      unbindEvents() {
        this.bodyWrapper.removeEventListener('scroll', this.syncPostion, { passive: true });
        if (this.fit) {
          removeResizeListener(this.$el, this.resizeListener);
        }
      },

      resizeListener() {
        if (!this.$ready) return;
        let shouldUpdateLayout = false;
        const el = this.$el;
        const { width: oldWidth, height: oldHeight } = this.resizeState;

        const width = el.offsetWidth;
        if (oldWidth !== width) {
          shouldUpdateLayout = true;
        }

        const height = el.offsetHeight;
        if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
          shouldUpdateLayout = true;
        }

        if (shouldUpdateLayout) {
          this.resizeState.width = width;
          this.resizeState.height = height;
          this.doLayout();
        }
      },

      heightResizeListener() {
        if (!this.$ready) return;
        const el = this.$el;
        const tableEl = el.parentNode;
        if (tableEl === null) {
          return;
        }
        const height = Math.floor(tableEl.offsetHeight);
        el.style.height = height + 'px';
      },

      doLayout() {
        this.layout.updateColumnsWidth();
        if (this.shouldUpdateHeight) {
          this.layout.updateElsHeight();
        }
      },

      sort(prop, order) {
        this.store.commit('sort', { prop, order });
      },

      toggleAllSelection() {
        this.store.commit('toggleAllSelection');
      },

      getScrollX(isUpdate = false) {
        const layout = this.layout;
        let scrollX = layout.scrollX;
        if (layout.autoWidth) {
          let data = this.data;
          if (data && data.length !== 0) {
            let tableWidth = this.$el.offsetWidth;
            let tableBodyWidth = this.tableBodyWidth;
            if (layout.scrollY) {
              const gutterWidth = layout.gutterWidth;
              tableBodyWidth += gutterWidth;
            }
            scrollX = tableBodyWidth > tableWidth;
          }
          if (isUpdate) {
            layout.updateScrollY(scrollX);
          }
        }

        return scrollX;
      },

      getFixedWidth(fixedDir) {
        let columns;
        const layout = this.layout;
        let width;
        if (fixedDir === 'left') {
          columns = layout.store.states.fixedColumns;
          width = layout.fixedWidth;
        } else {
          columns = layout.store.states.rightFixedColumns;
          width = layout.rightFixedWidth;
        }

        const colWidthObj = layout.colWidthObj;
        if (!layout.autoWidth || colWidthObj === undefined) {
          return width ? width + 'px' : '';
        }

        if (!columns || columns.length === 0) {
          return '';
        }

        let totalWidth = 0;
        columns.forEach(column => {
          let realWidth = colWidthObj[column.id];
          if (realWidth === undefined) {
            realWidth = column.realWidth;
          }
          totalWidth += realWidth || column.width;
        });
        return totalWidth + 'px';
      },

      setTableBodyWidth(tableBodyWidth) {
        this.tableBodyWidth = tableBodyWidth;
      },

      getFilteredData() {
        return this.store.states.filteredData;
      }
    },

    computed: {
      tableSize() {
        return this.size || (this.$ELEMENT || {}).size;
      },

      bodyWrapper() {
        return this.$refs.bodyWrapper;
      },

      shouldUpdateHeight() {
        return this.height ||
          this.maxHeight ||
          this.fixedColumns.length > 0 ||
          this.rightFixedColumns.length > 0;
      },

      bodyWidth() {
        const { bodyWidth, scrollY, gutterWidth } = this.layout;
        return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
      },

      bodyHeight() {
        const { headerHeight = 0, bodyHeight, footerHeight = 0} = this.layout;
        if (this.height) {
          return {
            height: bodyHeight ? bodyHeight + 'px' : ''
          };
        } else if (this.maxHeight) {
          const maxHeight = parseHeight(this.maxHeight);
          if (maxHeight) {
            return {
              'max-height': (maxHeight - footerHeight - (this.showHeader ? headerHeight : 0)) + 'px'
            };
          }
        }
        return {};
      },

      fixedBodyHeight() {
        const scrollX = this.getScrollX();
        const layout = this.layout;
        if (this.height) {
          let fixedBodyHeight = layout.fixedBodyHeight;
          if (!fixedBodyHeight) {
            return {
              height: ''
            };
          }
          if (scrollX !== layout.scrollX) {
            fixedBodyHeight -= layout.gutterWidth;
          }
          return {
            height: fixedBodyHeight + 'px'
          };
        } else if (this.maxHeight) {
          let maxHeight = parseHeight(this.maxHeight);
          if (maxHeight) {
            maxHeight = scrollX ? maxHeight - this.layout.gutterWidth : maxHeight;
            if (this.showHeader) {
              maxHeight -= this.layout.headerHeight;
            }
            maxHeight -= this.layout.footerHeight;
            return {
              'max-height': maxHeight + 'px'
            };
          }
        }
        return {};
      },

      fixedHeight() {
        const scrollX = this.getScrollX();
        if (this.maxHeight) {
          if (this.showSummary) {
            return {
              bottom: 0
            };
          }
          return {
            bottom: (scrollX && this.data.length) ? this.layout.gutterWidth + 'px' : ''
          };
        } else {
          const layout = this.layout;
          if (this.showSummary) {
            return {
              height: layout.tableHeight ? layout.tableHeight + 'px' : ''
            };
          }

          let viewportHeight = layout.viewportHeight;
          if (!viewportHeight) {
            return {
              height: ''
            };
          }
          if (scrollX !== layout.scrollX) {
            viewportHeight -= layout.gutterWidth;
          }
          return {
            height: viewportHeight + 'px'
          };
        }
      },

      ...mapStates({
        selection: 'selection',
        columns: 'columns',
        tableData: 'data',
        fixedColumns: 'fixedColumns',
        rightFixedColumns: 'rightFixedColumns'
      })
    },

    watch: {
      height: {
        immediate: true,
        handler(value) {
          this.layout.setHeight(value);
        }
      },

      maxHeight: {
        immediate: true,
        handler(value) {
          this.layout.setMaxHeight(value);
        }
      },

      currentRowKey(newVal) {
        this.store.setCurrentRowKey(newVal);
      },

      data: {
        immediate: true,
        handler(value) {
          this.store.commit('setData', value);
          if (this.$ready) {
            this.$nextTick(() => {
              this.doLayout();
            });
          }
        }
      },

      expandRowKeys: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            this.store.setExpandRowKeysAdapter(newVal);
          }
        }
      },

      hideColumnKeys(hideKeys) {
        this.store.commit('updateHideColumns', hideKeys);
      }
    },

    created() {
      this.tableId = 'el-table_' + tableIdSeed++;
      this.debouncedUpdateLayout = debounce(50, () => this.doLayout());
    },

    mounted() {
      this.bindEvents();
      this.store.updateColumns();
      this.doLayout();

      this.resizeState = {
        width: this.$el.offsetWidth,
        height: this.$el.offsetHeight
      };

      // init filters
      this.store.states.columns.forEach(column => {
        if (column.filteredValue && column.filteredValue.length) {
          this.store.commit('filterChange', {
            column,
            values: column.filteredValue,
            silent: true
          });
        }
      });

      this.$ready = true;
    },

    destroyed() {
      this.unbindEvents();
    },

    data() {
      const { hasChildren = 'hasChildren', children = 'children' } = this.treeProps;
      this.store = createStore(this, {
        rowKey: this.rowKey,
        defaultExpandAll: this.defaultExpandAll,
        selectOnIndeterminate: this.selectOnIndeterminate,
        // TreeTable 的相关配置
        indent: this.indent,
        lazy: this.lazy,
        lazyColumnIdentifier: hasChildren,
        childrenColumnName: children
      });
      const layout = new TableLayout({
        store: this.store,
        table: this,
        fit: this.fit,
        showHeader: this.showHeader
      });
      return {
        layout,
        isHidden: false,
        renderExpanded: null,
        resizeProxyVisible: false,
        resizeState: {
          width: null,
          height: null
        },
        // 是否拥有多级表头
        isGroup: false,
        scrollPosition: 'left',
        tableBodyWidth: null
      };
    }
  };
</script>
